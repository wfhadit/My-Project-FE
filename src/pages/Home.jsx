import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import MarqueeText from "../components/MarqueeText";
import Navbar from "../components/Navbar";
import Row from "../components/Row";
import SevenCategories from "../components/SevenCategories";

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <MarqueeText />
      <Row />
      <SevenCategories />
      <Footer />
    </>
  );
};

export default Home;
