import React, { Component } from "react";

class Jumbotron extends Component {
  render() {
    return (
      <div
        className="bg-light text-center"
        style={{
          height: "400px",
        }}
      >
          <div className="mb-4 pt-5">
              <div>
                  <h1 className="display-1">{this.props.heading}</h1>
                  <h4 className="display-4">{this.props.subheading}</h4>
              </div>
          </div>
        </div>
      
    );
  }
}
export default Jumbotron;
