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
      {/* HERO — Split Screen */}
      <section className="relative overflow-hidden bg-executive text-primary-foreground">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="absolute -top-40 -end-40 size-[600px] rounded-full bg-gold/15 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.3 }}
          className="absolute bottom-0 start-0 size-[400px] rounded-full bg-secondary/30 blur-3xl"
        />

        <div className="container-page relative pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center min-h-[70vh]">
            {/* LEFT — copy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="lg:col-span-7"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 56 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="gold-rule" />
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-xs uppercase tracking-[0.3em] text-gold whitespace-nowrap"
                >
                  {t.hero.eyebrow}
                </motion.span>
              </motion.div>

              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.02] mb-8">
                {t.hero.title.split(' ').map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
                    className="inline-block me-[0.25em]"
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-lg md:text-xl text-primary-foreground/75 leading-relaxed max-w-2xl mb-10"
              >
                {t.hero.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/contact">
                  <Button size="lg" className="group rounded-none bg-gold text-primary hover:bg-gold/90 px-8 h-12 shadow-elegant">
                    {t.hero.ctaPrimary}
                    <ArrowRight className={`size-4 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="rounded-none bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 h-12">
                    {t.hero.ctaSecondary}
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* RIGHT — visual panel */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
                {/* Layered frames */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="absolute inset-0 border border-gold/40 translate-x-4 translate-y-4"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 via-primary/60 to-surface-deep border border-primary-foreground/10 backdrop-blur-sm overflow-hidden">
                  {/* Floating tiles */}
                  {[
                    { Icon: Landmark, label: t.hero.stat1.label, value: t.hero.stat1.value, x: '8%', y: '10%', delay: 0.9 },
                    { Icon: Cpu, label: t.hero.stat2.label, value: t.hero.stat2.value, x: '55%', y: '38%', delay: 1.1 },
                    { Icon: ShieldCheck, label: t.hero.stat3.label, value: t.hero.stat3.value, x: '15%', y: '64%', delay: 1.3 },
                  ].map(({ Icon, label, value, x, y, delay }, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.6, delay }}
                      style={{ left: x, top: y }}
                      className="absolute bg-card/95 text-foreground px-4 py-3 shadow-elegant min-w-[140px] backdrop-blur"
                    >
                      <Icon className="size-4 text-gold mb-2" strokeWidth={1.5} />
                      <div className="font-display text-2xl leading-none mb-1">{value}</div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
                    </motion.div>
                  ))}

                  {/* Animated gold accent */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.2, delay: 1.5 }}
                    className="absolute bottom-8 start-8 end-8 h-px bg-gradient-to-r from-transparent via-gold to-transparent origin-left"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.7 }}
                    className="absolute bottom-3 start-8 text-[10px] uppercase tracking-[0.3em] text-gold/80"
                  >
                    Hemedah Consultancy
                  </motion.div>
                </div>
              </div>
            </motion.div>
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
