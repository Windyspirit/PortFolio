import { Link } from 'react-router-dom';
import logo404 from '../../assets/img/logo404.png';
import './notFound.scss';

const NotFound = () => (
  <div className='notFound main-container'>
    <div className='notFound-container'>
      <h1 className='title'>Oops ... t'as loupé ton back flip ?</h1>
      <p className='notFound-p'>
        Ceci est une erreur 404, la page demandée n'héxiste pas.
      </p>
      <Link to='/'>
        <button className='button button-back' type='button'>
          Retour à l'accueil
        </button>
      </Link>
      <img className='notFound-image' alt='' src={logo404} />
    </div>
  </div>
);

export default NotFound;
