import "./App.css";
import React, { Component } from "react";
import PostForm from "./PostForm";
import PostList from "./PostList";
import PostUrl from "./PostUrl";
// import PostFunc from "./PostFunc";
import ExampleFunc from "./example";
import TextArea from "./TextArea";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostForm />
      </div>
    );
  }
}

export default App;
