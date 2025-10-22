import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import ThemeFilter from './components/ThemeFilter'
import StatsBar from './components/StatsBar'
import StudyArea from './components/StudyArea'
import cardsData from './data/cards'

const STORAGE_KEY = 'eletrica-flashcards-v1'

export default function App() {
  const [selectedThemes, setSelectedThemes] = useState([])
  const [stats, setStats] = useState({ correct: 0, wrong: 0, perTheme: {} })

  const themes = useMemo(() => {
    const set = new Set(cardsData.map(c => c.tema))
    return Array.from(set)
  }, [])

  const filteredCards = useMemo(() => {
    if (!selectedThemes.length) return cardsData
    return cardsData.filter(c => selectedThemes.includes(c.tema))
  }, [selectedThemes])

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw)
        if (parsed && typeof parsed === 'object') {
          setStats(parsed)
        }
      }
    } catch {}
  }, [])

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stats))
    } catch {}
  }, [stats])

  const handleResult = (card, isCorrect) => {
    setStats(prev => {
      const perTheme = { ...prev.perTheme }
      const t = card.tema
      if (!perTheme[t]) perTheme[t] = { correct: 0, wrong: 0 }
      if (isCorrect) {
        perTheme[t].correct += 1
      } else {
        perTheme[t].wrong += 1
      }
      return {
        correct: prev.correct + (isCorrect ? 1 : 0),
        wrong: prev.wrong + (!isCorrect ? 1 : 0),
        perTheme,
      }
    })
  }

  const resetStats = () => setStats({ correct: 0, wrong: 0, perTheme: {} })

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-900">
      <Header onReset={resetStats} />
      <div className="max-w-6xl mx-auto px-4 pb-10 space-y-6">
        <StatsBar stats={stats} themes={themes} />
        <ThemeFilter
          themes={themes}
          selected={selectedThemes}
          onChange={setSelectedThemes}
          totalCount={cardsData.length}
          filteredCount={filteredCards.length}
        />
        <StudyArea cards={filteredCards} onResult={handleResult} />
      </div>
    </div>
  )
}
