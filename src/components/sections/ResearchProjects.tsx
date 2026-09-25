import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    category: "TEMPORAL MACHINE LEARNING",
    title: "Multiclass Solar Flare Forecasting",
    description:
      "A temporal machine-learning study using GOES-16 XRS observations to forecast solar flare classes under chronological distribution shift.",
    details:
      "420,017 observations were transformed into more than 40 temporal features including lagged flux, rolling statistics, flux differences, logarithmic transforms, and cyclic encodings. Temporal-SMOTE and 12 ML, ensemble, and recurrent models were evaluated.",
    methods: [
      "LightGBM",
      "XGBoost",
      "Random Forest",
      "CatBoost",
      "BiLSTM",
      "GRU",
      "Temporal-SMOTE",
      "Distribution Shift",
    ],
    result:
      "M-class F1 improved from 0.274 to 0.408, with evaluation extending to non-zero X-class F1 under chronological holdout.",
  },
  {
    number: "02",
    category: "EXPLAINABLE AUTONOMOUS SYSTEMS",
    title: "DriveGraph",
    description:
      "An explainable autonomous-driving simulator combining road-graph reasoning, LiDAR-like sensing, sparse neural control, and evolving network topology.",
    details:
      "The simulator uses OpenStreetMap road graphs, kinematic dynamics, 15 LiDAR-like 360° beams, semantic traffic sensing, and a sparse graph neural controller. Neural topologies evolve across generations while policies are evaluated on held-out maps and seeds.",
    methods: [
      "Graph Neural Networks",
      "Neuroevolution",
      "OpenStreetMap",
      "LiDAR-like Sensing",
      "Real-time Visualization",
      "TTC Safety Overrides",
    ],
    result:
      "Across held-out evaluation, the evolved controller achieved 89.7% ± 2.9% success, 4.9% ± 1.2% collision rate, and 94.2% ± 1.8% rule compliance.",
  },
  {
    number: "03",
    category: "MULTIMODAL COMPATIBILITY REASONING",
    title: "AgriCompatNet",
    description:
      "An explainable multimodal data-fusion framework for compatibility reasoning across heterogeneous agricultural decision variables.",
    details:
      "The work introduces derived compatibility representations including Nutrient Balance Index, Environmental Resilience Score, Nutrient Compatibility, and Compatibility Potential, followed by model comparison and feature ablation.",
    methods: [
      "Feature Fusion",
      "Random Forest",
      "KNN",
      "Regression",
      "Ablation Studies",
      "SHAP",
      "Explainable AI",
    ],
    result:
      "Feature ablation produced R² values above 0.92 for several engineered representations, while Compatibility Potential showed substantially lower standalone explanatory power.",
  },
];

export default function ResearchProjects() {
  return (
    <section id="projects" className="section research-projects">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Selected Research</span>
            <h2 className="heading-xl">
              Research built
              <br />
              as systems.
            </h2>
          </div>

          <p>
            Selected projects demonstrating the progression from data and
            modelling to evaluation, explainability, and deployable
            intelligent systems.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-feature" key={project.number}>
              <div className="project-number">{project.number}</div>

              <div className="project-main">
                <span className="project-category">{project.category}</span>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <p className="project-details">{project.details}</p>

                <div className="project-bottom">
                  <div className="project-tags">
                    {project.methods.map((method) => (
                      <span key={method}>{method}</span>
                    ))}
                  </div>

                  <div className="project-result">
                    <span>RESULT</span>
                    <p>{project.result}</p>
                  </div>
                </div>
              </div>

              <div className="project-arrow">
                <ArrowUpRight size={20} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}