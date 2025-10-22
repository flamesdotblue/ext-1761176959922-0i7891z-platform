import { useMemo, useState } from 'react'
import Flashcard from './Flashcard'
import { Shuffle, ArrowLeft, ArrowRight } from 'lucide-react'

export default function StudyArea({ cards, onResult }) {
  const [index, setIndex] = useState(0)
  const [shuffled, setShuffled] = useState(false)

  const prepared = useMemo(() => {
    if (!shuffled) return cards
    const arr = [...cards]
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
  }, [cards, shuffled])

  const hasCards = prepared.length > 0

  const next = () => setIndex(i => (i + 1) % (prepared.length || 1))
  const prev = () => setIndex(i => (i - 1 + (prepared.length || 1)) % (prepared.length || 1))

  const toggleShuffle = () => {
    setShuffled(s => !s)
    setIndex(0)
  }

  if (!hasCards) {
    return (
      <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center text-slate-600">
        Nenhuma questão encontrada para o filtro selecionado.
      </div>
    )
  }

  const card = prepared[index]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <button
            onClick={toggleShuffle}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm ${shuffled ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'}`}
          >
            <Shuffle className="w-4 h-4" /> Embaralhar
          </button>
          <span className="px-2 py-1 rounded-md bg-slate-100 border border-slate-200">{prepared.length} questões</span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={prev} className="px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-sm inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Anterior
          </button>
          <button onClick={next} className="px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-sm inline-flex items-center gap-2">
            Próxima <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <Flashcard
        card={card}
        index={index}
        total={prepared.length}
        onResult={onResult}
        onNext={next}
      />
    </div>
  )
}
