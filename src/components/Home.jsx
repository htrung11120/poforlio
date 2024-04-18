import Header from "./Header";
import Background from "./Background";
import Introduction from "./Introduction";
import Styled from "./home.module.css";
export default function Home() {
  return (
    <div className={Styled.container}>
      <Background />
      <Header />
      <Introduction />
    </div>
  );
}
