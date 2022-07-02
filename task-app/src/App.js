/* eslint-disable no-unused-vars */
import Overview from "./components/Overview";
import styles from "./App.css";

function App() {
  function clickHandler() {
    console.log("button clicked");
  }

  constructor(props) {
    super(props)
  
    this.state = {
       input: ''
    }
    
    handleInputChange = (e) => {
      this.setState({
        input: e.target.value
      })
    }

  return (
    <div className="App">
      <input type="text" value={this.state.input} onChange={this.handleInputChange}/>
      <button onClick={clickHandler}>Submit</button>
    </div>
  );
}

export default App;
