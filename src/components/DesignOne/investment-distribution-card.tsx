"use client";

export default function InvestmentDistributionCard() {
  return (
    <div className="w-full mx-auto bg-zinc-900 text-white p-6 rounded-xl">
      <div>
        <div className="text-sm sm:text-base font-medium">
          Distribuição do Investimento
        </div>
      </div>
      <div className="space-y-4">
        {/* Progress bar container */}
        <div className="relative h-4 bg-zinc-800 rounded-full overflow-hidden">
          {/* Progress bar */}
          <div
            className="absolute left-0 top-0 h-full w-[20%] bg-gradient-to-r from-amber-500 to-amber-600"
            style={{ transition: "width 0.3s ease-in-out" }}
          />
        </div>

        {/* Labels */}
        <div className="flex justify-between text-xs sm:text-sm">
          <div className="space-y-1">
            <p className="text-zinc-400">Você paga</p>
            <p className="font-semibold">20%</p>
          </div>
          <div className="space-y-1 text-right">
            <p className="text-zinc-400">O locatário Paga</p>
            <p className="font-semibold">80%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
