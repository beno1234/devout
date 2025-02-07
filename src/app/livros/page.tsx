import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Vtnc from '../../../public/CapaCurso-ContSocietária.jpeg';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
interface LivrosCard {
  id: number;
  title: string;
  image: StaticImageData;
  subtitle: string;
  value: string;
}

const livros: LivrosCard[] = [
  {
    id: 1,
    title: '',
    image: Vtnc,
    subtitle: '',
    value: '',
  },
  {
    id: 2,
    title: '',
    image: Vtnc,
    subtitle: '',
    value: '',
  },
  {
    id: 3,
    title: '',
    image: Vtnc,
    subtitle: '',
    value: '',
  },
];
const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Loja de Livros</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {livros.map((livro) => (
            <div
              key={livro.id}
              className="border rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Image
                src={livro.image}
                alt={livro.title}
                width={400}
                height={300}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{livro.title}</h2>
                <p className="text-gray-600 mb-4">{livro.subtitle}</p>
                <p className="text-lg font-bold mb-4">{livro.value}</p>
                <button className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition-colors">
                  Comprar Agora
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Page;
