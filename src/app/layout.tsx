import type { Metadata } from "next";
import { Roboto, Asap, Catamaran } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-roboto" });
const asap = Asap({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-asap" });
const catamaran = Catamaran({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-catamaran" });

export const metadata: Metadata = {
  title: "Curso em Vídeo",
  description: "Estude gratuitamente tecnologia",
  icons: {
    icon: "/cropped-cursoemvideo-logo-32x32.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={`${roboto.variable} ${asap.variable} ${catamaran.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}