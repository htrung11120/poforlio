import Styled from "./introduction.module.css";
export default function Introduction() {
  return (
    <div className={Styled.container}>
      <div className={Styled.textContainer}>
        <p className={Styled.hello}>Hello.</p>
        <p className={Styled.name}>
          My name is <span>Hoai Tran</span>
        </p>
        <p className={Styled.selfIntro}>
          I am a FrontEnd developer with a passion to create new things. Welcome
          to my portfolio, let's create something remarkable together.
        </p>
      </div>
    </div>
  );
}
