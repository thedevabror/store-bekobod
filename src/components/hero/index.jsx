const Hero = () => {
  return (
    <div className="w-full relative max-[768px]:h-[160px] min-[768px]:h-[30vh]">
      <img
        src="hero.png"
        className="w-full h-full object-cover"
        alt="Hero Background"
      />
      <div className="absolute inset-0 flex items-center justify-center gap-20">
        <div>
          <img
            src="hero-img.png"
            className="object-cover max-[500px]:hidden h-[202px] w-[303px] max-[768px]:h-[132px] max-[768px]:w-[198px]"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-5xl max-[768px]:text-2xl font-extrabold">
            Доставка бесплатно от 1000 ₽
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
