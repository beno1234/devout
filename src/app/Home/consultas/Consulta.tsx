import Image from "next/image"
import icon01 from "/public/icon01.png"
import icon02 from "/public/icon02.png"
import icon03 from "/public/icon03.png"
import icon04 from "/public/icon04.png"

const Consulta = () => {
  return (
    <section className="p-8 md:p-16">
        <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-9">
                Consultar importantes
            </h2>
        </div>

        <div className="w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
                <a href="https://sitecontabil.com.br/agendas_obrigacoes" target="_blank" className="flex flex-col items-center">
                    <Image src={icon01} alt={""} className="w-20 mx-auto mb-3" />
                    <p className="text-[#1e87f0] text-center">Agenda de <br /> obrigações</p>
                </a>
                <a href="https://sitecontabil.com.br/facilitador_contabil" target="_blank" className="flex flex-col items-center">
                    <Image src={icon02} alt={""}  className="w-20 mx-auto mb-3" />
                    <p className="text-[#1e87f0] text-center">Facilitador <br /> contábil</p>
                </a>
                <a href="https://sitecontabil.com.br/documentos_importantes" target="_blank" className="flex flex-col items-center">
                    <Image src={icon03} alt={""}  className="w-20 mx-auto mb-3" />
                    <p className="text-[#1e87f0] text-center">Documentos <br /> contábeis</p>
                </a>
                <a href="https://sitecontabil.com.br/documentos_importantes" target="_blank" className="flex flex-col items-center">
                    <Image src={icon04} alt={""}  className="w-20 mx-auto mb-3" />
                    <p className="text-[#1e87f0] text-center">Certidões <br /> negativas</p>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Consulta
