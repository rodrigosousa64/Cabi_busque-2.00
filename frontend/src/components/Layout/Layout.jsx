import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Calculator, Star, AlertCircle, MessageSquare, BookOpen, Menu, X, Search } from 'lucide-react';
import AdSlot from '../AdSlot/AdSlot.jsx';
import './Layout.css';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: '/', icon: LayoutDashboard, label: 'Inicio', sub: 'Dashboard' },
    { path: '/busca', icon: Search, label: 'Buscar Cursos', sub: 'Simulador de Cotas' },
    { path: '/sobras', icon: AlertCircle, label: 'Vagas Sobrando', sub: 'Oportunidades' },
    { path: '/regras', icon: BookOpen, label: 'Dicionário de Cotas', sub: 'Regras e Siglas' },
  ];

  return (
    <div className="app-container">
      {/* ====== MOBILE TOP BAR ====== */}
      <header className="mobile-header">
        <button className="mobile-toggle" onClick={toggleSidebar} aria-label="Abrir menu">
          {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <Link to="/" className="mobile-brand">
          <img src="/capibot.jpg" alt="" className="mobile-brand-avatar" />
          <span>CAPI_BUSQUE</span>
        </Link>
        <div className="mobile-header-spacer"></div>
      </header>

      {/* ====== OVERLAY ====== */}
      <div className={`sidebar-overlay ${sidebarOpen ? 'visible' : ''}`} onClick={closeSidebar}></div>

      {/* ====== SIDEBAR ====== */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <img src="/capibot.jpg" alt="Capi-busque" className="capibot-avatar" />
          <h2 className="sidebar-title">{'>'} CAPI_BUSQUE</h2>
          <div className="sidebar-subtitle">// Capi-busque acha pra você!</div>
        </div>

        <nav className="sidebar-nav">
          {navItems.map(item => (
            <Link 
              key={item.path}
              to={item.path} 
              className={`nav-item ${isActive(item.path) ? 'active' : ''}`} 
              onClick={closeSidebar}
            >
              <item.icon className="nav-icon" size={20} />
              <div className="nav-text">
                <span className="nav-main">{item.label}</span>
                <small className="nav-sub">{item.sub}</small>
              </div>
            </Link>
          ))}
        </nav>

        {/* Desktop Sidebar Ad */}
        <div className="sidebar-ad-wrapper desktop-only">
          <AdSlot position="skyscraper" />
        </div>
      </aside>

      {/* ====== MAIN CONTENT ====== */}
      <main className="main-content">
        {/* Top Banner Ad — Aparece em TODAS as páginas */}
        <AdSlot position="banner" className="ad-top-banner" />

        <div className="content-area">
          <Outlet context={{ toggleSidebar }} />
        </div>
      </main>

      {/* ====== MOBILE BOTTOM NAV (Quick Access) ====== */}
      <nav className="mobile-bottom-nav mobile-only">
        {navItems.slice(0, 4).map(item => (
          <Link 
            key={item.path}
            to={item.path} 
            className={`bottom-nav-item ${isActive(item.path) ? 'active' : ''}`}
          >
            <item.icon size={20} />
            <span>{item.label.split(' ')[0]}</span>
          </Link>
        ))}
      </nav>

      {/* ====== MOBILE STICKY AD (Acima da bottom nav) ====== */}
      <AdSlot position="sticky" className="mobile-only" />

      {/* ====== GLOBAL MENU FAB ====== */}
      <button 
        className="global-fab-menu" 
        onClick={toggleSidebar} 
        title="Menu Principal"
      >
        <Menu size={22} />
        <span className="global-fab-label">Menu</span>
      </button>
    </div>
  );
};

export default Layout;
