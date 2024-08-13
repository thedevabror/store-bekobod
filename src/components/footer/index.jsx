const Footer = () => {
  return (
    <div className="footer bg-bgpage flex items-center">
      <div className="flex items-center gap-5 px-[116px] mt-5">
        <a href="#">
          <img src="footer-logo.svg" alt="" />
        </a>
        <a href="#" className="text-[12px]">О компании</a>
        <a href="#" className="text-[12px]">Контакты</a>
        <a href="#" className="text-[12px]">Вакансии</a>
        <a href="#" className="text-[12px]">Статьи</a>
        <a href="#" className="text-[12px]">Политика обработки персональных данных</a>
      </div>
    </div>
  );
};

export default Footer;
