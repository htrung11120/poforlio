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
        I'm Hoai Tran, a FrontEnd developer blending precision engineering with
        creative coding. Proficient in HTML, CSS, JavaScript, and React, I
        specialize in crafting immersive digital experiences. Let's collaborate
        and create something extraordinary!
      </p>
    </div>
  );
}
