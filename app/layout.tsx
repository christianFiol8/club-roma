import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={mono.variable}>
      <body>{children}</body>
    </html>
  );
}