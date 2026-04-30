export type Lesson = {
  id: number
  title: string
  duration: string
  videoId: string
  description: string
  isFree?: boolean
}

export type Module = {
  id: number
  title: string
  description: string
  lessons: Lesson[]
}

export const modules: Module[] = [
  {
    id: 1,
    title: 'Introdução e Mentalidade',
    description: 'Fundamentos do dropshipping e a mentalidade certa para ter sucesso.',
    lessons: [
      {
        id: 101,
        title: 'Bem-vindo ao RendaDrop Academy',
        duration: '8 min',
        videoId: 'QOApFeETSAY',
        description: 'Apresentação completa da plataforma: como navegar pelo curso, acessar as ferramentas de IA e extrair o máximo de cada módulo. Defina seus objetivos, entenda o que esperar das próximas semanas e prepare-se mentalmente para a jornada de transformação que começa agora.',
        isFree: true,
      },
      {
        id: 102,
        title: 'O que é Dropshipping e por que funciona',
        duration: '18 min',
        videoId: 'kI5EW83HoOQ',
        description: 'Entenda o modelo de negócio por completo: como funciona a cadeia de suprimentos, por que você não precisa de estoque físico, como o pagamento acontece antes da compra do produto e por que 2026 é o melhor momento para entrar nesse mercado.',
      },
      {
        id: 103,
        title: 'Mentalidade de um Empreendedor Digital',
        duration: '22 min',
        videoId: 'xM3h1Y_ZIjI',
        description: 'O maior diferencial entre quem tem sucesso e quem desiste é a mentalidade. Aprenda a desenvolver disciplina, consistência e resiliência emocional para lidar com os altos e baixos do negócio.',
      },
      {
        id: 104,
        title: 'Estruturando sua Rotina de Sucesso',
        duration: '15 min',
        videoId: 'sCKm4LgK82c',
        description: 'Como organizar seu dia para conciliar emprego, estudos e o negócio de dropshipping sem entrar em colapso. Ferramentas de produtividade e modelo de rotina diária de 1-2 horas.',
      },
      {
        id: 105,
        title: 'Erros Fatais que Iniciantes Cometem',
        duration: '20 min',
        videoId: 'nhMsMwNqL7A',
        description: 'Os 10 erros mais comuns que fazem iniciantes perderem dinheiro e desistirem nos primeiros 30 dias. Erros de produto, plataforma, precificação, fornecedor e mentalidade.',
      },
    ],
  },
  {
    id: 2,
    title: 'Mineração de Produtos Vencedores',
    description: 'Como encontrar e validar produtos com alto potencial antes de investir.',
    lessons: [
      {
        id: 201,
        title: 'Critérios de um Produto Vencedor',
        duration: '25 min',
        videoId: 'XMLjZB1ASUM',
        description: 'Os 7 critérios que separam um produto vencedor de um produto fracasso: margem de lucro, viralização, demanda, concorrência, logística, ticket médio e o fator wow.',
      },
      {
        id: 202,
        title: 'Minerando no TikTok e Instagram',
        duration: '30 min',
        videoId: '48-D290lKM0',
        description: 'Técnicas avançadas de mineração usando TikTok, Instagram Reels e Pinterest. Como identificar produtos que estão explodindo nos EUA antes de chegarem ao Brasil.',
      },
      {
        id: 203,
        title: 'Ferramentas de Pesquisa Secretas',
        duration: '28 min',
        videoId: 'KSP0JxWEC4Q',
        description: 'As melhores ferramentas para espionar concorrentes e descobrir produtos quentes: Minea, Dropi, EcomHunt, AdSpy e extensões gratuitas do Chrome.',
      },
      {
        id: 204,
        title: 'Análise de Tendências em Tempo Real',
        duration: '22 min',
        videoId: 'fp1nFLBdXs8',
        description: 'Como usar Google Trends, Exploding Topics e redes sociais para identificar tendências antes de explodim no Brasil. Entenda o conceito de timing.',
      },
      {
        id: 205,
        title: 'Validando Antes de Investir',
        duration: '18 min',
        videoId: '5O0Du0H8_g4',
        description: 'Métodos práticos para validar um produto sem gastar dinheiro em anúncios. Testes orgânicos, pesquisa de mercado e a técnica da landing page de pré-venda.',
      },
      {
        id: 206,
        title: 'Usando o Detector IA da Plataforma',
        duration: '15 min',
        videoId: 'IuEMFOemXUQ',
        description: 'Tutorial completo da ferramenta Detector de Produtos do RendaDrop Academy. Como interpretar o score de viralidade e usar a análise de IA.',
      },
    ],
  },
  {
    id: 3,
    title: 'Estrutura da Loja',
    description: 'Crie uma loja profissional que converte visitantes em compradores.',
    lessons: [
      {
        id: 301,
        title: 'Shopify vs Yampi: Qual Escolher',
        duration: '20 min',
        videoId: '7QiihQdJVGU',
        description: 'Comparação detalhada entre as plataformas: preço, facilidade, conversão, integrações e escalabilidade.',
      },
      {
        id: 302,
        title: 'Criando sua Loja do Zero na Shopify',
        duration: '45 min',
        videoId: 'Jd9ZoiUfuuo',
        description: 'Passo a passo completo: domínio, tema, pagamentos (Pix, cartão, boleto), fornecedores, frete e checkout otimizado.',
      },
      {
        id: 303,
        title: 'Design que Converte Visitantes em Compradores',
        duration: '30 min',
        videoId: 'xfOT2elC2Ok',
        description: 'Princípios de design e UX que aumentam a taxa de conversão: psicologia das cores, hierarquia visual, velocidade e elementos de confiança.',
      },
      {
        id: 304,
        title: 'Página de Produto Perfeita',
        duration: '35 min',
        videoId: 'fQZntbd5QGI',
        description: 'A anatomia de uma página que vende: fotos, vídeos, copy persuasiva, prova social, urgência, upsell e cross-sell.',
      },
      {
        id: 305,
        title: 'Copywriting Persuasivo para E-commerce',
        duration: '28 min',
        videoId: 'aiFh_4uH_Bw',
        description: 'Técnicas de copywriting: headlines que param o scroll, gatilhos mentais éticos, storytelling e CTAs que convertem.',
      },
      {
        id: 306,
        title: 'Apps Essenciais que Aumentam a Conversão',
        duration: '22 min',
        videoId: 'bt2qfjG5K1A',
        description: 'Os apps mais importantes para Shopify: upsell automatizado, prova social, urgência, recuperação de carrinho e coleta de avaliações.',
      },
    ],
  },
  {
    id: 4,
    title: 'Anúncios no Facebook e Instagram',
    description: 'Crie campanhas que geram vendas com orçamento controlado.',
    lessons: [
      {
        id: 401,
        title: 'Configurando o Business Manager e o Pixel',
        duration: '35 min',
        videoId: 'Y867cGsq4yM',
        description: 'Setup completo: conta comercial, conta de anúncios, Meta Pixel, eventos de conversão e verificação via Events Manager.',
      },
      {
        id: 402,
        title: 'Estrutura de Campanha Atualizada para 2026',
        duration: '40 min',
        videoId: 'i1i_57ot0sM',
        description: 'CBO vs ABO, segmentação, orçamento de teste e o framework exato que usamos com alunos avançados.',
      },
      {
        id: 403,
        title: 'Criativos que Param o Scroll',
        duration: '32 min',
        videoId: '0hJG0OdvRwY',
        description: 'Como criar anúncios que capturam atenção nos primeiros 3 segundos. Tipos de hook, transições, legendas e variações de criativos.',
      },
      {
        id: 404,
        title: 'Campanha de Teste: Passo a Passo',
        duration: '38 min',
        videoId: 'YImqGsOPqU8',
        description: 'O método exato para testar produtos com R$50 a R$100 por dia. Como ler dados em 48-72h e decidir matar, otimizar ou escalar.',
      },
      {
        id: 405,
        title: 'Leitura de Métricas e Otimização',
        duration: '28 min',
        videoId: 'K8AQQ6GtnNw',
        description: 'CPM, CPC, CTR, CPA, ROAS — entenda cada métrica, os valores de referência para o Brasil e como identificar gargalos.',
      },
      {
        id: 406,
        title: 'Escalando Campanhas Lucrativas',
        duration: '30 min',
        videoId: '_KmXbRiJVyg',
        description: 'Escala horizontal e vertical, públicos lookalike, Advantage+ e como proteger campanhas durante a expansão.',
      },
    ],
  },
  {
    id: 5,
    title: 'Anúncios no TikTok',
    description: 'Aproveite a maior oportunidade de 2026 no marketing digital.',
    lessons: [
      {
        id: 501,
        title: 'A Oportunidade do TikTok em 2026',
        duration: '18 min',
        videoId: 'dsfcJDal24k',
        description: 'CPMs até 60% mais baratos que o Facebook, alcance orgânico generoso e por que quem entrar agora terá vantagem enorme.',
      },
      {
        id: 502,
        title: 'Configurando TikTok Business e Pixel',
        duration: '25 min',
        videoId: 'BYenQIxAz8s',
        description: 'Setup completo do TikTok Ads Manager, TikTok Pixel na Shopify e eventos de conversão.',
      },
      {
        id: 503,
        title: 'Criando Vídeos que Não Parecem Anúncios',
        duration: '35 min',
        videoId: 'KCiwfiaig-s',
        description: 'Conteúdo nativo que vende sem parecer publicidade: UGC, transitions orgânicas, sons, trends e estrutura em 3 partes.',
      },
      {
        id: 504,
        title: 'Tráfego Orgânico + Pago Combinado',
        duration: '28 min',
        videoId: 'N1QhNxb6f5Q',
        description: 'Como validar com orgânico e escalar com pago. A estratégia híbrida com Spark Ads economizando até 80% no custo de criativo.',
      },
      {
        id: 505,
        title: 'Escala e Tendências do Algoritmo TikTok',
        duration: '30 min',
        videoId: 'istNOWqKKQk',
        description: 'Como o algoritmo distribui conteúdo, melhores horários, hashtags estratégicas e técnicas avançadas de escala.',
      },
    ],
  },
  {
    id: 6,
    title: 'Escala e Automação',
    description: 'Transforme seu dropshipping em um negócio real e escalável.',
    lessons: [
      {
        id: 601,
        title: 'Sinais para Escalar com Segurança',
        duration: '25 min',
        videoId: '2F0SyLLm-oM',
        description: 'Métricas mínimas de ROAS e margem, consistência de 7 dias, capacidade do fornecedor e fluxo de caixa positivo.',
      },
      {
        id: 602,
        title: 'Fornecedores e Logística Nacional',
        duration: '30 min',
        videoId: 'ice_xL6x4Qg',
        description: 'Como encontrar, avaliar e negociar com fornecedores no Brasil e China. Fulfillment nacional para entregas em até 48h.',
      },
      {
        id: 603,
        title: 'Automatização da Operação',
        duration: '28 min',
        videoId: 'kSDa-K1Lnp4',
        description: 'Ferramentas para automatizar pedidos (DSers, AutoDS), atendimento com chatbots, rastreamento e SAC pós-venda.',
      },
      {
        id: 604,
        title: 'De Dropshipping para Marca Própria',
        duration: '35 min',
        videoId: 'uZRN_KHMh9g',
        description: 'A transição para private label: fabricantes exclusivos, identidade de marca, importação direta e produtos vendidos por 3-5x mais.',
      },
    ],
  },
]

export const allLessons = modules.flatMap(m => m.lessons)

export const getLessonById = (id: number) => allLessons.find(l => l.id === id)
export const getModuleByLessonId = (id: number) => modules.find(m => m.lessons.some(l => l.id === id))
