import styles from "../style";
import Button from "./Button";

const Hero = () => {
  return (
    <section id="home" className={`relative flex flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} pink__gradientxl:px-0 sm:px-16 px-6 relative`}>
        {/* Pink gradient behind text */}
        <div className="absolute z-0 inset-0 pink__gradient"></div>
        
        <div className="flex flex-col justify-center items-center h-full relative z-10">
          <h1 className="font-poppins font-semibold text-[72px] text-gradient leading-[75px] text-center">
            Vendas B2B <br className="sm:block hidden" />{" "}
            <span className="text-gradient">é a nossa especialidade</span>{" "}
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-5 text-white/80 text-center`}>
            Oferecemos os mais diversos produtos de Tecnologia, Telecom e Broadcast, para impulsionar o sucesso dos nossos clientes.
          </p>
          <Button />
        </div>
      </div>
      
      <div className={`flex-1 flex md:my-0 my-10 relative`}>
        {/* This is an empty div */}
      </div>
    </section>
  );
};




export default Hero;
