// import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Author from "./components/Author";
import SocialLinks from "./components/SocialLinks";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import News from "./components/News";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <SocialLinks />
      <Author/>
      <News/>
      <Blog />
      <About />
      <Contact />
      
      </div>
  );
}

export default App;
