import React from 'react';

const Blogs = props => {
  return (
    <>
      I am a blog
      <br />
      <br />
      {props.match.params.blogID}
    </>
  );
};

export default Blogs;
