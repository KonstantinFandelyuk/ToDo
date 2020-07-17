import React from "react";
import { ButtonElement } from "./styled";

function Button(props) {
  return (
    <>
      <ButtonElement onClick={props.onClick}>{props.value}</ButtonElement>
    </>
  );
}

export default Button;
