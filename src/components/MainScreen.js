import React, { Component } from "react";
import SideBar from "./SideBar";
import CodeScreen from "./CodeScreen";
class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codeFile: "Palindrome",
      question: "Palindrome",
      about:
        "Their are two ways we can solve this problem either by checking the values at opposite indexes or just comparing by the string with its reverse."
    };
    this.handleSibeBarCardClick = this.handleSibeBarCardClick.bind(this);
  }
  handleSibeBarCardClick(value) {
    this.setState({
      codeFile: value
    });
    if (value === "Palindrome") {
      this.setState({
        question: "Palindrome",
        about:
          "Their are two ways we can solve this problem either by checking the values at opposite indexes or just comparing by the string with its reverse."
      });
    }
    if (value === "Fibonacci") {
      this.setState({
        question: "Fibonacci",
        about:
          "In the below code we add the next term with the sumation of all the previous term."
      });
    }
    if (value === "Factorial") {
      this.setState({
        question: "Factorial",
        about:
          "We calculate the factorial by recursive function, the factorial value is calculated and returns the factorial value to main function."
      });
    }
    if (value === "Bubble Sort") {
      this.setState({
        question: "Bubble Sort",
        about:
          "In bubble sort algorithm, array is traversed from first element to last element. Here, current element is compared with the next element. If current element is greater than the next element, it is swapped."
      });
    }
    if (value === "Find 3rd largest number in an Array") {
      this.setState({
        question: "Find 3rd largest number in an Array",
        about:
          "Simplest way to solve this question is to first iterate through the array and find first maximum. Store this first maximum as well as its index. Now traverse the whole array finding the second max with the changed condition. Finally traverse the array third time and find the third largest element."
      });
    }
  }
  render() {
    return (
      <div className="row">
        <div className="col m3 s12 show-on-medium-and-up">
          <SideBar handleSibeBarCardClick={this.handleSibeBarCardClick} />
        </div>
        <div className="col m8 s12">
          <CodeScreen
            question={this.state.question}
            about={this.state.about}
            codeFile={this.state.codeFile}
          />
        </div>
      </div>
    );
  }
}

export default MainScreen;
