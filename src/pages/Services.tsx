import { motion } from 'framer-motion';
import { Landmark, Cpu, ShieldCheck, Users, Banknote, Database, Sparkles, GitBranch } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';

const iconsA = [Landmark, Users, ShieldCheck, Banknote];
const iconsB = [Database, Sparkles, GitBranch, Cpu];

export default function Services() {
  const { t } = useI18n();

  return (
    <>
      <section className="bg-executive text-primary-foreground py-24 md:py-32">
        <div className="container-page max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="gold-rule" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold">{t.services.eyebrow}</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl leading-tight mb-8">{t.services.title}</h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed max-w-3xl">{t.services.lead}</p>
        </div>
      </section>

      {[
        { pillar: t.services.pillarA, icons: iconsA, dark: false },
        { pillar: t.services.pillarB, icons: iconsB, dark: true },
      ].map(({ pillar, icons, dark }, pi) => (
        <section key={pi} className={`py-24 ${dark ? 'bg-secondary/5 border-y border-border' : 'bg-background'}`}>
          <div className="container-page">
            <div className="mb-16 max-w-2xl">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">{pillar.tag}</div>
              <h2 className="font-display text-3xl md:text-5xl text-foreground">{pillar.title}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-px bg-border">
              {pillar.items.map((item: any, i: number) => {
                const Icon = icons[i] ?? Landmark;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="bg-card p-10 group hover:bg-accent/5 transition"
                  >
                    <Icon className="size-8 text-gold mb-6" strokeWidth={1.25} />
                    <h3 className="font-display text-xl md:text-2xl text-foreground mb-3 group-hover:text-primary transition">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{item.body}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
