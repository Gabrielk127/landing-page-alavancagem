"use client";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function PoliticaPrivacidade() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="min-h-screen bg-[#1E1E1E] text-white pt-24">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Cabeçalho da página */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Política de Privacidade
            </h1>
            <p className="text-gray-300 text-lg">
              Última atualização: Janeiro de 2025
            </p>
          </div>

          {/* Conteúdo da política */}
          <div className="space-y-8">
            {/* Seção 1 */}
            <section className="bg-[#1C1C1C] p-8 rounded-2xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">
                1. Informações Gerais
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                A AX Negócios, Créditos e Investimentos está comprometida em
                proteger e respeitar sua privacidade. Esta Política de
                Privacidade explica como coletamos, usamos, divulgamos e
                protegemos suas informações quando você utiliza nossos serviços
                ou visita nosso site.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Ao utilizar nossos serviços, você concorda com a coleta e uso de
                informações de acordo com esta política. Se você não concordar
                com os termos desta política, por favor, não utilize nossos
                serviços.
              </p>
            </section>

            {/* Seção 2 */}
            <section className="bg-[#1C1C1C] p-8 rounded-2xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">
                2. Informações que Coletamos
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    2.1 Informações Pessoais
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Coletamos informações pessoais que você nos fornece
                    voluntariamente, incluindo: nome completo, endereço de
                    e-mail, número de telefone, CPF, informações financeiras e
                    outras informações necessárias para nossos serviços de
                    investimento e alavancagem patrimonial.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    2.2 Informações Técnicas
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Coletamos automaticamente certas informações técnicas,
                    incluindo: endereço IP, tipo de navegador, páginas
                    visitadas, tempo de acesso e dados de cookies para melhorar
                    a experiência do usuário.
                  </p>
                </div>
              </div>
            </section>

            {/* Seção 3 */}
            <section className="bg-[#1C1C1C] p-8 rounded-2xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">
                3. Como Utilizamos suas Informações
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-3">
                <p>Utilizamos suas informações para:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Fornecer e manter nossos serviços de investimento</li>
                  <li>Processar transações e pagamentos</li>
                  <li>Comunicar com você sobre nossos serviços</li>
                  <li>Personalizar sua experiência em nosso site</li>
                  <li>Enviar informações sobre produtos e serviços</li>
                  <li>Cumprir obrigações legais e regulamentares</li>
                  <li>Detectar e prevenir fraudes</li>
                </ul>
              </div>
            </section>

            {/* Seção 4 */}
            <section className="bg-[#1C1C1C] p-8 rounded-2xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">
                4. Compartilhamento de Informações
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Não vendemos, alugamos ou compartilhamos suas informações
                pessoais com terceiros para fins comerciais, exceto nas
                seguintes circunstâncias:
              </p>
              <ul className="text-gray-300 list-disc list-inside space-y-2 ml-4">
                <li>Com seu consentimento explícito</li>
                <li>Para cumprir obrigações legais</li>
                <li>
                  Com prestadores de serviços que auxiliam em nossas operações
                </li>
                <li>Em casos de transferência de negócios</li>
                <li>Para proteger nossos direitos e segurança</li>
              </ul>
            </section>

            {/* Seção 5 */}
            <section className="bg-[#1C1C1C] p-8 rounded-2xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">
                5. Segurança dos Dados
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Implementamos medidas de segurança técnicas, administrativas e
                físicas adequadas para proteger suas informações pessoais contra
                acesso não autorizado, alteração, divulgação ou destruição.
                Utilizamos criptografia SSL, firewalls e outras tecnologias de
                segurança para proteger seus dados.
              </p>
            </section>

            {/* Seção 6 */}
            <section className="bg-[#1C1C1C] p-8 rounded-2xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">
                6. Seus Direitos
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-3">
                <p>
                  De acordo com a LGPD (Lei Geral de Proteção de Dados), você
                  tem os seguintes direitos:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Confirmação da existência de tratamento de dados</li>
                  <li>Acesso aos seus dados pessoais</li>
                  <li>
                    Correção de dados incompletos, inexatos ou desatualizados
                  </li>
                  <li>Anonimização, bloqueio ou eliminação de dados</li>
                  <li>Portabilidade de dados</li>
                  <li>Eliminação dos dados tratados com consentimento</li>
                  <li>Revogação do consentimento</li>
                </ul>
              </div>
            </section>

            {/* Seção 7 */}
            <section className="bg-[#1C1C1C] p-8 rounded-2xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">
                7. Cookies
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Utilizamos cookies e tecnologias similares para melhorar sua
                experiência em nosso site, analisar o tráfego e personalizar
                conteúdo. Você pode controlar o uso de cookies através das
                configurações do seu navegador. Para mais informações, consulte
                nossa Política de Cookies.
              </p>
            </section>

            {/* Seção 8 */}
            <section className="bg-[#1C1C1C] p-8 rounded-2xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">
                8. Retenção de Dados
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Mantemos suas informações pessoais apenas pelo tempo necessário
                para cumprir os propósitos descritos nesta política, salvo
                quando a lei exigir um período de retenção mais longo. Quando
                não precisarmos mais de suas informações, elas serão excluídas
                ou anonimizadas de forma segura.
              </p>
            </section>

            {/* Seção 9 */}
            <section className="bg-[#1C1C1C] p-8 rounded-2xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">
                9. Alterações nesta Política
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente.
                Notificaremos você sobre mudanças significativas publicando a
                nova política em nosso site e indicando a data da última
                atualização. Recomendamos que você revise esta política
                regularmente.
              </p>
            </section>

            {/* Seção 10 */}
            <section className="bg-[#1C1C1C] p-8 rounded-2xl border border-gray-700">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">
                10. Contato
              </h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  Se você tiver dúvidas sobre esta Política de Privacidade ou
                  quiser exercer seus direitos, entre em contato conosco:
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
