import React from "react";

class Output extends React.Component {
  render() {
    return (
      <th className="th-cell" scope="col">
        {this.props.category}
      </th>
    );
  }
}

export default Output;
