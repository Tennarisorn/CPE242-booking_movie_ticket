"use strict";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavbarFlow } from "../component/navbar";
import Footer from "../component/footer";
import Imageslider from "../component/imageslider";
import Products from "../component/Product";
import ProductSearchForm from "../component/ProductSearchForm";
import { TermOfService } from "../component/termofservice";
import ContactForm from "./contact";
import Megabar from "../component/megabar";

export function Home() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { pathname } = useLocation();

  console.log("this is logged from parent component", filteredProducts);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div id="home">
      <TermOfService />
      {/* <NavbarFlow /> */}
      <Megabar />
      <div id="member">
        <Imageslider />
      </div>
      <div id="search">
        <ProductSearchForm setFilteredProducts={setFilteredProducts} />
      </div>
      <div id="product">
        <Products props={filteredProducts} />
      </div>
      <div id="contact" >
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}
