import { Brain, RefreshCcw } from 'lucide-react'

export default function Header({ onReset }) {
  return (
    <header className="sticky top-0 z-10 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-indigo-600 text-white shadow-sm">
            <Brain className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-semibold tracking-tight">Flashcards de Engenharia Elétrica</h1>
            <p className="text-sm text-slate-500">Estude por temas, revele respostas e acompanhe seu desempenho</p>
          </div>
        </div>
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-sm"
        >
          <RefreshCcw className="w-4 h-4" /> Resetar estatísticas
        </button>
      </div>
    </header>
  )
}
