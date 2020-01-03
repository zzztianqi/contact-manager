import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(json => this.setState({ title: json.title, body: json.body }));
    console.log("ComponentDidMount");
  }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
      </div>
    );
  }
}
export default Test;
