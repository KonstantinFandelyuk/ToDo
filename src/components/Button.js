import React from "react";
import styled from "styled-components";

const ButtonElement = styled.button`
  border: 1px solid red;
  background: transparent;
  padding: 5px;
`;

function Button(props) {
  return (
    <>
      <ButtonElement onClick={props.onClick}>{props.value}</ButtonElement>
    </>
  );
}

export default Button;
