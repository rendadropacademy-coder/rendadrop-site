import Link from 'next/link'
import { Footer } from '@/components/layout/Footer'
import { modules } from '@/lib/data/course'
import { tools } from '@/lib/data/tools'
import {
  Zap, Shield, Clock, Star, CheckCircle, Play,
  TrendingUp, Brain, Target, ArrowRight, Cpu
} from 'lucide-react'

const testimonials = [
  {
    name: 'Rafael M.',
    text: 'Comecei sem saber nada de dropshipping. Em 45 dias já tinha minhas primeiras vendas. O curso é direto ao ponto, sem enrolação. O módulo de tráfego mudou tudo pra mim.',
    result: 'R$ 892 no 1º mês',
  },
  {
    name: 'Camila S.',
    text: 'Comecei sem saber nada de venda online. Fiz meu primeiro pedido na semana 2 do curso. Ainda é pouco, mas é real — e agora sei que funciona.',
    result: '1ª venda em 14 dias',
  },
  {
    name: 'Lucas T.',
    text: 'Saí de R$ 2 mil para R$ 15 mil em 3 meses. Isso não é sorte, é método. O curso ensina exatamente o que você precisa fazer, na sequência certa.',
    result: 'R$ 15.750 no 3º mês',
  },
  {
    name: 'Ana P.',
    text: 'Faturei R$ 4.610 no segundo mês. O curso ensina a lidar com as oscilações. Hoje tenho consistência que antes eu não tinha.',
    result: 'R$ 4.610 no 2º mês',
  },
]

const faqs = [
  {
    q: 'Preciso ter experiência para começar?',
    a: 'Não! O curso foi criado do zero absoluto. Você não precisa de experiência prévia em vendas, marketing ou tecnologia. Cada módulo foi pensado para guiar iniciantes completos até sua primeira venda.',
  },
  {
    q: 'Quanto preciso investir para começar no dropshipping?',
    a: 'Além do investimento no curso (R$97), recomendamos ter de R$200 a R$500 para tráfego pago inicial (anúncios). A plataforma da loja (Shopify) tem teste gratuito. Muitos alunos começam com menos de R$300 no total.',
  },
  {
    q: 'Em quanto tempo posso começar a faturar?',
    a: 'Depende da sua dedicação, mas alunos que seguem o método à risca costumam fazer suas primeiras vendas entre 2 a 4 semanas. Resultados significativos geralmente aparecem entre 30 e 90 dias.',
  },
  {
    q: 'O acesso é vitalício?',
    a: 'Sim! Ao adquirir o RendaDrop Academy, você recebe acesso vitalício a todo o conteúdo, incluindo todas as atualizações futuras sem custo adicional.',
  },
  {
    q: 'Tem suporte depois que eu entrei?',
    a: 'Sim! Você conta com suporte por e-mail respondido em até 24 horas. Além disso, tem acesso à comunidade exclusiva para trocar experiências com outros alunos.',
  },
  {
    q: 'As ferramentas estão incluídas no curso?',
    a: 'Sim! Todas as 6 ferramentas de IA estão disponíveis no seu plano. Você ainda recebe 300 créditos de bônus ao entrar no premium para usar imediatamente.',
  },
  {
    q: 'Funciona para quem tem emprego e pouco tempo?',
    a: 'Perfeitamente! O curso foi criado para quem trabalha. As aulas são curtas e práticas, e o negócio de dropshipping pode ser gerenciado com 1-2 horas por dia.',
  },
]

