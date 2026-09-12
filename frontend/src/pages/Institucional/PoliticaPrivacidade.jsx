import React from 'react';
import './Institucional.css';

const PoliticaPrivacidade = () => {
  return (
    <div className="institucional-page">
      <h1>Política de Privacidade</h1>
      <p className="last-updated">Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

      <p>A sua privacidade é importante para nós. É política do Capi_busque respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Capi_busque e outros sites que possuímos e operamos.</p>

      <h2>1. Informações que Coletamos</h2>
      <p>Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.</p>
      
      <h3>Dados do Simulador</h3>
      <p>Os dados inseridos no simulador (como notas e opções de cotas) são utilizados exclusivamente de forma temporária para gerar os resultados da simulação. Nós não armazenamos as suas notas ou dados pessoais atrelados a elas em nossos bancos de dados para fins de rastreamento individualizado.</p>

      <h2>2. Uso de Cookies (Google AdSense)</h2>
      <p>Como um fornecedor de terceiros, o Google utiliza cookies para veicular anúncios no nosso site. Com o cookie DART, o Google pode exibir anúncios para nossos usuários com base nas visitas feitas ao nosso site e a outros sites na Internet.</p>
      <p>Os usuários podem desativar o cookie DART visitando a Política de privacidade da rede de conteúdo e dos anúncios do Google.</p>
      <ul>
        <li>O Google, como fornecedor de terceiros, usa cookies para exibir anúncios neste site.</li>
        <li>O uso do cookie DART pelo Google permite que ele e seus parceiros veiculem anúncios para nossos usuários com base em suas visitas a nossos sites e/ou outros sites na Internet.</li>
      </ul>

      <h2>3. Compartilhamento de Informações</h2>
      <p>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei. Nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.</p>

      <h2>4. Compromisso do Usuário</h2>
      <p>O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o Capi_busque oferece no site e com caráter enunciativo, mas não limitativo:</p>
      <ul>
        <li>Não se envolver em atividades que sejam ilegais ou contrárias à boa fé e à ordem pública;</li>
        <li>Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, jogos de sorte ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;</li>
      </ul>

      <h2>5. Mais Informações</h2>
      <p>Esperemos que esteja esclarecido. Se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.</p>
      <p>Para entrar em contato conosco, por favor envie um e-mail para: <a href="mailto:contato@capibusque.com.br">contato@capibusque.com.br</a></p>
    </div>
  );
};

export default PoliticaPrivacidade;
