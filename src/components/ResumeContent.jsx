import React from 'react';
import { RESUME } from '../content/resumeContent';
import './resume-content.css';

// Rendered resume (2026-08-28, Tyler: "I don't like the embedded PDF viewer. It's intentionally a
// single page so I feel the viewer isn't needed. Can we just render the resume on the page
// directly?"). Self-contained "paper" styling so it reads the same in both v1's and v2's Resume
// pages regardless of which theme is active around it -- a resume looks like a resume. The
// original PDF is still offered as a download link for anyone who wants the actual file.
export default function ResumeContent() {
  return (
    <div className="rc-paper">
      <div className="rc-head">
        <h1>{RESUME.name}</h1>
        <div className="rc-head-right">
          {RESUME.links.map(l => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
          ))}
        </div>
      </div>
      <div className="rc-head-sub">
        <span>{RESUME.location}</span>
        <span>{RESUME.email}</span>
      </div>

      <p className="rc-summary">{RESUME.summary}</p>

      <h2>Technical Skills</h2>
      <ul className="rc-skills">
        {RESUME.skillGroups.map(g => (
          <li key={g.label}><strong>{g.label}:</strong> {g.items}</li>
        ))}
      </ul>

      <h2>Professional Experience</h2>
      {RESUME.experience.map(job => (
        <div className="rc-job" key={job.title + job.dates}>
          <div className="rc-job-head">
            <span className="rc-job-title">{job.title} - <em>{job.org}</em></span>
            <span className="rc-job-dates">{job.dates}</span>
          </div>
          <ul>{job.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
        </div>
      ))}

      <h2>Development Experience</h2>
      {RESUME.development.map(proj => (
        <div className="rc-job" key={proj.title + proj.dates}>
          <div className="rc-job-head">
            <span className="rc-job-title">{proj.title} - <em>{proj.project}</em></span>
            <span className="rc-job-dates">{proj.dates}</span>
          </div>
          <ul>{proj.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
        </div>
      ))}

      <a className="rc-download" href="/documents/Tyler Fruik Resume.pdf" target="_blank" rel="noreferrer">
        Download original PDF
      </a>
    </div>
  );
}
