import './Regras.css';

const Regras = () => {
  return (
    <div className="regras-container">
      <div className="regras-header">
        <h2>{'>'} DICIONÁRIO_DE_COTAS</h2>
        <p className="regras-subtitle">
          // Entenda a sopa de letrinhas e saiba exatamente o perfil exigido por cada sigla.
        </p>
      </div>

      {/* UFPA */}
      <div className="regras-card ufpa-card">
        <h3>{'>'} UFPA (SISTEMA MODULAR)</h3>
        <p>A UFPA utiliza um sistema de siglas intuitivas que se somam. O limite de renda baixa é <strong>≤ 1 salário mínimo</strong>.</p>
        
        <ul className="regras-list">
            <li><strong>[AC]</strong> Ampla Concorrência</li>
            <li><strong>[PCDA]</strong> Cota Adicional Exclusiva para Pessoas com Deficiência (independente da origem escolar)</li>
            <li><strong>[E]</strong> Apenas Cota Escola</li>
            <li><strong>[EPCD]</strong> Cota Escola + Pessoas com Deficiência (PcD)</li>
            <li><strong>[EQ]</strong> Cota Escola + Quilombolas</li>
            <li><strong>[EPPI]</strong> Cota Escola + Autodeclarados Pretos, Pardos ou Indígenas (PPI)</li>
            <li><strong>[ER]</strong> Cota Escola + Renda familiar per capita ≤ 1 salário mínimo</li>
            <li><strong>[ERPCD]</strong> Cota Escola + Renda ≤ 1 SM + Pessoas com Deficiência (PcD)</li>
            <li><strong>[ERQ]</strong> Cota Escola + Renda ≤ 1 SM + Quilombolas</li>
            <li><strong>[ERPPI]</strong> Cota Escola + Renda ≤ 1 SM + Autodeclarados Pretos, Pardos ou Indígenas (PPI)</li>
        </ul>
      </div>

      {/* IFPA */}
      <div className="regras-card ifpa-card">
        <h3>{'>'} IFPA (NOVO SISTEMA - PSU 2026)</h3>
        <p>O IFPA atualizou sua nomenclatura seguindo a nova Lei de Cotas. O limite de renda agora é <strong>≤ 1 salário mínimo</strong>.</p>
        
        <ul className="regras-list">
            <li><strong>[AC]</strong> Ampla Concorrência</li>
            <li><strong>[RI-PPI]</strong> Vagas reservadas a candidatos autodeclarados pretos, pardos ou indígenas, com renda familiar bruta igual ou inferior a 1 salário mínimo per capita, que tenham cursado o ensino médio integralmente em escola pública.</li>
            <li><strong>[RI-Q]</strong> Vagas reservadas a candidatos autodeclarados quilombolas com renda familiar bruta per capita igual ou inferior a 1 salário mínimo, que tenham cursado o ensino médio integralmente em escola pública.</li>
            <li><strong>[RI-PcD]</strong> Vagas reservadas a candidatos com deficiência, com renda familiar bruta igual ou inferior a 1 salário mínimo per capita, que tenham cursado o ensino médio integralmente em escola pública.</li>
            <li><strong>[RI-EP]</strong> Vagas reservadas a candidatos com renda familiar bruta per capita igual ou inferior a 1 salário mínimo, que tenham cursado o ensino médio integralmente em escola pública (Geral/Independente de autodeclaração).</li>
            <li><strong>[IR-PPI]</strong> Vagas reservadas a candidatos autodeclarados pretos, pardos ou indígenas, independente de renda, que tenham cursado o ensino médio integralmente em escola pública.</li>
            <li><strong>[IR-Q]</strong> Vagas reservadas a candidatos autodeclarados quilombolas, independente de renda, que tenham cursado o ensino médio integralmente em escola pública.</li>
            <li><strong>[IR-PcD]</strong> Vagas reservadas a candidatos com deficiência, independente de renda, que tenham cursado o ensino médio integralmente em escola pública.</li>
            <li><strong>[IR-EP]</strong> Vagas reservadas a candidatos, independente de renda, que tenham cursado o ensino médio integralmente em escola pública (Geral/Independente de autodeclaração).</li>
        </ul>
      </div>

      {/* UEPA */}
      <div className="regras-card uepa-card">
        <h3>{'>'} UEPA (ESTRUTURA DE GRUPOS)</h3>
        <p>A UEPA classifica suas cotas em "Grupos" identificados por letras. O limite de renda baixa é <strong>≤ 1,5 salário mínimo</strong>.</p>
        
        <ul className="regras-list">
            <li><strong>[A]</strong> Ampla Concorrência (Grupo 1)</li>
            <li><strong>[B]</strong> Cota Adicional Exclusiva para Pessoas com Deficiência - PcD (Grupo 2)</li>
            <li><strong>[C]</strong> Apenas Cota Escola (Grupo 3)</li>
            <li><strong>[D]</strong> Cota Escola + PcD (Grupo 4)</li>
            <li><strong>[E]</strong> Cota Escola + Étnico-Racial-Quilombola (Grupo 5)</li>
            <li><strong>[F]</strong> Cota Escola + Étnico-Racial-Quilombola + PcD (Grupo 6)</li>
            <li><strong>[G]</strong> Cota Escola + Renda (Grupo 7)</li>
            <li><strong>[H]</strong> Cota Escola + Renda + PcD (Grupo 8)</li>
            <li><strong>[I]</strong> Cota Escola + Renda + Étnico-Racial-Quilombola (Grupo 9)</li>
            <li><strong>[J]</strong> Cota Escola + Renda + Étnico-Racial-Quilombola + PcD (Grupo 10)</li>
        </ul>
      </div>

      {/* UFRA */}
      <div className="regras-card ufra-card">
        <h3>{'>'} UFRA (LÓGICA SISU)</h3>
        <p>A UFRA divide principalmente entre Baixa Renda (LB) e Livre Independente da Renda (LI). O limite de renda baixa é <strong>≤ 1 salário mínimo</strong>.</p>
        
        <ul className="regras-list">
            <li><strong>[AC]</strong> Ampla Concorrência</li>
            <li><strong>[LB_EP]</strong> Cota Escola + Renda (≤ 1 SM). Sem critério de raça ou deficiência</li>
            <li><strong>[LB_PPI]</strong> Cota Escola + Renda (≤ 1 SM) + PPI</li>
            <li><strong>[LB_Q]</strong> Cota Escola + Renda (≤ 1 SM) + Quilombolas</li>
            <li><strong>[LB_PCD]</strong> Cota Escola + Renda (≤ 1 SM) + PcD</li>
            <li><strong>[LI_EP]</strong> Cota Escola + Renda Livre. Sem critério de raça ou deficiência</li>
            <li><strong>[LI_PPI]</strong> Cota Escola + Renda Livre + PPI</li>
            <li><strong>[LI_PCD]</strong> Cota Escola + Renda Livre + PcD</li>
        </ul>
      </div>

      {/* EXPLICAÇÃO DO SISTEMA */}
      <div className="regras-footer">
        <h3>{'>'} COMO FUNCIONA O NOSSO ALGORITMO</h3>
        <p>
            Nosso algoritmo cruza o seu perfil socioeconômico com o histórico de notas de corte, revelando exatamente em quais cotas você pode concorrer e qual exige a menor pontuação.
        </p>
        <p>
            <span style={{ color: '#58a6ff', fontWeight: 'bold' }}>[ ATENÇÃO ]</span> Todas as vagas e cursos listados na plataforma refletem exatamente o que foi ofertado e preenchido nos <strong>últimos processos seletivos</strong> das faculdades. Usamos dados históricos reais para gerar estimativas seguras.
        </p>
      </div>
    </div>
  );
};

export default Regras;
