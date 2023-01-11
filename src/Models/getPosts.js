export const getPosts = async () => {
    const res = await fetch(`https://wack.onrender.com/posts`);
    
    const data = await res.json();
    // console.log(data);
    return data.payload;
  };