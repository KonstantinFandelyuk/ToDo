import React from "react";
import styled from "styled-components";

const InputElement = styled.input`
  border: 1px solid blue;
  background: transparent;
  padding: 5px;
`;

function Input(props) {
  return (
    <>
      <InputElement type="text" name={props.name} onChange={props.onChange} />
    </>
  );
}

export default Input;
