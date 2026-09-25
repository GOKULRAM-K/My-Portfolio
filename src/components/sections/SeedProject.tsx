const architecture = [
  "Raspberry Pi",
  "MQTT",
  "AWS IoT Core",
  "EC2",
  "RDS / S3",
  "Flask APIs",
];

const capabilities = [
  "10 Raspberry Pi IoT units",
  "7 sensing channels per unit",
  "15-minute acquisition intervals",
  "604,800 observations across 90 days",
  "JWT-secured APIs",
  "Lambda automation",
  "CloudWatch monitoring",
  "Deep-learning architecture benchmarking",
  "Multi-day sensor forecasting",
  "Automated irrigation valve control",
];

export default function SeedProject() {
  return (
    <section className="section seed-project">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">SEED Funded Project</span>
            <h2 className="heading-xl">
              From research
              <br />
              to infrastructure.
            </h2>
          </div>

          <p>
            A multidisciplinary precision-agriculture system combining
            distributed sensing, cloud infrastructure, machine learning,
            forecasting, and automated water delivery.
          </p>
        </div>

        <div className="seed-header">
          <div>
            <span className="seed-label">PROJECT LEAD · AUG 2025 — PRESENT</span>

            <h3>
              Next-Gen Irrigation: Leveraging Machine Learning for Precision
              Water Delivery at VIT
            </h3>

            <p>
              Leading a 14-member multidisciplinary team across eight
              workstreams to design and evaluate an end-to-end intelligent
              irrigation platform.
            </p>
          </div>

          <div className="seed-stat">
            <strong>14</strong>
            <span>team members</span>
          </div>
        </div>

        <div className="seed-architecture">
          <div className="seed-architecture-heading">
            <span>01</span>
            <h4>System architecture</h4>
          </div>

          <div className="seed-flow">
            {architecture.map((item, index) => (
              <div className="seed-flow-item" key={item}>
                <span>{item}</span>

                {index !== architecture.length - 1 && (
                  <span className="seed-flow-arrow">→</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="seed-details">
          <div className="seed-details-main">
            <span className="seed-label">SYSTEM CAPABILITIES</span>

            <div className="seed-capabilities">
              {capabilities.map((capability) => (
                <div className="seed-capability" key={capability}>
                  <span className="seed-check">+</span>
                  <span>{capability}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="seed-highlight">
            <span className="seed-label">DATA SCALE</span>

            <strong>604,800</strong>

            <p>
              sensor observations collected over a 90-day acquisition period.
            </p>

            <div className="seed-highlight-divider" />

            <span className="seed-label">INTELLECTUAL PROPERTY</span>

            <strong>4</strong>

            <p>Indian patent applications connected to the project.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}