import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeToggle } from './ThemeToggle';
import { useI18n } from '@/i18n/I18nProvider';
import { cn } from '@/lib/utils';

export function Header() {
  const { t, locale, toggleLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/services', label: t.nav.services },
    { to: '/case-studies', label: t.nav.cases },
    { to: '/contact', label: t.nav.contact },
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/85 backdrop-blur-xl border-b border-border'
          : 'bg-background/40 backdrop-blur-sm'
      )}
    >
      <div className="container-wide flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="size-9 grid place-items-center bg-primary text-primary-foreground font-display text-base">
            M
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-base tracking-wide text-foreground">
              {t.meta.brand}
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {t.meta.brandFull}
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                cn(
                  'text-sm tracking-wide transition-colors relative py-2',
                  isActive
                    ? 'text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                )
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-px left-0 right-0 h-px bg-gold"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLocale}
            className="gap-1.5 text-xs uppercase tracking-widest"
            aria-label="Toggle language"
          >
            <Globe className="size-4" />
            {locale === 'en' ? 'AR' : 'EN'}
          </Button>
          <ThemeToggle />
          <Link to="/contact" className="hidden md:inline-flex">
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none">
              {t.nav.cta}
            </Button>
          </Link>
          <div className="lg:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side={locale === 'ar' ? 'left' : 'right'} className="w-72">
                <nav className="flex flex-col gap-1 mt-10">
                  {links.map((l) => (
                    <NavLink
                      key={l.to}
                      to={l.to}
                      end={l.to === '/'}
                      className={({ isActive }) =>
                        cn(
                          'py-3 border-b border-border text-base tracking-wide',
                          isActive ? 'text-foreground' : 'text-muted-foreground'
                        )
                      }
                    >
                      {l.label}
                    </NavLink>
                  ))}
                  <Link to="/contact" className="mt-6">
                    <Button className="w-full bg-primary text-primary-foreground rounded-none">
                      {t.nav.cta}
                    </Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
