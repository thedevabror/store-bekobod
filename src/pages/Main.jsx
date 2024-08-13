import Hero from "../components/hero";
import Promo from "../components/promo";

const Main = () => {
  return (
    <div>
      <Hero />
      <section className="bg-bgpage px-[116px]">
        <Promo />
      </section>
    </div>
  );
};

export default Main;
