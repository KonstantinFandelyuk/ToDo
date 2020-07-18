import React from "react";
import styled from "styled-components";

function ListItem({ props, listItem, setListItem }) {


  const newListItem = listItem.map((item) => {
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
      <List>{newListItem}</List>
    </>
  );
}

export default ListItem;
