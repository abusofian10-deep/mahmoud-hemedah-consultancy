import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Cpu, ShieldCheck, Landmark } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';
import { Button } from '@/components/ui/button';

export default function Home() {
  const { t, locale } = useI18n();
  const isRTL = locale === 'ar';

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-executive text-primary-foreground">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <div className="absolute -top-32 -end-32 size-[500px] rounded-full bg-gold/10 blur-3xl" />
        <div className="container-page relative pt-24 pb-32 md:pt-32 md:pb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="gold-rule" />
              <span className="text-xs uppercase tracking-[0.3em] text-gold">{t.hero.eyebrow}</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] mb-8">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/75 leading-relaxed max-w-2xl mb-10">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="rounded-none bg-gold text-primary hover:bg-gold/90 px-8 h-12">
                  {t.hero.ctaPrimary}
                  <ArrowRight className={`size-4 ${isRTL ? 'rotate-180' : ''}`} />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="rounded-none bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 h-12">
                  {t.hero.ctaSecondary}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Stat strip */}
        <div className="relative border-t border-primary-foreground/10 bg-surface-deep/40 backdrop-blur">
          <div className="container-page grid grid-cols-1 md:grid-cols-3">
            {[t.hero.stat1, t.hero.stat2, t.hero.stat3].map((s, i) => (
              <div key={i} className="py-8 md:py-10 md:px-8 border-b md:border-b-0 md:border-e border-primary-foreground/10 last:border-0">
                <div className="font-display text-3xl md:text-4xl text-gold mb-1">{s.value}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY teaser */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container-page grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <span className="gold-rule" />
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{t.about.eyebrow}</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl leading-tight text-foreground">
              {t.about.title}
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p className="text-foreground/90">{t.about.lead}</p>
            <p>{t.about.body1}</p>
            <Link to="/about" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-foreground border-b border-gold pb-1 hover:text-gold transition">
              {t.nav.about}
              <ArrowRight className={`size-4 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES preview */}
      <section className="py-24 md:py-32 bg-secondary/5 border-y border-border">
        <div className="container-page">
          <div className="max-w-2xl mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="gold-rule" />
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{t.services.eyebrow}</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-foreground mb-4">{t.services.title}</h2>
            <p className="text-muted-foreground text-lg">{t.services.lead}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { tag: t.services.pillarA.tag, title: t.services.pillarA.title, items: t.services.pillarA.items, Icon: Landmark },
              { tag: t.services.pillarB.tag, title: t.services.pillarB.title, items: t.services.pillarB.items, Icon: Cpu },
            ].map(({ tag, title, items, Icon }, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card border border-border p-10 shadow-soft"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">{tag}</div>
                    <h3 className="font-display text-2xl md:text-3xl text-foreground">{title}</h3>
                  </div>
                  <Icon className="size-8 text-gold/70" strokeWidth={1.25} />
                </div>
                <ul className="space-y-3">
                  {items.slice(0, 4).map((it: any, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                      <span className="size-1 bg-gold rounded-full mt-2 shrink-0" />
                      <span>{it.title}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link to="/services" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-foreground border-b border-gold pb-1 hover:text-gold transition">
              {t.nav.services}
              <ArrowRight className={`size-4 ${isRTL ? 'rotate-180' : ''}`} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Ribbon */}
      <section className="py-20 bg-executive text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ background: 'radial-gradient(ellipse at center, hsl(38 48% 52%) 0%, transparent 70%)' }} />
        <div className="container-page relative grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8">
            <h3 className="font-display text-3xl md:text-4xl mb-3">{t.cta.ribbonTitle}</h3>
            <p className="text-primary-foreground/75 text-lg max-w-xl">{t.cta.ribbonBody}</p>
          </div>
          <div className="md:col-span-4 md:text-end">
            <Link to="/contact">
              <Button size="lg" className="rounded-none bg-gold text-primary hover:bg-gold/90 px-8 h-12">
                {t.cta.ribbonBtn}
                <ArrowRight className={`size-4 ${isRTL ? 'rotate-180' : ''}`} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
