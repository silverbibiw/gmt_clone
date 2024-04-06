import React from "react";
import "../app/globals.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/Logo.svg";
import search from "../public/Icons/search.svg";
import login from "../public/Icons/login.svg";
import fav from "../public/Icons/favourites.svg";
import comp from "../public/Icons/comparison.svg";
import trash from "../public/Icons/trash.svg";

const HeaderMain: React.FC = () => {
  return (
    <div className="home_head-main flex justify-between px-16 py-5 border-b-[1px] relative">
      <div className="flex items-center gap-11">
        <a href="logo">
          <Image src={logo} alt="main logo" />
        </a>
        <div className="for_search relative flex h-10 border rounded-[50px] bg-[#D5D1E1]">
          <div className="absolute h-full left-0 flex gap-2 items-center justify-center rounded-[50px] bg-[#EFEFEF] px-[10px] py-[15px] group">
            <div className="relative inline-block text-left">
              <span className="group">
                <div className="flex items-center gap-2">
                  <p className="text-[#7A7687] font-semibold text-sm cursor-pointer">
                    Все категории
                  </p>
                  <span>
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:rotate-180 transition-all duration-500"
                    >
                      <g id="13/ down">
                        <path
                          id="Vector"
                          d="M3.61295 5C3.08724 5 2.80628 5.7043 3.15283 6.15415L5.85526 9.66728C5.93566 9.77179 6.03477 9.85555 6.14596 9.91293C6.25714 9.97031 6.37782 10 6.49991 10C6.622 10 6.74268 9.97031 6.85387 9.91293C6.96505 9.85555 7.06416 9.77179 7.14456 9.66728L9.84748 6.15415C10.1935 5.7043 9.91258 5 9.38736 5H3.61246H3.61295Z"
                          fill="#7A7687"
                        />
                      </g>
                    </svg>
                  </span>
                </div>
                <ul className="w-60 absolute hidden bg-white text-gray-700 rounded border font-normal text-sm p-3 group-hover:block top-7 -left-2 z-10 justify-start border-gray-300">
                  <li className="mb-2">
                    <Link href={"/"} className="hover:text-green-600">
                      Реанимация
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={"/"} className="hover:text-green-600">
                      Хирургия
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={"/"} className="hover:text-green-600">
                      Офтальмология
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={"/"} className="hover:text-green-600">
                      Лабораторная диагностика
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={"/"} className="hover:text-green-600">
                      Акушерство
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={"/"} className="hover:text-green-600">
                      Гинекология
                    </Link>
                  </li>

                  <li className="mb-2">
                    <Link href={"/"} className="hover:text-green-600">
                      Гистология
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={"/"} className="hover:text-green-600">
                      Косметология
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={"/"} className="hover:text-green-600">
                      Оториноларингология
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={"/"} className="hover:text-green-600">
                      Рентгенология и томография
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={"/"} className="hover:text-green-600">
                      Стерилизация
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={"/"} className="hover:text-green-600">
                      Физиотерапия и реабилитация
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={"/"} className="hover:text-green-600">
                      Функциональная диагностика
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={"/"} className="hover:text-green-600">
                      Эндоскопия
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={"/"} className="hover:text-green-600">
                      Новинки
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={"/"} className="hover:text-green-600">
                      Распродажи
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link href={"/"} className="hover:text-green-600">
                      Кабинеты под ключ
                    </Link>
                  </li>
                </ul>
              </span>
            </div>
          </div>
          <form action="search" className="w-full">
            <input
              type="text"
              name=""
              id="title-search-input"
              placeholder="Поиск"
            />
          </form>
          <div className="flec items-center justify-center p-[9px]">
            <Image src={search} alt="search icon" />
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <p className="text-[#7A7687] font-medium text-xs">
          Пн-Пт с 09:00-19:00
          <br />
          Сб-Вс - выходной
        </p>
      </div>
      <div className="flex items-center gap-5">
        <Link href={"/"} className="hover:fill-slate-500">
          <div className="flex flex-col items-center justify-center gap-1">
            <Image
              src={login}
              alt="fav icon"
              className="text-blue-500 fill-current"
            />
            <p className="text-[#7A7687] font-medium text-xs">Войти</p>
          </div>
        </Link>
        <Link href={"/"}>
          <div className="flex flex-col items-center justify-center gap-1">
            <Image src={fav} alt="fav icon" />
            <p className="text-[#7A7687] font-medium text-xs">Избранное</p>
          </div>
        </Link>
        <Link href={"/"}>
          <div className="flex flex-col items-center justify-center gap-1">
            <Image src={comp} alt="fav icon" />
            <p className="text-[#7A7687] font-medium text-xs">Сравнить</p>
          </div>
        </Link>
        <Link href={"/"}>
          <div className="flex flex-col items-center justify-center gap-1">
            <Image src={trash} alt="fav icon" />
            <p className="text-[#7A7687] font-medium text-xs">Корзина</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default HeaderMain;
