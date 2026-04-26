import Header from "@/src/components/custom/Header/header";
import Footer from "@/src/components/custom/Footer/footer";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </div>
  );
}