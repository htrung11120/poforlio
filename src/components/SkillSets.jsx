import Styled from "./skillSet.module.css";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
} from "react-icons/si";
import { IoLogoSass, IoLogoNodejs } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";

export default function SkillSets() {
  return (
    <div className={Styled.container}>
      <p className={Styled.heading}>Skills</p>
      <div className={Styled.gridContainer}>
        <div className={Styled.iconContainer}>
          <SiJavascript className={Styled.icon} />
          <p className={Styled.iconText}>Javascipt </p>
        </div>
        <div className={Styled.iconContainer}>
          <SiTypescript className={Styled.icon} />
          <p className={Styled.iconText}>TypeScript </p>
        </div>
        <div className={Styled.iconContainer}>
          <SiHtml5 className={Styled.icon} />
          <p className={Styled.iconText}>HTML </p>
        </div>
        <div className={Styled.iconContainer}>
          <SiCss3 className={Styled.icon} />
          <p className={Styled.iconText}>CSS </p>
        </div>
        <div className={Styled.iconContainer}>
          <IoLogoSass className={Styled.icon} />
          <p className={Styled.iconText}>SASS </p>
        </div>
        <div className={Styled.iconContainer}>
          <SiReact className={Styled.icon} />
          <p className={Styled.iconText}>REACT </p>
        </div>
        <div className={Styled.iconContainer}>
          <IoLogoNodejs className={Styled.icon} />
          <p className={Styled.iconText}>NodeJS </p>
        </div>
        <div className={Styled.iconContainer}>
          <FaGitAlt className={Styled.icon} />
          <p className={Styled.iconText}>Git </p>
        </div>
      </div>
    </div>
  );
}
