import { Link } from 'react-router-dom';
import { Dumbbell, Instagram, Twitter, Youtube, Facebook, ArrowUp, Phone, Mail, MapPin } from 'lucide-react';

const col1 = [
  { to: '/about', label: 'About Us' },
  { to: '/trainers', label: 'Our Trainers' },
  { to: '/classes', label: 'Classes' },
  { to: '/gallery', label: 'Gallery' },
];
const col2 = [
  { to: '/membership', label: 'Membership' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
  { to: '/dashboard', label: 'Dashboard' },
];
const socials = [Instagram, Twitter, Youtube, Facebook];

export default function Footer() {
  return (
    <footer className="bg-surface-50 border-t border-white/5">
      <div className="container-xl pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-brand-500 rounded-lg flex items-center justify-center">
                <Dumbbell className="w-4 h-4 text-white" />
              </div>
              <div className="leading-none">
                <span className="text-lg font-black tracking-tight">TITAN</span>
                <span className="block text-[8px] font-bold tracking-[0.2em] text-brand-500 uppercase">Fitness Gym</span>
              </div>
            </Link>
            <p className="text-sm text-surface-900 leading-relaxed mb-5">
              Transform your body and mind with world-class training at Titan Fitness Gym. Serving our community for over 10 years.
            </p>
            <div className="flex gap-2">
              {socials.map((I, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-surface-900 hover:bg-brand-500/20 hover:text-brand-400 transition-all">
                  <I className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Explore</h4>
            <ul className="space-y-2.5">
              {col1.map(l => <li key={l.to}><Link to={l.to} className="text-sm text-surface-900 hover:text-white transition-colors">{l.label}</Link></li>)}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {col2.map(l => <li key={l.to}><Link to={l.to} className="text-sm text-surface-900 hover:text-white transition-colors">{l.label}</Link></li>)}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-surface-900"><MapPin className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />742 Titan Boulevard, Metro City, MC 10001</li>
              <li className="flex items-center gap-3 text-sm text-surface-900"><Phone className="w-4 h-4 text-brand-500 shrink-0" />(555) 432-8765</li>
              <li className="flex items-center gap-3 text-sm text-surface-900"><Mail className="w-4 h-4 text-brand-500 shrink-0" />hello@titanfitness.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-surface-800">&copy; {new Date().getFullYear()} Titan Fitness Gym. All rights reserved.</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-surface-900 hover:bg-brand-500/20 hover:text-brand-400 transition-all" aria-label="Back to top">
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
