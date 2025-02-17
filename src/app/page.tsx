"use client";

import FinancialLeverage from "@/components/FinancialLeverage";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero";
import InvestmentsImob from "@/components/Examples/InvestmentsImob";
import Plans from "@/components/Plans";
import Profile from "@/components/Profile";
import RDStationForm from "@/components/RDStationForm";
import RealEstateLeverage from "@/components/RealEstateLeverage";
import InvestmentsFinan from "@/components/Examples/InvestmentsFinan";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div
        id="inicio"
        className="relative w-full h-screen flex justify-center items-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Hero />
      </div>
      <FinancialLeverage />
      <InvestmentsFinan />
      <RealEstateLeverage />
      <InvestmentsImob />
      <div id="planos de investimento">
        <Plans />
      </div>
      <div id="conheca">
        <Profile />
      </div>
      <div id="contato">
        <RDStationForm />
      </div>
      <Footer />
    </main>
  );
}
