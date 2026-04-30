export type Tool = {
  id: string
  title: string
  description: string
  creditCost: number | 'unlimited' | 'premium_only'
  creditLabel: string
  color: string
  bg: string
  href: string
  freeAccess: boolean
}

export const tools: Tool[] = [
  {
    id: 'simulador',
    title: 'Simulador de Lucro',
    description: 'Calcule precificação, taxas e margem líquida de qualquer produto antes de anunciar.',
    creditCost: 15,
    creditLabel: '15 créditos',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    href: '/tools/simulador',
    freeAccess: true,
  },
  {
    id: 'assistente',
    title: 'Assistente IA Especialista',
    description: 'Chat com IA treinada em dropshipping — tire dúvidas técnicas 24/7.',
    creditCost: 'unlimited',
    creditLabel: 'Somente Premium',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    href: '/tools/assistente',
    freeAccess: true,
  },
  {
    id: 'detector',
    title: 'Detector de Produtos IA',
    description: 'Análise completa com IA — potencial, lucro, concorrência e estratégia.',
    creditCost: 15,
    creditLabel: '15 créditos',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    href: '/tools/detector',
    freeAccess: false,
  },
  {
    id: 'gerador',
    title: 'Gerador de Ideias Infalível',
    description: '10 nomes de loja, slogans, produtos, logo e branding completo por nicho.',
    creditCost: 15,
    creditLabel: '15 créditos',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    href: '/tools/gerador',
    freeAccess: false,
  },
  {
    id: 'video',
    title: 'Criador de Vídeo Ads',
    description: 'Roteiros virais completos para TikTok, Reels e YouTube Shorts com prompt de IA.',
    creditCost: 120,
    creditLabel: '120 créditos',
    color: 'text-rose-400',
    bg: 'bg-rose-500/10',
    href: '/tools/video',
    freeAccess: false,
  },
  {
    id: 'produtos',
    title: 'Produtos Bons',
    description: 'Produtos em alta com fornecedores, custo, preço de venda e margem real.',
    creditCost: 20,
    creditLabel: '20 créditos',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    href: '/tools/produtos',
    freeAccess: false,
  },
]

export const creditPacks = [
  {
    label: '1.000 Créditos',
    credits: 1000,
    price: 'R$ 19,90',
    originalPrice: 'R$ 39',
    badge: 'MELHOR CUSTO-BENEFÍCIO',
    highlight: true,
    link: 'https://pay.kiwify.com.br/FxZD5h2',
  },
  {
    label: '2.000 Créditos',
    credits: 2000,
    price: 'R$ 34,90',
    originalPrice: 'R$ 69',
    badge: 'MAIS POPULAR',
    highlight: false,
    link: 'https://pay.kiwify.com.br/Hrnaxcj',
  },
  {
    label: '5.000 Créditos',
    credits: 5000,
    price: 'R$ 69,90',
    originalPrice: 'R$ 139',
    badge: 'MELHOR VALOR',
    highlight: false,
    link: 'https://pay.kiwify.com.br/HTPqmG0',
  },
]
