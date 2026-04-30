import Link from 'next/link'
import { Footer } from '@/components/layout/Footer'

export default function PrivacidadePage() {
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
        <h1 className="text-3xl font-bold mb-8">Política de Privacidade</h1>
        <div className="space-y-6 text-white/60 text-sm leading-relaxed">
          <p>Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais.</p>
          <h2 className="text-white font-semibold text-base">Dados Coletados</h2>
          <p>Coletamos nome, e-mail e dados de uso da plataforma para fornecer e melhorar nossos serviços.</p>
          <h2 className="text-white font-semibold text-base">Uso dos Dados</h2>
          <p>Seus dados são usados exclusivamente para gerenciar sua conta, personalizar sua experiência e enviar comunicações sobre o curso.</p>
          <h2 className="text-white font-semibold text-base">Ferramentas de IA</h2>
          <p>As consultas processadas pelas ferramentas de IA não são armazenadas permanentemente. As respostas geradas são exclusivas para o usuário que realizou a consulta.</p>
          <h2 className="text-white font-semibold text-base">Seus Direitos</h2>
          <p>Você pode acessar, corrigir ou solicitar a exclusão dos seus dados pessoais a qualquer momento entrando em contato conosco.</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
