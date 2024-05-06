import Styled from "./header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
export default function Header() {
  const [boolean, setBoolean] = useState(false);
  const display = () => {
    setBoolean(!boolean);
  };
  return (
    <div className={Styled.container}>
      <span className={Styled.name}>HOAI TRAN</span>
      {!boolean && (
        <div className={Styled.mobileNav}>
          <GiHamburgerMenu className={Styled.icon} onClick={display} />
        </div>
      )}

      <nav>
        <ul className={Styled.list}>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#skills">
            <li>Skills</li>
          </a>
          <a href="#projects">
            <li>Projects</li>
          </a>

          <a href="#contact">
            <li>Contact</li>
          </a>
        </ul>
      </nav>
      {boolean && (
        <div className={Styled.mobileNavItem}>
          <ul className={Styled.MobileList}>
            <a href="#about" onClick={display}>
              <li>About</li>
            </a>
            <a href="#skills" onClick={display}>
              <li>Skills</li>
            </a>
            <a href="#projects" onClick={display}>
              <li>Projects</li>
            </a>

            <a href="#contact" onClick={display}>
              <li>Contact</li>
            </a>
          </ul>
        </div>
      )}
    </div>
  );
}
