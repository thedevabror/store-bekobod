import Hero from "../components/hero";
import NewProducts from "../components/new";
import PopularProducts from "../components/popular";
import Promo from "../components/promo";
import SpecialOffer from "../components/special";

const Main = () => {
  return (
    <div>
      <Hero />
      <section className="bg-bgpage px-[116px] flex flex-col gap-20">
        <Promo />
        <NewProducts />
        <PopularProducts />
        <SpecialOffer />
      </section>
    </div>
  );
};

export default Main;
