import React from 'react';
import './Institucional.css';

const Sobre = () => {
  return (
    <div className="institucional-page">
      <h1>Sobre o Capi_busque</h1>
      
      <p>O <strong>Capi_busque</strong> nasceu com um propósito claro: democratizar o acesso à informação sobre o ingresso nas universidades públicas do estado do Pará.</p>

      <h2>Nossa Missão</h2>
      <p>Sabemos que o processo de aprovação através do ENEM (Exame Nacional do Ensino Médio) é complexo. As notas de corte mudam, o cálculo da TRI (Teoria de Resposta ao Item) é difícil de estimar e as regras de cotas podem ser confusas. Nossa missão é facilitar essa jornada, oferecendo ferramentas matemáticas e estatísticas de forma totalmente gratuita.</p>

      <h2>Como Ajudamos os Estudantes</h2>
      <p>Desenvolvemos um sistema avançado de simulação onde o estudante pode:</p>
      <ul>
        <li>Inserir a sua quantidade de acertos por área de conhecimento.</li>
        <li>Simular qual seria sua nota TRI baseada em padrões de exames anteriores.</li>
        <li>Comparar essa estimativa com as notas de corte de anos anteriores das principais universidades do Pará (UFPA, UEPA, UFRA e IFPA).</li>
        <li>Entender em quais cursos e sob quais modalidades de cota ele teria chances reais de aprovação.</li>
        <li>Descobrir "vagas sobrando" e oportunidades menos concorridas.</li>
      </ul>

      <h2>Nosso Compromisso</h2>
      <p>Este projeto foi criado por desenvolvedores apaixonados por educação e tecnologia, que um dia já estiveram no lugar dos vestibulandos, buscando entender o Sisu e os processos seletivos locais. Comprometemo-nos a manter o Capi_busque sempre atualizado, fácil de usar e, principalmente, acessível a todos.</p>

      <p>Se você tem alguma sugestão de melhoria, quer reportar um problema, ou tem interesse em parcerias, sinta-se à vontade para entrar em contato conosco.</p>

      <p>E-mail para contato: <a href="mailto:contato@capibusque.com.br">contato@capibusque.com.br</a></p>
    </div>
  );
};

export default Sobre;
