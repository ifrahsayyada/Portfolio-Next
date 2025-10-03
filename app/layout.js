import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  variable: "--font-ovo",
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata = {
  title: "Portfolio-Ifrah",
  description: "Sayyda Ifrah - Frontend Web Developer Portfolio. Showcasing modern web development projects built with React, Next.js, and innovative design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${ovo.variable} antialiased leading-8 overflow-x-hidden bg-white dark:bg-gray-900 text-black dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
