import noimage from "../assets/images/noimage.jpg";
import React, { useState } from "react";
import ProductModal from "./ProductModal";
import { Link } from "react-router-dom";
import { StarIcon } from "./moviecard";

const ProductCard = ({ product }) => {
  const { name, price, image, _id } = product;
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <ProductModal
        isOpen={openModal}
        setIsOpen={setOpenModal}
        product={product}
      />

      <div className=" hover:scale-110 transition-transform duration-300 transform-gpu mx-auto flex w-full max-w-[375px] flex-col overflow-hidden border-gray-100 rounded-3xl shadow-xl">
        <div className=" rounded-3xl w-[375px] shadow-2xl bg-slate-100">
          <img
            src="https://upload.wikimedia.org/wikipedia/th/d/d0/%E0%B8%AD%E0%B8%A0%E0%B8%B4%E0%B8%99%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B9%84%E0%B8%A7%E0%B8%81%E0%B8%B4%E0%B9%89%E0%B8%87_%E0%B8%9E%E0%B8%B4%E0%B8%8A%E0%B8%B4%E0%B8%95%E0%B8%A1%E0%B8%B1%E0%B8%87%E0%B8%81%E0%B8%A3.jpg"
            width="375px"
            height="350px"
            className="rounded-t-3xl justify-center h-[350px] grid object-cover"
            alt="movie.title"
          />
          <Link
            onClick={() => setOpenModal(true)}
            href={`/products/${product._id}`}
          >
            <div className="group p-6 grid z-10">
              <a
                className="group-hover:text-cyan-700 font-bold sm:text-2xl line-clamp-2 transition-all"
              >
                How to Train Your Dragon
              </a>
              <span className="text-slate-400 pt-2 font-semibold">(2023)</span>
              <div className="grid-cols-2 flex group justify-between">
                <div className="font-black flex flex-col">
                  <span className="text-yellow-500 text-xl">IMDB SCORE</span>
                  <span className="text-3xl flex gap-x-1 items-center group-hover:text-yellow-500 transition-all">
                    8.8
                    <StarIcon fill="#eab308" />
                  </span>
                </div>
                <div className="flex flex-col items-end">
                  <div className="h-7"></div>
                  <span className="text-3xl font-bold gap-x-2 text-slate-300">
                    # 8
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
