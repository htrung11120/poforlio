import Style from "./about.module.css";
export default function About() {
  function myFunction() {
    if (window.pageYOffset >= 50) {
      header.classList.add("animate");
    } else {
      header.classList.remove("animate");
    }
  }
  return (
    <div className={Style.container} id="about">
      <p className={Style.heading}>About Me</p>
      <p className={Style.paragrpah}>
        Embark on a digital journey with me—a full-stack web developer and
        software enthusiast with a medical science background. With precision
        and a knack for problem-solving, I merge technology and creativity to
        build captivating digital experiences. Fuelled by a curiosity for
        travel, gaming, and new flavors, I bring a fresh perspective to coding.
        Let's connect and create something extraordinary!
      </p>
    </div>
  );
}
