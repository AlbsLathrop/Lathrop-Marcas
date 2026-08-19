"use client";

import { useState } from 'react';
import Image from 'next/image';
import VideoModal from './VideoModal';

export default function VideoTestimonials() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState<string | null>(null);

  const videos = [
    {
      name: 'Cherry Boom',
      description: 'Aseguró su marca y hoy opera con título vigente.',
      tag: 'Agencia · Publicidad',
      videoId: 'PicBZqTpIu4',
    },
    {
      name: 'StartHunt',
      description: 'Registró su marca antes de escalar su operación.',
      tag: 'B2B · Consultoría',
      videoId: 'GFLXJF8Pk7c',
    },
  ];

  const handleVideoClick = (videoId: string) => {
    setSelectedVideoId(videoId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedVideoId(null);
  };

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="space-y-4 mb-16">
          <p className="font-mono text-xs font-medium text-azure uppercase tracking-widest">Testimonios en video</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-ink leading-tight">
            Clientes que ya pasaron por esto.
          </h2>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, idx) => (
            <button
              key={idx}
              onClick={() => handleVideoClick(video.videoId)}
              className="vid-card group cursor-pointer text-left hover:scale-105 transition-transform"
              aria-label={`Ver testimonio de ${video.name}`}
            >
              {/* Video Frame */}
              <div className="vid-frame relative w-full aspect-video bg-ink rounded-[8px] overflow-hidden mb-4">
                {/* Thumbnail Image */}
                <Image
                  src={`https://i.ytimg.com/vi/${video.videoId}/maxresdefault.jpg`}
                  alt={video.name}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{
                    objectFit: 'cover',
                    filter: 'grayscale(1)',
                    transition: 'filter 0.3s ease, transform 0.3s ease',
                  }}
                  className="group-hover:grayscale-0 group-hover:scale-104"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'grayscale(0)';
                    e.currentTarget.style.transform = 'scale(1.04)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'grayscale(1)';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                />

                {/* Corner Brackets */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-azure-bright"></div>
                <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-azure-bright"></div>
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-azure-bright"></div>
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-azure-bright"></div>

                {/* Play Button */}
                <div className="play absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border-2 border-white/70 flex items-center justify-center group-hover:border-white transition-all group-hover:scale-110">
                    <div className="w-0 h-0 border-l-[8px] border-l-white/85 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-lg font-display font-bold text-ink">
                  {video.name}
                </h3>
                <p className="text-sm text-graphite leading-relaxed">
                  {video.description}
                </p>
                <div className="flex items-center justify-between pt-2">
                  <span className="font-mono text-xs text-azure uppercase tracking-widest border border-slate-200 rounded px-2 py-1">
                    {video.tag}
                  </span>
                  <span className="text-sm font-medium text-ink group-hover:text-azure transition-colors">
                    Ver testimonio →
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        videoId={selectedVideoId}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .track {
            animation: none !important;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  )
}
