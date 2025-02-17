export default function RealEstateLeverage() {
  return (
    <div className="min-h-screen bg-[#1C1C1C] text-white p-4 md:p-6 lg:p-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto space-y-4">
        <h2 className="text-sm uppercase tracking-wider">O QUE É?</h2>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Alavancagem Patrimonial Imobiliária
        </h1>
        <p className="text-gray-300 max-w-3xl text-sm md:text-base">
          A alavancagem patrimonial permite ao investidor comprar um imóvel com
          capital de terceiros, onde a rentabilidade do aluguel cobre os custos
          da parcela, gerando rentabilidade com segurança.
        </p>
      </div>

      {/* Main Card */}
      <div className="max-w-7xl mx-auto mt-8 md:mt-12 bg-white rounded-3xl text-black p-6 md:p-8 lg:p-10">
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Side */}
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-gray-600">
                PASSO A PASSO
              </p>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mt-2">
                Descubra como
                <br className="hidden md:block" /> tudo funciona
              </h3>
            </div>

            {/* Right Side - Payment Distribution */}
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span>Você paga</span>
                <span>O locatário paga</span>
              </div>
              <div className="h-4 rounded-full overflow-hidden flex">
                <div className="w-[20%] bg-[#257730]"></div>
                <div className="w-[80%] bg-[#d1f7cd]"></div>
              </div>
              <div className="flex justify-between text-sm font-medium">
                <span>20%</span>
                <span>80%</span>
              </div>
            </div>
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
                  Compra com cartas de consórcio contemplada
                </h4>
              </div>
              <p className="text-gray-600 md:pt-1 text-center md:text-start">
                Use cartas contempladas para adquirir um imóvel
              </p>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-8">
              <div className="flex items-center md:items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-[#F3EDE6] rounded-full flex items-center justify-center text-sm md:text-base font-semibold">
                  02
                </div>
                <h4 className="text-lg md:text-xl font-semibold pt-1">
                  Renda com aluguel
                </h4>
              </div>
              <p className="text-gray-600 md:pt-1 text-center md:text-start">
                Alugue o imóvel para gerar renda.
              </p>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-8">
              <div className="flex items-center md:items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-[#F3EDE6] rounded-full flex items-center justify-center text-sm md:text-base font-semibold">
                  03
                </div>
                <h4 className="text-lg md:text-xl font-semibold pt-1">
                  Pagamento da Parcela
                </h4>
              </div>
              <p className="text-gray-600 md:pt-1 text-center md:text-start">
                Use a renda do aluguel para cobrir os custos das parcelas de
                consórcio.
              </p>
            </div>

            {/* Step 4 */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-8">
              <div className="flex items-center md:items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-[#F3EDE6] rounded-full flex items-center justify-center text-sm md:text-base font-semibold">
                  04
                </div>
                <h4 className="text-lg md:text-xl font-semibold pt-1">
                  Rentabilidade e valorização
                </h4>
              </div>
              <p className="text-gray-600 md:pt-1 text-center md:text-start">
                Obtenha rentabilidade vitalícia do aluguel e valorização
                constante de seus ativos imobiliários.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
