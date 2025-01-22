import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake } from '@fortawesome/free-regular-svg-icons';

export default function Oi() {
  return (
    <div>
      <Head>
        <title>Contabilidade - Home</title>
        <meta name="description" content="Serviços de contabilidade confiáveis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Cabeçalho */}
      <header className="bg-blue-900 text-white p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Contabilidade Pro</h1>
          <nav className="space-x-6">
            <a href="#services" className="hover:text-gray-300">Serviços</a>
            <a href="#about" className="hover:text-gray-300">Sobre</a>
            <a href="#contact" className="hover:text-gray-300">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white h-screen flex items-center justify-center text-center">
        <div>
          <h2 className="text-4xl font-extrabold">Transforme sua contabilidade com profissionais especializados</h2>
          <p className="mt-4 text-xl">Soluções inteligentes para o crescimento do seu negócio</p>
        </div>
      </section>

      {/* Serviços */}
      <section id="services" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Nossos Serviços</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-900">Consultoria Contábil</h3>
              <p className="mt-4 text-gray-600">Orientação estratégica para o seu negócio, garantindo conformidade fiscal e tributária.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-900">Impostos e Tributos</h3>
            <FontAwesomeIcon icon={faHandshake} className="text-blue-500 text-4xl" />

              <p className="mt-4 text-gray-600">Gerenciamento completo dos impostos e tributos de sua empresa, com foco em otimização de custos.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-900">Declaração de Impostos</h3>
              <p className="mt-4 text-gray-600">Preparamos e enviamos sua declaração de impostos com precisão e dentro do prazo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Sobre Nós</h2>
          <p className="mt-4 text-lg text-gray-600">Com mais de 10 anos de experiência, a Contabilidade Pro é especialista em oferecer soluções contábeis personalizadas para empresas de todos os tamanhos. Nosso time de profissionais está comprometido com a excelência e a segurança de seus dados fiscais e tributários.</p>
        </div>
      </section>

      {/* Rodapé */}
      <footer id="contact" className="bg-blue-900 text-white py-6">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2025 Contabilidade Pro. Todos os direitos reservados.</p>
          <p className="mt-2">Entre em contato: <a href="mailto:contato@contabilidadepro.com" className="underline">contato@contabilidadepro.com</a></p>
        </div>
      </footer>
    </div>
  )
}
