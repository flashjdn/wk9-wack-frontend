export const getComments = async (post_id) => {
    const res = await fetch(`https://wack-backend-l1q9.onrender.com/comments`);
    const data = await res.json();
    //   console.log(data);
  
    return data.payload.filter((comment) => comment.post_id === post_id);
  };   