import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function CreateComment() {
    //controls the opening and closing of the REPLY modal
const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

function getCommentData() {
    const data = TextField.target.value;
    console.log(data)
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Reply
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>What you wanna say?</DialogTitle>
        <DialogContent>
        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="string"
            fullWidth
            variant="standard"
            multiline
            // value=""
          />
          <TextField
            autoFocus
            margin="dense"
            id="reply"
            label="Comment"
            type="string"
            fullWidth
            variant="standard"
            multiline
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
