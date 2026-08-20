export default function Risk() {
  const blockA = [
    {
      title: 'Te pueden quitar el nombre',
      description: 'Si otro lo registra primero, legalmente pasa a ser suyo. Da lo mismo que tú lo uses hace años: te obligan a cambiarlo o a pagar por recuperarlo.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 36V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13 7L31 11.5L13 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="13" cy="36" r="2.3" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
    },
    {
      title: 'El rebranding lo pagas tú',
      description: 'Logo, letrero, packaging, redes, posicionamiento, tus anuncios. Ese costo crece cada mes que sigues operando sin registrar.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="14" cy="14" r="8" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="26" cy="26" r="8" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M20 20L30 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M14 6V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M26 18V34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: 'No puedes frenar a los que te copian',
      description: 'Sin registro no tienes con qué. Cualquiera usa tu nombre para colgarse del prestigio que tú construiste.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 20L25 10M25 10L25 25M25 10L35 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 22Q20 30 28 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
  ];

  const blockBServices = [
    {
      title: 'Otro abre con tu mismo nombre',
      description: 'Y se cuelga de la reputación que te costó años construir. En servicios, el nombre es el activo.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15" cy="15" r="8" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M21 21L28 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M15 12V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M12 15H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: 'Tus clientes te buscan por tu nombre',
      description: 'Si aparece uno casi igual, esas búsquedas y recomendaciones se van a su puerta, no a la tuya.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M6 16C6 16 6 24 12 28C18 24 18 16 18 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M26 12L34 12M30 8V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: 'Tu nombre está en la fachada',
      description: 'Señalética, uniformes, boletas, contratos. Y tendrás que cambiar tu Instagram y tu web, perdiendo todo lo que construiste ahí.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 34V8L20 2L30 8V34Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 2V34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M14 16H26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M14 24H26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
  ];

  const blockBProducts = [
    {
      title: 'Los marketplaces te frenan',
      description: 'Mercado Libre y otros exigen marca para abrir Tienda Oficial. Es un techo invisible a tus ventas.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="12" width="28" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M6 18H34" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M12 12V30" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M28 12V30" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
    },
    {
      title: 'Pierdes lo invertido',
      description: 'Inventario, packaging, posicionamiento y todo lo que gastaste en ads apuntando a un nombre que no es tuyo. Y las ventas caen si tienes que cambiar la marca o si aparece una parecida.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M20 20L28 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: 'Cada distribuidor te lo va a pedir',
      description: 'Cada cadena y cada canal nuevo pide acreditar la marca antes de vender.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 34L10 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M30 34L30 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M10 14L30 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M10 22L30 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M10 30L30 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
  ];

  const RiskCard = ({ risk }: { risk: any }) => (
    <div className="p-6 md:p-8 rounded-[8px] bg-gray-100 border border-slate-200 flex flex-col h-full card-hover">
      {/* Icon */}
      <div className="mb-4 text-azure">{risk.icon}</div>

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
    <section className="bg-white text-ink py-1 md:py-4">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="space-y-4 md:space-y-6 mb-3 md:mb-16">
          <p className="label-badge text-azure">El Riesgo de No Actuar</p>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-display font-bold text-ink leading-tight">
            Sin registrar tu marca, tu negocio corre peligro.
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-graphite max-w-[68ch] text-pretty">
            Da lo mismo cuántos años lleves usándolo. Si no está inscrito, no es tuyo.
          </p>
        </div>

        {/* Block A — Three cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mb-2 md:mb-4 md:mb-16">
          {blockA.map((risk, index) => (
            <RiskCard key={index} risk={risk} />
          ))}
        </div>

        {/* What does NOT protect you */}
        <div className="py-2 md:py-8 mb-12 md:mb-16 border-t border-b border-slate-200 max-w-2xl">
          <h3 className="text-base font-display font-bold text-ink mb-6">
            Lo que NO te protege la marca:
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-red-400 flex-shrink-0">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <p className="text-sm text-graphite">Tu razón social</p>
            </div>
            <div className="flex items-center gap-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-red-400 flex-shrink-0">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <p className="text-sm text-graphite">Tu inicio de actividades</p>
            </div>
            <div className="flex items-center gap-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-red-400 flex-shrink-0">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <p className="text-sm text-graphite">Tu dominio .cl</p>
            </div>
            <div className="flex items-center gap-3">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-red-400 flex-shrink-0">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <p className="text-sm text-graphite">Que vendas hace años</p>
            </div>
          </div>
        </div>

        {/* Block B — Two columns with headers and aligned rows */}
        <div className="mb-12 md:mb-16">
          {/* Badges row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-6">
            <div className="inline-flex items-center px-3 py-1.5 bg-azure text-white rounded font-mono text-xs font-bold uppercase tracking-widest">
              Si ofreces servicios
            </div>
            <div className="inline-flex items-center px-3 py-1.5 bg-azure text-white rounded font-mono text-xs font-bold uppercase tracking-widest">
              Si vendes productos
            </div>
          </div>

          {/* Cards grid - 2 columns, auto rows */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 auto-rows-fr">
            {/* Services cards */}
            {blockBServices.map((risk, index) => (
              <RiskCard key={`services-${index}`} risk={risk} />
            ))}

            {/* Products cards */}
            {blockBProducts.map((risk, index) => (
              <RiskCard key={`products-${index}`} risk={risk} />
            ))}
          </div>
        </div>

        {/* Closing block with statistic */}
        <div className="border-t border-slate-200 pt-12 mt-12 md:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left: Statistic */}
            <div className="flex flex-col items-start md:items-center md:justify-center">
              <p className="text-6xl md:text-7xl font-display font-bold text-azure leading-tight">
                +200
              </p>
              <p className="text-base md:text-lg text-graphite mt-4">
                solicitudes de marca al día en Chile
              </p>
            </div>

            {/* Right: Message */}
            <div>
              <p className="text-lg md:text-xl font-semibold text-ink leading-relaxed">
                Basta con que aparezca una parecida a la tuya para que el problema empiece a costar caro.
              </p>
              <p className="text-xs text-graphite/60 mt-6">
                Fuente: INAPI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
