import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'RendaDrop Academy — Aprenda Dropshipping com IA',
  description: 'Plataforma de educação online focada em dropshipping, marketing digital e comércio eletrônico. Acesso vitalício + ferramentas de IA.',
  keywords: 'dropshipping, marketing digital, curso online, ecommerce, tráfego pago',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="min-h-screen bg-[#0a0a0a] text-white antialiased">
        {children}
      </body>
    </html>
  )
}
