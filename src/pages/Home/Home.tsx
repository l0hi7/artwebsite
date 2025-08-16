import React, { useState, useEffect } from "react";
import "./Home.css";
import heroVideo from "@/assets/251873_small.mp4"; // adjust path

// Types
type CollageItem = {
  type: "image" | "video";
  src: string;
  alt?: string;
  key?: number;
};

type Testimonial = {
  id: number;
  name: string;
  comment: string;
  rating: number;
};

// Big pool of collage items
const collageData: CollageItem[] = [
  { type: "image", src: "https://picsum.photos/id/1015/600/400", alt: "Kids painting" },
  { type: "image", src: "https://picsum.photos/id/1027/400/500", alt: "Art showcase" },
  { type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  { type: "image", src: "https://picsum.photos/id/1035/500/500", alt: "Sculpture" },
  { type: "image", src: "https://picsum.photos/id/1040/400/300", alt: "Drawing class" },
  { type: "image", src: "https://picsum.photos/id/1050/450/300", alt: "Art workshop" },
  { type: "image", src: "https://picsum.photos/id/1060/500/300", alt: "Group activity" },
  { type: "image", src: "https://picsum.photos/id/1070/400/400", alt: "Happy kids" },
  { type: "image", src: "https://picsum.photos/id/1080/350/400", alt: "Parents cheering" },
];

const testimonials: Testimonial[] = [
  { id: 1, name: "Sarah L.", comment: "My child loves every class! The teachers are amazing.", rating: 5 },
  { id: 2, name: "John M.", comment: "A creative and fun environment. Highly recommend!", rating: 4 },
  { id: 3, name: "Priya K.", comment: "Wonderful experience, my daughter has grown so much in confidence.", rating: 5 },
];

export const Home: React.FC = () => {
  const [collage, setCollage] = useState<CollageItem[]>([]);

  // Initial load → pick 6 random
  useEffect(() => {
    const initial = [...collageData].sort(() => 0.5 - Math.random()).slice(0, 6);
    setCollage(initial);
  }, []);

  // Replace one random item every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCollage((prev) => {
        const newCollage = [...prev];
        const randomIndex = Math.floor(Math.random() * newCollage.length);

        // Pick a new item that’s not already shown
        let newItem: CollageItem;
        do {
          newItem = collageData[Math.floor(Math.random() * collageData.length)];
        } while (prev.find((p) => p.src === newItem.src));

        newCollage[randomIndex] = { ...newItem, key: Date.now() }; // unique key
        return newCollage;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-card">
          <video autoPlay loop muted playsInline>
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="hero-text">
            <h1>Handmade with Love</h1>
            <p>Bringing imagination to life through art</p>
          </div>
        </div>
      </section>

      {/* Collage */}
      <section className="collage-section">
        <h2>Our Young Artists in Action</h2>
        <div className="collage-grid">
          {collage.map((item, idx) =>
            item.type === "image" ? (
              <img
                key={item.key || idx}
                src={item.src}
                alt={item.alt || "Art"}
                className="collage-item fade-in"
              />
            ) : (
              <video
                key={item.key || idx}
                autoPlay
                loop
                muted
                playsInline
                className="collage-item fade-in"
              >
                <source src={item.src} type="video/mp4" />
              </video>
            )
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h2>What Parents Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card">
              <p>"{t.comment}"</p>
              <div className="stars">
                {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
              </div>
              <span>- {t.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
