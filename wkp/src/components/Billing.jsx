import { galaxy } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={galaxy} alt="galaxy" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className="font-poppins font-semibold xs:text-[40px] text-[30px] text-white xs:leading-[50px] leading-[42px] w-full">
      Há mais de 20 anos atuando <br className="sm:block hidden" />em todo o território nacional
      </h2>
      <p className={"font-poppins font-normal text-dimWhite text-[16px] leading-[20.8px] max-w-[470px] mt-5"}>
      A <span className="text-[#e1000] text-bold">Workplace</span> é focada em vendas B2B de produtos
      de tecnologia, telecom e  broadcast, buscando reduzir custos,  agilizar e facilitar cada  aquisição de nossos clientes.
      </p>


    </div>
  </section>
);

export default Billing;
