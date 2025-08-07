import { Check } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl container mx-auto text-center md:text-start">
        <h1 className="text-2xl md:text-4xl font-bold mb-16 md:mb-8">
          Alavanque seu patrimônio Financeiro / imobiliário
        </h1>
        <ul className="text-lg md:text-xl mb-8">
          <li className="flex items-center mb-4 gap-2">
            <Check className="text-green-300" />
            Estratégia usada por investidores experientes.
          </li>
          <li className="flex items-center mb-4 gap-2">
            <Check className="text-green-300" />
            Retorno em até 5 anos.
          </li>
          <li className="flex items-center mb-4 gap-2">
            <Check className="text-green-300" />
            Crescimento real do seu patrimônio.
          </li>
        </ul>
        <a href="#contato">
          <button className="bg-[#DAA520] text-white px-8 py-5 rounded-lg text-lg font-bold">
            Entre em contato
          </button>
        </a>
      </div>
    </section>
  );
}
