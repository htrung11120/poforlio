import Styled from "./projectstyle.module.css";
import { SiReact, SiTailwindcss, SiCss3, SiHtml5 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiReactrouter } from "react-icons/si";

export default function ProductFeedBack() {
  return (
    <div className={Styled.intro}>
      <p className={Styled.heading}>Product FeedBack App</p>
      <div className={Styled.body}>
        <p>
          This is an application designed to monitor customer feedback, allowing
          users to filter feedback by category. It was built using React, Styled
          Components, Axios, and LocalStorage
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
            href="https://github.com/htrung11120/Product-feedback-app"
            target="_blank"
          >
            <p>Github</p>
          </a>

          <a
            href="https://product-feedback-app-gilt-psi.vercel.app/"
            target="_blank"
          >
            <p>Demo</p>
          </a>
        </div>
      </div>
    </div>
  );
}
