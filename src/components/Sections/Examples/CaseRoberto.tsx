import Image from "next/image";

export default function CaseRoberto() {
  return (
    <main className="bg-[#1E1E1E] text-zinc-100 max-w-7xl mx-auto">
      <section className="container mx-auto px-4 py-8 md:py-2">
        <div className="bg-zinc-900 rounded-xl p-6 shadow-xl">
          <p className="text-xl md:text-xl pb-12">
            Roberto Investiu em 1 cota de consórcio imobiliário de{" "}
            <span className="text-yellow-400 font-medium">R$300mil</span>{" "}
            pagando mensalmente R$ 2.249,96 cada.
          </p>
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="relative overflow-hidden rounded-lg border border-zinc-800">
              <Image
                src="/balanceRoberto.png"
                alt="Investment details"
                width={400}
                height={200}
                className="w-full"
              />
              <p className="text-center font-bold text-red-600 p-2 text-xl">
                CONTEMPLADO NO 6º MÊS
              </p>
            </div>

            <div className="text-center space-y-4">
              <p className="text-2xl text-emerald-500">Vendeu por</p>
              <p className="text-3xl md:text-3xl text-yellow-400 font-bold">
                R$ 72.900,00
              </p>
            </div>
            <div className="relative overflow-hidden rounded-lg border border-zinc-800">
              <Image
                src="/pixRoberto.png"
                alt="Investment details"
                width={400}
                height={200}
                className="w-full"
              />
            </div>
          </div>
          <div className="flex items-center flex-col text-center pt-8">
            <p className="text-2xl text-white font-bold">Lucrou em 6 meses</p>
            <p className="text-3xl md:text-3xl text-yellow-400 font-bold">
              R$59.400,24
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
