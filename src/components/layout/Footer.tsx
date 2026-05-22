import { Link } from 'react-router-dom';
import { Linkedin, Mail, MapPin } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-executive text-primary-foreground mt-24">
      <div className="container-wide py-16 grid gap-12 md:grid-cols-3">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="size-10 grid place-items-center bg-gold text-primary font-display text-lg">M</span>
            <div className="leading-tight">
              <div className="font-display text-lg">{t.meta.brand}</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-primary-foreground/60">
                {t.meta.brandFull}
              </div>
            </div>
          </div>
          <p className="text-sm text-primary-foreground/70 max-w-xs leading-relaxed">
            {t.footer.tagline}
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold mb-5">
            {t.footer.sections.navigate}
          </h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li><Link to="/about" className="hover:text-gold transition">{t.nav.about}</Link></li>
            <li><Link to="/services" className="hover:text-gold transition">{t.nav.services}</Link></li>
            <li><Link to="/case-studies" className="hover:text-gold transition">{t.nav.cases}</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition">{t.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold mb-5">
            {t.footer.sections.contact}
          </h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-center gap-2"><MapPin className="size-4 text-gold" /> {t.contact.details.location}</li>
            <li className="flex items-center gap-2"><Mail className="size-4 text-gold" /> consult@example.com</li>
            <li className="flex items-center gap-2"><Linkedin className="size-4 text-gold" /> LinkedIn</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-6 text-xs text-primary-foreground/50 flex flex-col md:flex-row justify-between gap-2">
          <span>© {year} {t.meta.brand}. {t.footer.rights}</span>
          <span className="tracking-widest uppercase">{t.contact.details.response}</span>
        </div>
      </div>
    </footer>
  );
}
