import { SliderImages } from "../Constant/constant";
import { SliderImages11 } from "../Constant/constant";
import Footer from "../Footer";
import Header from "../Header/header";
import Course from "../Sliderbar/sliderbar";


const Home = () => {
    console.log("SliderImages", SliderImages)
  return (
    <>
      <Header />
      <Course type={1} sliderData={SliderImages} />
      <div className="mt-5 mb-5">{/* distance beetween the silders */}</div>
      <Course type={3} sliderData={SliderImages11}/>
      <Footer />
    </>
  );
};
export default Home;
