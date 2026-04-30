import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', ...props }, ref) => (
    <div className="flex flex-col gap-1.5">
      {label && <label className="text-sm text-white/70 font-medium">{label}</label>}
      <input
        ref={ref}
        className={`bg-[#111] border ${error ? 'border-red-500' : 'border-white/10'} text-white placeholder:text-white/30 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 transition-all ${className}`}
        {...props}
      />
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  )
)
Input.displayName = 'Input'
