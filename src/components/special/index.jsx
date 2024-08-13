const SpecialOffer = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold">Специальные предложения</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-10">
        <div className="bg-primaryMuted shadow-2xl flex flex-col md:flex-row items-center px-5 rounded">
          <div>
            <h1 className="text-4xl font-extrabold">
              Оформите карту «Северяночка»
            </h1>
            <p className="text-lg">И получайте бонусы при покупке в магазинах и на сайте</p>
          </div>
          <div>
            <img src="special-1.png" className="object-cover" alt="" />
          </div>
        </div>
        <div className="bg-secondaryMuted shadow-2xl flex flex-col md:flex-row items-center px-5 rounded">
          <div>
            <h1 className="text-4xl font-extrabold">
              Покупайте акционные товары
            </h1>
            <p className="text-lg">И получайте бонусы при покупке в магазинах и на сайте</p>
          </div>
          <div>
            <img src="special-2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
