export type PublicationStatus =
  | "PUBLISHED"
  | "ACCEPTED"
  | "UNDER SUBMISSION"
  | "IN PREPARATION"
  | "IN CONSOLIDATION"
  | "IN DEVELOPMENT";

export type Publication = {
  id: string;
  status: PublicationStatus;
  type: "Journal" | "Conference" | "Book Chapter" | "Manuscript";
  year: string;
  title: string;
  venue?: string;
  authors?: string;
  area: string;
  description: string;
};

export const publications: Publication[] = [
  {
    id: "pub-01",
    status: "PUBLISHED",
    type: "Journal",
    year: "2024",
    title:
      "Ensemble Deep Learning Model for Protein Secondary Structure Prediction Using NLP Metrics and Explainable AI",
    venue: "Results in Engineering",
    area: "Deep Learning · NLP · Explainable AI",
    description:
      "An ensemble deep-learning approach for protein secondary structure prediction incorporating NLP-inspired evaluation metrics and explainability.",
  },
  {
    id: "pub-02",
    status: "PUBLISHED",
    type: "Conference",
    year: "2024",
    title: "Deep Learning and XAI for Customer Sentiment Analysis",
    venue: "IEEE 4th ICUIS",
    area: "NLP · Sentiment Analysis · XAI",
    description:
      "A deep-learning and explainability framework for customer sentiment analysis.",
  },
  {
    id: "pub-03",
    status: "PUBLISHED",
    type: "Conference",
    year: "2026",
    title: "Feature Fusion and XAI for Tamil Speech Emotion Recognition",
    venue: "IEEE 7th ICIRCA",
    area: "Speech · Feature Fusion · XAI",
    description:
      "A speech emotion recognition study using feature fusion and explainable AI for Tamil speech.",
  },
  {
    id: "pub-04",
    status: "PUBLISHED",
    type: "Manuscript",
    year: "2025",
    title:
      "Data Analysis of Female Education in the Age of COVID-19: A Comprehensive Review",
    area: "Data Analysis · Education",
    description:
      "A comprehensive analysis of female education during the COVID-19 period.",
  },
  {
    id: "pub-05",
    status: "PUBLISHED",
    type: "Manuscript",
    year: "2025",
    title:
      "Optimizing Resource Management With Edge and Network Processing for Disaster Response Using Insect Robot Swarms",
    area: "Edge Computing · Robotics · Disaster Response",
    description:
      "Research exploring edge and network processing for resource management in disaster-response insect robot swarms.",
  },
  {
    id: "pub-06",
    status: "ACCEPTED",
    type: "Journal",
    year: "2026",
    title:
      "An Explainable Multimodal Data Fusion Framework for Compatibility Reasoning in Heterogeneous Decision Systems",
    venue: "Array",
    area: "Multimodal Learning · Data Fusion · Explainable AI",
    description:
      "An explainable multimodal data-fusion framework for compatibility reasoning across heterogeneous decision systems.",
  },
];