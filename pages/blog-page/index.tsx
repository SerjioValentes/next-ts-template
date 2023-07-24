import { Button } from '@mui/material';
import client from '@/helpers/sanity/client';
import React, { useState } from 'react';
import getPosts from '@/helpers/sanity/logic';

const BlogPage = () => {
//   const [posts, setPosts] = useState([]);

  const reqTest = () => {
    const allPosts = getPosts('post');
    return allPosts;
    // const data = await client.fetch<any>('*[_type == "post"]');
    // data.map((item: any) => {
    //   console.log(item);
    //   console.log(item.title);
    //   return console.log(item?.body[0]?.children[0].text);
    // });
  };

  return (
    <div>
      <div>

        <Button variant="contained" onClick={reqTest}>send req</Button>
      </div>
      <div>
        <img alt="" src={`https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/5bff47c26f53654a1bb7d131dbae2267603300c0-512x512.png`} />
      </div>
    </div>
  );
};

export default BlogPage;
