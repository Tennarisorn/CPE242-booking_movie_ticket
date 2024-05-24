"use client";

import React, { useEffect, useState, useRef } from "react";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import Spinner from "./Spinner";
import ProductFilter from "./ProductFilter";
import { test } from "../data/test";

const Products = ({ props }) => {
  const [products, setProducts] = useState(test);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
  const [filter, setFilter] = useState("");
  const hiddenElementRef = useRef(null);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
  // if (loading) return <Spinner loading={loading} />;
  console.log("this is logged from child component", props);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    if (hiddenElementRef.current) {
      observer.observe(hiddenElementRef.current);
    }

    // Clean up on unmount
    return () => {
      if (hiddenElementRef.current) {
        observer.unobserve(hiddenElementRef.current);
      }
    };
  }, []); // Empty array ensures effect is only run on mount and unmount
  return (
    <div className="bg-gradient-to-r from-neutral-300 to-stone-400">
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
