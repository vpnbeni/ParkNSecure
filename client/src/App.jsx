import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/landingPage/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchResults from "./components/SearchResults/SearchResults";
import PropertyDetails from "./components/PropertyDetails/PropertyDetails";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<SearchResults />}></Route>
        <Route path="/propertyDetails" element={<PropertyDetails />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
