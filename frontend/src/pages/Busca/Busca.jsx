import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useTRI } from '../../hooks/useTRI';
import { Search, SlidersHorizontal, Calculator, X, Check, Menu } from 'lucide-react';
import AdSlot from '../../components/AdSlot/AdSlot.jsx';
import './Busca.css';

const CursoCard = ({ curso, scores }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="curso-card">
      <div className="curso-header">
        <h4>{curso.course_name}</h4>
        <div className="curso-meta">
          {curso.year_reference && <span className="year-badge">{curso.year_reference}</span>}
          <span className="instituicao-badge">{curso.institution}</span>
          <span className="campus-badge">{curso.campus}</span>
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
                        {cota.spots > 0 && <span className="cota-vagas-badge">{cota.spots} vagas</span>}
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
                      <span className="cota-nota-label">Corte</span>
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
        <div className="sem-cotas">Sem cotas para este perfil.</div>
      )}
    </div>
  );
};

const Busca = () => {
  const {
    acertosMat, setAcertosMat,
    acertosNat, setAcertosNat,
    acertosHum, setAcertosHum,
    acertosLin, setAcertosLin,
    notaRedacao, setNotaRedacao,
    bonusRegional, setBonusRegional,
    scores,
    handleInputChange
  } = useTRI();

  const [searchQuery, setSearchQuery] = useState('');
  const [cidadeQuery, setCidadeQuery] = useState('');
  const [escolaPublica, setEscolaPublica] = useState(false);
  const [rendaBaixa, setRendaBaixa] = useState(false);
  const [pcd, setPcd] = useState(false);
  const [raca, setRaca] = useState('');
  
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(false);

  // Estados dos Modais / Bottom Sheets
  const [perfilModalOpen, setPerfilModalOpen] = useState(false);
  const [calcModalOpen, setCalcModalOpen] = useState(false);

  const fetchCursos = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (searchQuery) {
        const cleanQuery = searchQuery.trim().replace(/\s+/g, ' ');
        if (cleanQuery) params.append('search', cleanQuery);
      }
      if (cidadeQuery) {
        const cleanCidade = cidadeQuery.trim().replace(/\s+/g, ' ');
        if (cleanCidade) params.append('cidade', cleanCidade);
      }
      if (escolaPublica) params.append('escola_publica', 'true');
      if (rendaBaixa) params.append('renda_sm', '1.0');
      if (pcd) params.append('pcd', 'true');
      if (raca) params.append('raca', raca);

      const response = await fetch(`/api/busc-quotas?${params.toString()}`);
      if (response.ok) {
        const data = await response.json();
        setResultados(Array.isArray(data) ? data : []);
      } else {
        setResultados([]);
      }
    } catch (error) {
      console.error("Erro ao buscar cursos", error);
      setResultados([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Busca inicial removida a pedido do usuário
    // eslint-disable-next-line
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchCursos();
  };

  const handleApplyPerfil = () => {
    setPerfilModalOpen(false);
    fetchCursos();
  };

  // Insere um Ad a cada N cards nos resultados
  const renderResultsWithAds = () => {
    if (!Array.isArray(resultados)) return null;
    
    const items = [];
    resultados.forEach((curso, index) => {
      items.push(
        <CursoCard key={curso.id || index} curso={curso} scores={scores} />
      );

      // Insere um Ad In-Feed a cada 4 cards
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
      {/* ====== BUSCA BARRA STICKY ====== */}
      <div className="busca-search-bar">
        <form onSubmit={handleSearchSubmit} className="search-form">
          <div className="search-inputs-container">
            <input 
              type="text" 
              placeholder="Buscar curso... (ex: Medicina, Engenharia)"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <input 
              type="text" 
              placeholder="Cidade ou Campus..."
              value={cidadeQuery}
              onChange={e => setCidadeQuery(e.target.value)}
              className="search-input"
            />
          </div>
          <button type="submit" className="search-btn" aria-label="Buscar">
            <Search size={20} />
            <span className="search-btn-text">BUSCAR</span>
          </button>
        </form>
      </div>

      {/* ====== BARRINHA DE STATUS / RESUMO DOS FILTROS ====== */}
      <div className="active-filters-bar">
        <div className="filter-pill" onClick={() => setPerfilModalOpen(true)}>
          <SlidersHorizontal size={14} />
          <span>
            {escolaPublica || rendaBaixa || pcd || raca ? 'Perfil Ativo' : 'Configurar Perfil'}
          </span>
        </div>
        <div className="filter-pill tri-pill" onClick={() => setCalcModalOpen(true)}>
          <Calculator size={14} />
          <span>TRI: <strong>{scores.finalOtimista.toFixed(0)} pts</strong></span>
        </div>
      </div>

      {/* ====== BOTÕES FLUTUANTES (FABs) ====== */}
      <div className="fab-group">
        <button 
          className={`fab-btn fab-perfil ${escolaPublica || rendaBaixa || pcd || raca ? 'active-badge' : ''}`}
          onClick={() => setPerfilModalOpen(true)}
          title="Configurar Perfil de Cotas"
        >
          <SlidersHorizontal size={22} />
          <span className="fab-label">Perfil</span>
        </button>

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

      {/* ====== MODAL / BOTTOM SHEET: PERFIL ====== */}
      {perfilModalOpen && (
        <div className="modal-backdrop" onClick={() => setPerfilModalOpen(false)}>
          <div className="bottom-sheet-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{'>'} MEU_PERFIL_DE_COTAS</h3>
              <button className="modal-close-btn" onClick={() => setPerfilModalOpen(false)}>
                <X size={20} />
              </button>
            </div>
            
            <div className="modal-body">
              <form className="perfil-form">
                <label className="touch-checkbox">
                  <input type="checkbox" checked={escolaPublica} onChange={e => setEscolaPublica(e.target.checked)} />
                  <span>Escola Pública</span>
                </label>
                <label className="touch-checkbox">
                  <input type="checkbox" checked={rendaBaixa} onChange={e => setRendaBaixa(e.target.checked)} />
                  <span>Renda Familiar ≤ 1 Salário Mínimo</span>
                </label>
                <label className="touch-checkbox">
                  <input type="checkbox" checked={pcd} onChange={e => setPcd(e.target.checked)} />
                  <span>Pessoa com Deficiência (PcD)</span>
                </label>
                <div className="form-field">
                  <label>Autodeclaração Étnica</label>
                  <select value={raca} onChange={e => setRaca(e.target.value)} className="select-input">
                    <option value="">Nenhuma / Branca</option>
                    <option value="preta">Preta</option>
                    <option value="parda">Parda</option>
                    <option value="indigena">Indígena</option>
                    <option value="quilombola">Quilombola</option>
                  </select>
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button className="apply-btn" onClick={handleApplyPerfil}>
                <Check size={18} /> APLICAR FILTROS DE PERFIL
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ====== MODAL / BOTTOM SHEET: CALCULADORA TRI ====== */}
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

      {/* ====== RESULTADOS ====== */}
      <div className="busca-resultados">
        <div className="results-header">
          <h3>{'>'} RESULTADOS</h3>
          <span className="results-count">{resultados.length} cursos</span>
        </div>
        {loading ? (
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <span>Buscando cursos...</span>
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

export default Busca;
