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
    const res = await fetch(`https://week9-project-soc.herokuapp.com/comments${post_id}`);
    const data = await res.json();
  //   console.log(data);
    const variable = data.payload.filter(
      (comment) => comment.post_id === post_id
    );
    console.log(variable);
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
  React.useEffect(() => {
    getComments(post_id)
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
                id={comment.postId}
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
