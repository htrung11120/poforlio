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
        Join me on a digital voyage as a frontend web developer and software
        enthusiast with a background in mechanical engineering. Utilizing
        precision and problem-solving skills, I blend technology and creativity
        to craft immersive digital experiences. Fueled by a passion for travel,
        gaming, and culinary exploration, I offer a unique perspective to
        coding. Let's collaborate and bring forth extraordinary creations!
      </p>
    </div>
  );
}
