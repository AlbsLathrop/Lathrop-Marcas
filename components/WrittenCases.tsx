"use client";

export default function WrittenCases() {
  const cases = [
    {
      tag: 'Apelación ante el TDPI',
      name: 'Gonzalo Correa · Ruta Outdoor',
      description:
        'Llegó después de que otra abogada le cobrara caro, lo dejara sin seguimiento a los tres meses y el INAPI rechazara su marca por similitud con otra. Tomé el caso, apelé ante el TDPI y di vuelta el fallo.',
      result: 'Su marca quedó registrada.',
      resultHighlight: 'registrada',
    },
    {
      tag: 'Portafolio · multi-región',
      name: 'Grupo inmobiliario',
      description:
        'Una inmobiliaria consolidada, con proyectos activos en distintas regiones de Chile, necesitaba blindar sus marcas antes de seguir creciendo. Nombre bajo reserva.',
      result: '5 proyectos protegidos en distintas regiones.',
      resultHighlight: '5 proyectos',
    },
  ];

  return (
    <div className="cases grid grid-cols-1 md:grid-cols-2 gap-6">
      {cases.map((caseItem, idx) => (
        <div key={idx} className="case bg-white border border-bone-line rounded-lg p-8 md:p-7 relative overflow-hidden transition-all duration-300" style={{
          background: '#fff',
          borderRadius: '8px',
          padding: '30px 28px',
        }}>
          {/* Hover line top */}
          <div
            style={{
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              height: '2px',
              width: 0,
              background: '#2D5A8C',
              transition: 'width 0.4s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.width = '100%';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.width = '0';
            }}
          ></div>

          {/* Tag */}
          <div
            className="case-tag"
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '9px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#2D5A8C',
              border: '1px solid #E8E4DB',
              borderRadius: '4px',
              padding: '3px 9px',
              display: 'inline-block',
              marginBottom: '16px',
            }}
          >
            {caseItem.tag}
          </div>

          {/* Name */}
          <h3
            style={{
              fontFamily: 'Playfair Display, Georgia, serif',
              fontWeight: 600,
              fontSize: '1.25rem',
              marginBottom: '12px',
              color: '#0B1A2F',
            }}
          >
            {caseItem.name}
          </h3>

          {/* Description */}
          <p
            style={{
              fontSize: '0.95rem',
              color: '#3A4553',
              marginBottom: '20px',
            }}
          >
            {caseItem.description}
          </p>

          {/* Result */}
          <div
            className="case-result"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '11px',
              fontWeight: 600,
              fontSize: '0.98rem',
              color: '#0B1A2F',
              borderTop: '1px solid #E8E4DB',
              paddingTop: '16px',
            }}
          >
            <span
              className="node"
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: '#2D5A8C',
                flexShrink: 0,
              }}
            ></span>
            {caseItem.result.split(caseItem.resultHighlight).map((part, i, arr) =>
              i === arr.length - 1 ? (
                <span key={i}>{part}</span>
              ) : (
                <span key={i}>
                  {part}
                  <b style={{ color: '#2D5A8C' }}>{caseItem.resultHighlight}</b>
                </span>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
