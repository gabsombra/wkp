import { iphone } from "../assets";
import styles, { layout } from "../style";




const Business = () =>  (
  <section id="features" className="flex md:flex-row flex-col py-56 ">
    <div className={layout.sectionInfo}>
      <h2 className="font-poppins font-semibold xs:text-[40px] text-[30px] text-white xs:leading-[50px] leading-[42px] w-full">
      Sempre atentos às <br className="sm:block hidden" />mudanças e as<br className="sm:block hidden" /> constantes atualizações <br className="sm:block hidden" /> do mercado de T.I
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Para atender as mais diversas demandas de nossos clientes e com um time treinado e comprometido com excelência no atendimento, do início da negociação ao pós-venda.
      </p>

     
    </div>

    <div className={layout.sectionImg}>
    <img src={iphone} alt="iphone" className="w-[100%] h-[100%]" />
  </div>
  </section>
);

export default Business;
