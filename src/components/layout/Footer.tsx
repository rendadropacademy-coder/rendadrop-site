import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 mt-auto">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="font-bold text-sm">
              <span className="text-green-400">Renda</span>
              <span className="text-white">Drop</span>
              <span className="text-white/50"> Academy</span>
            </span>
            <p className="text-xs text-white/30 mt-1">
              © {new Date().getFullYear()} RendaDrop Academy. Todos os direitos reservados.
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 text-xs text-white/40">
            <Link href="/termos-de-uso" className="hover:text-white/70 transition-colors">Termos de Uso</Link>
            <Link href="/privacidade" className="hover:text-white/70 transition-colors">Privacidade</Link>
            <Link href="/aviso-legal" className="hover:text-white/70 transition-colors">Aviso Legal</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
