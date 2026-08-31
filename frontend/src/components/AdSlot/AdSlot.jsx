import './AdSlot.css';

/**
 * Componente reutilizável para espaços publicitários.
 * 
 * Tipos de posição:
 * - "banner"     → Horizontal, entre seções de conteúdo (320x100 mobile, 728x90 desktop)
 * - "in-feed"    → Inserido entre cards de resultado (formato nativo)
 * - "sticky"     → Fixo no rodapé do mobile (320x50)
 * - "skyscraper" → Vertical na sidebar desktop (160x600)
 * 
 * O componente já reserva o espaço exato para evitar CLS (Cumulative Layout Shift).
 */
const AdSlot = ({ position = 'banner', className = '' }) => {
  return (
    <div className={`ad-slot ad-slot--${position} ${className}`} role="complementary" aria-label="Anúncio">
      <div className="ad-slot__inner">
        {/* Aqui entra o script do AdSense/Ezoic futuramente */}
        <span className="ad-slot__label">Publicidade</span>
      </div>
    </div>
  );
};

export default AdSlot;
