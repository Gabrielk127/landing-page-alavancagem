"use client";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PoliticaCookies() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="min-h-screen bg-[#1E1E1E] text-white pt-24">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Cabeçalho da página */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Política de Cookies
            </h1>
            <p className="text-gray-300 text-lg">
              Última atualização: Janeiro de 2025
            </p>
          </div>

          {/* Conteúdo da política */}
          <div className="space-y-8">
            {/* Seção 1 - O que são Cookies */}
            <section className="bg-[#1C1C1C] p-8 rounded-2xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">
                1. O que são Cookies?
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Cookies são pequenos arquivos de texto que são armazenados no
                seu dispositivo (computador, tablet ou celular) quando você
                visita um site. Eles permitem que o site se lembre de suas ações
                e preferências (como login, idioma, tamanho da fonte e outras
                preferências de exibição) por um período de tempo.
              </p>
              <div className="bg-blue-500/20 border border-blue-500/50 p-6 rounded-xl">
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-blue-400">Em resumo:</strong> Os
                  cookies facilitam sua navegação e melhoram sua experiência no
                  nosso site, permitindo que ele funcione de forma mais
                  eficiente e personalizada.
                </p>
              </div>
            </section>

            {/* Seção 2 - Como Utilizamos */}
            <section className="bg-[#1C1C1C] p-8 rounded-2xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">
                2. Como Utilizamos os Cookies
              </h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Utilizamos cookies para diferentes finalidades em nosso site:
                </p>
                <div className="grid gap-4">
                  <div className="bg-[#161616] p-6 rounded-xl border border-gray-600">
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      🔧 Cookies Essenciais
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Necessários para o funcionamento básico do site. Permitem
                      navegação e uso de recursos essenciais como áreas seguras.
                    </p>
                  </div>
                  <div className="bg-[#161616] p-6 rounded-xl border border-gray-600">
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      📊 Cookies de Análise
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Coletam informações sobre como você usa nosso site,
                      ajudando-nos a melhorar o desempenho e a experiência do
                      usuário.
                    </p>
                  </div>
                  <div className="bg-[#161616] p-6 rounded-xl border border-gray-600">
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      🎯 Cookies de Funcionalidade
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Lembram suas preferências e escolhas para oferecer uma
                      experiência mais personalizada.
                    </p>
                  </div>
                  <div className="bg-[#161616] p-6 rounded-xl border border-gray-600">
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      📢 Cookies de Marketing
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      Utilizados para exibir anúncios relevantes e medir a
                      eficácia de nossas campanhas publicitárias.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Seção 3 - Tipos de Cookies */}
            <section className="bg-[#1C1C1C] p-8 rounded-2xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">
                3. Tipos de Cookies Utilizados
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    3.1 Cookies Próprios
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    São cookies definidos diretamente pelo nosso site para
                    melhorar a funcionalidade e personalizar sua experiência.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    3.2 Cookies de Terceiros
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    São cookies de outros serviços que utilizamos para aprimorar
                    nosso site. Podem incluir:
                  </p>
                  <ul className="text-gray-300 list-disc list-inside space-y-2 ml-4">
                    <li>
                      <strong>Google Analytics:</strong> Para análise de tráfego
                      e comportamento
                    </li>
                    <li>
                      <strong>Google Ads:</strong> Para campanhas publicitárias
                    </li>
                    <li>
                      <strong>Facebook Pixel:</strong> Para rastreamento de
                      conversões
                    </li>
                    <li>
                      <strong>RD Station:</strong> Para automação de marketing
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Seção 4 - Duração */}
            <section className="bg-[#1C1C1C] p-8 rounded-2xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">
                4. Duração dos Cookies
              </h2>
              <div className="grid gap-4">
                <div className="bg-[#161616] p-6 rounded-xl border border-gray-600">
                  <h3 className="text-lg font-semibold mb-3 text-white">
                    ⏰ Cookies de Sessão
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Temporários, são removidos quando você fecha o navegador.
                    Utilizados para funcionalidades essenciais durante sua
                    visita.
                  </p>
                </div>
                <div className="bg-[#161616] p-6 rounded-xl border border-gray-600">
                  <h3 className="text-lg font-semibold mb-3 text-white">
                    📅 Cookies Persistentes
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Permanecem no seu dispositivo por um período determinado
                    (até 2 anos) para lembrar suas preferências em visitas
                    futuras.
                  </p>
                </div>
              </div>
            </section>

            {/* Seção 5 - Controle de Cookies */}
            <section className="bg-[#1C1C1C] p-8 rounded-2xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">
                5. Como Controlar os Cookies
              </h2>
              <div className="space-y-6">
                <div className="bg-amber-500/20 border border-amber-500/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-yellow-400">
                    🛠️ Configurações do Navegador
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    A maioria dos navegadores permite que você controle cookies
                    através das configurações. Você pode configurar seu
                    navegador para bloquear ou alertar sobre cookies.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    Instruções por Navegador:
                  </h3>
                  <div className="grid gap-4">
                    <div className="bg-[#161616] p-6 rounded-xl border border-gray-600">
                      <h4 className="font-semibold mb-2 text-white">
                        Google Chrome
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Configurações → Privacidade e segurança → Cookies e
                        outros dados do site
                      </p>
                    </div>
                    <div className="bg-[#161616] p-6 rounded-xl border border-gray-600">
                      <h4 className="font-semibold mb-2 text-white">
                        Mozilla Firefox
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Opções → Privacidade e Segurança → Cookies e Dados do
                        Site
                      </p>
                    </div>
                    <div className="bg-[#161616] p-6 rounded-xl border border-gray-600">
                      <h4 className="font-semibold mb-2 text-white">Safari</h4>
                      <p className="text-gray-300 text-sm">
                        Preferências → Privacidade → Cookies e dados de sites
                      </p>
                    </div>
                    <div className="bg-[#161616] p-6 rounded-xl border border-gray-600">
                      <h4 className="font-semibold mb-2 text-white">
                        Microsoft Edge
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Configurações → Cookies e permissões do site → Cookies e
                        dados do site
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Seção 6 - Impacto da Desativação */}
            <section className="bg-[#1C1C1C] p-8 rounded-2xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">
                6. Impacto da Desativação de Cookies
              </h2>
              <div className="bg-red-500/20 border border-red-500/50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3 text-red-400">
                  ⚠️ Importante Considerar
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  A desativação de cookies pode afetar a funcionalidade do nosso
                  site:
                </p>
                <ul className="text-gray-300 list-disc list-inside space-y-2">
                  <li>
                    Algumas funcionalidades podem não funcionar corretamente
                  </li>
                  <li>Você pode precisar inserir informações repetidamente</li>
                  <li>A personalização da sua experiência será limitada</li>
                  <li>Formulários podem não funcionar adequadamente</li>
                </ul>
              </div>
            </section>

            {/* Seção 7 - Cookies de Terceiros */}
            <section className="bg-[#1C1C1C] p-8 rounded-2xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">
                7. Gerenciamento de Cookies de Terceiros
              </h2>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Para cookies de terceiros, você pode gerenciá-los diretamente
                  nas plataformas correspondentes:
                </p>
                <div className="grid gap-4">
                  <div className="bg-[#161616] p-6 rounded-xl border border-gray-600">
                    <h4 className="font-semibold mb-2 text-white">
                      Google Analytics
                    </h4>
                    <p className="text-gray-300 text-sm mb-2">
                      Opte por não participar em:
                      tools.google.com/dlpage/gaoptout
                    </p>
                  </div>
                  <div className="bg-[#161616] p-6 rounded-xl border border-gray-600">
                    <h4 className="font-semibold mb-2 text-white">Facebook</h4>
                    <p className="text-gray-300 text-sm mb-2">
                      Configurações de anúncios: facebook.com/ads/preferences
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Seção 8 - Atualizações */}
            <section className="bg-[#1C1C1C] p-8 rounded-2xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">
                8. Atualizações desta Política
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Esta Política de Cookies pode ser atualizada periodicamente para
                refletir mudanças em nossas práticas ou por outros motivos
                operacionais, legais ou regulamentares. Recomendamos que você
                revise esta página regularmente para se manter informado.
              </p>
            </section>

            {/* Seção 9 - Contato */}
            <section className="bg-[#1C1C1C] p-8 rounded-2xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">
                9. Contato
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  Se você tiver dúvidas sobre nossa Política de Cookies, entre
                  em contato:
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
