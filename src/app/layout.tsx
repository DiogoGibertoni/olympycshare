import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OlympycShare",
  description: "Rede social esportiva para conexao e organizacao de eventos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
