import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Dumbbell } from 'lucide-react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/classes', label: 'Classes' },
  { to: '/trainers', label: 'Trainers' },
  { to: '/membership', label: 'Membership' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setOpen(false); }, [loc.pathname]);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 ${scrolled ? 'bg-surface-50/95 backdrop-blur-xl shadow-xl shadow-black/30 border-b border-white/5' : 'bg-transparent'}`}>
      <div className="container-xl flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-brand-500 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
            <Dumbbell className="w-5 h-5 text-white" />
          </div>
          <div className="leading-none">
            <span className="text-xl font-black tracking-tight text-white">TITAN</span>
            <span className="block text-[9px] font-bold tracking-[0.25em] text-brand-500 uppercase">Fitness Gym</span>
          </div>
        </Link>

        <div className="hidden xl:flex items-center gap-0.5">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-3 py-2 text-sm font-semibold transition-colors duration-200 rounded-lg ${
                loc.pathname === l.to ? 'text-brand-400 bg-brand-500/10' : 'text-surface-900 hover:text-white hover:bg-white/5'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden xl:flex items-center gap-3">
          <Link to="/dashboard" className="btn-ghost text-sm">Login</Link>
          <Link to="/membership" className="btn-primary text-sm !px-5 !py-2.5">Join Now</Link>
        </div>

        <button onClick={() => setOpen(!open)} className="xl:hidden p-2 text-white" aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div className={`xl:hidden transition-all duration-400 overflow-hidden ${open ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="container-xl pb-6 space-y-1">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className={`block px-4 py-3 text-sm font-semibold rounded-lg transition-colors ${loc.pathname === l.to ? 'text-brand-400 bg-brand-500/10' : 'text-surface-900 hover:text-white hover:bg-white/5'}`}>
              {l.label}
            </Link>
          ))}
          <div className="flex gap-3 pt-4 px-4">
            <Link to="/dashboard" className="btn-ghost text-sm flex-1">Login</Link>
            <Link to="/membership" className="btn-primary text-sm flex-1">Join Now</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
