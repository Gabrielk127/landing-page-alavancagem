export default function HowItWorks() {
  const steps = [
    {
      title: "Compra de cartas de consórcio R$ 150.000,00",
      description:
        "Comprar de 01 a 10 cartas para multiplicar a chance de contemplar no período de maior lucro.",
    },
    {
      title: "Juntar créditos contemplados",
      description:
        "Apresentar cartas contempladas na quantidade necessária para atender o projeto do comprador interessado.",
    },
    {
      title: "Escolher o grupo que atenda o perfil investidor",
      description:
        "Grupos que tenham saldos financeiros mais robustos contemplam a maioria das cartas do período de maior lucro.",
    },
    {
      title: "Programar seu investimento",
      description: "Opte por um de nossos grupos: Starter, Investor, Private.",
    },
  ];

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h3 className="text-xl font-semibold mb-8">
          Descubra como tudo funciona
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-zinc-900 p-6 rounded-lg shadow-md">
              <h4 className="text-lg text-amber-500 font-semibold mb-2 bg-zinc-800 w-12 h-12 flex justify-center items-center rounded-full">
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
