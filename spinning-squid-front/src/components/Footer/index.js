import { NavLink } from 'react-router-dom';

import './footer.scss';

const Footer = () => (
  <nav className="navFooter">
    <NavLink
      className="navFooter-link"
      to="/contact"
      activeClassName="navFooter-link--active"
    >
      Nous contacter
    </NavLink>

    <NavLink
      className="navFooter-link"
      to="/newsletter"
      activeClassName="navFooter-link--active"
    >
      Newsletter
    </NavLink>

    <NavLink
      className="navFooter-link"
      to="/spinning-squad"
      activeClassName="navFooter-link--active"
    >
      Spinning Squad
    </NavLink>
  </nav>
);

export default Footer;
