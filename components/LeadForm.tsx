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

interface LeadFormProps {
  variant?: 'light' | 'dark';
}

export default function LeadForm({ variant = 'light' }: LeadFormProps) {
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
    <form onSubmit={handleSubmit} className={`space-y-3 ${variant === 'dark' ? 'max-w-xl md:max-w-[68ch]' : 'max-w-md'}`}>
      {/* Nombre */}
      <div>
        <label htmlFor="nombre" className={`block text-sm font-medium mb-1 ${variant === 'dark' ? 'text-white' : 'text-graphite'}`}>
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
          className="w-full px-4 py-2.5 border border-slate-200 rounded-[8px] bg-white text-ink placeholder-graphite/50 form-field"
        />
      </div>

      {/* Marca */}
      <div>
        <label htmlFor="marca" className={`block text-sm font-medium mb-1 ${variant === 'dark' ? 'text-white' : 'text-graphite'}`}>
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
          className="w-full px-4 py-2.5 border border-slate-200 rounded-[8px] bg-white text-ink placeholder-graphite/50 form-field"
        />
      </div>

      {/* Rubro */}
      <div>
        <label htmlFor="rubro" className={`block text-sm font-medium mb-1 ${variant === 'dark' ? 'text-white' : 'text-graphite'}`}>
          Rubro
        </label>
        <input
          type="text"
          id="rubro"
          name="rubro"
          value={formData.rubro}
          onChange={handleChange}
          placeholder="Ej: ecommerce, servicios, etc."
          className="w-full px-4 py-2.5 border border-slate-200 rounded-[8px] bg-white text-ink placeholder-graphite/50 form-field"
        />
      </div>

      {/* ¿Ya vendes? */}
      <div>
        <label className={`block text-sm font-medium mb-2 ${variant === 'dark' ? 'text-white' : 'text-graphite'}`}>
          ¿Ya vendes?
        </label>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => handleFacturaClick('si')}
            className={`flex-1 px-4 py-2 min-h-11 rounded-[8px] font-medium transition-all inline-flex items-center justify-center ${
              formData.factura === 'si'
                ? 'bg-azure text-white border border-azure'
                : 'bg-white border border-slate-200 text-ink hover:border-azure'
            }`}
          >
            Sí
          </button>
          <button
            type="button"
            onClick={() => handleFacturaClick('no')}
            className={`flex-1 px-4 py-2 min-h-11 rounded-[8px] font-medium transition-all inline-flex items-center justify-center ${
              formData.factura === 'no'
                ? 'bg-azure text-white border border-azure'
                : 'bg-white border border-slate-200 text-ink hover:border-azure'
            }`}
          >
            No
          </button>
        </div>
      </div>

      {/* Teléfono y Email - Lado a lado en desktop */}
      <div className="flex flex-col md:flex-row gap-3">
        {/* Teléfono */}
        <div className="flex-1">
          <label htmlFor="telefono" className={`block text-sm font-medium mb-1 ${variant === 'dark' ? 'text-white' : 'text-graphite'}`}>
            Teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="+56 9 1234 5678"
            className="w-full px-4 py-2.5 border border-slate-200 rounded-[8px] bg-white text-ink placeholder-graphite/50 form-field"
          />
        </div>

        {/* Email */}
        <div className="flex-1">
          <label htmlFor="email" className={`block text-sm font-medium mb-1 ${variant === 'dark' ? 'text-white' : 'text-graphite'}`}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            className="w-full px-4 py-2.5 border border-slate-200 rounded-[8px] bg-white text-ink placeholder-graphite/50 form-field"
          />
        </div>
      </div>

      {/* Submit Button */}
      {variant === 'dark' ? (
        <button
          type="submit"
          disabled={isLoading || !formData.nombre || !formData.marca}
          className="w-full px-4 py-2 min-h-11 rounded-[8px] font-semibold text-base transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-white text-ink hover:bg-gray-100 inline-flex items-center justify-center"
        >
          {isLoading ? 'Enviando...' : 'Enviar datos'}
        </button>
      ) : (
        <button
          type="submit"
          disabled={isLoading || !formData.nombre || !formData.marca}
          className="w-full px-4 py-2 min-h-11 rounded-[8px] font-semibold text-base transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-ink text-white hover:bg-opacity-90 inline-flex items-center justify-center"
        >
          {isLoading ? 'Enviando...' : 'Enviar datos'}
        </button>
      )}

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
