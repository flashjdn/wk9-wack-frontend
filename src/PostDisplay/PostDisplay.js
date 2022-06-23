import Accordion from "@mui/material/Accordion/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary/AccordionSummary";
import Chip from "@mui/material/Chip";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import Typography from "@mui/material/Typography/Typography";
import * as React from "react";
import Comment from "../CommentDisplay/Comment";
import CreateComment from "../CreateComment/CreateComment";

const getComments = async (post_id) => {
  const res = await fetch(`https://week9-project-soc.herokuapp.com/comments`);
  const data = await res.json();
  //   console.log(data);

  return data.payload.filter((comment) => comment.post_id === post_id);
};
/*
  return [
    {
      id: 1,
      post_id: 8,
      username: "jeff",
      content: "I am a comment 1",
      timestamp: "2nd January 2022",
    },
    {
      id: 2,
      post_id: 8,
      username: "jeff",
      content: "I am a comment 2",
      timestamp: "2nd January 2022",
    },
    {
      id: 3,
      post_id: 3,
      username: "jeff",
      content: "I am a comment 3",
      timestamp: "2nd January 2022",
    },
    {
      id: 4,
      post_id: 3,
      username: "jeff",
      content: "I am a comment 4",
      timestamp: "2nd January 2022",
    },
  ].filter((comment) => Number(comment.post_id) === post_id);
};
*/
export default function Post({ username, timestamp, content, title, post_id }) {
  const [comments, setComments] = React.useState(null);
  //useEffect retrieves comments from db, then renders them within the collapsable post component
  //Notice that there is a loading screen for the comments
  const loadComments = () => {
    getComments(post_id)
      .then((data) => {
        console.log("comments data", data);
        setComments(data);
      })
      .catch(() => {
        // render error here
      });
  };

  React.useEffect(() => {
    loadComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formattedDate = new Date(timestamp);

  return (
    <Accordion>
      <AccordionSummary style={{ marginTop: 60 }}>
        <div>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="h4">{username}</Typography>
          <Chip label={formattedDate.toLocaleString()} />
          <Typography>{content}</Typography>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        {comments ? (
          comments.map((comment) => (
            <div>
              <Comment
                // post_id={comment.post_id}
                username={comment.username}
                content={comment.content}
                timestamp={comment.post_date}
              />
            </div>
          ))
        ) : (
          <CircularProgress />
        )}
        <CreateComment post_id={post_id} loadComments={loadComments} />
      </AccordionDetails>
    </Accordion>
  );
}
