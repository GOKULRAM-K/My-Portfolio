"use client";

import Image from "next/image";
import { Calendar, MapPin, Users, Award, Database, Cpu, CheckCircle2, ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";
import { researchExperiences, featuredProjects } from "@/data/portfolioData";

export default function ResearchExperience() {
  return (
    <section id="research-experience" className="section research-experience">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Research & Fellowships</span>
            <h2 className="heading-xl">
              From hypotheses
              <br />
              <span className="gradient-text">to validated systems.</span>
            </h2>
          </div>

          <p>
            Academic research fellowships, funded lead projects, and national hackathon achievements spanning biosignal neuroinformatics, Dravidian & multi-corpus speech processing, precision IoT agriculture, and smart grid resilience.
          </p>
        </div>

        {/* Featured Projects / Leadership First */}
        <div className="research-leadership-grid">
          {featuredProjects.map((project) => (
            <div className="featured-project-card" key={project.id}>
              <div className="proj-card-header">
                <div>
                  <span className="proj-role-tag">{project.role}</span>
                  <h3 className="proj-title">{project.title}</h3>
                  <div className="proj-org">
                    <span>{project.organization}</span> · <span className="proj-period">{project.period}</span>
                  </div>
                </div>

                {project.badge && (
                  <div className="proj-badge-frame">
                    <Image src={project.badge} alt="GSSoC Champion Badge" width={64} height={64} className="badge-img" />
                  </div>
                )}
              </div>

              <p className="proj-summary">{project.summary}</p>

              <div className="proj-metrics-strip">
                {project.metrics.map((m) => (
                  <div className="metric-chip" key={m}>
                    <CheckCircle2 size={13} className="text-accent" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>

              <div className="proj-details-list">
                {project.details.map((d, idx) => (
                  <div className="detail-item" key={idx}>
                    <span className="detail-bullet" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>

              {project.patentConnected && (
                <div className="proj-patent-banner">
                  <ShieldCheck size={15} />
                  <span>{project.patentConnected}</span>
                </div>
              )}

              <div className="proj-stack">
                {project.stack.map((tech) => (
                  <span className="tech-pill" key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Research Fellowships & Internships Timeline */}
        <div className="fellowships-section">
          <h3 className="subheading-lg">Research Internships & Academic Programs</h3>

          <div className="timeline-grid">
            {researchExperiences.map((exp) => (
              <div className="timeline-card" key={exp.id}>
                <div className="timeline-card-header">
                  <div>
                    <span className="exp-period">{exp.period}</span>
                    <h4 className="exp-role">{exp.role}</h4>
                    <div className="exp-company">
                      {exp.company}
                    </div>
                    <div className="exp-location">
                      <MapPin size={13} /> {exp.location}
                    </div>
                  </div>

                  {exp.logo && (
                    <div className="exp-logo-box">
                      <Image src={exp.logo} alt={exp.company} width={48} height={48} className="exp-logo-img" />
                    </div>
                  )}
                </div>

                <ul className="exp-bullet-list">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>

                <div className="exp-tech-bar">
                  {exp.techStack.map((t) => (
                    <span className="tech-chip" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}