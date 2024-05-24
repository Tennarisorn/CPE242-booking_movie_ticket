import React from "react";

const ProductFilter = ({ filter, setFilter }) => {
  const sortingOptions = [
    { value: "", label: "ทั่วไป" },
    { value: "bestseller", label: "ยอดนิยม" },
    { value: "newArrivals", label: "มาแรง" },
  ];
  return (
    <div className="flex flex-col sm:flex-row items-center mb-10 justify-between border-b border-gray-200 pb-6 pt-14">
      <h1 className="text-4xl mb-4 sm:mb-0 font-bold tracking-tight text-neutral">
        ALL PRODUCTS
      </h1>
      <div className="flex flex-wrap items-center gap-2">
        <div className="relative inline-block text-left">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Sort</span>
            </div>
            <select
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
              className="select select-sm lg:select-md"
            >
              {sortingOptions.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
