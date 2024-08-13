import Hero from "../components/hero";
import NewProducts from "../components/new";
import PopularProducts from "../components/popular";
import Promo from "../components/promo";

const Main = () => {
  return (
    <div>
      <Hero />
      <section className="bg-bgpage px-[116px]">
        <Promo />
        <NewProducts />
        <PopularProducts />
      </section>
    </div>
  );
};

export default Main;
