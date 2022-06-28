import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import { getPosts } from "./Models/getPosts";
import Posts from "./Posts/index.js";
import NewPostButton from "./NewPostButton/index.js";
import { useState, useEffect } from "react";
import "./App.css";
import { Typography } from "@mui/material";

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
          <NewPostButton loadPosts={loadPosts} />
        </div>
        {posts ? (
          posts.map((post) => (
            <div style={{ margin: 30 }}>
              <Posts
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
