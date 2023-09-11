import React from "react";
import "./LetterSlide.css";

const LetterSlide = () => {
  return (
    <div className="letterSlideContainer">
      <img className="bg" src="./1.jpg" alt="bg" />
      <img src="./sobre.svg" alt="sobre" />
      <p>
        <i>
          Su presencia es lo más importante en este día tan especial, si desean apoyarnos en nuestra nueva vida juntos
          pueden hacerlo dejando un sobre, en la urna que se encontrará en el salón.
        </i>
      </p>
    </div>
  );
};

export default LetterSlide;
