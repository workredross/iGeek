import React, { Component } from "react";
import SideBarCard from "./SideBarCard";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.handleSibeBarCardClick = this.handleSibeBarCardClick.bind(this);
  }
  handleSibeBarCardClick(value) {
    this.props.handleSibeBarCardClick(value);
  }

  render() {
    return (
      <div className="show-on-medium-and-up sideBar">
        <SideBarCard
          handleSibeBarCardClick={this.handleSibeBarCardClick}
          question="Palindrome"
          description="A palindrome is a word, number, or other sequence of characters which reads the same backward as forward, such as madam or racecar."
        />
        <SideBarCard
          handleSibeBarCardClick={this.handleSibeBarCardClick}
          question="Fibonacci"
          description="In mathematics, the Fibonacci numbers are characterized by the fact that every number after the first two is the sum of the two preceding ones"
        />
        <SideBarCard
          handleSibeBarCardClick={this.handleSibeBarCardClick}
          question="Factorial"
          description="In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n"
        />
        <SideBarCard
          handleSibeBarCardClick={this.handleSibeBarCardClick}
          question="Bubble Sort"
          description="Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order"
        />
        <SideBarCard
          handleSibeBarCardClick={this.handleSibeBarCardClick}
          question="Find 3rd largest number in an Array"
          description="Get the number which is third largest in an Array"
        />
      </div>
    );
  }
}

export default SideBar;
