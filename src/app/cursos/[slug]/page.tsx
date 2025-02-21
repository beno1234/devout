/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useParams } from 'next/navigation';
import { Curso, Tributario } from '@/data/cursos';
import { useRouter } from 'next/router';

export default function Page() {
  const { slug } = useParams();

  const curso: Curso | undefined =
    slug && typeof slug === 'string'
      ? Tributario.find((c) => c.slug === slug)
      : undefined;

  if (!curso) {
    return <div>Curso não encontrado!</div>;
  }

  return (
    <div>
      <Header />
      <div className="bg-white text-gray-800">
        <main className="py-16 px-4 bg-[#f8f8f8]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-[#0a1d37]">
                {curso.titulo}
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Aprenda os conceitos avançados de contabilidade com ênfase nos
                aspectos tributários.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div>
                <h2 className="text-xl font-semibold text-[#0a1d37]">
                  Informações Gerais
                </h2>
                <ul className="mt-4 text-lg text-gray-700">
                  <li>
                    <strong>Carga Horária:</strong> {curso.cargaHoraria}
                  </li>
                  <li>
                    <strong>Instrutor:</strong> {curso.instrutor}
                  </li>
                  <li>
                    <strong>Modalidade:</strong> {curso.modalidade}
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-[#0a1d37]">
                  Objetivo do Curso
                </h2>
                <p className="mt-4 text-lg text-gray-700">{curso.objetivo}</p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-[#0a1d37]">
                A quem se destina
              </h2>
              <p className="mt-4 text-lg text-gray-700">
                {curso.aQuemSeDestina}
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-[#0a1d37]">
                Conteúdo Programático
              </h2>
              <div className="space-y-4">
                {curso.conteudoProgramatico.map((modulo, index) => (
                  <div key={index} className="border-b pb-4">
                    <button className="w-full text-left font-semibold text-[#0a1d37] py-2 bg-[#e8e8e8] hover:bg-[#d6d6d6] rounded-lg">
                      {modulo.modulo} ({modulo.duracao})
                    </button>
                    <div className="mt-2 text-lg text-gray-700 pl-6">
                      <ul className="list-disc">
                        {modulo.topicos.map((topico, idx) => (
                          <li key={idx}>{topico}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center">
              <a
                href={curso.link}
                target='_blank'
                className="bg-[#BA9F3C] text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-[#a27e2e] transition duration-300"
              >
                Inscreva-se Agora
              </a>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
