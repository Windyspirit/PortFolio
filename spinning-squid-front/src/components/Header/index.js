import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import logo from '../../assets/img/logo1.png';
import avatar from '../../assets/img/logo2.png';

import './header.scss';
import { resetStorage } from '../../generic_functions';

const Header = ({ handleCheckUserUpdateProfile, isLogged, handleLogout }) => (
  <nav className='nav'>
    <div className='left-half-header'>
      <NavLink className='left-header' to='/' exact>
        <img className='nav-logo' src={logo} alt='logo spinning squid' />
      </NavLink>
    </div>

    <div className='right-half-header'>
      <NavLink
        to='/'
        exact
        className='nav-link right-header'
        activeClassName='nav-link--active'
      >
        Accueil
      </NavLink>

      <NavLink
        to='/trouve-ton-skatepark'
        className='nav-link right-header'
        activeClassName='nav-link--active'
      >
        Trouve ton Skatepark
      </NavLink>

      <NavLink
        to='/trouve-ton-matos'
        className='nav-link right-header'
        activeClassName='nav-link--active'
      >
        Trouve ton Matos
      </NavLink>

      <NavLink
        to='/communaute'
        className='nav-link right-header'
        activeClassName='nav-link--active'
      >
        Whassup ?!
      </NavLink>

      <NavLink
        to='/contact'
        className='nav-link right-header'
        activeClassName='nav-link--active'
      >
        Question ?
      </NavLink>

      {!isLogged && (
        <NavLink
          to='/connexion'
          exact
          className='nav-link right-header'
          activeClassName='nav-link--active'
        >
          Connexion
        </NavLink>
      )}

      {isLogged && (
        <NavLink
          to='/'
          className='nav-link right-header'
          onClick={handleLogout}
        >
          Déconnexion
        </NavLink>
      )}

      {isLogged && (
        <NavLink
          to='/connexion/profil'
          className='right-header'
          activeClassName='nav-link-avatar--active'
          onClick={handleCheckUserUpdateProfile}
        >
          <img className='nav-link-avatar' src={avatar} alt='' />
        </NavLink>
      )}

      {/* Menu burger */}
      <Menu right isOpen={false}>
        <NavLink
          className='nav-link'
          to='/'
          exact
          activeClassName='nav-link--active'
        >
          Accueil
        </NavLink>
        <NavLink
          className='nav-link'
          to='/trouve-ton-skatepark'
          activeClassName='nav-link--active'
        >
          Trouve ton Skatepark
        </NavLink>
        <NavLink
          className='nav-link'
          to='/trouve-ton-matos'
          activeClassName='nav-link--active'
        >
          Trouve ton Matos
        </NavLink>
        <NavLink
          className='nav-link'
          to='/communaute'
          activeClassName='nav-link--active'
        >
          Whassup ?!
        </NavLink>
        <NavLink
          className='nav-link'
          to='/contact'
          activeClassName='nav-link--active'
        >
          Question
        </NavLink>
        <NavLink
          className='nav-link'
          to='/connexion'
          activeClassName='nav-link--active'
        >
          Connexion
        </NavLink>
      </Menu>
    </div>
  </nav>
);

export default Header;
