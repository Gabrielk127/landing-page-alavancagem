"use client";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function TermosDeUso() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="min-h-screen bg-[#1E1E1E] text-white pt-24">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Cabeçalho da página */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Termos de Uso e Isenção de Responsabilidade Geral
            </h1>
            <p className="text-gray-300 text-lg">
              Última atualização: Janeiro de 2025
            </p>
          </div>

          {/* Conteúdo dos termos */}
          <div className="space-y-8">
            {/* Aviso Inicial */}
            <section className="bg-[#1C1C1C] p-8 rounded-2xl border border-gray-700">
              <div className="bg-amber-500/20 border border-amber-500/50 p-6 rounded-xl mb-6">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">
                  ⚠️ Aviso Importante
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Ao acessar e utilizar o conteúdo disponibilizado neste site,
                  você, doravante denominado &ldquo;Usuário&rdquo;, declara ter
                  lido, compreendido e aceitado integralmente os termos e
                  condições abaixo descritos.
                  <strong className="text-yellow-400">
                    {" "}
                    Caso não concorde com estes termos, por favor, não continue
                    a utilizar o site.
                  </strong>
                </p>
              </div>
            </section>

            {/* Seção 1 - Caráter Informativo */}
            <section className="bg-[#1C1C1C] p-8 rounded-2xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">
                1. Caráter Puramente Informativo e Educacional
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Todo o conteúdo apresentado, incluindo, mas não se limitando a,
                textos, artigos, vídeos, planilhas, ferramentas e exemplos,
                possui natureza{" "}
                <strong className="text-white">
                  estritamente informativa e educacional
                </strong>
                .
              </p>
              <div className="bg-[#161616] p-6 rounded-xl border border-gray-600">
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-yellow-400">IMPORTANTE:</strong>{" "}
                  Nenhuma informação aqui contida deve ser interpretada como
                  aconselhamento profissional, seja ele de ordem financeira,
                  jurídica, contábil ou de qualquer outra natureza.
                </p>
              </div>
            </section>

            {/* Seção 2 - Nenhuma Garantia */}
            <section className="bg-[#1C1C1C] p-8 rounded-2xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">
                2. Nenhuma Garantia de Resultados
              </h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">
                    Não há qualquer garantia
                  </strong>
                  , explícita ou implícita, de que o Usuário obterá resultados
                  específicos ao aplicar as informações, estratégias ou
                  conceitos abordados.
                </p>
                <div className="bg-red-500/20 border border-red-500/50 p-6 rounded-xl">
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-red-400">ATENÇÃO:</strong> Qualquer
                    referência a desempenho passado ou potencial de uma
                    estratégia não constitui e não deve ser interpretada como
                    uma recomendação, promessa ou garantia de resultados
                    futuros.
                  </p>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  O sucesso do Usuário depende de uma vasta gama de fatores
                  individuais, como:
                </p>
                <ul className="text-gray-300 list-disc list-inside space-y-2 ml-4">
                  <li>Sua dedicação e comprometimento</li>
                  <li>Conhecimento prévio e experiência</li>
                  <li>Contexto de mercado atual</li>
                  <li>Capacidade de execução</li>
                  <li>Fatores econômicos externos</li>
                </ul>
                <p className="text-gray-300 leading-relaxed">
                  Todos estes fatores estão{" "}
                  <strong className="text-white">
                    inteiramente fora do controle
                  </strong>{" "}
                  dos proprietários deste site.
                </p>
              </div>
            </section>

            {/* Seção 3 - Responsabilidade do Usuário */}
            <section className="bg-[#1C1C1C] p-8 rounded-2xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">
                3. Responsabilidade Exclusiva do Usuário
              </h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  O Usuário é o{" "}
                  <strong className="text-white">
                    único e exclusivo responsável
                  </strong>
                  por todas as suas ações e decisões tomadas com base no
                  conteúdo consumido.
                </p>
                <div className="bg-blue-500/20 border border-blue-500/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">
                    Obrigações do Usuário:
                  </h3>
                  <ul className="text-gray-300 list-disc list-inside space-y-2">
                    <li>
                      Realizar sua própria análise de risco (due diligence)
                    </li>
                    <li>
                      Buscar orientação de profissionais qualificados quando
                      necessário
                    </li>
                    <li>Consultar especialistas devidamente licenciados</li>
                    <li>
                      Tomar decisões baseadas em análise própria e responsável
                    </li>
                  </ul>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  É{" "}
                  <strong className="text-white">altamente recomendado</strong>{" "}
                  que o Usuário consulte profissionais qualificados antes de
                  tomar qualquer decisão que possa impactar suas finanças,
                  negócios ou bem-estar.
                </p>
              </div>
            </section>

            {/* Seção 4 - Isenção de Responsabilidade */}
            <section className="bg-[#1C1C1C] p-8 rounded-2xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">
                4. Isenção de Responsabilidade (Limitação de Responsabilidade)
              </h2>
              <div className="bg-red-500/20 border border-red-500/50 p-6 rounded-xl">
                <p className="text-gray-300 leading-relaxed mb-4">
                  <strong className="text-red-400">
                    Em nenhuma circunstância
                  </strong>{" "}
                  os criadores, proprietários, afiliados ou colaboradores deste
                  site serão responsáveis por quaisquer perdas ou danos.
                </p>
                <h3 className="text-lg font-semibold mb-3 text-white">
                  Tipos de danos excluídos da nossa responsabilidade:
                </h3>
                <ul className="text-gray-300 list-disc list-inside space-y-2">
                  <li>
                    <strong>Diretos:</strong> Perdas financeiras diretas
                  </li>
                  <li>
                    <strong>Indiretos:</strong> Consequências secundárias
                  </li>
                  <li>
                    <strong>Incidentais:</strong> Danos ocasionais
                  </li>
                  <li>
                    <strong>Consequenciais:</strong> Resultados de longo prazo
                  </li>
                  <li>
                    <strong>Punitivos:</strong> Danos morais e exemplares
                  </li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Incluindo, sem limitação: perdas financeiras, lucros
                  cessantes, interrupção de negócios ou danos morais que
                  resultem do uso, ou da incapacidade de uso, das informações e
                  materiais aqui apresentados.
                </p>
              </div>
            </section>

            {/* Seção 5 - Precisão das Informações */}
            <section className="bg-[#1C1C1C] p-8 rounded-2xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">
                5. Precisão das Informações
              </h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Embora envidemos todos os esforços razoáveis para garantir a
                  precisão e atualização do conteúdo,{" "}
                  <strong className="text-white">não podemos garantir</strong>{" "}
                  que as informações estejam sempre completas, corretas ou
                  livres de erros e omissões.
                </p>
                <div className="bg-amber-500/20 border border-amber-500/50 p-6 rounded-xl">
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-yellow-400">DISCLAIMER:</strong> O
                    conteúdo é fornecido{" "}
                    <strong>&ldquo;como está&rdquo;</strong>, sem garantias de
                    qualquer tipo.
                  </p>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Recomendamos sempre verificar informações importantes através
                  de fontes oficiais e atualizadas antes de tomar qualquer
                  decisão.
                </p>
              </div>
            </section>

            {/* Seção 6 - Aceitação dos Termos */}
            <section className="bg-[#1C1C1C] p-8 rounded-2xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">
                6. Aceitação dos Termos
              </h2>
              <div className="bg-green-500/20 border border-green-500/50 p-6 rounded-xl">
                <p className="text-gray-300 leading-relaxed text-center">
                  <strong className="text-green-400">
                    O uso contínuo deste site após a leitura destes termos
                    confirma sua expressa concordância com todas as cláusulas
                    aqui dispostas.
                  </strong>
                </p>
              </div>
            </section>

            {/* Seção 7 - Modificações */}
            <section className="bg-[#1C1C1C] p-8 rounded-2xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">
                7. Modificações dos Termos
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Reservamo-nos o direito de modificar estes termos a qualquer
                momento. As alterações entrarão em vigor imediatamente após a
                publicação no site. É responsabilidade do Usuário verificar
                periodicamente estes termos para se manter informado sobre
                eventuais mudanças.
              </p>
            </section>

            {/* Seção 8 - Contato */}
            <section className="bg-[#1C1C1C] p-8 rounded-2xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">
                8. Contato
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  Para dúvidas sobre estes Termos de Uso, entre em contato
                  conosco:
                </p>
                <div className="bg-[#161616] p-6 rounded-xl border border-gray-600">
                  <h3 className="text-lg font-semibold mb-3 text-white">
                    AX Negócios, Créditos e Investimentos
                  </h3>
                  <p>
                    <strong>E-mail:</strong>{" "}
                    contato@axnegocioseinvestimentos.com.br
                  </p>
                  <p>
                    <strong>Telefone:</strong> (11) 99999-9999
                  </p>
                  <p>
                    <strong>Endereço:</strong> [Endereço da empresa]
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Botão de volta */}
          <div className="text-center mt-12">
            <Link
              href="/"
              className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold py-3 px-8 rounded-full hover:from-amber-600 hover:to-amber-700 transition duration-300"
            >
              Voltar à Página Inicial
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
