import React from "react";
import { InputElement } from "./styled";

function Input(props) {
  return (
    <>
      <InputElement type="text" name={props.name} onChange={props.onChange} />
    </>
  );
}

export default Input;
