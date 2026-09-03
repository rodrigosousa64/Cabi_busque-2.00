import { useEffect } from 'react';
import './AdSlot.css';

const DEFAULT_SLOTS = {
  banner: '5182520357',
  'in-feed': '9708088720',
  skyscraper: '7488390547',
  sticky: '5896836227',
};

/**
 * Componente reutilizável para espaços publicitários do Google AdSense.
 */
const AdSlot = ({ position = 'banner', className = '', adSlotId }) => {
  const currentAdSlotId = adSlotId || DEFAULT_SLOTS[position];

  useEffect(() => {
    try {
      // Tenta inicializar o anúncio assim que o componente renderizar
      if (typeof window !== 'undefined' && !window.adsbygoogle_initialized) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (e) {
      console.error('Erro ao carregar o anúncio do AdSense:', e);
    }
  }, [currentAdSlotId]); // Roda quando o componente é montado ou o ID muda

  return (
    <div className={`ad-slot ad-slot--${position} ${className}`} role="complementary" aria-label="Anúncio">
      <div className="ad-slot__inner">
        {/* Fallback visual enquanto o anúncio não carrega */}
        <span className="ad-slot__label" style={{ display: 'none' }}>Publicidade</span>
        
        {/* Tag do AdSense */}
        <ins 
          className="adsbygoogle"
          style={{ display: 'block', width: '100%', height: '100%' }}
          data-ad-client="ca-pub-5532089904077605"
          data-ad-slot={currentAdSlotId}
          {...(position === 'in-feed' || position === 'skyscraper' ? {
            'data-ad-format': 'auto',
            'data-full-width-responsive': 'true'
          } : {})}
        />
      </div>
    </div>
  );
};

export default AdSlot;
