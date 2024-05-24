"use strict";
import React, { useState } from "react";
import { NavbarFlow } from "../component/navbar";
import Footer from "../component/footer";
import Megabar from "../component/megabar";
import Imageslider2 from "../component/imageslider";
import Products from "../component/Product";
import ProductSearchForm from "../component/ProductSearchForm";

export function Home() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  console.log('this is logged from parent component',filteredProducts);
  return (
    <div>
      {/* <NavbarFlow /> */}
      <Megabar />
      <Imageslider2 />
      <ProductSearchForm setFilteredProducts={setFilteredProducts} />
      <Products props={filteredProducts} />
      <Footer />
    </div>
  );
}
