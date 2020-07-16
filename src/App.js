import React from "react";
import styled from "styled-components";
import Button from "./components/Button";
import Import from "./components/Input";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Import onChange={(event) => {}} />
        <Button name="ADD Task" />
      </header>
    </div>
  );
}

export default App;
