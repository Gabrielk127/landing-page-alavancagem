import CaseMaria from "./CaseMaria";

export default function InvestmentsImob() {
  return (
    <section className="py-12 px-4 max-w-6xl w-full mx-auto">
      <div className="container mx-auto text-center md:text-start">
        <div className="flex items-center justify-center md:justify-between mb-8">
          <h2 className="text-xl bg-[rgba(218,165,32,0.2)] text-[#DAA520] max-w-xs text-center py-2 px-2 rounded-lg">
            CASE
          </h2>
          <a href="#contato">
            <button className="bg-[#DAA520] text-white px-8 py-5 rounded-lg text-lg font-bold hidden md:flex">
              Entre em contato
            </button>
          </a>
        </div>
        <h3 className="text-xl md:text-3xl font-semibold mb-8">
          Exemplos de Alavancagem Patrimonial Imobiliária
        </h3>
        <a href="#contato">
          <button className="bg-[#DAA520] text-white px-8 py-5 rounded-lg text-lg font-bold  md:hidden">
            Entre em contato
          </button>
        </a>
        {/* <InvestmentCards /> */}
        <CaseMaria />
        <p className="text-sm text-gray-600">
          *Os valores acima representam a rentabilidade média dos últimos anos,
          isso não se configura promessa de rendimentos futuros, os valores
          podem variar.
        </p>
      </div>
    </section>
  );
}
