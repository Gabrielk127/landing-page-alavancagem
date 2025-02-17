export default function FinancialLeverage() {
  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white p-4 md:p-6 lg:p-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto space-y-4">
        <h2 className="text-sm uppercase tracking-wider">O QUE É?</h2>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Alavancagem Patrimonial Financeira
        </h1>
        <p className="text-gray-300 max-w-3xl text-sm md:text-base">
          A alavancagem patrimonial financeira realizada com cotas de consórcio
          imobiliário onde a ideia principal é iniciar o consórcio e vender as
          cotas quando contepladas.
        </p>
      </div>

      {/* Main Card */}
      <div className="max-w-7xl mx-auto mt-8 md:mt-12 bg-white rounded-3xl text-black p-6 md:p-8 lg:p-10">
        <div className="space-y-8">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-gray-600">
              PASSO A PASSO
            </p>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mt-2">
              Descubra como
              <br className="hidden md:block" /> tudo funciona
            </h3>
          </div>

          {/* Steps */}
          <div className="space-y-8 md:space-y-12">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-8">
              <div className="flex items-center md:items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-[#F3EDE6] rounded-full flex items-center justify-center text-sm md:text-base font-semibold">
                  01
                </div>
                <h4 className="text-lg md:text-xl font-semibold pt-1">
                  Compra de cartas de consórcio R$ 150.000,00
                </h4>
              </div>
              <p className="text-gray-600 md:pt-1 text-center md:text-start">
                Comprar de 01 a 10 cartas para multiplicar a chance de
                contemplar no período de maior lucro
              </p>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-8">
              <div className="flex items-center md:items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-[#F3EDE6] rounded-full flex items-center justify-center text-sm md:text-base font-semibold">
                  02
                </div>
                <h4 className="text-lg md:text-xl font-semibold pt-1">
                  Juntar créditos contemplados
                </h4>
              </div>
              <p className="text-gray-600 md:pt-1 text-center md:text-start">
                Apresentar cartas contempladas na quantidade necessária para
                atender o projeto do comprador interessado
              </p>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-8">
              <div className="flex items-center md:items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-[#F3EDE6] rounded-full flex items-center justify-center text-sm md:text-base font-semibold">
                  03
                </div>
                <h4 className="text-lg md:text-xl font-semibold pt-1">
                  Escolher o grupo que atenda o perfil investidor
                </h4>
              </div>
              <p className="text-gray-600 md:pt-1 text-center md:text-start">
                Grupos que tenham saldos financeiros mais robustos contemplam a
                maioria das cartas do período de maior lucro
              </p>
            </div>

            {/* Step 4 */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-8">
              <div className="flex items-center md:items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-[#F3EDE6] rounded-full flex items-center justify-center text-sm md:text-base font-semibold">
                  04
                </div>
                <h4 className="text-lg md:text-xl font-semibold pt-1">
                  Programar seu investimento
                </h4>
              </div>
              <p className="text-gray-600 md:pt-1 text-center md:text-start">
                Opte por um de nossos grupos: Starter, Investor, Private
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
