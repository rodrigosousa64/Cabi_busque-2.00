import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>{'>'} CAPI_BUSQUE</h3>
          <p>O seu sistema inteligente de simulação de notas do ENEM para ingresso nas universidades do Pará.</p>
        </div>
        
        <div className="footer-section">
          <h4>Institucional</h4>
          <nav className="footer-nav">
            <Link to="/sobre">Sobre Nós</Link>
            <Link to="/politica-de-privacidade">Política de Privacidade</Link>
            <Link to="/termos-de-uso">Termos de Uso</Link>
          </nav>
        </div>
        
        <div className="footer-section">
          <h4>Contato</h4>
          <p>Dúvidas ou sugestões?</p>
          <a href="mailto:contato@capibusque.com.br" className="footer-email">contato@capibusque.com.br</a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Capi_busque. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
