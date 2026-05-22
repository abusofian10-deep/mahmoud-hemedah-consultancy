import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, MapPinned, Briefcase } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';
import { Button } from '@/components/ui/button';

export default function About() {
  const { t, locale } = useI18n();
  const isRTL = locale === 'ar';

  return (
    <>
      <section className="bg-executive text-primary-foreground py-24 md:py-32">
        <div className="container-page max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="gold-rule" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold">{t.about.eyebrow}</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl leading-tight mb-8">{t.about.title}</h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">{t.about.lead}</p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container-page grid md:grid-cols-12 gap-12">
          <div className="md:col-span-7 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p className="text-foreground/90 text-xl">{t.about.body1}</p>
            <p>{t.about.body2}</p>
          </div>
          <aside className="md:col-span-5 space-y-6">
            {[
              { Icon: GraduationCap, label: locale === 'ar' ? 'التعليم' : 'Education', value: locale === 'ar' ? 'ماجستير إدارة أعمال × 2 — أوروبا والولايات المتحدة' : 'Dual MBA — Europe & United States' },
              { Icon: Briefcase, label: locale === 'ar' ? 'الخبرة' : 'Experience', value: locale === 'ar' ? '+17 عامًا في المناصب التنفيذية' : '17+ years in executive roles' },
              { Icon: MapPinned, label: locale === 'ar' ? 'الجغرافيا' : 'Geography', value: locale === 'ar' ? 'مصر · الخليج · سلطنة عُمان' : 'Egypt · Gulf · Sultanate of Oman' },
            ].map(({ Icon, label, value }, i) => (
              <div key={i} className="border-s-2 border-gold ps-5 py-2">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  <Icon className="size-4 text-gold" strokeWidth={1.5} />
                  {label}
                </div>
                <div className="font-display text-lg text-foreground">{value}</div>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section className="py-24 bg-secondary/5 border-t border-border">
        <div className="container-page">
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-12">{t.about.pillarsTitle}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.about.pillars.map((p: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card border border-border p-8 h-full"
              >
                <div className="font-display text-5xl text-gold/30 mb-4">0{i + 1}</div>
                <h3 className="font-display text-xl text-foreground mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-page text-center">
          <Link to="/contact">
            <Button size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 px-10 h-12">
              {t.hero.ctaPrimary}
              <ArrowRight className={`size-4 ${isRTL ? 'rotate-180' : ''}`} />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
