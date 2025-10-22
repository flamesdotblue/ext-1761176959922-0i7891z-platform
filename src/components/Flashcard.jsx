import { useState } from 'react'
import { Eye, CheckCircle2, XCircle, ChevronDown } from 'lucide-react'

export default function Flashcard({ card, onResult, onNext, index, total }) {
  const [revealed, setRevealed] = useState(false)

  const mark = (isCorrect) => {
    onResult(card, isCorrect)
    setRevealed(false)
    onNext()
  }

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs uppercase tracking-wider text-indigo-600 font-medium">{card.tema}</div>
          <h2 className="text-lg font-semibold mt-1">{card.titulo}</h2>
        </div>
        <div className="text-sm text-slate-500">{index + 1} / {total}</div>
      </div>

      <div className="mt-4">
        <p className="text-slate-800 leading-relaxed whitespace-pre-wrap">{card.questao}</p>
      </div>

      {!revealed ? (
        <div className="mt-6">
          <button
            onClick={() => setRevealed(true)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
          >
            <Eye className="w-4 h-4" /> Revelar resposta
          </button>
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <div className="text-sm font-medium text-emerald-800">Resposta</div>
            <div className="mt-1 text-emerald-900 whitespace-pre-wrap">{card.resposta}</div>
          </div>
          <details className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <summary className="flex items-center gap-2 cursor-pointer text-slate-800 font-medium">
              <ChevronDown className="w-4 h-4" /> Análise detalhada
            </summary>
            <div className="mt-2 text-slate-700 text-sm whitespace-pre-wrap">{card.analise}</div>
            {card.referencia && (
              <div className="mt-2 text-xs text-slate-500">Referência: {card.referencia}</div>
            )}
          </details>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => mark(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-emerald-600 text-emerald-700 bg-white hover:bg-emerald-50"
            >
              <CheckCircle2 className="w-4 h-4" /> Acertei
            </button>
            <button
              onClick={() => mark(false)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-rose-600 text-rose-700 bg-white hover:bg-rose-50"
            >
              <XCircle className="w-4 h-4" /> Errei
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
