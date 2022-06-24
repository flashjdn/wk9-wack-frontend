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
  // console.log(data);
  return data.payload;
};

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
    // console.log("loadPosts called");
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <main style={{ backgroundColor: "#FFF0EC" }}>
      <div
        style={{
          margin: 20,
          // boxShadow: "0px 10px 0px 0px rgb(138, 136, 131, 0.5) "
        }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 200,
            backgroundColor: "#FFF0EC",
          }}
        >
          <Typography variant="h2"> Wack🤨 </Typography>
          <CreatePost loadPosts={loadPosts} />
        </div>
        <div></div>
        {posts ? (
          posts.map((post) => (
            <div style={{ margin: 30 }}>
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
    </main>
  );
}
