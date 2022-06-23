import Chip from '@mui/material/Chip/Chip';
import * as React from 'react';

export default function Comment({ username, timestamp, content}) {

  const formattedDate = new Date(timestamp)

    //JSX being returned here shows the format of a comment, structure to be amended 
  return (
    <div
      style={{
        marginLeft: 30,
        borderTop: '1px solid black',
      }}
    >
      <h5>{username}</h5>
      <Chip label={formattedDate.toLocaleString()} />
      <p>{content}</p>
    </div>
  );
}
