import Styled from "./introduction.module.css";
export default function Introduction() {
  return (
    <div className={Styled.container}>
      <div className={Styled.textContainer}>
        <p className={Styled.hello}>Hello.</p>

        <p className={Styled.selfIntro}>
          <span className={Styled.name}>
            My name is <span>Hoai Tran</span>
          </span>
          , a passionate FrontEnd developer dedicated to crafting exceptional
          user experiences. Seeking new opportunities to contribute my skills
          and creativity. Let's create something remarkable together.
        </p>
      </div>
    </div>
  );
}
