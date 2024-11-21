import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from '@/components/Footer';
import Favicon from '@/public/favicon.ico';

export const metadata: Metadata = {
  title: "Fernando's Portfolio",
  description: "My Awesome Portfolio!",
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-primary antialiased`}>
        <div className="w-screen h-screen bg-primary overflow-x-hidden	">
          <Navbar />
          <div className="h-100vh">{children}</div>
          <div className="my-10"></div>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
