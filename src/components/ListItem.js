import React from "react";
import styled from "styled-components";

function ListItem(props) {
  const arrTest = ["Первый", "Второй", "Третий", "Четвертый", "Пятый"];
  let itemsArray = localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : [];
  const List = styled.ul`
    list-style-type: decimal;
  `;

  const inputElement = itemsArray.map((item) => {
    return (
      <>
        <li>{item}</li>
        <button>Done Task</button>
        <button>Del Task</button>
      </>
    );
  });

  return (
    <>
      <List>{inputElement}</List>
    </>
  );
}

export default ListItem;
