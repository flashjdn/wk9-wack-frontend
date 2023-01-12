export const getPosts = async () => {
    const res = await fetch(`https://wack-backend-l1q9.onrender.com/posts`);
    
    const data = await res.json();
    // console.log(data);
    return data.payload;
  };