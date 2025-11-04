import React from 'react';
import { MapPin, Plane, Calendar, MessageCircle } from 'lucide-react';

const trips = [
  {
    title: 'Omra - Hiver 2025',
    details: '15 jours • Médine + Makkah • Hôtel proche Haram',
    depart: 'Départ Batna & Alger',
    dates: 'Décembre - Mars',
    price: 'à partir de 260.000 DZD',
  },
  {
    title: 'Tunisie - Hammamet / Sousse',
    details: '7 nuits • Demi-pension • Transfert inclus',
    depart: 'Départ Batna',
    dates: 'Tous les vendredis',
    price: 'à partir de 72.000 DZD',
  },
  {
    title: 'Türkiye - Istanbul & Antalya',
    details: '8 jours • Vol + Hôtel + City tour',
    depart: 'Départ Alger',
    dates: 'Deux fois par mois',
    price: 'à partir de 145.000 DZD',
  },
  {
    title: 'Djerba Family Pack',
    details: '5 nuits • Hôtel 4★ • Kids friendly',
    depart: 'Départ Batna',
    dates: 'Vacances scolaires',
    price: 'à partir de 95.000 DZD',
  },
];

const destinations = [
  'Tunisie',
  'Türkiye',
  'Omra (KSA)',
  'Égypte',
  'Maroc',
  'Dubaï',
  'Bali',
  'Malaisie',
  'Europe (France, Espagne, Italie)',
];

const Offerings = () => {
  const whatsappBase = 'https://wa.me/213555000111?text=';
  const makeMsg = (trip) =>
    encodeURIComponent(`Salam, je veux réserver: ${trip.title} — ${trip.dates}. Est-ce qu’il reste des places ?`);

  return (
    <section id="offres" className="w-full bg-[#0b0b0b] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Planned Trips */}
        <div className="mb-12">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-orange-400">Voyages organisés</p>
              <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Départs programmés</h2>
              <p className="mt-2 max-w-2xl text-white/70">Des groupes conviviaux, accompagnement depuis Batna et prix négociés.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {trips.map((t) => (
              <div key={t.title} className="relative rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{t.title}</h3>
                  <span className="rounded-md bg-orange-500/15 px-2 py-1 text-xs text-orange-300">{t.price}</span>
                </div>
                <p className="mt-2 text-sm text-white/75">{t.details}</p>
                <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-white/70">
                  <div className="inline-flex items-center gap-2"><Plane className="h-4 w-4 text-orange-400" />{t.depart}</div>
                  <div className="inline-flex items-center gap-2"><Calendar className="h-4 w-4 text-orange-400" />{t.dates}</div>
                </div>
                <a
                  href={`${whatsappBase}${makeMsg(t)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-400 px-4 py-2 text-sm font-medium text-black shadow-lg shadow-orange-500/20 transition hover:brightness-110"
                >
                  <MessageCircle className="h-4 w-4" /> Réserver sur WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Destinations */}
        <div className="mt-4">
          <p className="text-xs uppercase tracking-widest text-orange-400">Destinations</p>
          <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Où voulez‑vous partir ?</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Une sélection qui évolue selon la saison. Demandez‑nous un devis sur mesure, vol seul ou package complet.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {destinations.map((d) => (
              <div key={d} className="group flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm transition hover:border-orange-400/40 hover:bg-white/[0.06]">
                <MapPin className="h-4 w-4 text-orange-400" />
                <span>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
