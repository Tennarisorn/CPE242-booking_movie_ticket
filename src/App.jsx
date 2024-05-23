import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import ImageSlider2 from "./component/imageslider";
import SignUpPage from "./pages/signup";
import SeatSelection from "./component/seating";
import MovieCard from "./component/moviecard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/img2" element={<ImageSlider2 />} />
        <Route path="/seat" element={<SeatSelection />} />
        <Route path="/test" element={<MovieCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
