'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const services = [
  {
    title: "Auditoria",
    description: "Auditamos as demonstrações contábeis e financeiras com o objetivo de avaliar se estão representando a real situação patrimonial e se estão de acordo com os princípios fundamentais da nova contabilidade e da legislação fiscal.",
    link: "/servicos#desenvolvimento-web",
  },
  {
    title: "Due Diligence",
    description: "Estamos capacitados para auxiliar na determinação de preços de negociação de quotas ou ações entre sociedade, bem como na orientação a respeito de fusão, cisão ou incorporação de empresas.",
    link: "/servicos#consultoria-digital",
  },
  {
    title: "Planejamento contábil e tributário",
    description: "Através de técnicas específicas, nossos profissionais avaliam de forma legal, a possibilidade de redução da carga tributária da empresas, maximizando os resultados e o retorno de investimento dos sócios.",
    link: "/servicos#seo-marketing-digital",
  },
  {
    title: "Transfer Price",
    description: "No setor, somos considerados uma das empresas mais conceituadas no assunto. Oferecemos por meio de software a melhor gestão nas operações de importação/exportação sujeitas ao Transfer Price.",
    link: "/servicos#ecommerce",
  },
  {
    title: "Revisão Contábil e tributária",
    description: "Tem o objetivo principal averiguar se a apuração e recolhimento dos referidos tributos estão de acordo com a legislação. Buscamos sobretudo, encontrar oportunidades para que, se possível, a carga tributária seja reduzida.",
    link: "/servicos#desenvolvimento-de-apps",
  },
  {
    title: "Recuperação de tributos",
    description: "Nossa equipe está preparada para efetuar um levantamento em toda a documentação pertinente aos recolhimentos tributários e fazer os devidos ajustes de compensação, com ou sem ação judicial, oxigenando dessa forma o financeiro das empresas.",
    link: "/servicos#design-ux-ui",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-32">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Nossos Principais Serviços</h2>

        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 2 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index} className='p-10'>
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between min-h-[200px]">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4 flex-1">{service.description}</p>
                <a href={service.link} className="text-indigo-600 font-semibold hover:underline">
                  Saiba mais
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ServicesSection;
