import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/custom/Header/header";
import Footer from "../components/custom/Footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mossoró - História e Eventos",
  description: "Explore a cultura, história e o calendário de eventos de Mossoró.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body
        className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
