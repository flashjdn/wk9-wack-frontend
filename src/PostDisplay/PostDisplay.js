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

export default function Post({ username, timestamp, content, title, post_id }) {
  const [comments, setComments] = React.useState(null);
  //useEffect retrieves comments from db, then renders them within the collapsable post component
  //Notice that there is a loading screen for the comments
  const loadComments = () => {
    getComments(post_id)
      .then((data) => {
        // console.log("comments data", data);
        setComments(data);
      })
      .catch(() => {
        // render error here
      });
  };

  React.useEffect(() => {
    loadComments();
    //DO NOT DELETE THE BELOW COMMENT
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formattedDate = new Date(timestamp);

  return (
    <Accordion>
      <AccordionSummary
        style={{
          marginTop: 30,
          backgroundColor: "#fadedd",
        }}
      >
        <div>
          <Typography style={{ fontStyle: "bold" }} variant="h4">
            {title}
          </Typography>
          <Typography style={{ fontStyle: "italic" }} variant="subtitle1">
            Post author - {username}
          </Typography>
          <Chip
            variant="filled"
            size="small"
            label={formattedDate.toLocaleString()}
            style={{ marginBottom: 10 }}
          />
          <Typography style={{margin:10}} variant="h6">{content}</Typography>
        </div>
      </AccordionSummary>
      <AccordionDetails style={{ backgroundColor: "#fadedd" }}>
        {comments ? (
          comments.map((comment) => (
            <div style={{ position: "relative" }}>
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
