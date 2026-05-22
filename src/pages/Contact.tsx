import { useState } from 'react';
import { z } from 'zod';
import { Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function Contact() {
  const { t } = useI18n();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const schema = z.object({
    name: z.string().trim().min(2, t.contact.form.errorName).max(100),
    email: z.string().trim().email(t.contact.form.errorEmail).max(255),
    company: z.string().trim().max(150).optional().or(z.literal('')),
    role: z.string().trim().max(120).optional().or(z.literal('')),
    message: z.string().trim().min(10, t.contact.form.errorMessage).max(2000),
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((iss) => {
        errs[String(iss.path[0])] = iss.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  }

  return (
    <>
      <section className="bg-executive text-primary-foreground py-24 md:py-28">
        <div className="container-page max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="gold-rule" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold">{t.contact.eyebrow}</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl leading-tight mb-6">{t.contact.title}</h1>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">{t.contact.lead}</p>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container-page grid md:grid-cols-12 gap-12">
          <aside className="md:col-span-4 space-y-6">
            {[
              { Icon: MapPin, value: t.contact.details.location },
              { Icon: Clock, value: t.contact.details.response },
              { Icon: Mail, value: 'consult@example.com' },
            ].map(({ Icon, value }, i) => (
              <div key={i} className="border-s-2 border-gold ps-5 py-1">
                <Icon className="size-5 text-gold mb-2" strokeWidth={1.5} />
                <div className="text-foreground">{value}</div>
              </div>
            ))}
            <div className="bg-secondary/10 border border-border p-6 mt-8">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                {t.contact.details.availability}
              </div>
            </div>
          </aside>

          <div className="md:col-span-8">
            {submitted ? (
              <div className="bg-card border border-border p-10 text-center space-y-4 shadow-soft">
                <CheckCircle2 className="size-12 text-gold mx-auto" strokeWidth={1.25} />
                <p className="font-display text-2xl text-foreground">{t.contact.form.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card border border-border p-8 md:p-10 space-y-5 shadow-soft" noValidate>
                <div className="grid md:grid-cols-2 gap-5">
                  <Field id="name" label={t.contact.form.name} error={errors.name}>
                    <Input id="name" name="name" required maxLength={100} className="rounded-none h-11" />
                  </Field>
                  <Field id="email" label={t.contact.form.email} error={errors.email}>
                    <Input id="email" name="email" type="email" required maxLength={255} className="rounded-none h-11" />
                  </Field>
                  <Field id="company" label={t.contact.form.company}>
                    <Input id="company" name="company" maxLength={150} className="rounded-none h-11" />
                  </Field>
                  <Field id="role" label={t.contact.form.role}>
                    <Input id="role" name="role" maxLength={120} className="rounded-none h-11" />
                  </Field>
                </div>
                <Field id="message" label={t.contact.form.message} error={errors.message}>
                  <Textarea id="message" name="message" required rows={6} maxLength={2000} className="rounded-none" />
                </Field>
                <Button type="submit" size="lg" className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90 px-10 h-12 w-full md:w-auto">
                  {t.contact.form.submit}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
