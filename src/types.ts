export interface GalleryItem {
  id: string;
  fileId: string;
  title: string;
  artist: string;
}
export interface GalleryProps {
  data: GalleryItem[];
}