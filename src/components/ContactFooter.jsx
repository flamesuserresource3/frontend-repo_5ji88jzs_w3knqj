import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Mail } from 'lucide-react';

const ContactFooter = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const submitWhatsApp = (e) => {
    e.preventDefault();
    const text = `Salam, je suis ${name || 'client'} depuis Batna. ${message || 'Je souhaite plus d\'infos sur vos voyages.'}`;
    const url = `https://wa.me/213555000111?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <footer id="contact" className="w-full bg-black pt-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold">Votre agence à Batna</h3>
            <p className="mt-3 text-white/70">
              Nous organisons vos voyages vers la Tunisie, la Türkiye, l’Omra et d’autres destinations prisées. Service humain, conseil honnête et prix transparents.
            </p>
            <div className="mt-4 space-y-2 text-sm text-white/80">
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-orange-400" /> Centre‑ville Batna, Algérie</div>
              <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-orange-400" /> Dim‑Jeu: 09h‑18h • Ven: fermé</div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-orange-400" /> +213 555 00 01 11</div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h4 className="text-lg font-medium">Contactez‑nous</h4>
              <p className="mt-1 text-sm text-white/70">Réponse rapide sur WhatsApp. Dites‑nous où et quand vous souhaitez partir.</p>
              <form onSubmit={submitWhatsApp} className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Votre nom"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-md border border-white/10 bg-black px-3 py-2 text-sm outline-none ring-orange-400/30 placeholder:text-white/40 focus:ring-2"
                />
                <input
                  type="email"
                  placeholder="Email (optionnel)"
                  className="rounded-md border border-white/10 bg-black px-3 py-2 text-sm outline-none ring-orange-400/30 placeholder:text-white/40 focus:ring-2"
                />
                <textarea
                  placeholder="Votre message (ex: 2 adultes + 1 enfant, Tunisie en avril)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="sm:col-span-2 h-28 rounded-md border border-white/10 bg-black px-3 py-2 text-sm outline-none ring-orange-400/30 placeholder:text-white/40 focus:ring-2"
                />
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-orange-500 to-orange-400 px-4 py-2 text-sm font-medium text-black shadow-lg shadow-orange-500/20 transition hover:brightness-110"
                  >
                    <MessageCircle className="h-4 w-4" /> Envoyer sur WhatsApp
                  </button>
                  <a
                    href="mailto:contact@agence-batna.dz"
                    className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10"
                  >
                    <Mail className="h-4 w-4" /> contact@agence-batna.dz
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-sm text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Agence Voyage Batna. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#offres" className="hover:text-white">Offres</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
