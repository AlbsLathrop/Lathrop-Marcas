import LeadForm from './LeadForm';

export default function LeadFormSection() {
  return (
    <section className="bg-bone py-10 md:py-14">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="space-y-2 mb-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-ink leading-tight">
            ¿Tu marca todavía no está registrada?
          </h2>
          <p className="text-lg leading-relaxed text-graphite max-w-56ch mx-auto">
            Déjame tus datos y te escribo yo para revisar tu caso.
          </p>
        </div>

        {/* Form Container */}
        <div className="flex justify-center">
          <div className="w-full max-w-md bg-white rounded-lg p-6 border border-bone-line">
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  );
}
