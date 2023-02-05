
import './App.css';
import MenuNavbar from './Components/Navbar';
import CarouselComponentTrending from "./Components/CarouselTrending";
import CarouselComponentAgain from "./Components/CarouselWatchAgain";
import CarouselComponentNew from "./Components/CarouselNew";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <MenuNavbar />
      
      <CarouselComponentTrending category={"Star Wars"} />
      <CarouselComponentAgain category={"Marvel"} />
      <CarouselComponentNew category={"Dragon Ball"} />
   
      <Footer />
    </div>
  );
}

export default App;
