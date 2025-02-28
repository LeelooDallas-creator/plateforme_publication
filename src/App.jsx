import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostDetailPage from './pages/PostDetailPage';
import AddPostPage from './pages/AddPostPage';
import Navbar from './components/Navbar';  // Import du composant Navbar

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />  {/* Ajout de la Navbar ici */}
        <h1>Bienvenue sur la plateforme de publication</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:postId" element={<PostDetailPage />} />
          <Route path="/add" element={<AddPostPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
