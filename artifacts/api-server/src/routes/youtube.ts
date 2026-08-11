import { Router } from "express";

const router = Router();

// Popular uploads playlist = channel ID with UC → UU
const POPULAR_PLAYLIST_ID = "UUmhqNeWSwibpJvsFC_x1krw";
const RSS_URL = `https://www.youtube.com/feeds/videos.xml?playlist_id=${POPULAR_PLAYLIST_ID}`;

interface VideoEntry {
  videoId: string;
  title: string;
  thumbnail: string;
}

let cache: { data: VideoEntry[]; fetchedAt: number } | null = null;
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

router.get("/youtube/popular", async (_req, res) => {
  try {
    if (cache && Date.now() - cache.fetchedAt < CACHE_TTL_MS) {
      return res.json({ videos: cache.data });
    }

    const response = await fetch(RSS_URL, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; LulubugsGarden/1.0)" },
    });

    if (!response.ok) {
      throw new Error(`YouTube RSS returned ${response.status}`);
    }

    const xml = await response.text();

    const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].slice(0, 3);

    const videos: VideoEntry[] = entries.map((match) => {
      const entry = match[1];
      const videoId =
        (entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/) ?? [])[1] ?? "";
      const rawTitle =
        (entry.match(/<title>([^<]+)<\/title>/) ?? [])[1] ?? "";
      // Atom encodes HTML entities in title
      const decoded = rawTitle
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");
      // Strip channel name / series suffix appended by YouTube (everything after " | ")
      const title = decoded.includes(" | ") ? decoded.split(" | ")[0].trim() : decoded;
      const thumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      return { videoId, title, thumbnail };
    });

    cache = { data: videos, fetchedAt: Date.now() };
    res.json({ videos });
  } catch (err) {
    console.error("YouTube RSS fetch failed:", err);
    res.status(500).json({ error: "Failed to fetch YouTube feed" });
  }
});

export default router;
