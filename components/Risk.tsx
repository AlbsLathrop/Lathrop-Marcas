export default function Risk() {
  const blockA = [
    {
      title: 'Te lo pueden quitar mañana',
      description: 'Basta con que alguien lo inscriba primero. No necesita conocerte ni haberte visto nunca.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 36V6" stroke="#2D5A8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13 7L31 11.5L13 16" stroke="#2D5A8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="13" cy="36" r="2.3" stroke="#2D5A8C" strokeWidth="1.5"/>
        </svg>
      ),
    },
    {
      title: 'Sin registro no hay nada que presentar',
      description: 'Si alguien abre con tu nombre, no tienes con qué defenderte. La ley protege al que inscribió.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="14" cy="14" r="8" stroke="#2D5A8C" strokeWidth="1.5"/>
          <circle cx="26" cy="26" r="8" stroke="#2D5A8C" strokeWidth="1.5"/>
          <path d="M20 20L30 30" stroke="#2D5A8C" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M14 6V22" stroke="#2D5A8C" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M26 18V34" stroke="#2D5A8C" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: 'El que te copia es del rubro',
      description: 'No es un desconocido en internet. Es alguien que ya te vio funcionar y te desvía clientes.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 20L25 10M25 10L25 25M25 10L35 20" stroke="#2D5A8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 22Q20 30 28 32" stroke="#2D5A8C" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
  ];

  const blockBServices = [
    {
      title: 'Tus clientes te buscan por tu nombre',
      description: 'Si otro abre con uno casi igual, esas búsquedas y recomendaciones se van a su puerta, no a la tuya.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15" cy="15" r="8" stroke="#2D5A8C" strokeWidth="1.5"/>
          <path d="M21 21L28 28" stroke="#2D5A8C" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M15 12V18" stroke="#2D5A8C" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M12 15H18" stroke="#2D5A8C" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: 'Tu nombre está en la fachada',
      description: 'Señalética, uniformes, boletas, contratos. Cambiarlo no es editar una web.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 34V8L20 2L30 8V34Z" stroke="#2D5A8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 2V34" stroke="#2D5A8C" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M14 16H26" stroke="#2D5A8C" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M14 24H26" stroke="#2D5A8C" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
  ];

  const blockBProducts = [
    {
      title: 'Mercado Libre te frena',
      description: 'Tienda Oficial exige título de marca o solicitud en trámite. Sin eso, el canal queda bloqueado.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 20H17" stroke="#2D5A8C" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M17 20L28 10" stroke="#2D5A8C" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M17 20H29" stroke="#2D5A8C" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M17 20L28 30" stroke="#2D5A8C" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="17" cy="20" r="2.3" stroke="#2D5A8C" strokeWidth="1.5"/>
          <path d="M34 6V34" stroke="#2D5A8C" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: 'Cada distribuidor te lo va a pedir',
      description: 'Cada cadena y cada canal nuevo pide acreditar la marca antes de vender.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 34L10 8" stroke="#2D5A8C" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M30 34L30 8" stroke="#2D5A8C" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M10 14L30 14" stroke="#2D5A8C" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M10 22L30 22" stroke="#2D5A8C" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M10 30L30 30" stroke="#2D5A8C" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
  ];

  const RiskCard = ({ risk }: { risk: any }) => (
    <div className="p-6 md:p-8 rounded-[8px] bg-gray-100 border border-blue-200 flex flex-col h-full hover:shadow-sm transition-shadow">
      {/* Icon */}
      <div className="mb-4">{risk.icon}</div>

      {/* Title */}
      <h3 className="text-lg font-display font-bold text-ink mb-2 leading-tight">
        {risk.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-graphite leading-relaxed flex-grow">
        {risk.description}
      </p>
    </div>
  );

  return (
    <section className="bg-white text-ink py-10 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="space-y-6 mb-16">
          <p className="label-badge text-azure">El Riesgo de No Actuar</p>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-display font-bold text-ink leading-tight">
            Sin registro vigente, tu nombre trabaja para quien llegue primero.
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-graphite max-w-[68ch] text-pretty">
            Da lo mismo cuántos años lleves usándolo. Si no está inscrito, no es tuyo.
          </p>
        </div>

        {/* Block A — Three cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {blockA.map((risk, index) => (
            <RiskCard key={index} risk={risk} />
          ))}
        </div>

        {/* Block B — Two columns with headers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-12 md:mb-16">
          {/* Left Column — Services */}
          <div>
            <div className="inline-flex items-center px-3 py-1.5 bg-azure text-white rounded font-mono text-xs font-bold uppercase tracking-widest mb-6">
              Si ofreces servicios
            </div>
            <div className="space-y-4 md:space-y-6">
              {blockBServices.map((risk, index) => (
                <RiskCard key={index} risk={risk} />
              ))}
            </div>
          </div>

          {/* Right Column — Products */}
          <div>
            <div className="inline-flex items-center px-3 py-1.5 bg-azure text-white rounded font-mono text-xs font-bold uppercase tracking-widest mb-6">
              Si vendes productos
            </div>
            <div className="space-y-4 md:space-y-6">
              {blockBProducts.map((risk, index) => (
                <RiskCard key={index} risk={risk} />
              ))}
            </div>
          </div>
        </div>

        {/* Closing statement */}
        <div className="border-l-4 border-azure pl-6 py-4">
          <p className="text-lg md:text-xl font-display font-bold text-ink leading-tight">
            Registrar cuesta lo mismo hoy que en tres años. Cambiar el nombre, no.
          </p>
        </div>
      </div>
    </section>
  );
}
