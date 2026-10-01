import Link from 'next/link';
import { services } from '@/content/services';
import { PhoneLink } from '@/components/ui/PhoneLink';

export const metadata = {
  title: 'Page Not Found | Canyon Construction Services',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <main className="container section">
      <h1>Page Not Found</h1>
      <p>Sorry, we couldn&apos;t find that page. Here are a few helpful links instead:</p>
      <ul>
        {services.map((service) => (
          <li key={service.slug}>
            <Link href={service.path}>{service.name}</Link>
          </li>
        ))}
        <li>
          <Link href="/contact/">Contact us</Link>
        </li>
      </ul>
      <p>
        Or call us directly: <PhoneLink location="content" />
      </p>
    </main>
  );
}
