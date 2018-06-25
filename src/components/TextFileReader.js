import React from "react";
import Highlight from "react-highlight";
import "highlightjs/styles/atom-one-light.css";

class TextFileReader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      file: "cpp"
    };
  }

  componentDidMount() {
    this.readTextFile(this.props.txt);
  }
  componentWillReceiveProps(nextProps) {
    this.readTextFile(nextProps.txt);
  }
  readTextFile = file => {
    const rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = () => {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status == 0) {
          var allText = rawFile.responseText;
          this.setState({
            text: allText
          });
        }
      }
    };
    rawFile.send(null);
  };

  render() {
    return (
      <div style={{ overflowY: "scroll", height: "65vh" }}>
        <Highlight className="C++">{this.state.text}</Highlight>
      </div>
    );
  }
}

export default TextFileReader;
