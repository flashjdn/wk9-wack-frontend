export const getPosts = async () => {
    const res = await fetch(`https://customer.elephantsql.com/api/instances`);
    
    const data = await res.json();
    // console.log(data);
    return data.payload;
  };