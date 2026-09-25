"use client";

import { Sparkles, Clock, Database, Layers, ShieldCheck, ArrowUpRight, Cpu, BookOpen, Compass } from "lucide-react";

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
            Current ongoing capstone research, institutional biosignal dataset construction, intellectual property filings under legal processing, and active paper submissions currently undergoing peer review.
          </p>
        </div>

        <div className="upcoming-grid">
          {/* Capstone Work */}
          <div className="upcoming-card featured">
            <div className="upcoming-card-header">
              <span className="upcoming-badge capstone"><Sparkles size={13} /> Capstone Research</span>
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

          {/* Dataset Building */}
          <div className="upcoming-card dataset">
            <div className="upcoming-card-header">
              <span className="upcoming-badge dataset"><Database size={13} /> Institutional Dataset Initiative</span>
              <span className="upcoming-time">CNI VIT Chennai</span>
            </div>

            <h3 className="upcoming-title">
              Multimodal Cognitive Load & Physiological Workload Dataset
            </h3>

            <div className="upcoming-advisor">
              <strong>Lead Collaboration:</strong> Dr. Sridevi S (Associate Professor, Centre for Neuroinformatics, VIT Chennai)
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

          {/* Legal Processing Patents */}
          <div className="upcoming-card patents-pending">
            <div className="upcoming-card-header">
              <span className="upcoming-badge legal"><ShieldCheck size={13} /> 3 Patents Under Legal Processing</span>
              <span className="upcoming-time">Submitted 2026</span>
            </div>

            <ul className="pending-list">
              <li>
                <strong>AI-IoT Railway Track Fault Detection & Localization</strong>
                <span>Worked since Sep 2025 · Submitted July 2026</span>
              </li>
              <li>
                <strong>Smart Grid Dynamic Phase Balancing (SIH 2025 Hardware Prototype)</strong>
                <span>Worked since Feb 2026 · Submitted July 2026</span>
              </li>
              <li>
                <strong>Portable Spectacle Medication Reminder & Storage Device</strong>
                <span>Worked since Mar 2026 · Submitted September 2026</span>
              </li>
            </ul>

            <div className="pending-footer">
              <a href="#patents" className="link-arrow">
                View all patent details <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Submitted Papers Pipeline */}
          <div className="upcoming-card submitted-papers">
            <div className="upcoming-card-header">
              <span className="upcoming-badge review"><Clock size={13} /> 4 Submitted Papers (Under Review)</span>
              <span className="upcoming-time">2026</span>
            </div>

            <ul className="pending-list">
              <li>
                <strong>RandFusion: Cryptographic Token Randomness Evaluation</strong>
                <span>Submitted at IEEE Conference</span>
              </li>
              <li>
                <strong>Autonomous Lunar Landing with Target Networks</strong>
                <span>Submitted at Scientific Reports (Nature Publishing Group)</span>
              </li>
              <li>
                <strong>Hybrid LSTM-Random Forest Stock Market Prediction</strong>
                <span>Submitted for IGI Global Book Chapter</span>
              </li>
              <li>
                <strong>Keystroke Dynamics User Identification via XAI</strong>
                <span>Submitted at IEEE Conference</span>
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
