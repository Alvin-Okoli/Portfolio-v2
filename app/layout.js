import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${libreBaskerville.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
