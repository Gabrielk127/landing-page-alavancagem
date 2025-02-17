import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "700", "800"],
});

export const metadata: Metadata = {
  title: "Alavancagem Patrimonial",
  description: "AX Negócios, Créditos e Investimentos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.className} bg-[#1E1E1E] text-white`}>
        {children}
      </body>
    </html>
  );
}
