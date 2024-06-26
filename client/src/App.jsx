import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/landingPage/Home";
import Header from "./components/Header";
const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>

        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
