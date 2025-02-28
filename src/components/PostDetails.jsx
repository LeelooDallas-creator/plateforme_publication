import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPostDetails } from '../redux/postsSlice';
import CommentForm from './CommentForm';

const PostDetails = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const { currentPost, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPostDetails(postId));
  }, [dispatch, postId]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur: {error}</p>;

  return (
    <div>
      <h1>{currentPost?.post.title}</h1>
      <p>{currentPost?.post.body}</p>

      <h3>Commentaires :</h3>
      <ul>
        {currentPost?.comments.map((comment) => (
          <li key={comment.id}>
            <p><strong>{comment.name}</strong>: {comment.body}</p>
          </li>
        ))}
      </ul>

      <CommentForm postId={postId} />
    </div>
  );
};

export default PostDetails;
