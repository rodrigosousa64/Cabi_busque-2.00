import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { artigos } from './artigosData';
import { ArrowLeft } from 'lucide-react';
import './Artigos.css';

const ArtigoView = () => {
  const { id } = useParams();
  const artigo = artigos.find(a => a.id === id);

  // Scroll to top when loading a new article
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!artigo) {
    return <Navigate to="/artigos" replace />;
  }

  return (
    <div className="artigo-view-container">
      <Link to="/artigos" className="back-link">
        <ArrowLeft size={18} /> Voltar para Artigos
      </Link>

      <article>
        <header className="artigo-view-header">
          <h1>{artigo.title}</h1>
          <div className="artigo-view-meta">
            <span><strong>Publicado em:</strong> {artigo.date}</span>
            <span><strong>Por:</strong> {artigo.author}</span>
          </div>
        </header>

        <div 
          className="artigo-content"
          dangerouslySetInnerHTML={{ __html: artigo.content }}
        />
      </article>
    </div>
  );
};

export default ArtigoView;
