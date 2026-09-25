"use client";

import { Sparkles, Clock, Database, ShieldCheck, ArrowUpRight, CheckCircle2, BookOpen, Layers } from "lucide-react";

export default function UpcomingWork() {
  return (
    <section id="upcoming" className="section upcoming-work">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Pipeline & Future Directions</span>
            <h2 className="heading-xl">
              Upcoming research &
              <br />
              <span className="gradient-text">ongoing initiatives.</span>
            </h2>
          </div>

          <p>
            Current ongoing Capstone research, institutional biosignal dataset construction, active manuscripts in preparation, legal processing patents, and peer-reviewed journal & conference submissions.
          </p>
        </div>

        <div className="upcoming-grid">
          {/* Capstone Work (HEDER-Net ONLY) */}
          <div className="upcoming-card featured">
            <div className="upcoming-card-header">
              <span className="upcoming-badge capstone"><Sparkles size={13} /> B.Tech Capstone Project</span>
              <span className="upcoming-time">2026 — Present</span>
            </div>

            <h3 className="upcoming-title">
              HEDER-Net: Hierarchical Representation Disentanglement for Speaker-Invariant Speech Emotion Recognition
            </h3>

            <div className="upcoming-advisor">
              <strong>Supervised by:</strong> Dr. Vignesh U (Associate Professor, SCOPE, VIT Chennai)
            </div>

            <p className="upcoming-description">
              Engineering a hierarchical disentanglement framework using VAE latent space decomposition, Gradient Reversal Layer (GRL) adversaries, and prototype learning to isolate emotional speech cues from speaker ID and background acoustic noise.
            </p>

            <div className="upcoming-tags">
              <span>VAE Disentanglement</span>
              <span>GRL Adversarial</span>
              <span>Orthogonal Latents</span>
              <span>Speaker Invariance</span>
            </div>
          </div>

          {/* Institutional Dataset Initiative */}
          <div className="upcoming-card dataset">
            <div className="upcoming-card-header">
              <span className="upcoming-badge dataset"><Database size={13} /> Institutional Dataset Initiative</span>
              <span className="upcoming-time">CNI VIT Chennai</span>
            </div>

            <h3 className="upcoming-title">
              Multimodal Cognitive Load & Physiological Workload Dataset
            </h3>

            <div className="upcoming-advisor">
              <strong>Under guidance of:</strong> Dr. Sridevi S (Associate Professor, Centre for Neuroinformatics, VIT Chennai)
            </div>

            <p className="upcoming-description">
              Curating and benchmarking a synchronized 10-second window biosignal dataset capturing high-resolution ECG + EDA physiological telemetry across 34 participants under controlled cognitive stress loads.
            </p>

            <div className="upcoming-tags">
              <span>ECG Telemetry</span>
              <span>EDA Conductance</span>
              <span>Cognitive Stress</span>
              <span>637 Windows</span>
            </div>
          </div>

          {/* Active Manuscripts in Preparation */}
          <div className="upcoming-card prep-manuscripts">
            <div className="upcoming-card-header">
              <span className="upcoming-badge prep"><Layers size={13} /> Manuscripts in Preparation</span>
              <span className="upcoming-time">2026</span>
            </div>

            <ul className="pending-list">
              <li>
                <strong>FBFRCSF: Sequence Clustering for Microbial Pattern Finding</strong>
                <span className="text-cyan">Supervised by Dr. Parvathi R (Centre for Advanced Data Science) & Dr. Vignesh U (SCOPE)</span>
              </li>
              <li>
                <strong>Cognitive Grammar Learning for Workload Assessment</strong>
                <span className="text-cyan">Under guidance of Dr. Sridevi S (Centre for Neuroinformatics, VIT Chennai)</span>
              </li>
            </ul>

            <div className="pending-footer">
              <a href="#publications" className="link-arrow">
                View all paper details <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Under Review Papers */}
          <div className="upcoming-card submitted-papers">
            <div className="upcoming-card-header">
              <span className="upcoming-badge review"><Clock size={13} /> 3 Manuscripts Under Review</span>
              <span className="upcoming-time">2026</span>
            </div>

            <ul className="pending-list">
              <li>
                <strong>RandFusion: Cryptographic Token Randomness Evaluation</strong>
                <span>Under Review @ IEEE Conference</span>
              </li>
              <li>
                <strong>Autonomous Lunar Landing with Target Networks</strong>
                <span>Under Review @ Scientific Reports (Nature Publishing Group)</span>
              </li>
              <li>
                <strong>Hybrid LSTM-Random Forest Stock Market Prediction</strong>
                <span>Under Review @ IGI Global Book Chapter</span>
              </li>
            </ul>

            <div className="pending-footer">
              <a href="#publications" className="link-arrow">
                View all paper details <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
