import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#161616] text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link
              href="https://www.axnegocioseinvestimentos.com.br/política-de-privacidade"
              className="mr-4"
            >
              Política de Privacidade
            </Link>
            <Link href="https://www.axnegocioseinvestimentos.com.br/pol%C3%ADtica-de-cookies">
              Política de Cookies
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
