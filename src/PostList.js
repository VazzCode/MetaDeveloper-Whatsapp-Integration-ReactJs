import React, { Component } from "react";
import axios from "axios";

export class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: [],
      errorMsg: "",
    };
  }

  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        console.log(response.data);
        this.setState({ post: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "ERROR retrieving data" });
      });
  }

  render() {
    const { post, errorMsg } = this.state;
    return (
      <div>
        {post.length
          ? post.map((post) => <div key={post.id}> {post.title} </div>)
          : null}
        {errorMsg ? <div>{errorMsg} </div> : null}
      </div>
    );
  }
}

export default PostList;
