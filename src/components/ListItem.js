import React from "react";
import Button from "./Button";
import { List, ListLi, OtherFlex } from "./styled";

function ListItem({ props, listItem, setListItem }) {
  const newListItem = listItem.map((item) => {
    return (
      <>
        <OtherFlex key={item.val}>
          <ListLi id={item.done}>{item.label}</ListLi>
          <Button value="Done Task" />
          <Button value="Del Task" />
        </OtherFlex>
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
