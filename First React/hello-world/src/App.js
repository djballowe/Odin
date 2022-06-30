/* eslint-disable no-unused-vars */
import { Component } from "react";
import "./App.css";
import { Greet } from "./components/Greet";
import Welcome from "./components/Welcome"
import Message from "./components/Message";
import Counter from "./components/Counter"
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParentComponent></ParentComponent>
        {/* <EventBind></EventBind> */}
        {/* <FunctionClick></FunctionClick>
        <ClassClick></ClassClick> */}
        {/* <Counter></Counter> */}
        {/* <Message></Message> */}
        {/* <Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet> */}
        {/* <Greet name="Diana" heroName="Wonder Woman"></Greet>
        <Welcome name="Bruce" heroName="Batman"></Welcome> */}
        {/* <Welcome name="Clark" heroName="Superman"></Welcome>
        <Welcome name="Clark" heroName="Superman"></Welcome> */}
      </div>
    );
  }
}

export default App;
