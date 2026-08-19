import WrittenCases from './WrittenCases';

export default function CasesReales() {
  return (
    <section className="bg-bone py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="space-y-4 mb-16">
          <p className="font-mono text-xs font-medium text-azure uppercase tracking-widest">Casos reales</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink leading-tight">
            Negocios reales. Procesos técnicos reales.
          </h2>
          <p className="text-lg md:text-xl text-graphite leading-relaxed max-w-2xl text-pretty">
            No son casos hipotéticos: negocios que ya operaban y necesitaban resolver su marca.
          </p>
        </div>

        {/* Written Cases */}
        <WrittenCases />
      </div>
    </section>
  )
}
