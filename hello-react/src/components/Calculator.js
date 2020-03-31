import React, { Component } from 'react';
import Keypad from "./Keypad";
import Result from "./Result"

class Calculator extends Component {
    constructor() {
        super();
        this.state = {
          result: ""
        }
      }
    
      onClick = button => {
    
        if (button === "=") {
          this.calculate();
        } else if (button === "C") {
          this.reset()
        } else if (button === "CE") {
          this.backspace()
        } else {
          this.setState({
            result: this.state.result + button
          })
        }
      };
    
      calculate = () => {
        try { // try lets you define a block of code to test for errors while executing
          this.setState({
            result: (eval(this.state.result) || "") + ""
          })
        } catch (e) { // catch lets you define a block of code to be executed if 'try' errors out
          this.setState({
            result: "error"
          })
        }
      };
    
      reset = () => {
        this.setState({ // reset the state to its original form
          result: ""
        })
      };
    
      backspace = () => {
        this.setState({ // `result` is basically an array so remove the last number entered with slice
          result: this.state.result.slice(0, -1)
        })
      };
    
      render() {
        return (
    
          <div className="calculator-body">
            <h1>Calculator</h1>
            <div className="result-container">
              <Result result={this.state.result} />
            </div>
            <Keypad onClick={this.onClick} />
          </div>
    
        );
      }
}

export default Calculator
