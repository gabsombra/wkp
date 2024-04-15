import styles from "../style";
import { app, microsoft, adobe, tresm, lenovo, hp } from "../assets";


const CTA = () => (
  <div>
    <section className={`${styles.flexCenter} mt-[160px] ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[8px]  border border-white/5 overflow-hidden`}>
      <div className="flex flex-col items-center text-center">
        <h2 className="font-poppins font-semibold text-[40px] sm:text-[30px] text-[#e10000] sm:leading-[50px] leading-[42px] w-full">Revenda Corporativa Autorizada</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-4 text-center`}>
          Com parcerias sólidas, criamos ao longo de mais de 20 anos, uma
          rede de distribuidores capaz de oferecer um universo de 
          opções de produtos de tecnologia e broadcast.
        </p>
        <div className="flex flex-wrap justify-center w-full gap-2 mt-4">
          <img className="w-[147px] h-[73px] object-cover" alt="Artboard" src={app}/>
          <img className="w-[147px] h-[73px] object-cover" alt="Artboard" src={hp}/>
          <img className="w-[147px] h-[73px] object-cover" alt="Artboard" src={adobe}/>
          <img className="w-[147px] h-[73px] object-cover" alt="Artboard" src={microsoft}/>
          <img className="w-[147px] h-[73px] object-cover" alt="Artboard" src={tresm}/>
          <img className="w-[147px] h-[73px] object-cover" alt="Artboard" src={app}/>
        </div>
      </div>
    </section>

    <div className="sm:flex sm:justify-center sm:gap-2">
      <section className={`${styles.flexCenter}  mt-4 ${styles.padding} bg-black-gradient-2 rounded-[8px]  border border-white/5 overflow-hidden sm:mb-6 sm:w-full`}>
        <div className="flex flex-col items-center text-center">
          <h2 className="font-poppins font-semibold text-[40px] sm:text-[30px] text-[#e10000] sm:leading-[50px] leading-[42px] w-full">Importadora</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-4 text-center`}>
          Importações mensais para atender as demandas mais específicas de nossos clientes.
          </p>
          <div className="flex flex-wrap justify-center w-full gap-2 mt-4">
            {/* imagens */}
          </div>
        </div>
      </section>
      <section className={`${styles.flexCenter} mt-4 ${styles.padding} bg-black-gradient-2 rounded-[8px]  border border-white/5 overflow-hidden sm:mb-6 sm:w-full`}>
        <div className="flex flex-col items-center text-center">
          <h2 className="font-poppins font-semibold text-[40px] sm:text-[30px] text-[#e10000] sm:leading-[50px] leading-[42px] w-full">Distribuidora</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-4 text-center`}>
            Trabalhamos direto com alguns fabricantes, dessa forma é possível oferecer o melhor custo além de agilizar a entrega dos produtos.
          </p>
          <div className="flex flex-wrap justify-center w-full gap-2 mt-4">
            {/* imagens */}
          </div>
        </div>
      </section>
    </div>
  </div>
);



export default CTA;
