import "./FooterContent.css";

export const FooterContent = () => {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Creative Arts Studio — Inspiring imagination,
        learning, and expression every day.
      </p>
      <a
        href="https://www.instagram.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="instagram-link"
      >
        <i className="fab fa-instagram"></i>
      </a>
    </footer>
  );
};