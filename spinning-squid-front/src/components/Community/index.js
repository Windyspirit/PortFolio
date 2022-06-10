import Loading from '../../components/Loading';
import { Link } from 'react-router-dom';
import PostList from './PostList';
import './community.scss';

const Community = (props) => {
  if (!props.isLoading) {
    props.callArticleApiGet();
    props.setOnLoading();
  }
  return (
    <div id='community' className='main-container'>
      <div className='community-header'>
        <h2 className='title community-title'>Whassup ?!</h2>
      </div>
      <div className='community-post'>
        {props.isLogged && (
          <Link to='/communaute/ajoute-ton-evenement'>
            <button type='button' className='button button-post'>
              Ajoute un évènement
            </button>
          </Link>
        )}
        {!props.isLogged && (
          <Link to='/connexion'>
            <button type='button' className=' button button-post'>
              Ajoute un évènement
            </button>
          </Link>
        )}
      </div>

      {!props.isLoaded && (
        <>
          <div className='community-loading-wheel'>
            <div className='loading-wheel'>
              <Loading color={'#FF8552'} />
            </div>
          </div>
        </>
      )}
      {props.isLoaded && <PostList itemList={props.responseApi} />}
    </div>
  );
};

export default Community;
