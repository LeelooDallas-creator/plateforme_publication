import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const posts = useSelector((state) => state.posts);

  return (
    <div className="home-page">
      <h2>Page d'accueil</h2>
      <Link to="/add">Ajouter un nouveau post</Link>
      <div className="post-list">
        <h3>Liste des Posts</h3>
        {posts.length === 0 ? (
          <p>Aucun post trouvé</p>
        ) : (
          posts.map((post) => (
            <div className="post-item" key={post.title}>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
              <Link to={`/post/${post.title}`}>Voir les détails</Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
