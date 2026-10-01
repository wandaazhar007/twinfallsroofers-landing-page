'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { site } from '@/content/site';
import { services } from '@/content/services';
import { areas } from '@/content/areas';
import { PhoneLink } from '@/components/ui/PhoneLink';
import { trackEstimateFormSubmit } from '@/lib/tracking';
import styles from './EstimateForm.module.scss';

// US phone numbers, loosely formatted: 2084404006, 208-440-4006, (208) 440-4006, etc.
const PHONE_REGEX = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

const formSchema = z.object({
  name: z.string().trim().min(2, 'Enter your full name'),
  phone: z.string().trim().regex(PHONE_REGEX, 'Enter a valid US phone number'),
  email: z.union([z.literal(''), z.string().trim().email('Enter a valid email address')]),
  city: z.string().min(1, 'Select your city'),
  service: z.string().min(1, 'Select a service'),
  message: z.string().optional(),
  // Honeypot: real visitors never see or fill this field. See docs/04-spesifikasi-konten.md #9.
  _gotcha: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const CITY_OPTIONS = ['Twin Falls', ...areas.map((area) => area.name), 'Other'];

type Status = 'idle' | 'submitting' | 'success' | 'error' | 'preview';

export function EstimateForm() {
  const [status, setStatus] = useState<Status>('idle');
  // Formspree endpoint (https://formspree.io/f/<form-id>) — see docs/04-spesifikasi-konten.md section 9.
  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
  // Without an endpoint the form still renders in development so the UI can be built and tested;
  // submissions are logged to the console instead of sent. Production falls back to the phone button.
  const isPreview = !endpoint && process.env.NODE_ENV === 'development';

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      city: '',
      service: '',
      message: '',
      _gotcha: '',
    },
  });

  if (!endpoint && !isPreview) {
    return (
      <div className={styles.fallback}>
        <p>Online estimate requests aren&apos;t available right now. Call us instead:</p>
        <PhoneLink location="contact" />
      </div>
    );
  }

  const onSubmit = async (values: FormValues) => {
    if (values._gotcha) {
      // Honeypot tripped — pretend success without actually submitting anything.
      setStatus('success');
      reset();
      return;
    }

    const payload = { ...values, _subject: `New estimate request from ${values.name}` };

    if (!endpoint) {
      console.info(
        'EstimateForm preview — not sent (NEXT_PUBLIC_FORM_ENDPOINT is not set):',
        payload,
      );
      setStatus('preview');
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Form submission failed');

      setStatus('success');
      trackEstimateFormSubmit();
      reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      {isPreview ? (
        <p className={styles.previewNote}>
          Preview mode (development only): NEXT_PUBLIC_FORM_ENDPOINT is not set, so submissions are
          logged to the console instead of sent.
        </p>
      ) : null}

      <div className={styles.field}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          {...register('name')}
        />
        {errors.name ? <p className={styles.error}>{errors.name.message}</p> : null}
      </div>

      <div className={styles.field}>
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          aria-invalid={Boolean(errors.phone)}
          {...register('phone')}
        />
        {errors.phone ? <p className={styles.error}>{errors.phone.message}</p> : null}
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email (optional)</label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          {...register('email')}
        />
        {errors.email ? <p className={styles.error}>{errors.email.message}</p> : null}
      </div>

      <div className={styles.field}>
        <label htmlFor="city">Property City</label>
        <select id="city" defaultValue="" aria-invalid={Boolean(errors.city)} {...register('city')}>
          <option value="" disabled>
            Select a city
          </option>
          {CITY_OPTIONS.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        {errors.city ? <p className={styles.error}>{errors.city.message}</p> : null}
      </div>

      <div className={styles.field}>
        <label htmlFor="service">Service Needed</label>
        <select
          id="service"
          defaultValue=""
          aria-invalid={Boolean(errors.service)}
          {...register('service')}
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((service) => (
            <option key={service.slug} value={service.name}>
              {service.name}
            </option>
          ))}
          <option value="Not sure">Not sure</option>
        </select>
        {errors.service ? <p className={styles.error}>{errors.service.message}</p> : null}
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Message (optional)</label>
        <textarea id="message" rows={4} {...register('message')} />
        <p className={styles.photoNote}>
          Want to send photos of the damage? Call us{site.email ? ' or reply to our email' : ''}{' '}
          instead — this form doesn&apos;t accept file uploads.
        </p>
      </div>

      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="_gotcha">Leave this field blank</label>
        <input id="_gotcha" type="text" tabIndex={-1} autoComplete="off" {...register('_gotcha')} />
      </div>

      <button type="submit" className={styles.submit} disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Request Free Estimate'}
      </button>

      <p className={styles.privacyNote}>
        See our <Link href="/privacy-policy/">Privacy Policy</Link>.
      </p>

      <div aria-live="polite">
        {status === 'success' ? (
          <p className={styles.success}>
            Thanks! We received your request and will be in touch soon.
          </p>
        ) : null}
        {status === 'preview' ? (
          <p className={styles.previewNote}>
            Preview only: the form is valid, but nothing was sent.
          </p>
        ) : null}
        {status === 'error' ? (
          <p className={styles.error}>
            Something went wrong sending your request. Please call us instead at {site.phone}.
          </p>
        ) : null}
      </div>

      <p className={styles.phoneFallback}>
        Prefer to talk? <PhoneLink location="contact" />
      </p>
    </form>
  );
}
