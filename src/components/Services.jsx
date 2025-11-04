import React from 'react';
import { Plane, Bed, Shield, Calendar, BadgeCheck } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Billets d’avion',
    desc: 'Meilleurs itinéraires au départ de Batna, Alger et Constantine.'
  },
  {
    icon: Bed,
    title: 'Hôtels sélectionnés',
    desc: 'Partenariats vérifiés en Tunisie, Türkiye et pour l’Omra.'
  },
  {
    icon: Calendar,
    title: 'Voyages organisés',
    desc: 'Dates fixes, programme clair, accompagnement sur place.'
  },
  {
    icon: Shield,
    title: 'Visa & assurances',
    desc: 'Dossiers optimisés, conseils et assurance voyage fiable.'
  }
];

const Services = () => {
  return (
    <section id="services" className="relative w-full bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs uppercase tracking-widest text-orange-400">Nos services</p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">Tout pour un voyage sans stress</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              On s’occupe de tout: de la réservation du billet jusqu’à votre check-in hôtel. Prix clairs et assistance locale.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs text-orange-300">
            <BadgeCheck className="h-3.5 w-3.5" />
            <span>Garantie transparence des prix</span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.06]">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-orange-500/15 p-2 text-orange-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-medium">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
