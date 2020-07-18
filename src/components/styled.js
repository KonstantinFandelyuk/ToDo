import styled from "styled-components";

const List = styled.ul`
  list-style-type: decimal;
`;

const ListLi = styled.li`
  color: black;
  font-size: 18px;
  text-align: left;
  text-decoration: ${(props) => (props.id ? "line-through" : "none")};
`;

const OtherFlex = styled.div`
  display: flex;
  margin: 15px 0;
`;

const InputElement = styled.input`
  border: 1px solid blue;
  background: transparent;
  padding: 5px;
  border-radius: 5px;
  margin-right: 10px;
`;

const ButtonElement = styled.button`
  border: 1px solid red;
  padding: 5px;
  margin: 0 5px;
  border-radius: 5px;
  background: ${(props) => (props.primary ? "black" : "transparent")};
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
`;

export { List, ListLi, OtherFlex, InputElement, ButtonElement, Wrap };
