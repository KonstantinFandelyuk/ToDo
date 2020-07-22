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
            value="Done Task"
            onClick={(e) => {
              doneTask(e);
            }}
          />

          <Button
            value={item.isVisible ? "Удалить" : "Вернуть"}
            onClick={(e) => {
              dellTask();
            }}
          />
        </OtherFlex>
      </>
    );
  });
  const dellTask = (e) => {
    const arrElem = listItem.map((item, index) => {
      if (item.id === index) {
        item.isVisible = !item.isVisible;
      }
      return item;
    });
    setListItem(arrElem);
  };

  const doneTask = (e) => {
    const arrElem = listItem.map((item, index) => {
      console.log(index, item.id);
      if (item.id === index) {
        console.log(index);
        item.done = !item.done;
      }
      return item;
    });
    setListItem(arrElem);
  };

  return (
    <>
      <List>{newListItem}</List>
    </>
  );
}

export default ListItem;
