import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import ImageSlider2 from "./component/imageslider";
import SignUpPage from "./pages/signup";
import SeatSelection from "./component/seating";
import MovieCard from "./component/moviecard";
import MovieSearch from "./pages/moviesearch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/imgslider" element={<ImageSlider2 />} />
        <Route path="/seat" element={<SeatSelection />} />
        <Route path="/moviecard" element={<MovieCard />} />
        <Route path="/search" element={<MovieSearch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
