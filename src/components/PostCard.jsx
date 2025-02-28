import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to={`/post/${post.id}`}>Voir les détails</Link>
    </div>
  );
};

export default PostCard;
