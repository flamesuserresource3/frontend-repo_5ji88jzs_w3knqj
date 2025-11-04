import React from 'react';
import Spline from '@splinetool/react-spline';
import { MessageCircle, MapPin } from 'lucide-react';

const Hero = () => {
  const whatsappUrl = `https://wa.me/213555000111?text=${encodeURIComponent(
    "Salam, je veux réserver un voyage avec votre agence à Batna."
  )}`;

  return (
    <section className="relative h-[88vh] w-full overflow-hidden bg-black">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays that do not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,153,0,0.10),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center text-white">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur">
          <MapPin className="h-3.5 w-3.5 text-orange-400" />
          <span>Agence basée à Batna • Départs garantis</span>
        </div>
        <h1 className="text-3xl font-semibold leading-tight sm:text-5xl md:text-6xl">
          Voyages organisés vers <span className="bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">Tunisie, Türkiye, Omra</span> et plus
        </h1>
        <p className="mt-4 max-w-2xl text-sm text-white/80 sm:text-base">
          Agence de voyage à Batna: séjours clés en main, hôtels sélectionnés, billets d’avion, et accompagnement visa. Une expérience fluide, transparente, et 100% confiance.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-400 px-5 py-3 text-sm font-medium text-black shadow-lg shadow-orange-500/20 transition hover:brightness-110"
          >
            <MessageCircle className="h-4 w-4" />
            Réserver sur WhatsApp
          </a>
          <a
            href="#offres"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
          >
            Voir les offres
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
