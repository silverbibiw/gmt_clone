import React from "react";
import Link from "next/link";
import Image from "next/image";
import fav from "../public/Icons/arrowright.svg";

const FooterTop: React.FC = () => {
  return (
    <footer>
      <div className="flex items-start justify-between gap-32 text-white">
        <div className="flex flex-col items-start gap-5">
          <h2>Покупателям</h2>
          <div className="w-full h-[1px] bg-[#F8F7F3]"></div>
          <div className="w-full flex justify-between gap-10">
            <ul>
              <li>
                <Link href="#">О компании</Link>
              </li>
              <li>
                <Link href="#">Сертификаты</Link>
              </li>
              <li>
                <Link href="#">Вакансии</Link>
              </li>
              <li>
                <Link href="#">Гарантии</Link>
              </li>
              <li>
                <Link href="#">Услуги</Link>
              </li>
              <li>
                <Link href="#">Акции</Link>
              </li>
              <li>
                <Link href="#">Доставка</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="#">Оплата</Link>
              </li>
              <li>
                <Link href="#">Возврат</Link>
              </li>
              <li>
                <Link href="#">FAQ</Link>
              </li>
              <li>
                <Link href="#">Лизинг</Link>
              </li>
              <li>
                <Link href="#">Отзывы</Link>
              </li>
              <li>
                <Link href="#">Блог</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-start gap-5">
          <h2>Каталог</h2>
          <div className="w-full h-[1px] bg-[#F8F7F3]"></div>
          <div className="w-full flex justify-between gap-10">
            <ul>
              <li>
                <Link href="#">Реанимация</Link>
              </li>
              <li>
                <Link href="#">Хирургия</Link>
              </li>
              <li>
                <Link href="#">Офтальмология</Link>
              </li>
              <li>
                <Link href="#">Лабораторная диагностика</Link>
              </li>
              <li>
                <Link href="#">Акушерство и Гинекология</Link>
              </li>
              <li>
                <Link href="#">Гистология</Link>
              </li>
              <li>
                <Link href="#">Косметология</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="#">Орториноларингология</Link>
              </li>
              <li>
                <Link href="#">Рентгенология и томография</Link>
              </li>
              <li>
                <Link href="#">Стрерилизация</Link>
              </li>
              <li>
                <Link href="#">Физиотерапия и реабилитация</Link>
              </li>
              <li>
                <Link href="#">Функциональная диагностика</Link>
              </li>
              <li>
                <Link href="#">Эндоскопия</Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="#">Новинки</Link>
              </li>
              <li>
                <Link href="#">Распродажи</Link>
              </li>
              <li>
                <Link href="#">Кабинеты под ключ</Link>
              </li>
              <li>
                <Link href="#">Каталоги и буклеты GMT</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-start gap-5">
          <div className="flex flex-col items-start gap-5">Контакты</div>
          <div className="w-full h-[1px] bg-[#F8F7F3]"></div>
          <ul>
            <li>
              <Link href="#">
                Адрес: <br />
                <br />
                г. Москва, ул. Московская, д. 35
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-2">
                <p>Карта проезда</p> <Image src={fav} alt="" />
              </Link>
            </li>
            <li>
              <Link href="#">
                График работы: <br /> <br />
                Пн-Пт с 10:00-19:00, <br /> <br />
                Сб-Вс - выходной
              </Link>
            </li>
            <li className="flex flex-col items-start gap-3">
              <Link href="tel:+74951362723">+7 495 136-27-23</Link>
              <Link href="#">+7 495-000-00-00</Link>
              <Link href="#">8 800-000-00-00</Link>
              <Link href="mailto:info@global-mt.ru">info@global-mt.ru</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterTop;
