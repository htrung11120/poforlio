import Styled from "./contact.module.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <div className={Styled.container} id="contact">
      <p className={Styled.heading}>Contact</p>
      <div className={Styled.contactInfor}>
        <div className={Styled.contactContainer}>
          <MdEmail className={Styled.icon} />
          <p className={Styled.email}>htrung11120@gmail.com</p>
        </div>
        <a href="https://www.linkedin.com/in/htrung11120/" target="_blank">
          <div className={Styled.contactContainer}>
            <FaLinkedin className={Styled.icon} />
            <p className={Styled.Linkedin}>Linkedin</p>
          </div>
        </a>
        <a href="https://github.com/htrung11120" target="_blank">
          <div className={Styled.contactContainer}>
            <FaGithub className={Styled.icon} />
            <p className={Styled.resume}>GitHub</p>
          </div>
        </a>
        <a href="">
          <div className={Styled.contactContainer}>
            <IoIosPaper className={Styled.icon} />
            <p className={Styled.resume}>Resume</p>
          </div>
        </a>
      </div>
    </div>
  );
}
