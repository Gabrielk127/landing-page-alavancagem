export default function HowItWorksImob() {
  const steps = [
    {
      title: "Compra com capital de terceiros",
      description: "Use cartas contempladas para adquirir um imóvel.",
    },
    {
      title: "Renda com aluguel",
      description: "Alugue o imóvel para gerar renda.",
    },
    {
      title: "Pagamento da Parcela",
      description:
        "Use a renda do aluguel para cobrir os custos das parcelas de consórcio.",
    },
    {
      title: "Rentabilidade com segurança",
      description: "Obtenha rentabilidade e segurança nos seus investimentos.",
    },
  ];

  return (
    <section className="py-12 px-4 bg-[#161616]">
      <div className="container mx-auto">
        <h3 className="text-xl font-semibold mb-8">
          Descubra como tudo funciona
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-zinc-900 p-6 rounded-lg shadow-md">
              <h4 className="text-lg text-yellow-400 font-semibold mb-2 bg-zinc-800 w-12 h-12 flex justify-center items-center rounded-full">
                0{index + 1}
              </h4>
              <h5 className="text-md font-semibold mb-2">{step.title}</h5>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
