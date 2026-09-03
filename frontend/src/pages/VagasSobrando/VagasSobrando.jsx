import { useState, useEffect } from 'react';
import { useTRI } from '../../hooks/useTRI';
import { Calculator, X, Check } from 'lucide-react';
import AdSlot from '../../components/AdSlot/AdSlot.jsx';
import '../Busca/Busca.css'; // Reutilizando os estilos de Busca para manter a consistência
import './VagasSobrando.css'; // Estilos específicos para Vagas Sobrando

const CursoSobrasCard = ({ curso, scores }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="curso-card vagas-sobrando-card">
      <div className="curso-header">
        <h4>{curso.course_name}</h4>
        <div className="curso-meta">
          {curso.year_reference && <span className="year-badge">{curso.year_reference}</span>}
          <span className="instituicao-badge">{curso.institution}</span>
          <span className="campus-badge">{curso.campus}</span>
        </div>
      </div>
      
      <div className="vagas-sobrando-highlight">
        <div className="sobras-badge">
          <strong>{curso.leftover_spots}</strong> vagas sobrando!
        </div>
      </div>
      
      {Array.isArray(curso.quotas) && curso.quotas.length > 0 ? (
        <>
          <div className={`cotas-list-container ${isExpanded ? 'expanded' : ''}`}>
            <div className="cotas-list">
              {curso.quotas.map(cota => {
                const notaMinima = Number(cota.previous_cutoff) || 0;
                const passed = scores.finalOtimista >= notaMinima;
                return (
                  <div key={cota.id} className={`cota-item ${notaMinima > 0 ? (passed ? 'passed' : 'failed') : ''}`}>
                    <div className="cota-info">
                      <div className="cota-info-header">
                        <strong>{cota.quota_code}</strong>
                        {cota.spots > 0 && <span className="cota-vagas-badge">{cota.spots} vagas originais</span>}
                      </div>
                      <small title={cota.description}>{cota.description}</small>
                      
                      <div className="cota-tags">
                        {cota.is_ampla_concorrencia && <span className="cota-tag tag-ac">Ampla</span>}
                        {cota.requer_escola_publica && <span className="cota-tag tag-ep">Escola Pública</span>}
                        {cota.requer_renda_baixa && <span className="cota-tag tag-rb">Baixa Renda</span>}
                        {cota.is_pcd && <span className="cota-tag tag-pcd">PcD</span>}
                        {cota.is_ppi && <span className="cota-tag tag-ppi">PPI</span>}
                        {cota.is_quilombola && <span className="cota-tag tag-q">Quilombola</span>}
                      </div>
                      
                      {cota.historical_max_score && Number(cota.historical_max_score) > 0 && (
                        <div className="cota-max-score">
                          Máx. Histórico: <span>{Number(cota.historical_max_score).toFixed(2)}</span>
                        </div>
                      )}
                    </div>
                    <div className="cota-nota-container">
                      <span className="cota-nota-label">Corte Anterior</span>
                      <div className="cota-nota">
                        {notaMinima > 0 ? notaMinima.toFixed(2) : 'N/A'}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <button 
            className="ver-mais-btn"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Ocultar Cotas' : `Ver Cotas (${curso.quotas.length})`}
          </button>
        </>
      ) : (
        <div className="sem-cotas">Sem cotas associadas.</div>
      )}
    </div>
  );
};

const VagasSobrando = () => {
  const {
    acertosMat, setAcertosMat,
    acertosNat, setAcertosNat,
    acertosHum, setAcertosHum,
    acertosLin, setAcertosLin,
    notaRedacao, setNotaRedacao,
    scores,
    handleInputChange
  } = useTRI();

  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(false);
  const [calcModalOpen, setCalcModalOpen] = useState(false);

  const fetchSobras = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/vagas-sobrando/`);
      if (response.ok) {
        const data = await response.json();
        setResultados(Array.isArray(data) ? data : []);
      } else {
        setResultados([]);
      }
    } catch (error) {
      console.error("Erro ao buscar vagas sobrando", error);
      setResultados([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSobras();
  }, []);

  const renderResultsWithAds = () => {
    if (!Array.isArray(resultados)) return null;
    
    const items = [];
    resultados.forEach((curso, index) => {
      items.push(
        <CursoSobrasCard key={curso.id || index} curso={curso} scores={scores} />
      );

      if ((index + 1) % 4 === 0 && index < resultados.length - 1) {
        items.push(
          <AdSlot key={`ad-${index}`} position="in-feed" />
        );
      }
    });
    return items;
  };

  return (
    <div className="busca-container">
      <div className="sobras-page-header">
        <h2>{'>'} VAGAS_SOBRANDO</h2>
        <p>Cursos que não preencheram todas as vagas.</p>
      </div>

      <div className="active-filters-bar">
        <div className="filter-pill tri-pill" onClick={() => setCalcModalOpen(true)}>
          <Calculator size={14} />
          <span>TRI: <strong>{scores.finalOtimista.toFixed(0)} pts</strong></span>
        </div>
      </div>

      <div className="fab-group">
        <button 
          className="fab-btn fab-calc"
          onClick={() => setCalcModalOpen(true)}
          title="Simulador TRI"
        >
          <Calculator size={22} />
          <span className="fab-badge">{scores.finalOtimista.toFixed(0)}</span>
          <span className="fab-label">TRI</span>
        </button>
      </div>

      {calcModalOpen && (
        <div className="modal-backdrop" onClick={() => setCalcModalOpen(false)}>
          <div className="bottom-sheet-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{'>'} SIMULADOR_TRI_ACERTOS</h3>
              <button className="modal-close-btn" onClick={() => setCalcModalOpen(false)}>
                <X size={20} />
              </button>
            </div>
            
            <div className="modal-body">
              <div className="mini-input-grid">
                <div className="mini-input">
                  <label>MAT</label>
                  <input type="number" inputMode="numeric" min="0" max="45" value={acertosMat} onChange={handleInputChange(setAcertosMat, 45)} className="input-mat" />
                </div>
                <div className="mini-input">
                  <label>NAT</label>
                  <input type="number" inputMode="numeric" min="0" max="45" value={acertosNat} onChange={handleInputChange(setAcertosNat, 45)} className="input-nat" />
                </div>
                <div className="mini-input">
                  <label>HUM</label>
                  <input type="number" inputMode="numeric" min="0" max="45" value={acertosHum} onChange={handleInputChange(setAcertosHum, 45)} className="input-hum" />
                </div>
                <div className="mini-input">
                  <label>LING</label>
                  <input type="number" inputMode="numeric" min="0" max="45" value={acertosLin} onChange={handleInputChange(setAcertosLin, 45)} className="input-lin" />
                </div>
                <div className="mini-input">
                  <label>RED</label>
                  <input type="number" inputMode="numeric" min="0" max="1000" value={notaRedacao} onChange={handleInputChange(setNotaRedacao, 1000)} className="input-red" />
                </div>
              </div>
              
              <div className="mini-result">
                <span>MÉDIA ESTIMADA (Cenário Otimista)</span>
                <strong className="score-value">{scores.finalOtimista.toFixed(2)}</strong>
              </div>
            </div>

            <div className="modal-footer">
              <button className="apply-btn" onClick={() => setCalcModalOpen(false)}>
                <Check size={18} /> CONFIRMAR SIMULAÇÃO
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="busca-resultados">
        <div className="results-header">
          <h3>{'>'} RESULTADOS</h3>
          <span className="results-count">{resultados.length} cursos com sobras</span>
        </div>
        {loading ? (
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <span>Buscando oportunidades...</span>
          </div>
        ) : (
          <div className="card-grid">
            {renderResultsWithAds()}
          </div>
        )}
      </div>
    </div>
  );
};

export default VagasSobrando;
