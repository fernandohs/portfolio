import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from '@/components/Navbar';

export const metadata: Metadata = {
  title: "Fernando's Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-primary antialiased`}>
        <div className="w-screen h-screen bg-deepBlack">
          <div className="h-24 flex md:justify-center xs:justify-start">
            <Navbar/>
          </div>
          <div className="h-[calc(100vh-6rem)]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
