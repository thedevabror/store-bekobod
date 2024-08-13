const Header = () => {
  return (
    <div className="px-[116px] bg-surface shadow-md flex justify-between">
      <div className="flex items-center gap-20">
        <a href="">
          <img src="logo.svg" alt="" />
        </a>
        <button className="bg-secondary p-2 flex justify-between items-center gap-5 rounded-[4px]">
          <div>
            <img src="catalog-icon.svg" alt="" />
          </div>
          <div>
            <p className="text-onSecondary text-m">Каталог</p>
          </div>
        </button>
        <form className="flex justify-between border-secondary border p-2 rounded-[4px] my-4 w-[359px]">
          <input
            type="text"
            placeholder="Найти товар"
            className="outline-none w-full"
          />
          <button type="submit">
            <img src="search-icon.svg" alt="" />
          </button>
        </form>
      </div>
      <div className="flex gap-20 items-center">
        <div className="flex flex-col justify-start items-center gap-1 order-1 my-[24px]">
          <img src="wishlist-icon.svg" alt="" />
          <p className="text-s">Избранное</p>
        </div>
        <div className="flex flex-col justify-start items-center gap-1 order-1 my-[24px]">
          <img src="orders-icon.svg" alt="" />
          <p className="text-s">Заказы</p>
        </div>
        <div className="flex flex-col justify-start items-center gap-1 order-1 my-[24px]">
          <img src="cart-icon.svg" alt="" />
          <p className="text-s">Корзина</p>
        </div>
        <div className="flex flex-col justify-start items-center gap-1 order-1 my-[24px]">
          <img src="avatar-icon.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
