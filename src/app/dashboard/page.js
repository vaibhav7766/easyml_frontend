"use client";

import Link from "next/link";

// Dummy project data for demonstration
const projects = [
  {
    id: 1,
    name: "Customer Churn Prediction",
    description: "Predicting customer churn for a telecom company.",
    stats: { models: 8, accuracy: "94.7%", lastUpdated: "2 hours ago" },
  },
  {
    id: 2,
    name: "Loan Default Risk",
    description: "Classifying loan default risk for a bank.",
    stats: { models: 5, accuracy: "91.2%", lastUpdated: "1 day ago" },
  },
  {
    id: 3,
    name: "Image Classifier",
    description: "Classifying images for a retail dataset.",
    stats: { models: 12, accuracy: "97.1%", lastUpdated: "3 days ago" },
  },
];

export default function Dashboard() {
  return (
    <section id="dashboard" className="mb-12">
      <h2 className="text-3xl font-extrabold mb-8 tracking-tight" style={{color: 'var(--foreground)'}}>Your Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link key={project.id} href={`/project?id=${project.id}`} className="glass-card p-6 flex flex-col gap-2 hover:scale-[1.03] transition-transform cursor-pointer">
            <h3 className="text-xl font-bold mb-1" style={{color: 'var(--foreground)'}}>{project.name}</h3>
            <p className="text-accent/80 mb-2">{project.description}</p>
            <div className="flex gap-4 text-sm mt-auto">
              <span className="text-accent">Models: <b>{project.stats.models}</b></span>
              <span className="text-accent">Accuracy: <b>{project.stats.accuracy}</b></span>
              <span className="text-accent">Updated: {project.stats.lastUpdated}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

