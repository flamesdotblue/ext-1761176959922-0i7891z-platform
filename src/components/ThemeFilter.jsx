import { useMemo } from 'react'

export default function ThemeFilter({ themes, selected, onChange, totalCount, filteredCount }) {
  const allSelected = selected.length === 0

  const counts = useMemo(() => {
    return themes.reduce((acc, t) => {
      acc[t] = 0
      return acc
    }, {})
  }, [themes])

  const toggle = (t) => {
    if (selected.includes(t)) onChange(selected.filter(s => s !== t))
    else onChange([...selected, t])
  }

  const clear = () => onChange([])

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={clear}
          className={`px-3 py-1.5 rounded-lg text-sm border ${allSelected ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'}`}
        >
          Todos ({totalCount})
        </button>
        {themes.map(t => (
          <button
            key={t}
            onClick={() => toggle(t)}
            className={`px-3 py-1.5 rounded-lg text-sm border ${selected.includes(t) ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'}`}
            title={`Questões de ${t}`}
          >
            {t} {counts[t] ? `(${counts[t]})` : ''}
          </button>
        ))}
        <div className="ml-auto text-sm text-slate-600">Exibindo {filteredCount} de {totalCount}</div>
      </div>
    </div>
  )
}
