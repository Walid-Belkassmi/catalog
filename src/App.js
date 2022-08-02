import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import movies from "./movies.json";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie:name" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
