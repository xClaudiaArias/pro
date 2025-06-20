import type { Metadata, Viewport } from "next";
import Sidebar from "@/components/Sidebar";
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: "Claudia Arias",
  description: "Professional Portfolio",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width'
}

export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ id: string }>
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col xl:flex-row h-screen justify-between">
        <Sidebar />
        <main className="w-full xl:px-4">{children}</main>
      </body>
    </html>
  );
}
