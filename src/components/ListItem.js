import React from "react";
import Button from "./Button";
import { List, ListLi, OtherFlex } from "./styled";

function ListItem({ listItem, setListItem, indexCounter }) {
  const newListItem = listItem.map((item) => {
    return (
      <>
        <OtherFlex key={item.val}>
          <ListLi id={item.done} display={item.isVisible}>
            {item.label}
          </ListLi>
          <Button
            value={item.done ? "unDone Task" : "Done Task"}
            onClick={(e) => {
              doneTask(item.id);
            }}
          />

          <Button
            value={item.isVisible ? "Удалить" : "Вернуть"}
            onClick={(e) => {
              dellTask(item.id);
            }}
          />
        </OtherFlex>
      </>
    );
  });

  const dellTask = (indexCounter) => {
    const newItems = listItem.map((item) => {
      if (item.id === indexCounter) {
        item.isVisible = !item.isVisible;
      }
      return item;
    });
    setListItem(newItems);
  };

  const doneTask = (indexCounter) => {
    const newItems = listItem.map((item) => {
      if (item.id === indexCounter) {
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
