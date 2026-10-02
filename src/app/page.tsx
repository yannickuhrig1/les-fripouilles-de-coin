import React from 'react';
import Image from 'next/image';
import { 
  Heart, 
  Sparkles, 
  ShoppingBag, 
  MapPin, 
  ExternalLink, 
  CheckCircle2, 
  Clock, 
  Shirt, 
  Baby, 
  Recycle, 
  Calendar, 
  ThumbsUp, 
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  PackageCheck,
  Store,
  Compass
} from 'lucide-react';

const FACEBOOK_URL = 'https://www.facebook.com/LesFripouillesdeCoin';
const INSTAGRAM_URL = 'https://www.instagram.com/les_fripouilles_de_coin/';
const VINTED_URL = 'https://www.vinted.fr/member/250312169-lesfripouillesdecoin';
const CALVINO_URL = 'https://calvinolocation.fr';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. Bandeau supérieur d'information locale */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-medium">Friperie locale & seconde main à Coin-lès-Cuvry (Moselle)</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1">
              <MapPin size={13} className="text-pink-400" />
              71 Rue de la Fontenelle (57420)
            </span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <a 
              href={CALVINO_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:inline hover:text-amber-400 transition-colors"
            >
              À la même adresse que Calvino BTP & Élec ↗
            </a>
          </div>
        </div>
      </div>

      {/* 2. En-tête / Barre de navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-pink-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-28 relative rounded-xl overflow-hidden bg-white p-1 border border-pink-200/60 shadow-sm flex items-center justify-center">
              <Image 
                src="/assets/les-fripouilles-logo.jpg" 
                alt="Logo Les Fripouilles de Coin" 
                width={110} 
                height={46} 
                className="object-contain h-full w-auto"
                priority
              />
            </div>
            <div>
              <h1 className="text-lg font-black tracking-tight text-slate-900 leading-tight">
                Les Fripouilles de Coin
              </h1>
              <p className="text-xs text-pink-600 font-semibold">
                Friperie & Mode Circulaire
              </p>
            </div>
          </div>

          {/* Liens réseaux rapides */}
          <div className="flex items-center gap-2">
            <a 
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs font-bold transition-colors"
              title="Page Facebook officielle"
            >
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="hidden sm:inline">Facebook</span>
            </a>

            <a 
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white text-xs font-bold transition-transform active:scale-95 shadow-sm"
              style={{ background: 'linear-gradient(45deg, #f09433, #dc2743, #bc1888)' }}
              title="Compte Instagram officiel"
            >
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span className="hidden sm:inline">Instagram</span>
            </a>

            <a 
              href={VINTED_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#09b1ba] hover:bg-[#079aa1] text-white text-xs font-bold transition-transform active:scale-95 shadow-sm"
              title="Dressing Vinted officiel"
            >
              <ShoppingBag size={14} />
              <span className="hidden sm:inline">Vinted</span>
            </a>
          </div>
        </div>
      </header>

      {/* 3. Hero Section Principale */}
      <section className="relative px-4 pt-8 pb-14 bg-gradient-to-b from-pink-50/80 via-white to-slate-50 overflow-hidden">
        {/* Cercles diffus décoratifs */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-amber-200/20 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          
          {/* Badge logo principal */}
          <div className="inline-block p-1.5 bg-gradient-to-r from-pink-500 via-rose-400 to-amber-400 rounded-3xl shadow-xl mb-6 transform hover:scale-[1.02] transition-transform">
            <div className="bg-white rounded-[22px] px-8 py-3.5 flex items-center justify-center">
              <Image 
                src="/assets/les-fripouilles-logo.jpg" 
                alt="Les Fripouilles de Coin" 
                width={240} 
                height={95}
                className="object-contain h-20 w-auto"
                priority
              />
            </div>
          </div>

          {/* Badge local */}
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-pink-100 text-pink-800 text-xs font-bold uppercase tracking-wider border border-pink-200">
              <Heart size={13} className="text-pink-600 fill-pink-600" />
              Friperie Locale • Coin-lès-Cuvry (Moselle 57)
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight max-w-3xl mx-auto leading-tight mb-4">
            La friperie conviviale & engagée pour toute la famille 👗
          </h2>

          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            Donnez une seconde vie à votre dressing ! Pièces sélectionnées avec amour, pépites enfants, femmes, hommes et puériculture à <strong>prix tout doux</strong>.
          </p>

          {/* 3 Canaux d'Action Principaux */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 max-w-2xl mx-auto mb-6">
            {/* Facebook */}
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#1877f2] hover:bg-[#166fe5] text-white font-extrabold text-sm sm:text-base shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-0.5"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Page Facebook</span>
              <ExternalLink size={15} />
            </a>

            {/* Instagram */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl text-white font-extrabold text-sm sm:text-base shadow-lg shadow-pink-500/25 transition-all hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(45deg, #f09433, #dc2743, #bc1888)' }}
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Instagram</span>
              <ExternalLink size={15} />
            </a>

            {/* Vinted */}
            <a
              href={VINTED_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#09b1ba] hover:bg-[#079aa1] text-white font-extrabold text-sm sm:text-base shadow-lg shadow-teal-500/25 transition-all hover:-translate-y-0.5"
            >
              <ShoppingBag size={20} />
              <span>Dressing Vinted</span>
              <ExternalLink size={15} />
            </a>
          </div>

          <p className="text-xs text-slate-500">
            ✨ Arrivages réguliers présentés en story • Réservations faciles en message direct • Retrait gratuit sur place ou expédition Vinted
          </p>
        </div>
      </section>

      {/* 4. Les 3 Grands Piliers */}
      <section className="py-12 px-4 bg-white border-y border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-pink-600 bg-pink-50 px-3 py-1 rounded-full border border-pink-100">
              Nos Engagements
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
              Pourquoi choisir la seconde main avec Les Fripouilles ?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pilier 1 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-pink-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center mb-4">
                <Recycle size={24} />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Mode Circulaire & Zéro Déchet</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Chaque vêtement réemployé permet d’économiser des milliers de litres d’eau et réduit notre empreinte carbone. Une démarche écologique et pleine de bon sens.
              </p>
            </div>

            {/* Pilier 2 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-amber-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
                <Sparkles size={24} />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Sélection Rigoureuse</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Toutes les pièces sont soigneusement inspectées, nettoyées et triées à la main. Pas de mauvaises surprises : que des vêtements en parfait état et prêts à être portés !
              </p>
            </div>

            {/* Pilier 3 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                <Heart size={24} />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Proximité & Petits Prix</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Un accueil chaleureux à Coin-lès-Cuvry, des conseils attentifs pour toute la famille, et des prix accessibles permettant d&apos;habiller petits et grands sans compromis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Les Univers & Rayons */}
      <section className="py-14 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-pink-600 bg-pink-100 px-3 py-1 rounded-full">
              Collections
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
              Que trouve-t-on chez Les Fripouilles ?
            </h3>
            <p className="text-sm text-slate-500 mt-2 max-w-xl mx-auto">
              Des arrivages constants au fil des saisons pour renouveler le dressing de toute la maisonnée.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Univers 1 */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/70 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center mb-3">
                <Baby size={20} />
              </div>
              <h4 className="font-bold text-slate-900 mb-1">Bébés & Enfants</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                De la naissance à l&apos;adolescence : bodies, ensembles, pyjamas, manteaux et chaussures pour grandir sans se ruiner.
              </p>
            </div>

            {/* Univers 2 */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/70 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center mb-3">
                <Shirt size={20} />
              </div>
              <h4 className="font-bold text-slate-900 mb-1">Mode Femme & Homme</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Pépites du quotidien, basiques de qualité, mailles, vestes et tenues de saison sélectionnées avec goût.
              </p>
            </div>

            {/* Univers 3 */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/70 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-3">
                <ShoppingBag size={20} />
              </div>
              <h4 className="font-bold text-slate-900 mb-1">Puériculture & Jouets</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Accessoires pour poussettes, sacs à langer, livres d&apos;éveil et jeux pour accompagner les premiers pas de bébé.
              </p>
            </div>

            {/* Univers 4 */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200/70 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
                <Sparkles size={20} />
              </div>
              <h4 className="font-bold text-slate-900 mb-1">Arrivages & Ventes Flash</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Pièces uniques publiées chaque semaine sur nos réseaux avec option de réservation express en un message !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Comment ça marche ? (3 canaux) */}
      <section className="py-14 px-4 bg-white border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-pink-600 bg-pink-50 px-3 py-1 rounded-full">
              Simple & Pratique
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
              Comment chiner nos pépites ?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Étape 1 */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50/50 to-white border border-blue-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase text-blue-600 bg-blue-100 px-2.5 py-1 rounded-lg">
                    Canal 1 • Facebook
                  </span>
                  <ExternalLink size={16} className="text-blue-400" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Publications & Réservations</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Suivez nos arrivages réguliers en photo, commentez ou envoyez un message privé pour bloquer votre coup de cœur !
                </p>
              </div>
              <a 
                href={FACEBOOK_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800"
              >
                Rejoindre la page Facebook →
              </a>
            </div>

            {/* Étape 2 */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-pink-50/50 to-white border border-pink-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase text-pink-600 bg-pink-100 px-2.5 py-1 rounded-lg">
                    Canal 2 • Instagram
                  </span>
                  <ExternalLink size={16} className="text-pink-400" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Stories & Lookbook</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Découvrez les tenues portées, les coulisses de la boutique et les ventes flash directement dans nos stories Instagram.
                </p>
              </div>
              <a 
                href={INSTAGRAM_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-pink-600 hover:text-pink-800"
              >
                Voir le compte Instagram →
              </a>
            </div>

            {/* Étape 3 */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-50/50 to-white border border-teal-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase text-teal-700 bg-teal-100 px-2.5 py-1 rounded-lg">
                    Canal 3 • Vinted
                  </span>
                  <ExternalLink size={16} className="text-teal-400" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Achat & Envoi Sécurisé</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Commandez en 1 clic sur notre dressing officiel avec protection acheteur et livraison partout en France (Mondial Relay, Chronopost...).
                </p>
              </div>
              <a 
                href={VINTED_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-900"
              >
                Accéder au dressing Vinted →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Localisation & Partenariat Entreprise Calvino */}
      <section className="py-14 px-4 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs font-bold border border-pink-500/30">
                <Store size={13} />
                Boutique Locale & Synergie Familiale
              </span>

              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight">
                Retrouvez-nous au 71 Rue de la Fontenelle à Coin-lès-Cuvry
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                La boutique <strong>Les Fripouilles de Coin</strong> partage son adresse avec l&apos;Entreprise <strong>CALVINO</strong> (Artisan électricien & Location de matériel BTP), gérée par son époux Gaëtan Calvino.
              </p>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wide">
                  <Compass size={14} />
                  <span>Proximité Metz & Moselle Sud</span>
                </div>
                <p className="text-xs text-slate-400">
                  À seulement 10 minutes de Metz Sud, Marly, Augny, Verny et Montigny-lès-Metz. Facile d&apos;accès avec stationnement pratique sur place.
                </p>
              </div>

              <div className="pt-2">
                <a 
                  href={CALVINO_URL}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  <span>Découvrir Calvino Location & Travaux Élec</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Carte contact rapide */}
            <div className="lg:col-span-5 bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-4">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Clock size={16} className="text-pink-400" />
                <span>Horaires & Ventes Privées</span>
              </h4>

              <p className="text-xs text-slate-300 leading-relaxed">
                Les ouvertures physiques et ventes privées sont communiquées chaque semaine sur nos pages Facebook et Instagram. Retrait de commandes également possible sur rendez-vous.
              </p>

              <div className="border-t border-slate-700 pt-4 space-y-2">
                <a 
                  href="https://maps.google.com/?q=71+Rue+de+la+Fontenelle,+57420+Coin-lès-Cuvry" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-xs font-bold text-white transition-colors"
                >
                  <MapPin size={14} className="text-pink-400" />
                  <span>Itinéraire Google Maps ↗</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Pied de Page */}
      <footer className="bg-slate-950 text-slate-400 text-xs py-8 px-4 border-t border-slate-800">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-bold text-slate-200">Les Fripouilles de Coin</span>
            <span className="text-slate-600">•</span>
            <span>71 Rue de la Fontenelle, 57420 Coin-lès-Cuvry</span>
          </div>

          <div className="flex items-center gap-4">
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              Facebook
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
              Instagram
            </a>
            <a href={VINTED_URL} target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">
              Vinted
            </a>
            <a href={CALVINO_URL} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
              Calvino Groupe
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
