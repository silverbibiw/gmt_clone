import React from "react";
import Link from "next/link";

const HeaderHead: React.FC = () => {
  return (
    <div className="home_head w-full px-16 py-[10px] flex justify-between border-b-[1px] border-[#E5E2EE]">
      <div className="flex items-center gap-5">
        <div className="relative inline-block text-left">
          <span className="group transition-all duration-300">
            <Link href={"/about"}>О компании</Link>
            <ul className="w-44 absolute hidden bg-white text-gray-700 rounded border font-normal text-xs p-3 group-hover:block top-full left-0 z-10 justify-start border-gray-300 transition-all duration-300">
              <li className="mb-2">
                <Link href={"/"} className="hover:text-green-600">
                  Вакансии
                </Link>
              </li>
              <li className="mb-2">
                <Link href={"/"} className="hover:text-green-600">
                  Отзывы
                </Link>
              </li>
              <li className="mb-2">
                <Link href={"/"} className="hover:text-green-600">
                  Сертификаты
                </Link>
              </li>
              <li className="mb-2">
                <Link href={"/"} className="hover:text-green-600">
                  Партнерские программы
                </Link>
              </li>
              <li className="mb-2">
                <Link href={"/"} className="hover:text-green-600">
                  Оптовые продажи
                </Link>
              </li>
              <li>
                <Link href={"/"} className="hover:text-green-600">
                  Лизинг
                </Link>
              </li>
            </ul>
          </span>
        </div>
        <span>
          <Link href={"/delivery"}>Доставка</Link>
        </span>
        <span>
          <Link href={"/payment"}>Оплата</Link>
        </span>
        <span>
          <Link href={"/articles"}>Гарантии</Link>
        </span>
        <div className="relative inline-block text-left">
          <span className="group transition-all duration-300">
            <Link href={"/contacts"}>Блог</Link>
            <ul className="w-[73px] absolute hidden bg-white text-gray-700 rounded border font-normal text-xs p-2 group-hover:block top-full left-0 z-10 justify-start border-gray-300 transition-all duration-300">
              <li className="mb-2">
                <Link href={"/"} className="hover:text-green-600">
                  Новости
                </Link>
              </li>
              <li className="mb-2">
                <Link href={"/"} className="hover:text-green-600">
                  Статьи
                </Link>
              </li>
              <li>
                <Link href={"/"} className="hover:text-green-600">
                  Видео
                </Link>
              </li>
            </ul>
          </span>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <span>
          <Link href={"/mailto:info@global-mt.ru"}>info@global-mt.ru</Link>
        </span>
        <span>г. Москва, Дмитровское шоссе, д.85</span>
      </div>
    </div>
  );
};
export default HeaderHead;
