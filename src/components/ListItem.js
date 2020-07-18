import React from "react";
import Button from "./Button";
import { List, ListLi, OtherFlex } from "./styled";

function ListItem({ listItem, setListItem }) {
  const newListItem = listItem.map((item) => {
    return (
      <>
        <OtherFlex key={item.val}>
          <ListLi id={item.done}>{item.label}</ListLi>
          <Button
            value="Done Task"
            onClick={() => {
              doneTask();
            }}
          />
          <Button value="Del Task" />
        </OtherFlex>
      </>
    );
  });

  const doneTask = () => {
    const newItems = listItem.map((item, id) => {
      if (item.id === id) {
        item.done = !item.done;
      }
      return item;
    });
    setListItem(newItems);
  };

  return (
    <>
      <List>{newListItem}</List>
    </>
  );
}

export default ListItem;
