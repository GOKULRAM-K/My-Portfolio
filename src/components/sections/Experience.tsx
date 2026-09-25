"use client";

import Image from "next/image";
import { MapPin, Building2 } from "lucide-react";
import { industryExperiences } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Industry Experience</span>
            <h2 className="heading-xl">
              Research engineering
              <br />
              <span className="gradient-text">in production.</span>
            </h2>
          </div>

          <p>
            Translating core machine learning, multimodal LLM pipelines, computer vision, and schema-aware backend microservices into production enterprise software across computer vision, AI resume intelligence, and pharmacogenomics.
          </p>
        </div>

        <div className="industry-list">
          {industryExperiences.map((item) => (
            <article className="industry-card" key={item.id}>
              <div className="ind-card-header">
                <div className="ind-title-group">
                  <span className="ind-period">{item.period}</span>
                  <h3 className="ind-role">{item.role}</h3>
                  <div className="ind-company">
                    <Building2 size={15} />
                    <span>{item.company}</span>
                  </div>
                  <div className="ind-location">
                    <MapPin size={13} />
                    <span>{item.location}</span>
                  </div>
                </div>

                {item.logos && item.logos.length > 0 && (
                  <div className="ind-logos-group">
                    {item.logos.map((logo, idx) => (
                      <div className="ind-logo-box" key={idx} title={logo.name}>
                        <Image src={logo.path} alt={logo.name} width={54} height={54} className="ind-logo-img" />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="ind-highlights-container">
                <ul className="ind-highlights-list">
                  {item.highlights.map((h, i) => (
                    <li key={i}>
                      <span className="ind-bullet-icon">▸</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="ind-tech-bar">
                <span className="ind-tech-label">Technologies:</span>
                <div className="ind-tech-pills">
                  {item.techStack.map((tech) => (
                    <span className="tech-chip" key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}