import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';
import logo from '../../public/devout-logo.png';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6 flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-col items-center md:items-start">
        <Image src={logo} alt="Devout Logo" className="w-16 h-16 mb-4" />
        <p className="text-sm">Todos os direitos reservados.</p>
        <p className="text-sm">&copy;2022 Devout Auditoria e Contabilidade</p>
        <div className="flex space-x-4 mt-4">
          <a href="#" className="text-white text-2xl hover:text-gray-400">
            <FaInstagram />
          </a>
          <a href="#" className="text-white text-2xl hover:text-gray-400">
            <FaFacebookF />
          </a>
          <a href="#" className="text-white text-2xl hover:text-gray-400">
            <FaYoutube />
          </a>
        </div>
      </div>
      <div className="mt-6 md:mt-0">
        <iframe
          title="Google Maps"
          className="w-80 h-48 rounded-lg"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Devout%20Auditoria+(Devout%20Auditoria%20e%20Contabilidade)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </footer>
  );
}
