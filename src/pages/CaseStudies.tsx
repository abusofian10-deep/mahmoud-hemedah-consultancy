import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';
import { Button } from '@/components/ui/button';

export default function CaseStudies() {
  const { t, locale } = useI18n();
  const isRTL = locale === 'ar';

  return (
    <>
      <section className="bg-executive text-primary-foreground py-24 md:py-32">
        <div className="container-page max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="gold-rule" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold">{t.cases.eyebrow}</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl leading-tight mb-8">{t.cases.title}</h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">{t.cases.lead}</p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container-page space-y-6">
          {t.cases.items.map((c: any, i: number) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border shadow-soft grid md:grid-cols-12 gap-8 p-10"
            >
              <div className="md:col-span-3">
                <div className="font-display text-6xl text-gold/30 leading-none mb-3">0{i + 1}</div>
                <div className="text-xs uppercase tracking-[0.25em] text-gold">{c.sector}</div>
              </div>
              <div className="md:col-span-9 space-y-5">
                <h2 className="font-display text-2xl md:text-3xl text-foreground">{c.title}</h2>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-1">
                    {locale === 'ar' ? 'التحدي' : 'Challenge'}
                  </div>
                  <p className="text-foreground/85 leading-relaxed">{c.challenge}</p>
                </div>
                <div className="border-s-2 border-gold ps-5">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-1">
                    {locale === 'ar' ? 'النتيجة' : 'Outcome'}
                  </div>
                  <p className="text-foreground leading-relaxed">{c.outcome}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="py-20 bg-secondary/5 border-t border-border">
        <div className="container-page text-center">
          <h3 className="font-display text-2xl md:text-3xl mb-6 text-foreground">{t.cta.ribbonTitle}</h3>
          <Link to="/contact">
            <Button size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 px-10 h-12">
              {t.cta.ribbonBtn}
              <ArrowRight className={`size-4 ${isRTL ? 'rotate-180' : ''}`} />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
