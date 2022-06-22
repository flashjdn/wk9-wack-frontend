import Accordion from "@mui/material/Accordion/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary/AccordionSummary";
import Chip from "@mui/material/Chip";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import Typography from "@mui/material/Typography/Typography";
import * as React from "react";
import Comment from "../CommentDisplay/Comment";
import CreateComment from "../CreateComment/CreateComment";
const getComments = async (postId) => {
    // await fetch(`localhost:3001/comments/${postId}`);
    await new Promise((res) => setTimeout(res, 1000));
    return [
        {
            id: 1,
            postId: 1,
            username: "jeff",
            content: "I am a comment 1",
            timestamp: "2nd January 2022",
        },
        {
            id: 2,
            postId: 1,
            username: "jeff",
            content: "I am a comment 2",
            timestamp: "2nd January 2022",
        },
        {
            id: 3,
            postId: 2,
            username: "jeff",
            content: "I am a comment 3",
            timestamp: "2nd January 2022",
        },
        {
            id: 4,
            postId: 2,
            username: "jeff",
            content: "I am a comment 4",
            timestamp: "2nd January 2022",
        },
    ].filter((comment) => comment.postId === postId);
};

export default function Post({ username, timestamp, content, title, id }) {
    const [comments, setComments] = React.useState(null);
    //useEffect retrieves comments from db, then renders them within the collapsable post component
    //Notice that there is a loading screen for the comments
    React.useEffect(() => {
        getComments(id)
            .then((data) => {
                setComments(data);
            })
            .catch(() => {
                // render error here
            });
    }, []);

    return (
        <Accordion>
            <AccordionSummary style={{ marginTop: 60 }}>
                <div>
                    <Typography variant="h4">{title}</Typography>
                    <Typography variant="h4">{username}</Typography>
                    <Chip label={timestamp} />
                    <Typography>{content}</Typography>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                {comments ? (
                    comments.map((comment) => (
                        <div>
                            <Comment
                                key={comment.id}
                                username={comment.username}
                                content={comment.content}
                                timestamp={comment.timestamp}
                            />
                        </div>
                    ))
                ) : (
                    <CircularProgress />
                )}
                <CreateComment />
            </AccordionDetails>
        </Accordion>
    );
}
