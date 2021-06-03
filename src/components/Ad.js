import React from "react";

class Ad extends React.Component {
  render() {
    return (
      <li>
        <a href={this.props.ad} target="_blank" rel="sponsored">
          <img src={this.props.ad}></img>
        </a>
      </li>
    );
  }
}

export default Ad;
