import InvestmentCards from "./InvestmentCards";

export default function InvestmentsImob() {
  return (
    <section className="py-12 px-4 bg-[#161616]">
      <div className="container mx-auto text-center md:text-start">
        <div className="flex items-center justify-center md:justify-between mb-8">
          <h2 className="text-xl bg-[rgba(218,165,32,0.2)] text-[#DAA520] max-w-xs text-center py-2 px-2 rounded-lg">
            ALAVANCAGEM IMOBILIÁRIA
          </h2>
          <button className="bg-[#DAA520] text-white px-8 py-5 rounded-lg text-lg font-bold hidden md:flex">
            Agende sua consultoria
          </button>
        </div>
        <h3 className="text-xl md:text-3xl font-semibold mb-8">
          Melhores rentabilidades do mercado de investimentos
        </h3>
        <p className="text-lg mb-8">
          Acompanhe a rentabilidade dos investimentos ao longo do tempo e veja
          como seu patrimônio pode crescer de forma segura e eficiente.
        </p>
        <button className="bg-[#DAA520] text-white px-8 py-5 rounded-lg text-lg font-bold  md:hidden">
          Agende sua consultoria
        </button>

        <InvestmentCards />
        <p className="text-sm text-gray-600">
          *Os valores acima representam a rentabilidade média dos últimos anos,
          isso não se configura promessa de rendimentos futuros, os valores
          podem variar.
        </p>
      </div>
    </section>
  );
}
