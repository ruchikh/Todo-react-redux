import React from "react";
import "./App.css";
import MyTodos from "./components/MyTodos";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <MyTodos />
    </div>
  );
}

export default App;
