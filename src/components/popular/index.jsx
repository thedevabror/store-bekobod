import { products } from "../../mock";
import ReactStars from "react-rating-stars-component";

const PopularProducts = () => {
  const popularProducts = products.filter((product) =>
    product.tag.includes("popular")
  );

  return (
    <div>
      <div className="flex items-center justify-between py-10 ">
        <h1 className="text-xl min-[768px]:text-4xl font-bold text-onSurface">
          Ilgari sotib olingan
        </h1>
        <a
          href="/all-populars"
          className="text-hardest text-s min-[768px]:text-m flex items-center"
        >
          <span>Barcha xaridlar</span>
          <img
            src="down-icon.svg"
            className="-rotate-90 ml-2"
            alt="Arrow icon"
          />
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 min-[768px]:gap-10 transition-all duration-300">
        {popularProducts.map((item) => (
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
              Savatga
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
