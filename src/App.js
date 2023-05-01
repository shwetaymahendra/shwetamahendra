// import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Travel from "./components/Travel";
import SocialLinks from "./components/SocialLinks";
import Blog from "./components/Blog";
import Contact from "./components/Contact";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <SocialLinks />
      <Travel/>
      <Blog />
      <About />
      <Contact />
      
      </div>
  );
}

export default App;
