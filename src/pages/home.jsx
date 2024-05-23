"use strict";
import { NavbarFlow } from "../component/navbar";
import Footer from "../component/footer";
import Megabar from "../component/megabar";
import Imageslider2 from "../component/imageslider";
import MovieCard from "../component/moviecard";
import Products from "../component/Product";

export function Home() {
  return (
    <div>
      <NavbarFlow />
      <Megabar />
      <Imageslider2 />
      <Products />
      <Footer />
    </div>
  );
}
