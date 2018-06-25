import React, { Component } from "react";
import Navbar from "./Navbar";
import MainScreen from "./MainScreen";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar yolo="asdsa" />
        <MainScreen />
      </div>
    );
  }
}
export default App;
