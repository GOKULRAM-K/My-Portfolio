"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, FileText, Globe, Star, Sparkles, Filter, BookmarkCheck, Clock, Layers } from "lucide-react";
import { publications, type Publication } from "@/data/portfolioData";

type StatusFilter = "ALL" | "PUBLISHED" | "ACCEPTED" | "SUBMITTED" | "IN_DEVELOPMENT";

const filterOptions: { label: string; value: StatusFilter; count: number }[] = [
  { label: "All Papers", value: "ALL", count: 15 },
  { label: "Published", value: "PUBLISHED", count: 6 },
  { label: "Accepted", value: "ACCEPTED", count: 2 },
  { label: "Submitted", value: "SUBMITTED", count: 4 },
  { label: "In Pipeline / Draft", value: "IN_DEVELOPMENT", count: 3 },
];

export default function Publications() {
  const [activeFilter, setActiveFilter] = useState<StatusFilter>("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPublications = useMemo(() => {
    return publications.filter((pub) => {
      const matchesStatus = activeFilter === "ALL" || pub.status === activeFilter;
      const matchesSearch =
        searchQuery === "" ||
        pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pub.venue.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesStatus && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const getStatusBadge = (status: Publication["status"]) => {
    switch (status) {
      case "PUBLISHED":
        return <span className="status-badge published"><BookmarkCheck size={13} /> Published</span>;
      case "ACCEPTED":
        return <span className="status-badge accepted"><Sparkles size={13} /> Accepted</span>;
      case "SUBMITTED":
        return <span className="status-badge submitted"><Clock size={13} /> Submitted</span>;
      case "IN_DEVELOPMENT":
        return <span className="status-badge draft"><Layers size={13} /> In Preparation / Capstone</span>;
    }
  };

  return (
    <section id="publications" className="section publications">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Scholarly Record</span>
            <h2 className="heading-xl">
              Publications &
              <br />
              <span className="gradient-text">manuscripts.</span>
            </h2>
          </div>

          <p>
            A rigorous research portfolio comprising <strong>6 published papers</strong> (with 33+ total citations), <strong>2 accepted papers</strong> (including Elsevier Array and RIACT 2026), <strong>4 submitted manuscripts</strong> under peer review, and <strong>3 active drafts/capstone projects</strong>.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="publication-controls">
          <div className="publication-filters" role="tablist">
            {filterOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                role="tab"
                aria-selected={activeFilter === opt.value}
                className={activeFilter === opt.value ? "filter-btn active" : "filter-btn"}
                onClick={() => setActiveFilter(opt.value)}
              >
                <span>{opt.label}</span>
                <span className="filter-count">{opt.count}</span>
              </button>
            ))}
          </div>

          <div className="publication-search">
            <Filter size={15} className="search-icon" />
            <input
              type="text"
              placeholder="Search by topic, journal, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        {/* Publications List */}
        <div className="publication-list">
          {filteredPublications.map((pub, index) => (
            <article className="publication-card" key={pub.id}>
              <div className="pub-card-header">
                <div className="pub-card-index">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="pub-status-group">
                  {getStatusBadge(pub.status)}
                  <span className="pub-type-badge">{pub.type}</span>
                  <span className="pub-year-badge">{pub.year}</span>
                </div>
              </div>

              <div className="pub-card-body">
                <h3 className="pub-title">{pub.title}</h3>

                <div className="pub-venue">
                  <strong>{pub.venue}</strong>
                  {pub.publisher && <span> · {pub.publisher}</span>}
                </div>

                {pub.collaboration && (
                  <div className="pub-collaboration">
                    <Globe size={14} />
                    <span>{pub.collaboration}</span>
                  </div>
                )}

                <p className="pub-description">{pub.description}</p>

                <div className="pub-card-footer">
                  <div className="pub-tags">
                    <span className="pub-area-tag">{pub.area}</span>
                  </div>

                  <div className="pub-actions">
                    {pub.citations !== undefined && pub.citationsLink && (
                      <a
                        href={pub.citationsLink}
                        target="_blank"
                        rel="noreferrer"
                        className="citation-badge"
                        title="View citations on Google Scholar"
                      >
                        <Star size={13} fill="currentColor" />
                        <span>Cited by {pub.citations}</span>
                      </a>
                    )}

                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noreferrer"
                        className="button button-sm button-secondary"
                      >
                        View Paper / DOI
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}