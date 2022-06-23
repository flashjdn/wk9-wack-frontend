import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import * as React from "react";
import Post from "./PostDisplay/PostDisplay";
import CreatePost from "./CreatePost/CreatePost";
import { useState, useEffect } from "react";
import "./App.css";
import { Typography } from "@mui/material";
// import * from "../../../w9_backend-project-bruh/models"

const getPosts = async () => {
  const res = await fetch(`https://week9-project-soc.herokuapp.com/posts`);
  const data = await res.json();
  console.log(data);
  return data.payload;
};
//         {
//             post_id: 1,
//             key: 1,
//             username: "peter",
//             content: "I am a post",
//             title: "my first post",
//             timestamp: "2nd January 2022",
//         },
//         {
//             id: 2,
//             key: 2,
//             username: "peter",
//             content: "I am a post",
//             title: "my second post",
//             timestamp: "2nd January 2022",
//         },
//         {
//             id: 3,
//             key: 3,
//             username: "peter",
//             content: "I am a post",
//             title: "my third post",
//             timestamp: "2nd January 2022",
//         },
//         {
//             id: 4,
//             key: 4,
//             username: "peter",
//             content: "I am a post",
//             title: "my fourth post",
//             timestamp: "2nd January 2022",
//         },
//     ];
// };

export default function App() {
  const [posts, setPosts] = useState(null);

  // async function setPost(){

  const loadPosts = () => {
    getPosts()
      .then((data) => {
        setPosts(data);
      })
      .catch(() => {
        // render error here
      });
      console.log("loadPosts called");
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div>
      <header>
        <Typography variant="h2"> Wack </Typography>
      </header>
      <div>
        <CreatePost loadPosts={loadPosts} />
      </div>
      {posts ? (
        posts.map((post) => (
          <div>
            <Post
              key={post.post_id}
              username={post.username}
              content={post.content}
              title={post.title}
              timestamp={post.post_date}
              post_id={post.post_id}
            />
          </div>
        ))
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}
