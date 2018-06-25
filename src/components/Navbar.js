import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

class App extends Component {
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".sidenav");
      M.Sidenav.init(elems);
    });
  }
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper indigo darken-3 z-depth-5">
            <a href="/" className="brand-logo" style={{ marginLeft: 20 }}>
              iGEEK
            </a>
            <a href="" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a
                  href="https://github.com/workredross/iGeek.git"
                  target="_blank"
                >
                  GitHub
                </a>
              </li>
              <li className="active">
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">More</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">More</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
        </ul>
      </div>
    );
  }
}
export default App;
