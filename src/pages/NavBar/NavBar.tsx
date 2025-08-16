import { Link} from 'react-router-dom';
import "./NavBar.css";


export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">🎨 ArtSpace</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/classes">Classes</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
      </ul>
    </nav>
  );

};