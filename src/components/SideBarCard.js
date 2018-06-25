import React, { Component } from "react";
class SideBarCard extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-content blue-grey-text">
            <span className="card-title">{this.props.question}</span>
            <p>{this.props.description}</p>
          </div>
          <div className="card-action">
            <a
              onClick={() =>
                this.props.handleSibeBarCardClick(this.props.question)
              }
              href="#"
              className="indigo-text"
            >
              View Code
            </a>
          </div>
        </div>
        <div className="divider" />
      </div>
    );
  }
}

export default SideBarCard;
