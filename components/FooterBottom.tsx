import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/Logo2.svg";
import vk from "../public/Icons/vk.svg";
import tg from "../public/Icons/tg.svg";
import up from "../public/Icons/whatsUp.svg";
import mastercard from "../public/Icons/master.svg";
import visa from "../public/Icons/visa.svg";
import mir from "../public/Icons/mir.svg";

const FooterBottom: React.FC = () => {
  return (
    <footer>
      <div className="flex items-start justify-between pt-4">
        <div className="flex flex-col gap-3">
          <Image src={logo} alt="" className="text-white" />
          <div>ООО «ГЛОБАЛ МЕДИКАЛ ТРЕЙД»</div>
        </div>
        <div className="flex flex-col items-start gap-3">
          <div>Мы в соцсетях</div>
          <div className="flex items-center gap-3">
            <Image src={vk} alt="" />
            <a
              className="f_telegram_link"
              href="https://telegram.me/global_medical_tradeRU"
            >
              <Image src={tg} alt="" />
            </a>

            <Image src={up} alt="" />
          </div>
        </div>

        <ul>
          <li>
            <Link href="#">Партнерская программа</Link>
          </li>
          <li>
            <Link href="#">Оптовые продажи</Link>
          </li>
          <li>
            <Link href="#">Реквизиты</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="https://global-mt.ru/politika-konfidentsialnosti.php">
              Политика конфиденциальности
            </Link>
          </li>
          <li>
            <Link href="#">Условия соглашения</Link>
          </li>
          <li>
            <Link href="#">Карта сайта</Link>
          </li>
        </ul>

        <div className="flex flex-col gap-3">
          <div>Способы оплаты</div>
          <div className="flex items-center gap-3">
            <Image src={mastercard} alt="" />
            <Image src={visa} alt="" />
            <Image src={mir} alt="" />
          </div>
        </div>
      </div>

      <div className="container flex items-center justify-between pt-16">
        <div>
          © 2024 Медоборудование <br /> Все права защищены
        </div>
        <p className="opacity-[0.6]">
          Информация на данном сайте носит справочный характер и не является
          публичной офертой, определяемой положениями Статьи 437 Гражданского
          кодекса Российской Федерации
        </p>
      </div>
    </footer>
  );
};

export default FooterBottom;
