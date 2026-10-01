"use client";

import Image from "next/image";
import { GraduationCap, Award, BookOpen, Users, Code, Cpu, BrainCircuit, Network, Eye, Server, CheckCircle2 } from "lucide-react";
import { personalInfo, educationList, skillCategories } from "@/data/portfolioData";

export default function Profile() {
  return (
    <section id="about" className="section profile">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Academic Profile & Depth</span>
            <h2 className="heading-xl">
              Academic foundation.
              <br />
              <span className="gradient-text">Research rigor.</span>
            </h2>
          </div>

          <p>
            Computer Science & Engineering undergraduate specializing in Artificial Intelligence and Machine Learning at Vellore Institute of Technology. Driven by rigorous mathematical modeling, empirical benchmark evaluation, and robust systems engineering.
          </p>
        </div>

        {/* Research Collaboration Stats Bar */}
        <div className="collab-stats-banner">
          <div className="collab-stat-item">
            <span className="collab-num">{personalInfo.cgpa}</span>
            <span className="collab-label">CGPA @ Vellore Institute of Technology</span>
          </div>

          <div className="collab-stat-item">
            <span className="collab-num">{personalInfo.researchYears}</span>
            <span className="collab-label">UG Research Experience</span>
          </div>

          <div className="collab-stat-item">
            <span className="collab-num">{personalInfo.collaborators.professors}</span>
            <span className="collab-label">Faculty Collaborators</span>
          </div>

          <div className="collab-stat-item">
            <span className="collab-num">{personalInfo.collaborators.seniors + personalInfo.collaborators.batchmates}</span>
            <span className="collab-label">Senior & Peer Collaborators</span>
          </div>
        </div>

        {/* Education Timeline */}
        <div className="education-section">
          <h3 className="subheading-lg">Education & Scholastic Distinction</h3>

          <div className="education-grid">
            {educationList.map((edu, idx) => (
              <div className="education-card" key={idx}>
                <div className="edu-card-header">
                  <div>
                    <span className="edu-period">{edu.period}</span>
                    <h4 className="edu-institution">{edu.institution}</h4>
                    <p className="edu-degree">{edu.degree}</p>
                  </div>

                  <div className="edu-grade-badge">
                    <strong>{edu.grade}</strong>
                  </div>
                </div>

                <ul className="edu-highlights">
                  {edu.highlights.map((h, i) => (
                    <li key={i}>
                      <CheckCircle2 size={14} className="text-accent" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Profile & Skills Grid */}
        <div className="skills-section">
          <div className="skills-heading">
            <span className="eyebrow">Technical Mastery</span>
            <h3 className="subheading-lg">Full-Spectrum Technical Stack</h3>
          </div>

          <div className="skills-grid">
            {skillCategories.map((cat) => (
              <div className="skill-category-card" key={cat.title}>
                <h4>{cat.title}</h4>
                <div className="skill-pills">
                  {cat.skills.map((skill) => (
                    <span className="skill-pill" key={skill}>{skill}</span>
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