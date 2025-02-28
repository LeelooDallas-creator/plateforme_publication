import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/postsSlice';

const AddPostPage = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useDispatch();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !body) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    // Création du nouveau post (sous l'identité de l'utilisateur avec ID 1)
    const newPost = {
      userId: 1,  // ID de l'utilisateur (par exemple ID 1 pour l'exemple)
      title,
      body,
    };

    // Dispatch de l'action pour ajouter le post
    dispatch(addPost(newPost));

    // Réinitialiser les champs du formulaire après soumission
    setTitle('');
    setBody('');
  };

  return (
    <div className="form-container">
      <h2>Ajouter un nouveau post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Titre</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="body">Contenu</label>
          <textarea
            id="body"
            value={body}
            onChange={handleBodyChange}
            required
          />
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddPostPage;
