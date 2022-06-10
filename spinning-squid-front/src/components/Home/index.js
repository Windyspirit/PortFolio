import { Link } from 'react-router-dom';
// import des images//
import imageHome from '../../assets/img/home.jpg';
import image1 from '../../assets/img/1.jpg';
import image2 from '../../assets/img/2.jpg';
import image3 from '../../assets/img/3.jpg';
import logo from '../../assets/img/logo1.png';

import './home.scss';

const Home = () => (
  <div className='home-container'>
    <div className='home-header'>
      <h1 className='home-title'>Spinning Squid</h1>
      <img className='home-logo' src={logo} alt='logo spinning squid' />
      <img className='home-image' src={imageHome} alt='skatepark' />
    </div>
    <div className='main-container'>
      <p className='home-p'>
        SPINNING SQUID n'a rien à voir avec une technique ninja de lancé de
        poulpes ou même de pêche. C'est un site communautaire pour te mettre en
        relation avec des personnes qui partagent la même passion que toi : le
        skatebord (sous toutes ses formes) ! <br></br>
        <br></br>
        Ici tu peux partager tes meilleurs spot, les events proches de chez toi
        ou bien du matos dont tu veux te séparer.
      </p>

      <Link to='/trouve-ton-skatepark' className='home-nav'>
        <div className='home-nav-container'>
          <img className='home-nav-image' src={image1} alt='skatepark' />
          <p className='home-nav-description'>
            Si tu cherches un bon spot, ça se passe ici !
          </p>
        </div>
      </Link>
      <Link to='/trouve-ton-matos' className='home-nav'>
        <div className='home-nav-container'>
          <img className='home-nav-image' src={image2} alt='skatepark' />
          <p className='home-nav-description'>
            Tu cherches une planche ? <br></br>Des trucks ? <br></br>Des
            fringues ? <br></br>Vient voir ce que les skateurs de chez toi te
            proposent
          </p>
        </div>
      </Link>
      <Link to='/communaute' className='home-nav'>
        <div className='home-nav-container'>
          <img className='home-nav-image' src={image3} alt='skatepark' />
          <p className='home-nav-description'>
            "Hey homie wassup ?!" voyons voir ce qu'il se passe près de chez toi{' '}
          </p>
        </div>
      </Link>
    </div>
  </div>
);

export default Home;
