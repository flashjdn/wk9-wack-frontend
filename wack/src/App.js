import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import * as React from "react";
import Post from "./PostDisplay/PostDisplay";
// import Comment from "./CommentDisplay/Comment";
// import CreateComment from "./CreateComment/CreateComment";
import "./App.css";

const getPosts = async () => {
  await new Promise((res) => setTimeout(res, 1000));
  return [
    {
      id: "1",
      username: "peter",
      content: "I am a post",
      title: "my first post",
      timestamp: "2nd January 2022",
    },
    {
      id: "2",
      username: "peter",
      content: "I am a post",
      title: "my second post",
      timestamp: "2nd January 2022",
    },
    {
      id: "3",
      username: "peter",
      content: "I am a post",
      title: "my third post",
      timestamp: "2nd January 2022",
    },
    {
      id: "4",
      username: "peter",
      content: "I am a post",
      title: "my fourth post",
      timestamp: "2nd January 2022",
    },
  ];
};

export default function App() {
  const [posts, setPosts] = React.useState(null);

  React.useEffect(() => {
    getPosts()
      .then((data) => {
        setPosts(data);
      })
      .catch(() => {
        // render error here
      });
  }, []);

  return (
    <div>
      {posts ? (
        posts.map((post) => (
          <div>
            <Post
              username={post.username}
              content={post.content}
              title={post.title}
              timestamp={post.timestamp}
              id={post.id}
            />
          </div>
        ))
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}
