"use client";

import Image from "next/image";
import { ArrowUpRight, Download, ExternalLink, Award, FileText, Lightbulb, Sparkles, BookOpen, ShieldCheck, Cpu } from "lucide-react";
import { motion } from "motion/react";
import { personalInfo } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="hero-status-pill">
            <span className="status-dot-pulse" />
            <span>Open for AI/ML Research & Engineering Opportunities</span>
          </div>

          <h1 className="hero-title">
            Researching
            <br />
            <span className="gradient-text">intelligent systems</span>
            <br />
            that learn & explain.
          </h1>

          <p className="hero-description">
            B.Tech CSE (AI & ML) student at <strong>VIT Chennai</strong> (CGPA: <strong>8.80</strong>) with <strong>3+ years of active research</strong>. Innovating at the nexus of multimodal data fusion, speech emotion recognition, explainable AI, and edge IoT intelligent systems.
          </p>

          <div className="hero-actions">
            <a href="#publications" className="button button-primary">
              <BookOpen size={17} />
              Explore Research & Papers
            </a>

            <a href={personalInfo.resumePdf} target="_blank" rel="noreferrer" className="button button-secondary">
              <Download size={16} />
              Download Resume (PDF)
            </a>
          </div>

          <div className="hero-social-strip">
            <a href={personalInfo.socials.googleScholar} target="_blank" rel="noreferrer" className="social-pill scholar" title="Google Scholar">
              <BookOpen size={15} />
              <span>Google Scholar</span>
              <ExternalLink size={12} />
            </a>

            <a href={personalInfo.socials.orcid} target="_blank" rel="noreferrer" className="social-pill orcid" title="ORCID Profile">
              <ShieldCheck size={15} />
              <span>ORCID</span>
              <ExternalLink size={12} />
            </a>

            <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="social-pill github" title="GitHub Profile">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" /></svg>
              <span>GitHub</span>
              <ExternalLink size={12} />
            </a>

            <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="social-pill linkedin" title="LinkedIn Profile">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              <span>LinkedIn</span>
              <ExternalLink size={12} />
            </a>
          </div>

          <div className="hero-quick-stats">
            <div className="stat-card">
              <span className="stat-val">8.80</span>
              <span className="stat-lbl">CGPA @ VIT Chennai</span>
            </div>

            <div className="stat-card">
              <span className="stat-val">6 + 3</span>
              <span className="stat-lbl">Published + Accepted Papers</span>
            </div>

            <div className="stat-card">
              <span className="stat-val">5 + 3</span>
              <span className="stat-lbl">Published + Pending Patents</span>
            </div>

            <div className="stat-card">
              <span className="stat-val">Top 1% Globally</span>
              <span className="stat-lbl">GSSoC 2026 Rank #80</span>
            </div>
          </div>
        </motion.div>

        {/* Profile photo container with fresh, non-repetitive highlight pills below */}
        <motion.div
          className="hero-profile-container"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="profile-card-wrapper">
            <div className="profile-glow-effect" />
            <div className="profile-card-inner">
              <div className="profile-image-frame">
                <Image
                  src={personalInfo.profilePhoto}
                  alt="Gokul Ram Kannan — AI/ML Researcher"
                  width={420}
                  height={500}
                  priority
                  className="profile-img"
                />
                <div className="profile-overlay-gradient" />
              </div>

              <div className="profile-card-footer">
                <div className="profile-name-badge">
                  <h3>Gokul Ram Kannan</h3>
                  <p>AI/ML Researcher & Systems Engineer</p>
                </div>

                <div className="profile-tags">
                  <span>Multimodal AI</span>
                  <span>XAI</span>
                  <span>Speech SER</span>
                  <span>IoT Swarms</span>
                </div>
              </div>
            </div>

            {/* Fresh, non-repetitive highlight pills placed neatly below the photo */}
            <div className="profile-highlight-pills">
              <div className="highlight-pill">
                <Award size={15} className="text-amber" />
                <span>Top 1% Globally (GSSoC Open-Source 2026)</span>
              </div>
              <div className="highlight-pill">
                <BookOpen size={15} className="text-cyan" />
                <span>Published Author & Indian Patent Inventor</span>
              </div>
              <div className="highlight-pill">
                <Cpu size={15} className="text-accent" />
                <span>Multimodal AI & Biosignal Research</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}