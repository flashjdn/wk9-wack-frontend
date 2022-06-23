import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import sendPost from "../SendPost/SendPost";
import { useState } from "react";

export default function CreatePost() {
    //controls the opening and closing of the REPLY modal
    const [title, setTitle] = useState("");
    const [user, setUser] = useState("");
    const [content, setContent] = useState("");
    const [open, setOpen] = useState(false);
    const [post, setPost] = useState({});

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //**************** */

    function handleTitleInput(event) {
        // This function tracks the string information typed into the input field.
        const value = event.target.value;
        setTitle(value);
    }

    function handleUserInput(event) {
        // This function tracks the string information typed into the input field.
        const value = event.target.value;
        setUser(value);
    }

    function handleCommentInput(event) {
        // This function tracks the string information typed into the input field.
        const value = event.target.value;
        setContent(value);
    }

    function handleClick() {
        setContent("");
        setUser("");
        setTitle("");
        setPost({
            title: title,
            username: user,
            content: content,
        });
        // sendPost(post)
        console.log(post);
        setOpen(false);
        sendPost(title, user, content);
    }

    console.log(post);
    //*************** */

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                New Post
            </Button>
            <Dialog open={open} onClose={handleClose} maxWidth="xl">
                <DialogTitle>Create New Post</DialogTitle>
                <DialogContent>
                    <TextField
                        onChange={handleTitleInput}
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Title"
                        type="string"
                        fullWidth
                        variant="standard"
                        value={title}
                    />
                    <TextField
                        onChange={handleUserInput}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="string"
                        fullWidth
                        variant="standard"
                        value={user}
                    />

                    <TextField
                        onChange={handleCommentInput}
                        autoFocus
                        margin="dense"
                        id="reply"
                        label="Comment"
                        type="string"
                        fullWidth
                        variant="standard"
                        multiline="true"
                        value={content}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClick}>Submit</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
