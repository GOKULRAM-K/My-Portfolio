"use client";

import Image from "next/image";
import { GitPullRequest, Award, Star, GitBranch, ExternalLink, ShieldCheck, HeartHandshake } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function OpenSource() {
  return (
    <section id="opensource" className="section open-source">
      <div className="container">
        <div className="opensource-card">
          <div className="opensource-content">
            <div className="opensource-main">
              <span className="eyebrow">Open Source & Community</span>

              <h2 className="heading-lg">
                Building in public.
                <br />
                <span className="gradient-text">Top 1% Global Contributor.</span>
              </h2>

              <p>
                During <strong>GirlScript Summer of Code (GSSoC) 2026</strong>, achieved <strong>Rank #80 globally</strong> among 43,587 international contributors and <strong>2nd at Vellore Institute of Technology</strong>. Merged <strong>179 Pull Requests</strong> across 7 open-source repositories spanning production AI agents, RAG pipelines, Next.js, Python, FastAPI, and server action security validation.
              </p>

              <div className="opensource-actions">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-primary"
                >
                  <GitBranch size={16} />
                  GitHub Profile
                  <ExternalLink size={14} />
                </a>

                <a
                  href="https://gssoc.girlscript.tech/"
                  target="_blank"
                  rel="noreferrer"
                  className="button button-secondary"
                >
                  <Award size={16} />
                  GSSoC 2026 Hall of Fame
                </a>
              </div>
            </div>

            {/* Badges Display */}
            <div className="opensource-badges">
              <div className="badge-card">
                <Image
                  src="/images/gssoc-badge-gssoc_champion.png"
                  alt="GSSoC 2026 Champion Badge"
                  width={140}
                  height={140}
                  className="badge-img"
                />
                <span>GSSoC 2026 Champion</span>
              </div>

              <div className="badge-card">
                <Image
                  src="/images/gssoc-badge-legendary_merge.png"
                  alt="Legendary Merge Badge"
                  width={140}
                  height={140}
                  className="badge-img"
                />
                <span>Legendary Merge Badge</span>
              </div>
            </div>
          </div>

          <div className="opensource-stats-strip">
            <div className="stat-box">
              <GitPullRequest size={20} className="text-accent" />
              <strong>179</strong>
              <span>Merged Pull Requests</span>
            </div>

            <div className="stat-box">
              <Award size={20} className="text-amber" />
              <strong>#80</strong>
              <span>Global Rank (43.5k+ Contribs)</span>
            </div>

            <div className="stat-box">
              <Star size={20} className="text-cyan" />
              <strong>Top 1%</strong>
              <span>2nd @ Vellore Institute of Technology</span>
            </div>

            <div className="stat-box">
              <ShieldCheck size={20} className="text-emerald" />
              <strong>7 Repos</strong>
              <span>AI Agents, RAG & Web</span>
            </div>
          </div>
        </div>

        {/* Club Leadership */}
        <div className="clubs-grid">
          <div className="club-card">
            <div className="club-header">
              <div className="club-logo-box">
                <Image src="/images/nexus_club_logo.png" alt="NEXUS VIT" width={44} height={44} className="club-logo" />
              </div>
              <div>
                <h4>NEXUS VIT — AI ML Member</h4>
                <span>Sep 2024 – Present</span>
              </div>
            </div>
            <p>
              Architected the official NEXUS VIT conversational AI chatbot for student engagement, event registrations, and technical knowledge sharing.
            </p>
          </div>

          <div className="club-card">
            <div className="club-header">
              <div className="club-logo-box">
                <Image src="/images/tech_researchers_club_logo.png" alt="Tech Researchers Club" width={44} height={44} className="club-logo" />
              </div>
              <div>
                <h4>Tech Researchers Club VIT — R&D Member</h4>
                <span>Sep 2024 – Present</span>
              </div>
            </div>
            <p>
              Led research initiatives and mentored junior undergraduate members in paper structuring, systematic review methodologies, and experiment design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}