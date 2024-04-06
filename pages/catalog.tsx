import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/containers/Header";
import vector from "../public/Icons/vector.svg";
import rightarrow from "../public/Icons/rightarrow.svg";
import catalogList from "../assets/catalog";

interface Direction {
  id: number;
  title: string;
}

interface CatalogItem {
  id: number;
  image: any;
  title: string;
  text: string;
}

const CatalogPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Load current page from localStorage on component mount
  useEffect(() => {
    const storedPage = localStorage.getItem("currentPage");
    if (storedPage) {
      setCurrentPage(parseInt(storedPage));
    }
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = catalogList.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(catalogList.length / itemsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Store current page in localStorage
    localStorage.setItem("currentPage", String(pageNumber));
  };

  const directions: Direction[] = [
    { id: 1, title: "Реанимация" },
    { id: 2, title: "Хирургия" },
    { id: 3, title: "Офтальмология" },
    { id: 4, title: "Лабораторная диагностика" },
    { id: 5, title: "Акушерство и Гинекология" },
    { id: 6, title: "Гистология" },
    { id: 7, title: "Косметология" },
    { id: 8, title: "Оториноларингология" },
    { id: 9, title: "Рентгенология и томография" },
    { id: 10, title: "Стерилизация" },
    { id: 11, title: "Физиотерапия и реабилитация" },
    { id: 12, title: "Функциональная диагностика" },
    { id: 13, title: "Эндоскопия" },
    { id: 14, title: "Новинки" },
    { id: 15, title: "Распродажи" },
    { id: 16, title: "Кабинеты под ключ" },
  ];

  return (
    <section>
      <Header />
      <div className="py-10 px-16 ">
        <h1 className="text-[#202020] text-5xl font-medium">Каталог</h1>

        <div className="flex items-center gap-4 py-5">
          <Link
            href={"/"}
            className="text-sm font-normal leading-5 text-[#7A7687]"
          >
            Главная
          </Link>
          <Image src={vector} alt="" />
          <Link href={"/catalog"} className="text-sm font-normal leading-5">
            Каталог
          </Link>
        </div>

        <div className="flex justify-between gap-3">
          <div className="flex flex-col w-1/4 h-auto border border-[#E5E2EE] rounded-lg gap-4 py-4 px-5">
            <div>
              <h3 className="text-[#202020] text-xl font-medium">
                Направления
              </h3>
            </div>
            <div className="opacity-50 bg-[#E1DFE7] w-full h-[1px]"></div>

            {directions.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between cursor-pointer"
              >
                <Link href={"/"} className="text-[#202020] text-sm font-normal">
                  {item.title}
                </Link>
                <Image src={rightarrow} alt="" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 w-3/4 gap-3 self-start">
            {currentItems.map((data: CatalogItem) => (
              <Link
                href={"/"}
                key={data.id}
                className="flex flex-col items-center justify-center border border-[#E5E2EE] rounded-lg bg-white"
              >
                <div className="w-full flex items-center justify-center h-[calc(100%-10px)]">
                  <Image
                    src={data.image}
                    alt=""
                    className="w-[187px] h-[187px] object-cover"
                  />
                </div>
                <div className="w-full h-4/5 border-t bg-[#F8F7F3] rounded-b-lg flex items-center self-center">
                  <h3 className="text-[#202020] text-base font-medium py-5 px-6">
                    {data.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <ul className="flex gap-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index}>
                <button
                  onClick={() => paginate(index + 1)}
                  className={`px-3 py-1 rounded-lg ${
                    currentPage === index + 1
                      ? "bg-gray-400"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CatalogPage;
