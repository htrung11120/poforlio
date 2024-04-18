import Styled from "./header.module.css";
export default function Header() {
  return (
    <div className={Styled.container}>
      <span className={Styled.name}>HOAI TRAN</span>
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
    </div>
  );
}
