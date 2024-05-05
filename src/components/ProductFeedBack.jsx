import Styled from "./projectstyle.module.css";
import { SiReact, SiTailwindcss, SiCss3, SiHtml5 } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiReactrouter } from "react-icons/si";

export default function ProductFeedBack() {
  return (
    <div className={Styled.intro}>
      <p className={Styled.heading}>Product FeedBack App</p>
      <div className={Styled.body}>
        <ul>
          <li className={Styled.listItem}>
            Built using React for frontend development.
          </li>
          <li className={Styled.listItem}>
            Utilized Styled Components for enhanced styling.
          </li>
          <li className={Styled.listItem}>
            Integrated Axios for handling HTTP requests.
          </li>
          <li className={Styled.listItem}>
            Implemented LocalStorage for data persistence.
          </li>
          <li className={Styled.listItem}>
            Enables users to filter feedback by category for streamlined
            monitoring and analysis.
          </li>
        </ul>

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
