import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ['latin'], // Or other subsets like 'cyrillic'
  weight: ['400', '700'], // Specify weights you need
  display: 'swap', // Recommended for performance
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Safe Changer",
  description: "Change your money safely!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={roboto.className}
      >
        {children}
      </body>
    </html>
  );
}

//className={`${geistSans.variable} ${geistMono.variable} antialiased`}