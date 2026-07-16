export const metadata = {
  title: 'Política de Privacidad · Lathrop Marcas',
  description: 'Política de privacidad de Lathrop Marcas',
};

export default function Privacidad() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-20 md:py-28">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-ink mb-8">
        Política de Privacidad
      </h1>

      <div className="prose prose-lg max-w-none text-graphite space-y-6">
        <section>
          <h2 className="text-2xl font-serif font-bold text-ink mb-4">1. Responsable del Tratamiento</h2>
          <p>
            Alberto Lathrop (en adelante, "Empresa") es responsable del tratamiento de los datos personales que usted proporciona a través de este sitio web.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-ink mb-4">2. Datos Recopilados</h2>
          <p>
            Recopilamos datos personales que usted proporciona voluntariamente a través de formularios, consultas por WhatsApp o correo electrónico, incluyendo:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Nombre y apellido</li>
            <li>Correo electrónico</li>
            <li>Número de teléfono</li>
            <li>Información sobre su negocio y marca</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-ink mb-4">3. Finalidad del Tratamiento</h2>
          <p>
            Sus datos se utilizan exclusivamente para:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Responder consultas sobre registro de marcas</li>
            <li>Prestar servicios de asesoría legal en propiedad industrial</li>
            <li>Mantener comunicación relativa a expedientes y trámites</li>
            <li>Cumplir obligaciones legales y contractuales</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-ink mb-4">4. Base Legal</h2>
          <p>
            El tratamiento de sus datos se fundamenta en:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Consentimiento voluntario</li>
            <li>Cumplimiento de obligaciones legales (Ley 19.628 sobre Protección de Datos Personales)</li>
            <li>Ejecución de contrato (servicios de asesoría)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-ink mb-4">5. Seguridad de los Datos</h2>
          <p>
            Implementamos medidas técnicas y organizativas para proteger sus datos contra acceso no autorizado, pérdida o alteración. Sin embargo, no garantizamos seguridad absoluta en la transmisión de datos por internet.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-ink mb-4">6. Derechos del Titular</h2>
          <p>
            Conforme a la Ley 19.628, usted tiene derecho a:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Acceder a sus datos personales</li>
            <li>Solicitar corrección si son inexactos</li>
            <li>Oponerme al tratamiento de sus datos</li>
            <li>Solicitar eliminación cuando corresponda</li>
          </ul>
          <p className="mt-4">
            Para ejercer estos derechos, contacte a: <strong>alathrop@abogapymes.cl</strong>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-ink mb-4">7. Cookies y Rastreo</h2>
          <p>
            Este sitio utiliza Google Analytics y WhatsApp para análisis y comunicación. No utilizamos cookies de seguimiento intrusivas. Usted puede desactivar cookies en su navegador.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-ink mb-4">8. Cambios en Esta Política</h2>
          <p>
            Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Los cambios se publicarán en esta página.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif font-bold text-ink mb-4">9. Contacto</h2>
          <p>
            Para consultas sobre privacidad: <strong>alathrop@abogapymes.cl</strong>
          </p>
          <p className="text-sm text-graphite mt-4">
            Última actualización: {new Date().toLocaleDateString('es-CL')}
          </p>
        </section>
      </div>
    </div>
  );
}
