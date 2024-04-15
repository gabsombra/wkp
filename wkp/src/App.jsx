import styles from "./style";
import { Billing, Business, Diferenciais, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX}  ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary h-full ${styles.flexStart} ${styles.paddingY}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <CTA />
        <Business />
        <Billing />
        <Clients />
        <Diferenciais />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;