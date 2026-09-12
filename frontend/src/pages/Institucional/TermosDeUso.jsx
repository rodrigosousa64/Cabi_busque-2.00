import React from 'react';
import './Institucional.css';

const TermosDeUso = () => {
  return (
    <div className="institucional-page">
      <h1>Termos de Uso</h1>
      <p className="last-updated">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

      <h2>1. Termos</h2>
      <p>Ao acessar ao site Capi_busque, concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site.</p>

      <h2>2. Natureza da Ferramenta</h2>
      <p>O Capi_busque é uma ferramenta de <strong>simulação e estimativa</strong>. Os resultados apresentados pela nossa plataforma são baseados em dados de processos seletivos anteriores e cálculos matemáticos (TRI). Eles <strong>não garantem a sua aprovação</strong> na universidade e não têm qualquer vínculo oficial com o INEP, MEC ou com as instituições de ensino superior (como UFPA, UEPA, UFRA, IFPA).</p>

      <h2>3. Uso da Licença</h2>
      <p>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Capi_busque, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:</p>
      <ul>
        <li>modificar ou copiar os materiais;</li>
        <li>usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
        <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Capi_busque;</li>
        <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
        <li>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
      </ul>

      <h2>4. Isenção de responsabilidade</h2>
      <p>Os materiais no site da Capi_busque são fornecidos 'como estão'. O Capi_busque não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.</p>

      <h2>5. Limitações</h2>
      <p>Em nenhum caso o Capi_busque ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Capi_busque, mesmo que um representante autorizado do Capi_busque tenha sido notificado oralmente ou por escrito da possibilidade de tais danos.</p>

      <h2>6. Links</h2>
      <p>O Capi_busque não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por parte do Capi_busque do site. O uso de qualquer site vinculado é por conta e risco do usuário.</p>

      <h2>7. Modificações</h2>
      <p>O Capi_busque pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.</p>

      <p>Dúvidas? Fale conosco em: <a href="mailto:contato@capibusque.com.br">contato@capibusque.com.br</a></p>
    </div>
  );
};

export default TermosDeUso;
