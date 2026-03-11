import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "يوم فريق البابا شنوده | اجتماع مار يوحنا الحبيب",
  description: "انضم إلينا في يوم روحاني مميز مع فريق البابا شنوده في اجتماع مار يوحنا الحبيب — الخميس الساعة ٦ مساءً",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
