export default function StatsBar({ stats, themes }) {
  const total = stats.correct + stats.wrong
  const rate = total ? Math.round((stats.correct / total) * 100) : 0

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">✔</div>
          <div>
            <div className="text-sm text-slate-500">Acertos</div>
            <div className="text-xl font-semibold">{stats.correct}</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-rose-50 text-rose-700 border border-rose-200">✖</div>
          <div>
            <div className="text-sm text-slate-500">Erros</div>
            <div className="text-xl font-semibold">{stats.wrong}</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-200">％</div>
          <div>
            <div className="text-sm text-slate-500">Taxa de acerto</div>
            <div className="text-xl font-semibold">{rate}%</div>
          </div>
        </div>
      </div>
      {Object.keys(stats.perTheme || {}).length > 0 && (
        <div className="mt-4 pt-4 border-t border-slate-100">
          <div className="text-sm text-slate-600 mb-2">Desempenho por tema</div>
          <div className="flex flex-wrap gap-2">
            {themes.map(t => {
              const s = stats.perTheme[t] || { correct: 0, wrong: 0 }
              const tot = s.correct + s.wrong
              const r = tot ? Math.round((s.correct / tot) * 100) : 0
              return (
                <span key={t} className="text-xs px-2 py-1 rounded-full border border-slate-200 bg-slate-50 text-slate-700">
                  {t}: {s.correct}/{tot} ({r}%)
                </span>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
