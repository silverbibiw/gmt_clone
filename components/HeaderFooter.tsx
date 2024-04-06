import React from "react";
import "../app/globals.css";
import Link from "next/link";
import Image from "next/image";
import category from "../public/Icons/burger2.svg";
import location from "../public/Icons/location.svg";

const HeaderFooter: React.FC = () => {
  return (
    <div className="home_head-footer w-full px-16 py-[10px] flex justify-between border-b border-[#E5E2EE]">
      <nav className="flex items-center">
        <ul className="flex items-center gap-5 list-none">
          <li className="flex items-center gap-1">
            <Image src={category} alt="category icon" />
            <Link href={"/catalog"} className="hover:text-[#088269]">
              Каталог
            </Link>
          </li>
          <li>
            <Link href={"/"} className="hover:text-[#088269]">
              Производители
            </Link>
          </li>
          <li>
            <Link href={"/"} className="hover:text-[#088269]">
              Кабинеты под ключ
            </Link>
          </li>
          <li>
            <Link href={"/"} className="hover:text-[#088269]">
              Услуги
            </Link>
          </li>
          <li>
            <Link href={"/"} className="hover:text-[#088269]">
              Акции
            </Link>
          </li>
          <li>
            <Link href={"/"} className="hover:text-[#088269]">
              Покупателям
            </Link>
          </li>
          <li>
            <Link href={"/"} className="hover:text-[#088269]">
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-5">
        <p className="flex items-center gap-2">
          Москва
          <Image src={location} alt="location" />
        </p>
        <a href="tel:+74951362723">
          <button className="flex justify-between items-center px-4 py-3 border rounded-[50px] border-[#D5D1E1] text-sm font-semibold hover:bg-[#088269] hover:text-white">
            +7 (495) 136-27-23
          </button>
        </a>
        <button className="text-white bg-[#088269] transition-colors duration-300 ease-in-out delay-300 flex justify-between items-center px-4 py-3 border rounded-[50px] border-[#D5D1E1] text-sm font-semibold hover:bg-white hover:text-black">
          Заказать звонок
        </button>
      </div>
    </div>
  );
};
export default HeaderFooter;
