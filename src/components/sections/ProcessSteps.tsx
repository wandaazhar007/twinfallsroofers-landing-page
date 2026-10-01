import styles from './ProcessSteps.module.scss';

// Generic step descriptions only — no specific warranty terms or durations until
// docs/06-pertanyaan-terbuka.md #8 is answered.
const steps = [
  {
    title: 'Free Inspection',
    description: 'We take a look at your roof and identify what it actually needs.',
  },
  {
    title: 'Written Estimate',
    description: 'You get a clear, written estimate before any work begins.',
  },
  {
    title: 'Workmanship You Can Count On',
    description: 'Our crew completes the job and stands behind the work.',
  },
];

export function ProcessSteps() {
  return (
    <section className="section">
      <div className="container">
        <h2 className={styles.heading}>How It Works</h2>
        <ol className={styles.steps}>
          {steps.map((step, index) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.index} aria-hidden="true">
                {index + 1}
              </span>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.description}>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
