import Styled from "./projectstyle.module.css";
import { SiReact, SiTailwindcss, SiCss3, SiHtml5 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiReactrouter } from "react-icons/si";

export default function Audiophile() {
  return (
    <div className={Styled.intro}>
      <p className={Styled.heading}>Audiophile E-commerce Website</p>
      <div className={Styled.body}>
        <p>
          This is an e-commerce website frontend built with React, Tailwind CSS,
          HTML, and JavaScript.
        </p>
        <div className={Styled.techStack}>
          <SiReact className={Styled.icon} />
          <SiReactrouter className={Styled.icon} />
          <IoLogoJavascript className={Styled.icon} />
          <SiTailwindcss className={Styled.icon} />
          <SiHtml5 className={Styled.icon} />
          <SiCss3 className={Styled.icon} />
        </div>
        <div className={Styled.container}>
          <a
            href="https://github.com/htrung11120/audiophile-ccommerce"
            target="_blank"
          >
            <p>Github</p>
          </a>

          <a
            href="https://audiophile-ccommerce.vercel.app/home"
            target="_blank"
          >
            <p>Demo</p>
          </a>
        </div>
      </div>
    </div>
  );
}
