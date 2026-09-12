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
      {/* Educational SEO Content for AdSense */}
      <section className="educational-content">
        <div className="edu-block">
          <h2>Entenda como funciona a Nota TRI no ENEM</h2>
          <p>
            A Teoria de Resposta ao Item (TRI) é o modelo estatístico utilizado pelo INEP para calcular a nota do Exame Nacional do Ensino Médio (ENEM). Diferente de provas tradicionais, a TRI não contabiliza apenas o número de acertos. Ela avalia o nível de dificuldade de cada questão e a consistência das suas respostas. Isso significa que acertar questões fáceis e errar as difíceis gera uma nota maior do que acertar apenas as difíceis, pois o sistema entende o "chute". Nossa calculadora utiliza dados de edições anteriores para projetar uma estimativa da sua nota final com base no seu padrão de acertos.
          </p>
        </div>

        <div className="edu-block">
          <h2>O Sisu e as Universidades do Pará</h2>
          <p>
            O Sistema de Seleção Unificada (Sisu) é a principal porta de entrada para instituições públicas de ensino superior no Brasil. No estado do Pará, instituições de peso como a Universidade Federal do Pará (UFPA), Universidade do Estado do Pará (UEPA), Universidade Federal Rural da Amazônia (UFRA) e o Instituto Federal do Pará (IFPA) utilizam as notas do ENEM para selecionar seus alunos.
          </p>
          <p>
            Cada universidade possui regras próprias, incluindo bônus regionais para estudantes locais e um sistema complexo de cotas (renda, escola pública, PPI, etc.). O Capi_busque ajuda a traduzir essas regras, mostrando exatamente quais são as notas de corte reais para o seu perfil sociodemográfico.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
