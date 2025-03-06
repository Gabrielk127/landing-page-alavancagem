import { BadgeCheck } from "lucide-react";

export default function Plans() {
  const plans = [
    {
      name: "Starter",
      patrimony: "R$ 300.000,00",
      passiveIncome: "R$ 2.550,00",
      monthlyInvestment: "R$ 1.092,07",
    },
    {
      name: "Investor",
      patrimony: "R$ 600.000,00",
      passiveIncome: "R$ 5.100,00",
      monthlyInvestment: "R$ 2.184,14",
    },
    {
      name: "Private",
      patrimony: "R$ 1.500.000,00",
      passiveIncome: "R$ 12.750,00",
      monthlyInvestment: "R$ 5.460,85",
    },
  ];

  return (
    <section className="py-12 px-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex items-center justify-center md:justify-start">
          <h2 className="text-xl bg-[rgba(218,165,32,0.2)] text-[#DAA520] max-w-xs text-center py-2 px-2 rounded-lg">
            ESTRATÉGIA DE ALAVANCAGEM
          </h2>
        </div>
        <h3 className="text-xl md:text-4xl font-semibold my-8 text-center md:text-start">
          Nossos planos de investimento
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-6 rounded-lg shadow-md text-center md:text-start"
            >
              <h4 className="text-xl text-start font-bold mb-4">{plan.name}</h4>
              <p className="mb-2">Alcance um patrimônio de:</p>
              <p className="text-2xl md:text-4xl font-semibold mb-4 text-[#DAA520]">
                {plan.patrimony}
              </p>
              <p className="mb-2">Gere uma renda passiva de:</p>
              <div className="flex flex-row gap-2 md:justify-start justify-center items-center mb-4">
                <BadgeCheck className="text-[#DAA520]" />
                <p className="text-xl font-semibold">{plan.passiveIncome}</p>
              </div>
              <p className="mb-2">Investimento mensal:</p>
              <div className="flex flex-row gap-2 md:justify-start justify-center items-center mb-6">
                <BadgeCheck className="text-[#DAA520]" />
                <p className="text-xl font-semibold">
                  {plan.monthlyInvestment}
                </p>
              </div>
              <a href="#contato">
                <button className="bg-[#DAA520] text-white px-8 py-5 rounded-lg text-lg font-bold w-full justify-center">
                  Entre em contato
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
