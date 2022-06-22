import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import * as React from "react";
import Post from "./PostDisplay/PostDisplay";
import CreatePost from "./CreatePost/CreatePost";
import { useState } from "react";
// import Comment from "./CommentDisplay/Comment";
// import CreateComment from "./CreateComment/CreateComment";
import "./App.css";
// import * from "../../../w9_backend-project-bruh/models"

const getPosts = async () => {
    await new Promise((res) => setTimeout(res, 1000));
    return [
        {
            id: 1,
            key: 1,
            username: "peter",
            content: "I am a post",
            title: "my first post",
            timestamp: "2nd January 2022",
        },
        {
            id: 2,
            key: 2,
            username: "peter",
            content: "I am a post",
            title: "my second post",
            timestamp: "2nd January 2022",
        },
        {
            id: 3,
            key: 3,
            username: "peter",
            content: "I am a post",
            title: "my third post",
            timestamp: "2nd January 2022",
        },
        {
            id: 4,
            key: 4,
            username: "peter",
            content: "I am a post",
            title: "my fourth post",
            timestamp: "2nd January 2022",
        },
    ];
};

export default function App() {
    
    const [posts, setPosts] = React.useState(null);

async function setPost(){

}

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
            <div>
                <CreatePost />
            </div>
            {posts ? (
                posts.map((post) => (
                    <div>
                        <Post
                            key={post.id}
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
