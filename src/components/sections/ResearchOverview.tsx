"use client";

import {
  BrainCircuit,
  AudioLines,
  Eye,
  Network,
  Cpu,
  Radio,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

const researchAreas = [
  {
    icon: BrainCircuit,
    number: "01",
    title: "Machine Learning & Architecture",
    description:
      "Deep architectures, ensemble algorithms, representation learning, sequence modelling, and evaluation under real-world distribution shifts.",
    highlights: ["Results in Engineering (Cited 25)", "1D-CNN SER (98.03% Acc)", "Deep Ensembles"],
  },
  {
    icon: AudioLines,
    number: "02",
    title: "Speech & Audio Intelligence",
    description:
      "Cross-corpus speech emotion recognition, feature fusion (MFCC/ZCR/RMSE), speaker disentanglement (HEDER-Net), and low-resource Dravidian speech.",
    highlights: ["IEEE ICIRCA Tamil SER", "RIACT 2026 Accepted", "Teesside & Bochum Collab"],
  },
  {
    icon: Network,
    number: "03",
    title: "Multimodal Learning & Fusion",
    description:
      "Synthesizing heterogeneous data sources (ECG + EDA, audio + text, spatial floor-plans) with compatibility reasoning and latent state discovery.",
    highlights: ["Elsevier Array Accepted", "Taylor's Univ International Collab", "ECG+EDA Biosignals"],
  },
  {
    icon: Eye,
    number: "04",
    title: "Explainable AI (XAI)",
    description:
      "Post-hoc interpretability via SHAP, LIME, Integrated Gradients, Gradient Saliency, expected calibration error (ECE), and ablation validation.",
    highlights: ["Integrated Gradients & SHAP", "Gradient Saliency", "ECE & Jackknife Metrics"],
  },
  {
    icon: Cpu,
    number: "05",
    title: "Temporal & Biosignal Processing",
    description:
      "Physiological signal modeling, cognitive grammar learning, time-series forecasting, GMM/BIC latent state discovery, and BiGRU transition models.",
    highlights: ["CNI – SUNY Binghamton Program", "Cognitive Load Dataset", "LOSO Validation"],
  },
  {
    icon: Radio,
    number: "06",
    title: "Edge IoT, Smart Grid & Robotics",
    description:
      "Deploying embedded machine learning on Raspberry Pi edge nodes, LoRa telemetry, swarm robotics for disaster response, and smart grid phase balancing.",
    highlights: ["5 Published Patents", "SIH 2025 Top 30 Hardware Finalist", "604,800 IoT Readings"],
  },
];

export default function ResearchOverview() {
  return (
    <section id="research" className="section research-overview">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Research Philosophy</span>
            <h2 className="heading-xl">
              Questions first.
              <br />
              <span className="gradient-text">Systems second.</span>
            </h2>
          </div>

          <p>
            With <strong>3+ years of active research</strong> starting from Year 1, my work spans <strong>{personalInfo.collaborators.professors} faculty collaborators</strong>, <strong>{personalInfo.collaborators.seniors} seniors</strong>, and <strong>{personalInfo.collaborators.batchmates} batchmates</strong>. I bridge theoretical hypotheses with deployable, reproducible intelligent systems.
          </p>
        </div>

        <div className="research-grid">
          {researchAreas.map((area) => {
            const Icon = area.icon;

            return (
              <article className="research-card" key={area.number}>
                <div className="research-card-top">
                  <span className="area-num">{area.number}</span>
                  <div className="icon-wrapper">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                </div>

                <h3>{area.title}</h3>
                <p>{area.description}</p>

                <div className="research-card-tags">
                  {area.highlights.map((tag) => (
                    <span key={tag} className="tag-pill">
                      <Sparkles size={11} /> {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}