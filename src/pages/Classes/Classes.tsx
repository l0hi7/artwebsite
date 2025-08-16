import React, { useState } from "react";
import "./Classes.css";

interface ClassItem {
  title: string;
  description: string;
  image: string;
}

const classList: ClassItem[] = [
  {
    title: "Watercolor Painting",
    description:
      "Learn the beauty of blending colors and creating soft landscapes. This class focuses on color harmony, brush techniques, and letting creativity flow with water-based paints.",
    image: "https://picsum.photos/seed/art1/800/600",
  },
  {
    title: "Sketching Basics",
    description:
      "Master the art of lines, shading, and proportions. A beginner-friendly class where you’ll learn to see like an artist and sketch with confidence.",
    image: "https://picsum.photos/seed/art2/800/600",
  },
  {
    title: "Digital Art",
    description:
      "Create stunning illustrations with digital tools and techniques. We’ll explore drawing tablets, software tricks, and digital painting methods.",
    image: "https://picsum.photos/seed/art3/800/600",
  },
];

export const Classes: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleClass = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="classes" className="classes-section">
      <h1>Our Classes</h1>
      <div className="classes-container">
        {classList.map((item, index) => (
          <div
            key={index}
            className={`class-card ${openIndex === index ? "open" : ""}`}
          >
            <img src={item.image} alt={item.title} className="class-image" />
            <div className="class-header" onClick={() => toggleClass(index)}>
              <h2>{item.title}</h2>
              <div className={`arrow ${openIndex === index ? "rotate" : ""}`}>
                ▼
              </div>
            </div>
            <div className="class-description">
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
