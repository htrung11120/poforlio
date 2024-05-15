import { useState } from "react";
import Styled from "./project.module.css";
import Audiophile from "./Audiophile";
import ProductFeedBack from "./ProductFeedBack";

export default function Project() {
  const [clickedItem, setClickedItem] = useState(0); 

  const handleClick = (index) => {
    setClickedItem(index === clickedItem ? null : index);
  };

  return (
    <div className={Styled.container} id="projects">
      <p className={Styled.heading}>My Projects</p>
      <div className={Styled.projectContainer}>
        <ul className={Styled.list}>
          <li
            className={`${Styled.listItem} ${
              clickedItem === 0 ? Styled.listItemClicked : ""
            }`}
            onClick={() => handleClick(0)}
          >
            Audiophile E-commerce Website
          </li>
          <li
            className={`${Styled.listItem} ${
              clickedItem === 1 ? Styled.listItemClicked : ""
            }`}
            onClick={() => handleClick(1)}
          >
            Product Feedback App
          </li>
          <li className={Styled.listItem}></li>
          <li className={Styled.listItem}></li>
        </ul>
        {clickedItem === 0 && <Audiophile />}
        {clickedItem === 1 && <ProductFeedBack />}
      </div>
    </div>
  );
}