export default function HomePage() {
  const totalLessons = modules.reduce((a, m) => a + m.lessons.length, 0)

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navbar pública */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <span className="font-bold text-base tracking-tight">
            <span className="text-green-400">Renda</span>
            <span className="text-white">Drop</span>
            <span className="text-white/50 text-xs ml-1">Academy</span>
          </span>
          <nav className="flex items-center gap-2">
            <Link href="/login" className="px-4 py-2 text-sm text-white/60 hover:text-white transition-colors">
              Entrar
            </Link>
            <Link href="/register" className="px-4 py-2 text-sm bg-green-500 hover:bg-green-400 text-black font-semibold rounded-lg transition-all">
              Começar grátis
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-24 px-4 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
          <Zap size={12} />
          6 Ferramentas de IA Incluídas
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
          Aprenda Dropshipping com<br />
          <span className="text-green-400">Inteligência Artificial</span>
        </h1>
        <p className="text-lg text-white/50 max-w-2xl mx-auto mb-10">
          {totalLessons} aulas práticas, {modules.length} módulos completos e 6 ferramentas de IA exclusivas para você vender online — mesmo começando do zero.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/register" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-400 text-black font-bold text-base rounded-xl transition-all">
            Começar agora — é grátis
            <ArrowRight size={18} />
          </Link>
          <Link href="#como-funciona" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/15 hover:border-white/30 text-white/70 hover:text-white text-base rounded-xl transition-all">
            <Play size={16} />
            Como funciona
          </Link>
        </div>
        <p className="text-xs text-white/30 mt-4">Acesso gratuito imediato · Sem cartão de crédito</p>
      </section>

      {/* Números */}
      <section className="py-12 border-y border-white/5 bg-[#111]">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { n: String(totalLessons), label: 'Aulas completas' },
            { n: String(modules.length), label: 'Módulos práticos' },
            { n: '6', label: 'Ferramentas de IA' },
            { n: '300', label: 'Créditos de bônus' },
          ].map(({ n, label }) => (
            <div key={label}>
              <div className="text-3xl font-bold text-green-400">{n}</div>
              <div className="text-sm text-white/40 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="py-24 max-w-4xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-green-400 font-bold mb-3">O Método</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Simples, prático e direto ao ponto</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              icon: <Target className="text-green-400" size={24} />,
              title: 'Aprenda com aulas curtas',
              desc: 'Módulos organizados em sequência lógica. Sem enrolação, sem teoria inútil — só o que você precisa para vender.',
            },
            {
              icon: <Brain className="text-purple-400" size={24} />,
              title: 'Use as ferramentas de IA',
              desc: 'Analise produtos, gere roteiros de anúncios, simule lucros e muito mais com IA especializada em dropshipping.',
            },
            {
              icon: <TrendingUp className="text-blue-400" size={24} />,
              title: 'Escale com dados',
              desc: 'Aprenda a ler métricas, escalar campanhas lucrativas e transformar dropshipping em uma fonte de renda real.',
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="bg-[#111] border border-white/5 rounded-2xl p-6">
              <div className="mb-4">{icon}</div>
              <h3 className="font-semibold text-base mb-2">{title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Módulos */}
      <section id="modulos" className="py-20 bg-[#111] border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-green-400 font-bold mb-3">O Curso Completo</p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              {modules.length} módulos · {totalLessons} aulas
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.map((mod) => (
              <div key={mod.id} className="bg-[#0a0a0a] border border-white/5 rounded-2xl p-5 hover:border-green-500/20 transition-all">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-0.5 rounded-full font-medium">
                    Módulo {mod.id}
                  </span>
                  <span className="text-xs text-white/30">{mod.lessons.length} aulas</span>
                </div>
                <h3 className="font-semibold text-sm mb-2">{mod.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{mod.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ferramentas */}
      <section id="ferramentas" className="py-20 max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-green-400 font-bold mb-3">Incluídas no plano</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            6 Ferramentas com <span className="text-green-400">IA</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((tool) => (
            <div key={tool.id} className={`border border-white/5 rounded-2xl p-6 ${tool.bg} hover:border-white/15 transition-all`}>
              <div className="flex items-start justify-between mb-3">
                <Cpu className={tool.color} size={22} />
                <span className="text-xs text-white/30 border border-white/10 px-2 py-0.5 rounded-full">
                  {tool.creditLabel}
                </span>
              </div>
              <h3 className="font-semibold text-sm mb-1">{tool.title}</h3>
              <p className="text-xs text-white/50 leading-relaxed">{tool.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Preço */}
      <section id="preco" className="py-20 bg-[#111] border-y border-white/5">
        <div className="max-w-lg mx-auto px-4 text-center">
          <p className="text-xs uppercase tracking-widest text-red-400 font-bold mb-3">Oferta por tempo limitado</p>
          <h2 className="text-3xl font-bold mb-8">Acesso Completo RendaDrop Academy</h2>

          <div className="bg-[#0a0a0a] border border-green-500/20 rounded-3xl p-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-white/30 text-lg line-through">R$ 197</span>
              <span className="bg-red-500/20 text-red-400 text-xs font-bold px-2 py-0.5 rounded-full">-51% OFF</span>
            </div>
            <div className="text-5xl font-bold text-white mb-1">
              R$<span className="text-green-400">97</span>
            </div>
            <p className="text-white/40 text-sm mb-6">pagamento único · acesso vitalício</p>

            <ul className="space-y-3 mb-8 text-left">
              {[
                '32 aulas completas em vídeo',
                '6 módulos do zero ao avançado',
                '6 ferramentas de IA incluídas',
                '300 créditos de bônus imediatos',
                'Acesso vitalício + atualizações gratuitas',
                'Suporte direto por e-mail (24h)',
                'Comunidade exclusiva de alunos',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                  <CheckCircle className="text-green-400 shrink-0 mt-0.5" size={15} />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="https://pay.kiwify.com.br/R97"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 bg-green-500 hover:bg-green-400 text-black font-bold text-base rounded-xl transition-all text-center"
            >
              ATIVAR MINHA CONTA AGORA
            </a>

            <div className="flex items-center justify-center gap-4 mt-4 text-xs text-white/30">
              <span className="flex items-center gap-1"><Shield size={11} /> Pagamento seguro</span>
              <span className="flex items-center gap-1"><Clock size={11} /> Acesso imediato</span>
            </div>

            <Link href="/register" className="block mt-4 text-xs text-white/40 hover:text-white/60 transition-colors underline">
              ou crie uma conta gratuita primeiro
            </Link>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-green-400 font-bold mb-3">Resultados</p>
          <h2 className="text-3xl font-bold">Alunos reais, resultados reais</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {testimonials.map(({ name, text, result }) => (
            <div key={name} className="bg-[#111] border border-white/5 rounded-2xl p-6">
              <div className="flex text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="currentColor" />)}
              </div>
              <p className="text-sm text-white/60 leading-relaxed mb-4">&ldquo;{text}&rdquo;</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">{name}</span>
                <span className="text-xs bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-0.5 rounded-full">{result}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#111] border-y border-white/5">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Perguntas Frequentes</h2>
          </div>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group bg-[#0a0a0a] border border-white/5 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-medium text-sm hover:text-green-400 transition-colors list-none">
                  {q}
                  <span className="text-white/30 shrink-0 ml-4">▼</span>
                </summary>
                <p className="px-5 pb-4 text-sm text-white/50 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-24 text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Comece sua jornada hoje</h2>
        <p className="text-white/40 mb-8 max-w-md mx-auto text-sm">
          Acesso gratuito imediato. Sem cartão de crédito.
        </p>
        <Link href="/register" className="inline-flex items-center gap-2 px-10 py-4 bg-green-500 hover:bg-green-400 text-black font-bold text-base rounded-xl transition-all">
          Criar conta grátis
          <ArrowRight size={18} />
        </Link>
      </section>

      <Footer />
    </div>
  )
}
