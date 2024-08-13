import { products } from "../../mock";

const Promo = () => {
  const promoProducts = products.filter(product => product.tag.includes("promo"));

  return (
    <div>
      <div className="flex items-center justify-between py-10">
        <h1 className="text-4xl font-bold text-onSurface">Акции</h1>
        <a href="/all-promos" className="text-hardest text-m flex items-center">
          <span>Все акции</span>
          <img src="down-icon.svg" className="-rotate-90 ml-2" alt="Arrow icon" />
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {promoProducts.map(item => (
          <div key={item.id} className="border p-4 rounded-lg bg-onSecondary">
            <img src={item.img} alt="" />
            <span className="text-lg font-bold">{item.price}₽</span>
            <h2 className="text-sm font-normal text-onSurface">{item.name}</h2>
            <p>{item.description}</p>
            {/*d more product details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promo;
