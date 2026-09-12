import React from 'react';
import { Link } from 'react-router-dom';
import { artigos } from './artigosData';
import { ArrowRight, BookOpen } from 'lucide-react';
import './Artigos.css';

const Artigos = () => {
  return (
    <div className="artigos-container">
      <div className="artigos-header">
        <h1>{'>'} ARTIGOS & DICAS</h1>
        <p className="artigos-subtitle">
          Tudo o que você precisa saber sobre o ENEM, TRI e o SISU para garantir sua vaga nas universidades do Pará.
        </p>
      </div>

      <div className="artigos-list">
        {artigos.map((artigo) => (
          <Link to={`/artigos/${artigo.id}`} key={artigo.id} className="artigo-card">
            <div className="artigo-meta">
              <span>{artigo.date}</span>
              <span>{artigo.author}</span>
            </div>
            <h2 className="artigo-title">{artigo.title}</h2>
            <p className="artigo-excerpt">{artigo.excerpt}</p>
            <div className="artigo-read-more">
              <BookOpen size={16} /> Ler artigo completo <ArrowRight size={16} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Artigos;
