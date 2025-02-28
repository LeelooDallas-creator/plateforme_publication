import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PostDetailPage = () => {
  const { postId } = useParams();
  const post = useSelector((state) =>
    state.posts.find((p) => p.title === postId)
  );

  if (!post) {
    return <p>Post introuvable</p>;
  }

  return (
    <div className="post-detail">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetailPage;
