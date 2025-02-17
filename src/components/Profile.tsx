import Image from "next/image";
import React from "react";

// import Modal from "../Modal";

const Profile: React.FC = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);

  return (
    <section
      className="py-12 px-4
    "
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-around items-center">
          <div>
            <Image
              src="/simone.png"
              width={1400}
              height={1400}
              alt="Simone Armangni Corretora"
              className="w-72 mx-auto rounded-xl
              lg:w-96
              xl:w-[400px]
              "
            />
          </div>

          <section
            className="
        md:flex md:flex-col md:w-1/2 md:justify-center
        lg:justify-start
        xl:w-[600px]
      "
          >
            <div
              className="p-2 flex items-center justify-center md:justify-start mt-4
                  xl:w-96


            "
            >
              <p
                className="text-xl font-extralight bg-[rgba(218,165,32,0.2)] text-[#DAA520] w-full max-w-xs text-center py-2 px-2 rounded-lg
              "
              >
                SIMONE ARMANGNI
              </p>
            </div>
            <p
              className="text-base text-center mt-12 text-white
                  md:text-start
                  lg:text-lg 
                  xl:text-lg
                "
            >
              Sou Simone Armangni da AX Negócios Investimentos e Créditos, tenho
              experiência como estrategista na consultoria de captação
              inteligente.
            </p>
            <p
              className="text-base text-center mt-4 text-white
                  md:text-start
                  lg:text-base pt-4 pb-4
                  xl:text-lg 
                "
            >
              Tenho formação em Administração de Empresas com foco em Gestão de
              projetos e atuo no crescimento exponencial no resultado de meus
              clientes, combinando crescimento sustentável na matriz, eficiência
              do resultado e recursos de terceiros, alavancando crescimento
              pleno e equilibrado com taxas e juros reduzidos, carência e prazos
              estendidos.
            </p>
            <div
              className="pt-8 
          "
            >
              <a href="#contato">
                <button className="bg-[#DAA520] text-white px-8 py-5 rounded-lg text-lg font-bold flex w-full justify-center">
                  Entre em contato
                </button>
              </a>
            </div>
            {/* <Modal isOpen={isModalOpen} onClose={closeModal} /> */}
          </section>
        </div>
      </div>
    </section>
  );
};

export default Profile;
