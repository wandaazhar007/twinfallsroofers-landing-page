import type { Metadata } from 'next';
import { site } from '@/content/site';
import { buildMetadata } from '@/lib/seo';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { PhoneTextLink } from '@/components/ui/PhoneTextLink';
import styles from './page.module.scss';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy | Canyon Construction Services',
  description:
    'How Canyon Construction Services collects, uses, and protects the information you share through our website and estimate form.',
  path: '/privacy-policy/',
});

// Set to the client's approval date (ISO) — docs/06-pertanyaan-terbuka.md #25. Hidden while null.
const LAST_UPDATED: string | null = null;

const GOOGLE_PRIVACY_POLICY_URL = 'https://policies.google.com/privacy';
const FORMSPREE_PRIVACY_POLICY_URL = 'https://formspree.io/legal/privacy-policy/';

// Mirrors the fields in src/components/forms/EstimateForm.tsx; keep both in sync.
const FORM_FIELDS = [
  'Your name',
  'Your phone number',
  'Your email address (optional)',
  'The city where your property is located',
  'The service you need',
  'Any message you include (optional)',
];

// Draft for client review (docs/09-privacy-policy.md). Sections that depend on unconfirmed facts
// (data sharing beyond the form service, retention period) are omitted — docs/06 #21–#25.
export default function PrivacyPolicyPage() {
  const hasAnalytics = Boolean(site.gtmId);
  const { streetAddress, addressLocality, addressRegion, postalCode } = site.address;
  const mailingAddress = `${streetAddress}, ${addressLocality}, ${addressRegion} ${postalCode}`;

  return (
    <main>
      <div className="container">
        <Breadcrumbs items={[{ name: 'Privacy Policy', path: '/privacy-policy/' }]} />
      </div>

      <section className={`container ${styles.intro}`}>
        <h1>Privacy Policy</h1>
        <p className={styles.lead}>
          This page explains what information {site.businessName} collects through this website, how
          we use it, and how to contact us with questions.
        </p>
        {LAST_UPDATED ? <p className={styles.updated}>Last updated: {LAST_UPDATED}</p> : null}
      </section>

      <section className="section">
        <div className={`container ${styles.prose}`}>
          <h2>Who We Are</h2>
          <p>
            {site.businessName} is a roofing contractor located at {mailingAddress}. You can reach
            us at <PhoneTextLink location="content" />.
          </p>

          <h2>Information We Collect</h2>
          <p>
            When you request an estimate through our online form, we collect the information you
            enter:
          </p>
          <ul>
            {FORM_FIELDS.map((field) => (
              <li key={field}>{field}</li>
            ))}
          </ul>
          <p>
            Like most websites, our web server automatically keeps standard technical logs, such as
            your IP address, browser type, the pages you request, and the time of your visit.
          </p>
          {hasAnalytics ? (
            <p>
              We also use Google Tag Manager to run website analytics. Analytics tools may use
              cookies to collect information such as the pages you visit, how you arrived at our
              site, your browser and device type, and your approximate location.
            </p>
          ) : null}

          <h2>How We Use Your Information</h2>
          <p>
            We use the information you send through the estimate form to contact you about your
            request and to prepare your estimate. Server logs help us keep the website secure and
            working properly.
            {hasAnalytics
              ? ' Analytics information helps us understand how visitors use the website.'
              : ''}
          </p>

          <h2>Third-Party Services</h2>
          <p>
            Some parts of this website rely on outside services, which handle information under
            their own policies:
          </p>
          <ul>
            <li>
              <strong>Formspree.</strong> Estimate requests are sent through Formspree, a form
              service that delivers your request to our business email. See the{' '}
              <a href={FORMSPREE_PRIVACY_POLICY_URL} target="_blank" rel="noopener noreferrer">
                Formspree Privacy Policy
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
              .
            </li>
            {hasAnalytics ? (
              <li>
                <strong>Google Tag Manager and Google Analytics.</strong> These tools measure how
                visitors use the website.
              </li>
            ) : null}
            <li>
              <strong>Google Maps.</strong> Our Contact page includes an embedded Google Map. When
              the map loads, Google may collect information as described in the{' '}
              <a href={GOOGLE_PRIVACY_POLICY_URL} target="_blank" rel="noopener noreferrer">
                Google Privacy Policy
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
              .
            </li>
          </ul>
          <p>
            The fonts on this website are served from our own server, so loading a page does not
            send your information to a font provider.
          </p>

          <h2>Cookies</h2>
          <p>
            Our website does not set its own cookies. The third-party services described above, such
            as the embedded Google Map{hasAnalytics ? ' and analytics tools' : ''}, may set cookies.
            You can block or delete cookies in your browser settings. The website will still work,
            though some embedded content may not display.
          </p>

          <h2>How We Share Information</h2>
          <p>
            Information you send through the estimate form is delivered to us through Formspree,
            described above.
          </p>

          <h2>Do Not Track Signals</h2>
          <p>
            Some browsers offer a &quot;Do Not Track&quot; setting. There is no common standard for
            how websites should respond to it, and our website does not currently change its
            behavior when it receives a Do Not Track signal.
          </p>

          <h2>Children&apos;s Privacy</h2>
          <p>
            Our website is not directed to children under 13, and we do not knowingly collect
            personal information from children.
          </p>

          <h2>Contact Us About Privacy</h2>
          <p>
            If you have questions about this policy or about the information you have sent us, call{' '}
            <PhoneTextLink location="content" />
            {site.email ? (
              <>
                , email <a href={`mailto:${site.email}`}>{site.email}</a>,
              </>
            ) : null}{' '}
            or write to us at {mailingAddress}.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. When we do, we will post the updated
            version on this page.
          </p>
        </div>
      </section>
    </main>
  );
}
