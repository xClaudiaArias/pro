import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: "Claudia Arias",
  description: "Professional Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar />
        <main className="flex-1 p-5">{children}</main>
      </body>
    </html>
  );
}
