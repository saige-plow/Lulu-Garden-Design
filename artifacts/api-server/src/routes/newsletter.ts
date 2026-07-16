import { Router, type IRouter } from "express";
import { db, newsletterSubscribersTable, insertNewsletterSubscriberSchema } from "@workspace/db";
import { eq } from "drizzle-orm";

const router: IRouter = Router();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post("/newsletter/subscribe", async (req, res) => {
  const rawEmail = req.body?.email;
  if (typeof rawEmail !== "string" || !EMAIL_RE.test(rawEmail)) {
    res.status(400).json({ error: "Invalid email address." });
    return;
  }
  const email = rawEmail.trim().toLowerCase();

  try {
    // Check for existing subscriber
    const existing = await db
      .select()
      .from(newsletterSubscribersTable)
      .where(eq(newsletterSubscribersTable.email, email))
      .limit(1);

    if (existing.length > 0) {
      // Already subscribed — treat as success so we don't leak email existence
      res.json({ success: true, message: "You're already in the garden club!" });
      return;
    }

    const insert = insertNewsletterSubscriberSchema.parse({ email });
    await db.insert(newsletterSubscribersTable).values(insert);

    res.json({ success: true, message: "Welcome to the garden club!" });
  } catch (err) {
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
});

export default router;
