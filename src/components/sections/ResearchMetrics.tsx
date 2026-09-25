"use client";

import { personalInfo } from "@/data/portfolioData";

const metrics = [
  {
    value: "8.80",
    label: "CGPA @ VIT Chennai",
    detail: "B.Tech CSE (AI & Machine Learning)",
  },
  {
    value: "5",
    label: "Published Patents",
    detail: "Indian Patent Office Applications",
  },
  {
    value: "3",
    label: "Pending Patents",
    detail: "Currently Under Legal Processing",
  },
  {
    value: "9",
    label: "Total Papers (3 Acc.)",
    detail: "Results in Eng, IEEE, Elsevier Array, RIACT",
  },
  {
    value: "33+",
    label: "Scholar Citations",
    detail: "Google Scholar Citations Record",
  },
  {
    value: "#80",
    label: "GSSoC 2026 Global Rank",
    detail: "Top 1% of 43,587 International Contributors",
  },
];

export default function ResearchMetrics() {
  return (
    <section className="research-metrics-section">
      <div className="container">
        <div className="metrics-grid">
          {metrics.map((metric) => (
            <div className="metric-item" key={metric.label}>
              <div className="metric-value">{metric.value}</div>

              <div>
                <div className="metric-label">{metric.label}</div>
                <div className="metric-detail">{metric.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}