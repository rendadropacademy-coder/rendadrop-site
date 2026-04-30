import Link from 'next/link'
import { Footer } from '@/components/layout/Footer'

export default function AvisoLegalPage() {
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
        <h1 className="text-3xl font-bold mb-8">Aviso Legal</h1>
        <div className="space-y-6 text-white/60 text-sm leading-relaxed">
          <p>A RendaDrop Academy é uma empresa independente e não possui afiliação com as plataformas mencionadas nos conteúdos educativos.</p>
          <p>As marcas mencionadas são propriedade de seus respectivos titulares e são utilizadas apenas para fins educacionais e de referência.</p>
          <h2 className="text-white font-semibold text-base">Disclaimer de Resultados</h2>
          <p>Os resultados financeiros apresentados nos depoimentos são individuais e não garantem que todos os alunos obterão os mesmos resultados. Os resultados dependem de fatores como dedicação, investimento, mercado e execução do aluno.</p>
          <p>Ao adquirir e utilizar a RendaDrop Academy, você reconhece e aceita que os resultados dependem exclusivamente da sua aplicação e das condições atuais do mercado e da economia.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
