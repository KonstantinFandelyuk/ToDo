import React from "react";
import Button from "./Button";
import { List, ListLi, OtherFlex } from "./styled";

function ListItem({ listItem, setListItem }) {
  const newListItem = listItem.map((item) => {
    return (
      <>
        <OtherFlex key={item.val}>
          <ListLi im={item.done} em={item.isVisibl}>
            {item.label}
          </ListLi>
          <Button
            value="Done Task"
            onClick={() => {
              doneTask();
            }}
          />
          <Button
            value="Del Task"
            onClick={() => {
              hideTask();
            }}
          />
        </OtherFlex>
      </>
    );
  });

  const doneTask = () => {
    const newItems = listItem.map((item, index) => {
      if (item.id === index) {
        item.done = !item.done;
      }
      return item;
    });
    setListItem(newItems);
  };

  const hideTask = () => {
    const newItems = listItem.map((item, index) => {
      if (item.id === index) {
        item.isVisibl = !item.isVisibl;
        console.log(item);
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
