import React from 'react'
import styles, { layout } from "../style";

const Diferenciais = () => {
  return (
    <div className="pt-20">
    <h2 className="font-poppins text-center font-semibold text-[40px] sm:text-[30px] text-[#e10000] sm:leading-[50px] leading-[42px] w-full">
    Nossos Diferenciais</h2>

      <section className={`${styles.flexCenter} mt-4 ${styles.padding} overflow-hidden sm:mb-6 sm:w-full`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1 */}
          <div className={`bg-black-gradient-2 hover:bg-[#6327AA] rounded-[8px] text-center border border-[#8C52FF]/10 overflow-hidden p-4 flex flex-col justify-center items-center h-full`}>
            <h3 className="font-poppins font-semibold text-[2rem] sm:text-[1.5rem] text-white/80 sm:leading-[30px] leading-[42px] w-full mb-4">Mais de 20 anos de experiência</h3>
            <p className={`${styles.paragraph} max-w-[470px] mt-2 sm:mt-4 mb-2 sm:mb-4 text-center`}>
              Comprometimento com nossos clientes, parcerias sólidas com os fornecedores, credibilidade e ética, assim é a WorkPlace.
            </p>
          </div>

          {/* Card 2 */}
          <div className={`bg-black-gradient-2 hover:bg-[#6327AA] rounded-[8px] text-center border border-[#8C52FF]/10 overflow-hidden p-4 flex flex-col justify-center items-center h-full`}>
            <h3 className="font-poppins font-semibold text-[2rem] sm:text-[1.5rem] text-white/80 sm:leading-[30px] leading-[42px] w-full mb-4">Fabricantes e Distribuidores</h3>
            <p className={`${styles.paragraph} max-w-[470px] mt-2 sm:mt-4 mb-2 sm:mb-4 text-center`}>
              Junto com nossos parceiros, trabalhamos com um time de especialistas de produtos para atender as mais diversas demandas dos nossos clientes.
            </p>
          </div>

          {/* Card 3 */}
          <div className={`bg-black-gradient-2 hover:bg-[#6327AA] rounded-[8px] text-center border border-[#8C52FF]/10 overflow-hidden p-4 flex flex-col justify-center items-center h-full`}>
            <h3 className="font-poppins font-semibold text-[2rem] sm:text-[1.5rem] text-white/80 sm:leading-[30px] leading-[42px] w-full mb-4">Atendimento especializado</h3>
            <p className={`${styles.paragraph} max-w-[470px] mt-2 sm:mt-4 mb-2 sm:mb-4 text-center`}>
              Time de Vendas treinado e especializado para atender com rapidez e qualidade até as demandas mais complexas.
            </p>
          </div>

          {/* Card 4 */}
          <div className={`bg-black-gradient-2 hover:bg-[#6327AA] rounded-[8px] text-center border border-[#8C52FF]/10 overflow-hidden p-4 flex flex-col justify-center items-center h-full`}>
            <h3 className="font-poppins font-semibold text-[2rem] sm:text-[1.5rem] text-white/80 sm:leading-[30px] leading-[42px] w-full mb-4">Localização de produtos</h3>
            <p className={`${styles.paragraph} max-w-[470px] mt-2 sm:mt-4 mb-2 sm:mb-4 text-center`}>
              Nosso time de vendas está preparado para ajudar os compradores na busca desses produtos, seja no Brasil ou importados.
            </p>
          </div>

          {/* Card 5 */}
          <div className={`bg-black-gradient-2 hover:bg-[#6327AA] rounded-[8px] text-center border border-[#8C52FF]/10 overflow-hidden p-4 flex flex-col justify-center items-center h-full`}>
            <h3 className="font-poppins font-semibold text-[2rem] sm:text-[1.5rem] text-white/80 sm:leading-[30px] leading-[42px] w-full mb-4">Logística</h3>
            <p className={`${styles.paragraph} max-w-[470px] mt-2 sm:mt-4 mb-2 sm:mb-4 text-center`}>
              Trabalhamos com diversas formas de envio, além de contar com motoristas para entregas urgentes.
            </p>
          </div>

          {/* Card 6 */}
          <div className={`bg-black-gradient-2 hover:bg-[#6327AA] rounded-[8px] text-center border border-[#8C52FF]/10 overflow-hidden p-4 flex flex-col justify-center items-center h-full`}>
            <h3 className="font-poppins font-semibold text-[2rem] sm:text-[1.5rem] text-white/80 sm:leading-[30px] leading-[42px] w-full mb-4">Distribuidora</h3>
            <p className={`${styles.paragraph} max-w-[470px] mt-2 sm:mt-4 mb-2 sm:mb-4 text-center`}>
              Trabalhamos direto com alguns fabricantes, dessa forma é possível oferecer o melhor custo além de agilizar a entrega dos produtos.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}


export default Diferenciais
