import { Sidebar } from "@/components/sidebar";
import { Footer } from "@/components/footer";

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex flex-col md:flex-row bg-lulubug-cream text-lulubug-green selection:bg-lulubug-red selection:text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
