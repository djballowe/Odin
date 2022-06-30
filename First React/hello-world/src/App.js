import { Component } from "react";
import "./App.css";
import { Greet } from "./components/Greet";
import Welcome from "./components/Welcome"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Diana" heroName="Wonder Woman"></Greet>
        <Welcome name="Bruce" heroName="Batman"></Welcome>
        <Welcome name="Clark" heroName="Superman"></Welcome>
        <Welcome name="Clark" heroName="Superman"></Welcome>
      </div>
    );
  }
}

export default App;
