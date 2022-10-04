export const getComments = async (post_id) => {
    const res = await fetch(`wackdb.cocmhl0wpq5d.eu-west-2.rds.amazonaws.com/comments`);
    const data = await res.json();
    //   console.log(data);
  
    return data.payload.filter((comment) => comment.post_id === post_id);
  };   