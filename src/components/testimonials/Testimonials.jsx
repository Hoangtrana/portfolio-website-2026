import React from "react";
import "./testimonials.css";

const references = [
  {
    name: "Henri Korhola",
    role: "Supervisor",
    company: "Valamis",
    date: "March 2024",
    dateTime: "2024-03",
    quote:
      "She can work very independently and ask for guidance self-imposed whenever needed. Her mentor mentioned she was the easiest person to onboard. She was very efficient and eager to take more tasks when the previous were finished. During her internship she also got to mentor another new employee to the job because of her fast adoption to the work. It was a pleasure to work with Hoang and I strongly recommend her for a possible future job in IT industry.",
  },
  {
    name: "Hilkka Lemettinen",
    role: "Project Manager",
    company: "atFlow",
    date: "March 2025",
    dateTime: "2025-03",
    quote:
      "Hoang performed her assigned tasks and responsibilities commendably. Reliability, conscientiousness and friendly interaction are natural to her. She has a very good work ethic. She is able to work independently and learns quickly. She is able to apply in practice what she has learned. She also works well in a team and is a highly liked member of the work community.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reference</h5>
      <h2>Professional References</h2>

      <div className="container testimonials__container">
        {references.map(({ name, role, company, date, dateTime, quote }) => (
          <article className="reference-card" key={name}>
            <div className="reference-card__accent" aria-hidden="true" />
            <div className="reference-card__header">
              <h3>{name}</h3>
              <p className="reference-card__role">
                {role} · {company}
              </p>
              <time className="reference-card__date" dateTime={dateTime}>
                {date}
              </time>
            </div>
            <blockquote>
              <p>{quote}</p>
            </blockquote>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
