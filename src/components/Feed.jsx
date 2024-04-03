import Post from "./Post";
import React from "react";

function Feed(props) {
    return (
      <div>
        {props.post.map((data) => (
          <Post title={data.title} content={data.content} />
        ))}
      </div>
    );
  }
export default Feed;