import React, { Component } from "react";
import QuestionAndDescriptionCard from "./QuestionAndDescriptionCard";
import TextFileReader from "./TextFileReader";

class CodeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { lang: "cpp" };
    this.handleCppButtonClick = this.handleCppButtonClick.bind(this);
    this.handleJavaButtonClick = this.handleJavaButtonClick.bind(this);
  }
  handleCppButtonClick() {
    this.setState({
      lang: "cpp"
    });
  }
  handleJavaButtonClick() {
    this.setState({
      lang: "java"
    });
  }
  displayCode() {
    if (this.state.lang === "cpp") {
      return (
        <TextFileReader
          txt={require(`../codes/${this.props.codeFile}-cpp.txt`)}
        />
      );
    }
    if (this.state.lang === "java") {
      return (
        <TextFileReader
          txt={require(`../codes/${this.props.codeFile}-java.txt`)}
        />
      );
    }
  }
  render() {
    return (
      <div>
        <QuestionAndDescriptionCard
          question={this.props.question}
          description={this.props.about}
        />
        <div className="row">
          <div className="col s8 m10" />
          <div className="col s2 m1">
            <div
              onClick={this.handleCppButtonClick}
              className="waves-effect waves-light btn-small"
            >
              C++
            </div>
          </div>
          <div className="col s2 m1">
            <div
              onClick={this.handleJavaButtonClick}
              className="waves-effect waves-light btn-small"
            >
              Java
            </div>
          </div>
        </div>
        {this.displayCode()}
      </div>
    );
  }
}

export default CodeScreen;
