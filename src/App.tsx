import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { NavBar } from './pages/NavBar/NavBar';
import { Classes } from '@/pages/Classes/Classes';
import { Gallery } from '@/pages/Gallery/GalleryMain/GalleryMain';
import {FooterContent} from './pages/FooterContent/FooterContent'
import type { GalleryItem } from "@/types";
// Placeholder data for development
const devGallery:GalleryItem[] = [
  { id: '1', fileId: 'https://picsum.photos/seed/art1/800/600', title: 'Sunset Dreams', artist: 'Alice Blue' },
  { id: '2', fileId: 'https://picsum.photos/seed/art2/800/600', title: 'Morning Haze', artist: 'Ben Green' },
  { id: '3', fileId: 'https://picsum.photos/seed/art3/800/600', title: 'Abstract Flow', artist: 'Clara Red' },
];


export default function App() {
  const [gallery, setGallery] = useState(devGallery);
  // const [classes, setClasses] = useState(devClasses);

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery data={gallery} />} />
        <Route path="/classes" element={<Classes />} />
      </Routes>
      <FooterContent/>
    </Router>
 
  );
}
