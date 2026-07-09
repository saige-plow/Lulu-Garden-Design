import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-lulubug-cream text-lulubug-green selection:bg-lulubug-red selection:text-white">
      <Header />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <Footer />
    </div>
  );
}
