"use client";

import FinancialLeverage from "@/components/Sections/FinancialLeverage";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Sections/Hero";
import InvestmentsImob from "@/components/Sections/Examples/InvestmentsImob";
import Plans from "@/components/Sections/Plans";
import Profile from "@/components/Sections/Profile";
import RDStationForm from "@/components/Sections/RDStationForm";
import RealEstateLeverage from "@/components/Sections/RealEstateLeverage";
import InvestmentsFinan from "@/components/Sections/Examples/InvestmentsFinan";
import Testimonials from "@/components/Sections/Testimonials";
import Credit from "@/components/Sections/Credit";

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
      <div className="bg-[#1C1C1C]">
        <FinancialLeverage />
      </div>
      <InvestmentsFinan />
      <div className="bg-[#1C1C1C]">
        <RealEstateLeverage />
      </div>
      <InvestmentsImob />
      <Credit />
      <div id="planos">
        <Plans />
      </div>
      <div>
        <Testimonials />
      </div>
      <div id="conheca">
        <Profile />
      </div>
      <div id="contato" className="bg-[#272727]">
        <RDStationForm />
      </div>
      <Footer />
    </main>
  );
}
