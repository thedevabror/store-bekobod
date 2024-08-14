const Footer = () => {
  return (
    <div className="footer bg-bgpage flex items-center">
      <div className="flex min-[768px]:items-center gap-5 px-5 min-[768px]:px-[116px] mt-5">
        <a href="#">
          <img src="footer-logo.svg" alt="" />
        </a>
        <div className="flex gap-5 max-[768px]:flex-col">
          <a href="#" className="text-[12px]">
            Kompaniya haqida
          </a>
          <a href="#" className="text-[12px]">
            Kontaktlar
          </a>
          <a href="#" className="text-[12px]">
            Bo`sh ish o`rinlari
          </a>
          <a href="#" className="text-[12px]">
            Maqolalar
          </a>
          <a href="#" className="text-[12px]">
            Shaxsiy ma`lumotlarni qayta ishlash siyosati
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
