import Header from '@/components/Header';
import SectionWelcome from './Home/sectionWelcome/SectionWelcome';
import SobreSection from './Home/sobreSection/SobreSection';
import CursoSection from './Home/cursoSection/CursoSection';
import Footer from '@/components/Footer';
import Consulta from './Home/consultas/Consulta';
import ServicesSection from './Home/servicesSection/ServicesSection';

const Home = () => {
  return (
    <>
      <Header />
      <SectionWelcome />
      <SobreSection />
      <CursoSection />
      <Consulta />
      <ServicesSection />
      <Footer />
    </>
  );
};

export default Home;
