const Header = () => {
  return (
    <div className="px-5 min-[768px]:px-[116px] bg-surface shadow-2xl flex justify-between gap-5 min-[1200px]:gap-10">
      <div className="flex items-center gap-5 min-[407px]:gap-10 min-[1268px]:gap-20">
        <a href="">
          <img src="logo.svg" alt="" className="max-[768px]:hidden" />
          <img src="mini-logo.svg" alt="" className="min-[768px]:hidden" />
        </a>
        <button className="bg-secondary p-2 flex justify-between items-center gap-5 rounded-[4px] max-[768px]:hidden">
          <div>
            <img src="catalog-icon.svg" alt="" />
          </div>
          <div>
            <p className="text-onSecondary text-m">Katalog</p>
          </div>
        </button>
        <form className="flex justify-between border-secondary border p-2 rounded-[4px] my-4 min-[450px]:w-[359px]">
          <input
            type="text"
            placeholder="Mahsulotni toping"
            className="outline-none w-full"
          />
          <button type="submit">
            <img src="search-icon.svg" alt="" />
          </button>
        </form>
      </div>
      <div className="flex gap-5 min-[1300px]:gap-20 items-center max-[1068px]:hidden">
        <a
          href="#"
          className="flex flex-col justify-start items-center gap-1 order-1 my-[24px]"
        >
          <img src="wishlist-icon.svg" alt="" />
          <p className="text-s">Sevimlilar</p>
        </a>
        <a
          href="#"
          className="flex flex-col justify-start items-center gap-1 order-1 my-[24px]"
        >
          <img src="orders-icon.svg" alt="" />
          <p className="text-s">Buyurtmalar</p>
        </a>
        <a
          href="#"
          className="flex flex-col justify-start items-center gap-1 order-1 my-[24px]"
        >
          <img src="cart-icon.svg" alt="" />
          <p className="text-s">Savat</p>
        </a>
        <a
          href="#"
          className="flex justify-between items-center gap-5 order-1 my-[24px]"
        >
          <img src="avatar-icon.svg" alt="" />
          <p>Aleksey</p>
        </a>
      </div>
    </div>
  );
};

export default Header;
