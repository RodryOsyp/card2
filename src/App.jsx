import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import Form from "./compot/Form/Form";
import Card from "./compot/Card/Card";
function App() {

  return (
    <>
      <div className="wrapper">
        <div className="gradient">
        <Card/>
        </div>
        <div className="form">
          <Form/>
        </div>
      </div>
    </>
  );
}

export default App;
