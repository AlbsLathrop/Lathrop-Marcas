'use client';

import { useState } from 'react';

interface FormData {
  nombre: string;
  marca: string;
  rubro: string;
  factura: 'si' | 'no' | '';
  telefono: string;
  email: string;
}

export default function LeadForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    marca: '',
    rubro: '',
    factura: '',
    telefono: '',
    email: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFacturaClick = (value: 'si' | 'no') => {
    setFormData(prev => ({
      ...prev,
      factura: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    try {
      const response = await fetch('https://albertotf.app.n8n.cloud/webhook/lead-lathrop', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          marca: formData.marca,
          rubro: formData.rubro || undefined,
          factura: formData.factura || undefined,
          telefono: formData.telefono || undefined,
          email: formData.email || undefined,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
        (window as any).fbq('track', 'Lead');
      }

      setMessage({
        type: 'success',
        text: 'Listo. Alberto te escribe dentro del día.',
      });

      setFormData({
        nombre: '',
        marca: '',
        rubro: '',
        factura: '',
        telefono: '',
        email: '',
      });
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Hubo un problema, escríbeme por WhatsApp',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      {/* Nombre */}
      <div>
        <label htmlFor="nombre" className="block text-sm font-medium text-graphite mb-1">
          Nombre *
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          placeholder="Tu nombre"
          className="w-full px-4 py-2.5 border border-bone-line rounded-lg bg-white text-ink placeholder-graphite/50 focus:outline-none focus:ring-2 focus:ring-azure focus:border-transparent transition-all"
        />
      </div>

      {/* Marca */}
      <div>
        <label htmlFor="marca" className="block text-sm font-medium text-graphite mb-1">
          Marca *
        </label>
        <input
          type="text"
          id="marca"
          name="marca"
          value={formData.marca}
          onChange={handleChange}
          required
          placeholder="Nombre de tu marca"
          className="w-full px-4 py-2.5 border border-bone-line rounded-lg bg-white text-ink placeholder-graphite/50 focus:outline-none focus:ring-2 focus:ring-azure focus:border-transparent transition-all"
        />
      </div>

      {/* Rubro */}
      <div>
        <label htmlFor="rubro" className="block text-sm font-medium text-graphite mb-1">
          Rubro
        </label>
        <input
          type="text"
          id="rubro"
          name="rubro"
          value={formData.rubro}
          onChange={handleChange}
          placeholder="Ej: ecommerce, servicios, etc."
          className="w-full px-4 py-2.5 border border-bone-line rounded-lg bg-white text-ink placeholder-graphite/50 focus:outline-none focus:ring-2 focus:ring-azure focus:border-transparent transition-all"
        />
      </div>

      {/* ¿Ya vendes? */}
      <div>
        <label className="block text-sm font-medium text-graphite mb-2">
          ¿Ya vendes?
        </label>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => handleFacturaClick('si')}
            className={`flex-1 px-4 py-2.5 rounded-lg font-medium transition-all ${
              formData.factura === 'si'
                ? 'bg-azure text-white border border-azure'
                : 'bg-bone border border-bone-line text-ink hover:border-azure'
            }`}
          >
            Sí
          </button>
          <button
            type="button"
            onClick={() => handleFacturaClick('no')}
            className={`flex-1 px-4 py-2.5 rounded-lg font-medium transition-all ${
              formData.factura === 'no'
                ? 'bg-azure text-white border border-azure'
                : 'bg-bone border border-bone-line text-ink hover:border-azure'
            }`}
          >
            No
          </button>
        </div>
      </div>

      {/* Teléfono */}
      <div>
        <label htmlFor="telefono" className="block text-sm font-medium text-graphite mb-1">
          Teléfono
        </label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          placeholder="+56 9 1234 5678"
          className="w-full px-4 py-2.5 border border-bone-line rounded-lg bg-white text-ink placeholder-graphite/50 focus:outline-none focus:ring-2 focus:ring-azure focus:border-transparent transition-all"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-graphite mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="tu@email.com"
          className="w-full px-4 py-2.5 border border-bone-line rounded-lg bg-white text-ink placeholder-graphite/50 focus:outline-none focus:ring-2 focus:ring-azure focus:border-transparent transition-all"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading || !formData.nombre || !formData.marca}
        className="w-full px-4 py-2.5 bg-brass text-ink rounded-lg font-medium text-sm transition-all hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Enviando...' : 'Enviar datos'}
      </button>

      {/* Message */}
      {message && (
        <div
          className={`text-sm px-3 py-2.5 rounded text-center font-medium ${
            message.type === 'success'
              ? 'bg-azure/10 text-azure border border-azure/20'
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}
        >
          {message.text}
        </div>
      )}
    </form>
  );
}
