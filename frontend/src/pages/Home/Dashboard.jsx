import React from 'react';
import { Link } from 'react-router-dom';
import { Search, AlertCircle, BookOpen, Sparkles, ArrowRight } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-badge">
          <Sparkles size={16} /> NOVO SISTEMA ENEM
        </div>
        <h1 className="hero-title">
          Sua Vaga na <span>Universidade</span> Começa Aqui.
        </h1>
        <p className="hero-subtitle">
          Esqueça o chute. Use nosso simulador avançado para descobrir exatamente qual será a sua nota e se você passa no curso dos seus sonhos!
        </p>
        
        <div className="regional-coverage">
          <span className="coverage-label">Universidades mapeadas:</span>
          <div className="coverage-tags">
            <span className="uni-tag ufpa">UFPA</span>
            <span className="uni-tag uepa">UEPA</span>
            <span className="uni-tag ufra">UFRA</span>
            <span className="uni-tag ifpa">IFPA</span>
          </div>
        </div>
      </section>

      {/* Main Actions (Cards) - Mobile Optimized Grid */}
      <section className="action-cards-grid">
        <Link to="/busca" className="action-card primary-card">
          <div className="card-icon-wrapper">
            <Search size={28} />
          </div>
          <div className="card-text">
            <h2>Simular Notas & Buscar</h2>
            <p>Cruze seus acertos com o histórico das faculdades.</p>
          </div>
          <ArrowRight className="card-arrow" />
        </Link>

        <Link to="/sobras" className="action-card secondary-card">
          <div className="card-icon-wrapper orange-icon">
            <AlertCircle size={28} />
          </div>
          <div className="card-text">
            <h2>Vagas Sobrando</h2>
            <p>Oportunidades exclusivas em cursos não preenchidos.</p>
          </div>
          <ArrowRight className="card-arrow" />
        </Link>

        <Link to="/regras" className="action-card tertiary-card">
          <div className="card-icon-wrapper purple-icon">
            <BookOpen size={28} />
          </div>
          <div className="card-text">
            <h2>Dicionário de Cotas</h2>
            <p>Entenda as siglas e as novas regras de aprovação.</p>
          </div>
          <ArrowRight className="card-arrow" />
        </Link>
      </section>

      {/* Como Funciona Section */}
      <section className="how-it-works">
         <h3>Como Funciona?</h3>
         <div className="steps">
            <div className="step-item">
              <span className="step-number">1</span>
              <p>Insira seus acertos na nossa ferramenta <strong>TRI</strong> (no menu ou botão flutuante).</p>
            </div>
            <div className="step-item">
              <span className="step-number">2</span>
              <p>Configure seu <strong>Perfil de Cotas</strong> (Renda, Escola Pública, Raça).</p>
            </div>
            <div className="step-item">
              <span className="step-number">3</span>
              <p>Descubra suas reais chances baseadas em dados dos <strong>últimos processos seletivos</strong>!</p>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Dashboard;
