import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#161616] text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-8">
          <Image src="/logo.png" alt="Logo AX" width={250} height={50} />
          <Image
            src="/logo-uniao.png"
            alt="Logo União"
            width={250}
            height={50}
          />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex flex-wrap gap-4">
            <Link
              href="/politica-de-privacidade"
              className="hover:text-yellow-400 transition duration-300"
            >
              Política de Privacidade
            </Link>
            <Link
              href="/politica-de-cookies"
              className="hover:text-yellow-400 transition duration-300"
            >
              Política de Cookies
            </Link>
            <Link
              href="/termos-de-uso"
              className="hover:text-yellow-400 transition duration-300"
            >
              Termos de Uso
            </Link>
          </div>
          <p>
            &copy; 2025 AX Negócios, Créditos e Investimentos. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
