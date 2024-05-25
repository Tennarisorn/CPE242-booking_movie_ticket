"use client";

import React, { useEffect, useState, useRef } from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import Spinner from "./Spinner";
import ProductFilter from "./ProductFilter";
import { data } from "../data/moviedata";

const Products = ({ props }) => {
  const [products, setProducts] = useState(data);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [totalItems, setTotalItems] = useState(0);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setLoading(true);
    // console.log("filter", filter);
    setProducts(props);
    console.log("filteredProducts", products);
    console.log('test', products.length);
    setTotalItems(products.length);
    setLoading(false);
  }, [props, products]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
  // console.log("this is logged from child component", props);

  if (loading) return <Spinner loading={loading} />;
  return (
    <div className=" bg-gradient-to-r from-slate-50 to-gray-300 ">
      <ProductFilter filter={filter} setFilter={setFilter} />
      {products && products.length > 0 ? (
        <div className=" grid grid-cols-1 sm:grid-cols-2 place-items-center md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      ) : (
        <p>No products</p>
      )}
      <div className="mt-10">
        <Pagination
          page={page}
          pageSize={pageSize}
          totalItems={totalItems}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Products;
