const Hero = () => {
  return (
    <div className="w-full relative">
      <img
        src="hero.png"
        className="w-full h-full object-cover"
        alt="Hero Background"
      />
      <div className="absolute inset-0 flex items-center justify-center gap-20">
        <div>
          <img
            src="hero-img.png"
            className="object-cover h-[202px] w-[303px]"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-5xl font-extrabold">
            Доставка бесплатно от 1000 ₽
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
