import Link from 'next/link'
import { Footer } from '@/components/layout/Footer'

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <header className="border-b border-white/5 py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="font-bold text-sm">
            <span className="text-green-400">Renda</span><span>Drop</span><span className="text-white/40"> Academy</span>
          </Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Termos de Uso</h1>
        <div className="space-y-6 text-white/60 text-sm leading-relaxed">
          <p>A RendaDrop Academy é uma plataforma de educação online focada em dropshipping, marketing digital e comércio eletrônico.</p>
          <h2 className="text-white font-semibold text-base">Licença de Uso</h2>
          <p>Ao adquirir o acesso ao RendaDrop Academy, você recebe uma licença limitada, pessoal, não exclusiva, não transferível e revogável para assistir às aulas em vídeo para uso pessoal e educacional.</p>
          <h2 className="text-white font-semibold text-base">Restrições</h2>
          <p>É proibido compartilhar credenciais de acesso, redistribuir conteúdo, assediar ou prejudicar outros usuários.</p>
          <h2 className="text-white font-semibold text-base">Política de Reembolso</h2>
          <p>Após 7 dias da compra, não será possível solicitar reembolso.</p>
          <h2 className="text-white font-semibold text-base">Ferramentas de IA</h2>
          <p>As ferramentas de inteligência artificial integradas à plataforma são ferramentas auxiliares. As sugestões, análises e conteúdos gerados pela IA são apenas de referência. A RendaDrop Academy não se responsabiliza por prejuízos decorrentes da aplicação do conteúdo gerado.</p>
          <h2 className="text-white font-semibold text-base">Responsabilidade</h2>
          <p>A RendaDrop Academy não se responsabiliza por perdas financeiras ou danos de qualquer natureza decorrentes da aplicação do conteúdo ensinado.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
