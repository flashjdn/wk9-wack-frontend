import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

export default function CreatePost({ title, user, comment }) {
    //controls the opening and closing of the REPLY modal

    const [open, setOpen] = useState(false);

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
        setComment(value);
    }

    function handleClick() {
        setComment("");
        setUser("");
        setTitle("");
        console.log(title, user, comment);
        setOpen(false);
    }

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
                        value={comment}
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
