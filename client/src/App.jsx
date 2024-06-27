import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/landingPage/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchResults from "./components/SearchResults/SearchResults";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<SearchResults />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
