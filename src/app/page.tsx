import Header from '@/components/Header';
import SectionWelcome from './Home/sectionWelcome/SectionWelcome';
import SobreSection from './Home/sobreSection/SobreSection';
import CursoSection from './Home/cursoSection/CursoSection';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <SectionWelcome />
      <SobreSection />
      <CursoSection />
      <Footer />
    </>
  );
};

export default Home;
