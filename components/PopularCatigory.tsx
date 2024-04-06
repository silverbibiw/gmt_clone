import React from "react";
import "../app/globals.css";
import Image from "next/image";
import Link from "next/link";
import img1 from "../public/Images/catigory.jpg";
import img2 from "../public/Images/catigory1.jpg";
import img3 from "../public/Images/catigory2.jpg";
import img4 from "../public/Images/catigory3.png";
import img5 from "../public/Images/catigory4.jpg";
import img6 from "../public/Images/catigory5.jpg";
import img7 from "../public/Images/catigory6.jpg";

interface Category {
  id: number;
  title: string;
  image: any;
}

const Category: React.FC = () => {
  const category: Category[] = [
    {
      id: 1,
      title: "ЛОР оборудование",
      image: img3,
    },
    {
      id: 2,
      title: "Ультразвуковая диагностика",
      image: img4,
    },
    {
      id: 3,
      title: "Лучевая Диагностика",
      image: img5,
    },
    {
      id: 4,
      title: "Эндоскопия",
      image: img6,
    },
    {
      id: 5,
      title: "Операционные столы",
      image: img7,
    },
  ];

  return (
    <section className="flex flex-col py-5 px-16 gap-12">
      <div className="flex items-center justify-between">
        <h2 className="text-[#202020] text-3xl font-medium leading-[120%]">
          Популярные категории
        </h2>
        <Link href={"/"}>
          <button className="transition duration-300 flex justify-center items-center px-[20px] py-[11px] rounded-full font-manrope font-semibold text-sm text-white bg-[#088269] border-none">
            Все категории
          </button>
        </Link>
      </div>
      {/* cards */}
      <div className="grid grid-cols-4 gap-3">
        <div className="flex flex-col items-center justify-center border border-[#E5E2EE] bg-white rounded-[10px]">
          <div className="w-full flex items-center justify-center h-full my-10">
            <Image
              src={img1}
              alt="image"
              className="w-48 h-48 object-cover object-center"
            />
          </div>
          <div className="w-full border border-[#E5E2EE] bg-[#F8F7F3] rounded-b-[10px]  items-center justify-start">
            <h2 className="text-[#202020] text-base font-medium leading-[140%] py-5 px-6">
              Урология
            </h2>
          </div>
        </div>
        <div className="home_category-itemHomeATV flex flex-col items-center justify-center border border-[#E5E2EE] bg-white rounded-[10px]">
          <div className="w-full flex items-center justify-center h-full mb-20">
            <Image
              src={img2}
              alt="image"
              className="w-[101px] h-[532px] object-cover object-center"
            />
          </div>
          <div className="w-full border border-[#E5E2EE] bg-[#F8F7F3] rounded-b-[10px] items-center justify-start">
            <h2 className="text-[#202020] text-base font-medium leading-[140%] py-5 px-6">
              Для радиационной терапии
            </h2>
          </div>
        </div>
        {category.map((data) => (
          <div key={data.id}>
            <div className="flex flex-col items-center justify-center border border-[#E5E2EE] bg-white rounded-[10px]">
              <div className="w-full flex items-center justify-center my-10">
                <Image
                  src={data.image}
                  alt="image"
                  className="w-48 h-48 object-cover"
                />
              </div>
              <div className="w-full border border-[#E5E2EE] bg-[#F8F7F3] rounded-b-[10px]">
                <h2 className="text-[#202020] text-base font-medium leading-[140%] py-5 px-6">
                  {data.title}
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
