import React, { Component } from "react";

class Jumbotron extends Component {
  render() {
    return (
      <div
        className="p-5 bg-dark text-center"
        style={{
          height: "400px",
        }}
      >
          <div className="justify-content-center aligh-items-center">
              <div className="text-white">
                  <h1 className="display-1">{this.props.heading}</h1>
                  <h4 className="display-4">{this.props.subheading}</h4>
              </div>
          </div>
        </div>
      
    );
  }
}
export default Jumbotron;
