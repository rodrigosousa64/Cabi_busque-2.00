export const artigos = [
  {
    id: 'matematica-enem-tri',
    title: 'A Matemática por trás do ENEM: Entendendo a Teoria de Resposta ao Item (TRI)',
    excerpt: 'Descubra como o INEP calcula sua nota no ENEM e por que dois candidatos com o mesmo número de acertos podem ter notas completamente diferentes.',
    date: '12 de Setembro, 2026',
    author: 'Equipe Capi_busque',
    content: `
      <h2>O que é a famosa TRI?</h2>
      <p>A Teoria de Resposta ao Item (TRI) é um conjunto de modelos matemáticos utilizados pelo Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira (INEP) para calcular as notas do Exame Nacional do Ensino Médio (ENEM). Ao contrário de provas escolares tradicionais — onde cada questão vale um ponto —, no ENEM, o valor de cada questão é variável e depende do padrão de respostas do candidato.</p>
      
      <h2>Como a TRI avalia o candidato?</h2>
      <p>A TRI não está interessada apenas no número bruto de acertos, mas sim na <strong>consistência</strong> das suas respostas. O algoritmo divide as questões em três níveis de dificuldade: fáceis, médias e difíceis. O objetivo principal do modelo é combater o famoso "chute".</p>
      <p>Imagine dois estudantes, Ana e João, que acertaram 20 questões em Matemática.</p>
      <ul>
        <li><strong>Ana</strong> acertou 15 questões fáceis, 4 médias e apenas 1 difícil.</li>
        <li><strong>João</strong> acertou 5 fáceis, 5 médias e 10 difíceis.</li>
      </ul>
      <p>O algoritmo da TRI analisa o padrão e conclui: é estatisticamente improvável que alguém consiga resolver as questões mais difíceis da prova sem conseguir resolver as básicas. Portanto, a TRI infere que João "chutou" e acertou as difíceis por sorte. Como resultado, a nota de Ana será muito maior que a de João, mesmo com o mesmo número de acertos.</p>
      
      <h2>Os Três Parâmetros das Questões</h2>
      <p>O INEP calibra as questões utilizando testes preliminares com milhares de estudantes antes da prova oficial. Cada questão (item) possui três parâmetros matemáticos:</p>
      <ol>
        <li><strong>Parâmetro de Discriminação (a):</strong> Indica a capacidade da questão de separar os candidatos que sabem muito dos que sabem pouco.</li>
        <li><strong>Parâmetro de Dificuldade (b):</strong> Indica em que ponto da régua de proficiência a questão se encontra (fácil, média, difícil).</li>
        <li><strong>Parâmetro de Acerto Casual (c):</strong> A probabilidade de um candidato que não sabe o conteúdo acertar a questão "no chute".</li>
      </ol>

      <h2>Estratégia para a Prova</h2>
      <p>Conhecendo a TRI, a sua estratégia no dia do ENEM deve mudar drasticamente. A regra de ouro é: <strong>Nunca perca tempo em uma questão difícil se isso significar deixar uma questão fácil sem resposta ou chutá-la.</strong></p>
      <p>Garantir as questões fáceis e médias constrói a coerência pedagógica exigida pela TRI. Deixe as questões mais complexas para o final. No Capi_busque, nossa ferramenta de simulação já utiliza lógicas baseadas nesse modelo para estimar qual seria a sua nota de acordo com as tendências históricas de calibração do exame.</p>
    `
  },
  {
    id: 'estrategia-sisu-para',
    title: 'Como usar a Nota do ENEM estrategicamente no SISU no Estado do Pará',
    excerpt: 'Aprenda a analisar notas de corte, bônus regionais e o funcionamento do SISU nas principais universidades paraenses (UFPA, UEPA, UFRA, IFPA).',
    date: '10 de Setembro, 2026',
    author: 'Equipe Capi_busque',
    content: `
      <h2>O Desafio do SISU no Pará</h2>
      <p>O Sistema de Seleção Unificada (Sisu) é uma arena altamente competitiva. No estado do Pará, o processo ganha camadas extras de complexidade devido à concorrência nacional e à existência de políticas de Bônus Regional em universidades como a UFPA (Universidade Federal do Pará).</p>

      <h2>O que é o Bônus Regional?</h2>
      <p>Para combater o fenômeno de estudantes de outros estados ocuparem as vagas e, posteriormente, solicitarem transferência (deixando vagas ociosas), a UFPA e outras instituições oferecem o <strong>Bônus Regional</strong>. Trata-se de um acréscimo, geralmente de 10%, na nota final do ENEM para estudantes que cursaram todo o Ensino Médio em escolas (públicas ou privadas) localizadas em determinados estados da região Norte.</p>
      <p>Se você se enquadra nessa regra, suas chances em Ampla Concorrência podem saltar significativamente. Uma nota bruta de 700 no ENEM se torna 770 com o bônus, permitindo competir diretamente em cursos de alta demanda como Medicina, Direito e Engenharia.</p>

      <h2>Nota de Corte vs. Nota Real</h2>
      <p>Um erro comum dos estudantes é olhar a "Nota de Corte" do ano anterior e considerá-la uma regra absoluta. A nota de corte é apenas a nota do <em>último</em> candidato classificado. Ela sofre flutuações anuais baseadas em dois fatores:</p>
      <ul>
        <li><strong>Calibração da Prova:</strong> Se a prova de Matemática foi mais difícil em determinado ano, as notas de corte de Engenharias tendem a cair.</li>
        <li><strong>Fator Psicológico (Efeito Manada):</strong> No Sisu, os estudantes mudam suas opções em tempo real. Muitas vezes, notas de corte altas artificialmente desistem candidatos qualificados.</li>
      </ul>

      <h2>A Estratégia das Vagas Sobrando (Lista de Espera)</h2>
      <p>O Capi_busque mapeia um dado que poucos conhecem: as <strong>vagas não preenchidas</strong> (sobras). Muitos candidatos passam na primeira opção, mas não realizam a matrícula por problemas documentais ou porque passaram em outro vestibular local. Acompanhar as listas de repescagem (chamadas subsequentes) da UFPA e UEPA é essencial.</p>
      <p>Ao se inscrever no SISU, lembre-se: só é possível manifestar interesse na lista de espera de <strong>uma</strong> das suas duas opções, e apenas se você não for aprovado na chamada regular em nenhuma delas. Escolha estrategicamente o curso onde sua posição relativa é melhor!</p>
    `
  },
  {
    id: 'entendendo-cotas-universidades',
    title: 'Entendendo as Cotas: Quem tem direito e como funcionam as vagas reservadas',
    excerpt: 'Desvende as siglas e categorias (PPI, Renda, Escola Pública, Quilombola) e saiba qual a modalidade mais estratégica para o seu perfil.',
    date: '05 de Setembro, 2026',
    author: 'Equipe Capi_busque',
    content: `
      <h2>A Sopa de Letrinhas das Cotas</h2>
      <p>A Lei de Cotas (Lei nº 12.711/2012 e suas atualizações recentes) revolucionou o acesso ao ensino superior no Brasil. No entanto, ela criou uma verdadeira "sopa de letrinhas" que pode confundir o candidato na hora do SISU. Entender onde você se encaixa não é apenas uma questão de preenchimento de formulário; é uma decisão estratégica.</p>

      <h2>O Princípio Básico: Ensino Médio em Escola Pública</h2>
      <p>A regra de ouro da Lei de Cotas Federal é: <strong>Para ter direito a QUALQUER cota, o candidato deve ter cursado o Ensino Médio INTEGRALMENTE em escola pública.</strong></p>
      <p>Bolsistas de 100% em escolas particulares, de acordo com a legislação federal atual para o Sisu, não têm direito a essas cotas (exceto em leis estaduais específicas como na UEPA, dependendo do edital do ano). Se você fez do 1º ao 3º ano em escola pública, você tem direito a pelo menos 50% das vagas reservadas.</p>

      <h2>Fator Renda e as Novas Regras</h2>
      <p>As vagas reservadas para escolas públicas são subdivididas pelo critério de renda. Anteriormente, o limite era de 1,5 salário mínimo per capita. Nas edições mais recentes, as leis sofreram modificações e muitas instituições (como UFPA e IFPA) adotaram o teto de <strong>≤ 1 salário mínimo per capita</strong>.</p>
      <p>Como calcular: Some a renda bruta de todos os membros da família que moram na mesma casa e divida pelo número de moradores. Se o valor for inferior ao estipulado, você concorre pela cota de baixa renda, que tradicionalmente possui notas de corte menores.</p>

      <h2>A Autodeclaração PPI, Quilombolas e PcD</h2>
      <p>Dentro de cada faixa de renda, as vagas são novamente subdivididas para:</p>
      <ul>
        <li><strong>Pretos, Pardos ou Indígenas (PPI):</strong> A porcentagem é equivalente à proporção dessa população no estado, segundo o IBGE. <em>Atenção:</em> as universidades possuem Bancas de Heteroidentificação rigorosas. Autodeclarar-se pardo exige traços fenotípicos evidentes.</li>
        <li><strong>Quilombolas:</strong> Inclusão recente na Lei de Cotas. Exige documentação probatória de pertencimento à comunidade certificada pela Fundação Palmares.</li>
        <li><strong>Pessoas com Deficiência (PcD):</strong> Exige laudos médicos específicos detalhados no edital de matrícula da universidade.</li>
      </ul>

      <h2>A Concorrência Dinâmica (A Grande Mudança)</h2>
      <p>Uma mudança recente nas regras do SISU alterou fundamentalmente o jogo: agora, <strong>todos os cotistas concorrem primeiramente na Ampla Concorrência (AC).</strong> Se a nota do cotista for alta o suficiente para passar em AC, ele não ocupa a vaga da cota. Isso significa que as vagas de cotas são preenchidas exclusivamente por cotistas que <em>não</em> atingiram a nota de Ampla Concorrência, puxando as notas de corte das cotas significativamente para baixo.</p>
      <p>No Capi_busque, mantemos nosso "Dicionário de Cotas" sempre atualizado para que você entenda exatamente as siglas usadas pela UFPA, UEPA, UFRA e IFPA, e não perca sua vaga por errar a categoria na hora da inscrição.</p>
    `
  }
];
