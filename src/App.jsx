import { useState, useEffect } from "react";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { IoMdArrowRoundUp } from "react-icons/io";

function App() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="container">
      {visible && (
        <div className="backToTopButton" onClick={scrollToTop}>
          <IoMdArrowRoundUp />
          <p>To Top</p>
        </div>
      )}
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
      <p className="footer">© Hoai Tran 2024</p>
    </div>
  );
}

export default App;
