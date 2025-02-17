import InvestmentDistributionCard from "./investment-distribution-card";

export default function WhatIsImob() {
  return (
    <section className="pt-12 px-4 bg-[#161616]">
      <div className="container mx-auto">
        <h3 className="text-xl lg:text-3xl font-semibold mb-4 text-amber-500">
          Alavancagem Patrimonial Imobiliária
        </h3>
        <p className="text-lg">
          A alavancagem patrimonial permite ao investidor comprar um imóvel com
          capital de terceiros, onde a rentabilidade do aluguel cobre os custos
          da parcela, gerando rentabilidade com segurança.
        </p>
        <div className="pt-12">
          <InvestmentDistributionCard />
        </div>
      </div>
    </section>
  );
}
