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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.144039558666!2d-46.56656322557239!3d-23.563062978796654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e9d42f722e1%3A0x5f62d8f2b9e96bb1!2sDevout%20Auditoria%20e%20Contabilidade!5e0!3m2!1sen!2sbr!4v1707324033761!5m2!1sen!2sbr"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </footer>
  );
}
