import { Button } from '@mui/material';
// import client from '@/helpers/sanity/client';
import React from 'react';
import getPosts from '@/helpers/sanity/logic';
import client from '@/helpers/sanity/client';

const BlogPage = () => {
//   const [posts, setPosts] = useState([]);

  const reqTest = () => {
    const allPosts = getPosts('post');
    return allPosts;
  };

  const test = async () => {
    const data = await client.fetch<any>('*[_type == "gallery"]');
    console.log(data);
    // data.map((item: any) => console.log(item));
  };

  return (
    <div>
      <div>

        <Button variant="contained" onClick={test}>TEST</Button>
        <Button variant="contained" onClick={reqTest}>send req</Button>
      </div>
      <div />
    </div>
  );
};

export default BlogPage;
