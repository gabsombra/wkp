import { clients } from "../constants";
import styles from "../style";
import { acer, ajs, aoc, asus, avaya, belkin, benq, canon, cisco, coreldraw, dlink, dymo, fujitsu, ibm, intel, intelbras, jabra, kingston, kensington, lexmark,
   logitech, manfrotto, motorola, newtek, nikon, netgear, nokia, panasonic, philips, positivo, poly, rokinon, sony, spigen, toshiba, tplink, wacom} from "../assets"

const Clients = () => (
  <section className={`${styles.flexCenter} mt-[160px] ${styles.padding} sm:flex-row flex-col overflow-hidden`}>
  <div className="flex flex-col items-center text-center">
    <h2 className="font-poppins font-semibold text-[40px] sm:text-[30px] text-[#e10000] sm:leading-[50px] leading-[42px] w-full">Inúmeros parceiros de tecnologia,
    tudo que sua empresa 
    precisa na WorkPlace tem</h2>

    <div className="flex flex-wrap pt-10 opacity-55 justify-center w-full gap-12 mt-4">
    <img className="h-[21px] object-cover mr-[10px]" alt="Artboard" src={acer}/>
    <img className="h-[21px] object-cover mr-[10px]" alt="Artboard" src={ajs}/>
    <img className="h-[21px] object-cover mr-[10px]" alt="Artboard" src={aoc}/>
    <img className="h-[21px] object-cover mr-[10px]" alt="Artboard" src={asus}/>
    <img className="h-[21px] object-cover mr-[10px]" alt="Artboard" src={avaya}/>
    <img className="h-[21px] object-cover mr-[10px]" alt="Artboard" src={belkin}/>
    <img className="h-[21px] object-cover mr-[10px]" alt="Artboard" src={benq}/>
    <img className="h-[21px] object-cover mr-[10px]" alt="Artboard" src={canon}/>
    <img className="h-[21px] object-cover mr-[10px]" alt="Artboard" src={cisco}/>
    <img className="h-[21px] object-cover mr-[10px]" alt="Artboard" src={coreldraw}/>
    <img className="h-[21px] object-cover mr-[10px]" alt="Artboard" src={dlink}/>
    <img className="h-[21px] object-cover mr-[10px]" alt="Artboard" src={dymo}/>
    <img className="h-[21px] object-cover mr-[10px]" alt="Artboard" src={fujitsu}/>
    <img className="h-[21px] object-cover mr-[10px]" alt="Artboard" src={ibm}/>
    <img className="h-[21px] object-cover mr-[10px]" alt="Artboard" src={intel}/>
    <img className="h-[21px] object-cover mr-[10px]" alt="Artboard" src={intelbras}/>
    <img className="h-[21px] object-cover mr-[10px]" alt="Artboard" src={jabra}/>
    <img className="h-[21px] object-cover mr-[10px]" alt="Artboard" src={kingston}/>
    <img className="h-[21px] object-cover mr-[10px]" alt="Artboard" src={kensington}/>
    <img className="h-[21px] object-cover mr-[10px]" alt="Artboard" src={lexmark}/>
    <img className="h-[21px] object-cover mr-[10px]" alt="Artboard" src={logitech}/>
    <img className="h-[21px] object-cover mr-[10px]" alt="Artboard" src={manfrotto}/>
    <img className="h-[21px] object-cover mr-[10px]" alt="Artboard" src={motorola}/>
    <img className="h-[21px] object-cover mr-[10px]" alt="Artboard" src={newtek}/>
    <img className="h-[21px] object-cover mr-[10px]" alt="Artboard" src={nikon}/>
    <img className="h-[21px] object-cover mr-[10px]" alt="Artboard" src={netgear}/>
    <img className="h-[21px] object-cover mr-[10px]" alt="Artboard" src={nokia}/>
    <img className="h-[21px] object-cover mr-[10px]" alt="Artboard" src={panasonic}/>
    <img className="h-[21px] object-cover mr-[10px]" alt="Artboard" src={philips}/>
    <img className="h-[21px] object-cover mr-[10px]" alt="Artboard" src={positivo}/>
    <img className="h-[21px] object-cover mr-[10px]" alt="Artboard" src={poly}/>
    <img className="h-[21px] object-cover mr-[10px]" alt="Artboard" src={rokinon}/>
    <img className="h-[21px] object-cover mr-[10px]" alt="Artboard" src={sony}/>
    <img className="h-[21px] object-cover mr-[10px]" alt="Artboard" src={spigen}/>
    <img className="h-[21px] object-cover mr-[10px]" alt="Artboard" src={toshiba}/>
    <img className="h-[41px] object-cover mr-[10px]" alt="Artboard" src={tplink}/>
    <img className="h-[41px] object-cover" alt="Artboard" src={wacom}/>
</div>

  </div>
</section>
);

export default Clients;
