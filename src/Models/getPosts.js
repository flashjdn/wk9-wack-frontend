export const getPosts = async () => {
    const res = await fetch(`wackdb.cocmhl0wpq5d.eu-west-2.rds.amazonaws.com/posts`);
    const data = await res.json();
    // console.log(data);
    return data.payload;
  };