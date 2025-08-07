import Image from "next/image";
import {
  Building2,
  ArrowRight,
  Coins,
  HardHat,
  Home,
  TrendingUp,
} from "lucide-react";

export default function CaseMaria() {
  return (
    <main className="min-h-screen bg-[#1E1E1E] text-zinc-100 max-w-7xl mx-auto">
      <section className="container mx-auto px-4 py-8 md:py-2">
        <div className="bg-zinc-900 rounded-xl p-6 shadow-xl">
          <p className="text-xl md:text-xl pb-12">
            Maria Investiu em 02 cotas de consórcio imobiliário de{" "}
            <span className="text-yellow-400 font-medium">R$300mil</span>{" "}
            pagando mensalmente R$ 4.499,92
          </p>
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="relative overflow-hidden rounded-lg border border-zinc-800">
              <Image
                src="/balanceMaria.png"
                alt="Investment details"
                width={400}
                height={200}
                className="w-full"
              />
              <p className="text-center font-bold text-red-600 p-2 text-xl">
                CONTEMPLADO NO 21º MÊS
              </p>
            </div>

            <div className="text-center space-y-4">
              {/* <p className="text-2xl md:text-4xl text-emerald-500">
                Upgrade de 100%
              </p>
              <div className="relative w-32 h-32 mx-auto">
                <CircleFadingArrowUp
                  className="w-full text-emerald-200"
                  size={100}
                />
              </div> */}
              <p className="text-3xl md:text-5xl text-yellow-400 font-bold">
                R$ 600mil
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="text-center space-y-4">
            <div className="bg-zinc-900 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow">
              <Home className="w-16 h-16 mx-auto text-yellow-400 mb-4" />
              <p className="text-lg md:text-xl">
                Construiu uma casa em um condomínio R$ 600.000,00
              </p>
            </div>
          </div>

          <div className="hidden md:block text-center">
            <ArrowRight className="w-12 h-12 mx-auto text-zinc-600" />
          </div>

          <div className="text-center space-y-4">
            <div className="bg-zinc-900 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow">
              <Building2 className="w-16 h-16 mx-auto text-yellow-400 mb-4" />
              <p className="text-lg md:text-xl">
                Com o valor recebido em aluguel, paga a parcela do consórcio
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-8 md:py-16">
        <h2 className="text-2xl md:text-4xl font-bold text-yellow-400 text-center mb-12">
          Nesta modalidade ainda ganha
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-zinc-900 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow">
            <HardHat className="w-16 h-16 mx-auto text-yellow-400 mb-4" />
            <p className="text-lg text-center">
              Ganho financeiro de uma boa gestão de obra
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow">
            <Coins className="w-16 h-16 mx-auto text-yellow-400 mb-4" />
            <p className="text-lg text-center">
              A rentabilidade vitalícia do aluguel
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow">
            <TrendingUp className="w-16 h-16 mx-auto text-yellow-400 mb-4" />
            <p className="text-lg text-center">
              O ganho da constante valorização do imóvel
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
