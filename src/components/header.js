import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <ul className="menu-list">
      <li><Link to="/">Home</Link></li>
      <li><Link to="categories">Categories</Link></li>
    </ul>
  </div>

);

export default Header;