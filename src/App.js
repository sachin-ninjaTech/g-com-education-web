import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterPage from "./Login/registerpage";
import { Routes, Route } from "react-router-dom";
import Header from "./Header/header";
import Footer from "./Footer";
import SigninPage from "./signinpage";
import Header11 from "./responsiveTab/tabs";
import Course from "./Sliderbar/sliderbar";
import Cardslider from "./CardComponent/index"
import Home from "./Home/home"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RegisterPage />}></Route>
        <Route path="signin" element={<SigninPage />}></Route>
        {/* <Route path="/header" element={<Header />}></Route>
        <Route path="footer" element={<Footer />}></Route>
        <Route path="tabs" element={<Header11 />}></Route>
        <Route path="slider" element={<Slider />}></Route>
        <Route path="cards" element={<Cardslider />}></Route> */}
        <Route path="home" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default App;
