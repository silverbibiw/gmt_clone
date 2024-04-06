import React, { useState } from "react";
import "../app/globals.css";
import Link from "next/link";
import Image from "next/image";
import fav from "../public/Icons/favourites.svg";
import product from "../public/Images/product.png";
import comparison from "../public/Icons/comparison.svg";
import stars from "../public/Icons/stars.svg";
import Header from "@/containers/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/containers/Footer";

const ProductPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const breadcrumbs = [
    { label: "Главная", href: "/" },
    { label: "Каталог", href: "/catalog" },
    {
      label: "Лабораторное оборудование",
      href: "/catalog/cataloglaboratornoe-oborudovanie",
    },
    {
      label: "Анализатор мочи MINDRAY UA-66",
      href: "/catalog/cataloglaboratornoe-oborudovanie/productpage",
    },
  ];
  return (
    <section>
      <Header />

      <div className="flex flex-col px-16 py-5 gap-11">
        <div className="flex items-center gap-4 py-5">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </div>

        <div className="flex justify-between gap-16">
          {/* right side */}
          <div className="flex flex-col items-center rounded-lg border bg-white py-10 relative w-[55%]">
            <div className="absolute top-0 left-0 w-full py-4 px-3 flex justify-between">
              <p className="py-1 px-3 text-[#088269] rounded-[60px] border border-[#088269] bg-[#E1EFE6] text-sm font-medium flex items-center justify-center">
                Новинка
              </p>
              <div className="flex gap-3">
                <Link href={"/"}>
                  <Image src={fav} alt="" className="object-contain" />
                </Link>
                <Link href={"/"}>
                  <Image src={comparison} alt="" className="object-contain" />
                </Link>
              </div>
            </div>
            <div className="w-full h-[400px]">
              <Image
                src={product}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full h-auto pl-[5%]">
              <div className="!w-[50px] h-[50px] border border-[#088269] rounded-md">
                <Image
                  src={product}
                  alt=""
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
            </div>
          </div>
          {/* left side info*/}
          <div className="w-[45%] flex flex-col gap-3">
            <h1 className="text-[#202020] text-5xl font-medium">
              Анализатор мочи MIND UA-66
            </h1>
            <div className="flex flex-col gap-1 mt-4">
              <div className="flex gap-3">
                <Image src={stars} alt="" />
                <p className="text-xs font-medium leading-4">4.0</p>
              </div>
              <p className="text-[#7A7687] text-sm font-normal">
                Категория: Лабораторное оборудование
                <br />
                Производитель: Lorem
                <br />
                Артикул: 213134
                <br />В наличии
              </p>
              <p className="text-[#202020] text-lg font-semibold mt-2">
                300 000 руб
              </p>
            </div>
            {/* btns */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <div className="text-[#088269] text-lg font-semibold rounded-3xl border border-[#D5D1E1] py-[6px] px-8 flex items-center gap-3">
                  <span className="text-2xl">-</span>
                  <p>1</p>
                  <span className="text-2xl">+</span>
                </div>
                <button className="text-[#088269] text-sm font-semibold rounded-3xl border border-[#D5D1E1] py-3 px-8">
                  Задать вопрос
                </button>
                <button className="text-[#F8F7F3] bg-[#088269] flex items-center justify-center rounded-3xl text-sm font-semibold py-3 px-5">
                  <Link href={"/trash"}>Добавить в корзину</Link>
                </button>
              </div>
            </div>
            {/* line */}
            <div className="my-6 opacity-50 bg-[#E1DFE7] w-full h-[1px]"></div>
            {/* about */}
            <div className="flex flex-col gap-3">
              <h4 className="text-[#202020] text-lg font-semibold">О товаре</h4>
              <p className="text-[#202020] text-xs font-medium">
                Но синтетическое тестирование, в своём классическом
                представлении, допускает внедрение поэтапного и
                последовательного развития общества. В рамках спецификации
                современных стандартов, сторонники тоталитаризма в науке будут
                функционально разнесены.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col bg-[#F8F7F3] border border-[#E5E2EE] rounded-lg">
          <div className="flex gap-3 border-b border-[#E1DFE7]">
            <div
              className={`cursor-pointer text-[#202020] text-base font-semibold pb-3 mt-6 mx-5 ${
                activeTab === 0
                  ? "border-b-2 border-[#07745E]"
                  : "text-gray-500"
              }`}
              onClick={() => handleTabClick(0)}
            >
              Описание оборудования
            </div>
            <div
              className={`cursor-pointer text-[#202020] text-base font-semibold pb-3 mt-6 mx-5 ${
                activeTab === 1
                  ? "border-b-2 border-[#07745E]"
                  : "text-gray-500"
              }`}
              onClick={() => handleTabClick(1)}
            >
              Характеристики и документы
            </div>
          </div>

          <div className="flex flex-col gap-5 py-6 px-5 bg-white">
            <div className="flex">
              <div className={`${activeTab !== 0 ? "hidden" : "block"}`}>
                <h2 className="text-lg font-semibold mb-4">
                  Описание оборудования
                </h2>
                <p className="text-gray-600">
                  Reda Набор операционный большой №1
                </p>
              </div>
              <div className={`${activeTab !== 1 ? "hidden" : "block"}`}>
                <h2 className="text-lg font-semibold mb-4">
                  Технические характеристики
                </h2>
                <div className="flex items-center justify-start gap-2">
                  <h4>Страна производитель </h4>
                  <span>...............</span>
                  <p>Германия</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-10 py-3 px-6 border-t border-[#E1DFE7]">
            <div className="h-full text-[#07745E] text-sm font-medium">
              Новинки
            </div>
            <div className="h-full text-[#07745E] text-sm font-medium">
              Новинки
            </div>
            <div className="h-full text-[#07745E] text-sm font-medium">
              Новинки
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ProductPage;
