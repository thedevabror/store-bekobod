const Footer = () => {
  return (
    <div className="footer bg-bgpage flex items-center">
      <div className="flex min-[768px]:items-center gap-5 px-5 min-[768px]:px-[116px] mt-5">
        <a href="#">
          <img src="footer-logo.svg" alt="" />
        </a>
        <div className="flex gap-5 max-[768px]:flex-col">
          <a href="#" className="text-[12px]">
            О компании
          </a>
          <a href="#" className="text-[12px]">
            Контакты
          </a>
          <a href="#" className="text-[12px]">
            Вакансии
          </a>
          <a href="#" className="text-[12px]">
            Статьи
          </a>
          <a href="#" className="text-[12px]">
            Политика обработки персональных данных
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
