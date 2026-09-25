"use client";

import { useState } from "react";
import { Lightbulb, ShieldCheck, Clock, CheckCircle2, Award, ArrowUpRight } from "lucide-react";
import { patents, type Patent } from "@/data/portfolioData";

export default function Patents() {
  const [tab, setTab] = useState<"PUBLISHED" | "LEGAL_PROCESSING">("PUBLISHED");

  const publishedPatents = patents.filter((p) => p.status === "PUBLISHED");
  const pendingPatents = patents.filter((p) => p.status === "LEGAL_PROCESSING");

  const activePatents = tab === "PUBLISHED" ? publishedPatents : pendingPatents;

  return (
    <section id="patents" className="section patents">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Intellectual Property</span>
            <h2 className="heading-xl">
              Patents &
              <br />
              <span className="gradient-text">applied innovation.</span>
            </h2>
          </div>

          <p>
            An active intellectual property portfolio comprising <strong>5 published Indian patents</strong> and <strong>3 patents currently undergoing legal processing</strong>. These cover edge AI, precision IoT agriculture, smart grid phase balancing, affective computing, and wearable healthcare devices.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="patent-tab-bar">
          <button
            type="button"
            className={tab === "PUBLISHED" ? "patent-tab active" : "patent-tab"}
            onClick={() => setTab("PUBLISHED")}
          >
            <CheckCircle2 size={16} />
            <span>Published Patents</span>
            <span className="badge-count">5</span>
          </button>

          <button
            type="button"
            className={tab === "LEGAL_PROCESSING" ? "patent-tab active" : "patent-tab"}
            onClick={() => setTab("LEGAL_PROCESSING")}
          >
            <Clock size={16} />
            <span>Under Legal Processing</span>
            <span className="badge-count">3</span>
          </button>
        </div>

        {/* Patent cards grid */}
        <div className="patent-grid">
          {activePatents.map((patent, idx) => (
            <article className="patent-card" key={patent.id}>
              <div className="patent-card-header">
                <span className="patent-num-badge">
                  {tab === "PUBLISHED" ? `Patent #${idx + 1}` : `Pending #${idx + 1}`}
                </span>

                <span className={patent.status === "PUBLISHED" ? "patent-status-tag pub" : "patent-status-tag pending"}>
                  {patent.status === "PUBLISHED" ? <CheckCircle2 size={13} /> : <Clock size={13} />}
                  {patent.status === "PUBLISHED" ? "Published Patent" : "Under Legal Processing"}
                </span>
              </div>

              <h3 className="patent-title">{patent.title}</h3>

              <div className="patent-inventors">
                <strong>Inventors:</strong> {patent.inventors}
              </div>

              {patent.applicationNo && (
                <div className="patent-app-no">
                  <span>{patent.applicationNo}</span>
                </div>
              )}

              <p className="patent-description">{patent.description}</p>

              <div className="patent-card-footer">
                <span className="patent-area-pill">{patent.area}</span>
                <span className="patent-date">{patent.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}