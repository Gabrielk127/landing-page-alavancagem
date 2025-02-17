"use client";

import { ArrowUp } from "lucide-react";

export default function InvestmentCards() {
  return (
    <div className="flex flex-col md:flex-row gap-4 py-8 w-full mx-auto">
      {/* Fixed Income Card */}
      <div className="flex-1 bg-[#DAA520] text-white p-4 rounded-lg shadow-lg">
        <div className="space-y-1">
          <p className="text-sm">Renda fixa — 1% a.m</p>
          <div className="flex items-center gap-2">
            <h3 className="text-2xl">R$ 944.000</h3>
            <span className="flex items-center text-sm font-medium text-green-300">
              <ArrowUp className="h-4 w-4" />
              844%
            </span>
          </div>
        </div>
        <div className="h-[200px] flex items-end gap-1 mt-4">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="flex-1 bg-white/20 rounded-t"
              style={{
                height: `${(i + 1) * 6}%`,
              }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-4 text-sm">
          <span>Aplic.</span>
          <span>5 anos</span>
          <span>10 anos</span>
          <span>15 anos</span>
          <span>20 anos</span>
        </div>
      </div>

      {/* Real Estate Card */}
      <div className="flex-1 bg-white p-4 rounded-lg shadow-lg">
        <div className="space-y-1">
          <p className="text-sm text-black">Alavancagem imobiliária — 3% a.m</p>
          <div className="flex items-center gap-2">
            <h3 className="text-2xl text-black">R$ 5.205.000</h3>
            <span className="flex items-center text-sm font-medium text-green-500">
              <ArrowUp className="h-4 w-4" />
              5105%
            </span>
          </div>
        </div>
        <div className="h-[200px] flex items-end gap-1 mt-4">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="flex-1 bg-green-500/20 rounded-t"
              style={{
                height: `${(i + 1) * 6}%`,
              }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-4 text-sm text-black">
          <span>Aplic.</span>
          <span>5 anos</span>
          <span>10 anos</span>
          <span>15 anos</span>
          <span>20 anos</span>
        </div>
      </div>

      {/* Stocks Card */}
      <div className="flex-1 bg-[#DAA520] text-white p-4 rounded-lg shadow-lg">
        <div className="space-y-1">
          <p className="text-sm">Ações — 1.5% a.m</p>
          <div className="flex items-center gap-2">
            <h3 className="text-2xl">R$ 3.120.000</h3>
            <span className="flex items-center text-sm font-medium text-green-300">
              <ArrowUp className="h-4 w-4" />
              3020%
            </span>
          </div>
        </div>
        <div className="h-[200px] flex items-end gap-1 mt-4">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="flex-1 bg-white/20 rounded-t"
              style={{
                height: `${(i + 1) * 6}%`,
              }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-4 text-sm">
          <span>Aplic.</span>
          <span>5 anos</span>
          <span>10 anos</span>
          <span>15 anos</span>
          <span>20 anos</span>
        </div>
      </div>
    </div>
  );
}
