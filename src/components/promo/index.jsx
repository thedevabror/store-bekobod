import { products } from "../../mock";
import ReactStars from "react-rating-stars-component";
const Promo = () => {
  const promoProducts = products.filter((product) =>
    product.tag.includes("promo")
  );

  return (
    <div>
      <div className="flex items-center justify-between py-10 ">
        <h1 className="text-xl min-[768px]:text-4xl font-bold text-onSurface">
          Акции
        </h1>
        <a
          href="/all-promos"
          className="text-hardest text-s min-[768px]:text-m flex items-center"
        >
          <span>Все акции</span>
          <img
            src="down-icon.svg"
            className="-rotate-90 ml-2"
            alt="Arrow icon"
          />
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 min-[768px]:gap-10transition-all duration-300">
        {promoProducts.map((item) => (
          <div key={item.id} className="border p-4 rounded-lg bg-onSecondary">
            <img src={item.img} alt="" />
            <span className="text-lg font-bold">{item.price}₽</span>
            <h2 className="text-sm font-normal text-onSurface">
              {item.name.slice(0, 10)}...
            </h2>
            <ReactStars
              count={5}
              size={24}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#FF6633"
              edit={false}
              value={item.star}
            />
            <button className="p-2 border-secondary border rounded text-base text-secondary w-full hover:bg-primary hover:border-primary hover:text-onSecondary transition-all duration-300">
              В корзину
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promo;
