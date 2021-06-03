import React from "react";

class Processing extends React.Component {
  render() {
    return (
      <div className="process-item">
        <form>
          <p>{this.props.process}</p>
          <textarea disabled />
        </form>

        <div className="output-box"></div>
      </div>
    );
  }
}

export default Processing;
