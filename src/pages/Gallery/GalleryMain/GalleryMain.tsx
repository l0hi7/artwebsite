import React from "react";
import { Link } from "react-router-dom";
import "./GalleryMain.css";
import type {GalleryProps } from "@/types";



export const Gallery: React.FC<GalleryProps> = ({ data }) => {
  return (
    <section className="gallery-section">
      <h1>Gallery</h1>
      <div className="gallery-grid">
        {data.map((item) => (
          <Link key={item.id} to={`/gallery/${item.id}`} className="gallery-card">
            <img src={item.fileId} alt={item.title} />
            <div className="gallery-overlay">
              <span>{item.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

 
