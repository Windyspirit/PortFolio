import { Link } from 'react-router-dom';
import ArticleList from './ArticleList';
import Loading from '../../components/Loading';

import './marketplace.scss';

const Marketplace = (props) => {
  // console.log(props.isLogged);
  if (!props.isLoading) {
    props.callMarketplaceApiGet();
    props.setOnLoading();
  }

  return (
    <div id='marketplace' className='main-container'>
      <div className='search'>
        <h2 className='title search-title'>Trouve ton Matos</h2>
        <div className='marketplace-post'>
          {props.isLogged && (
            <Link to='/trouve-ton-matos/ajoute-ton-matos'>
              <button type='button' className='button button-search'>
                Ajoute une annonce
              </button>
            </Link>
          )}
          {!props.isLogged && (
            <Link to='/connexion'>
              <button type='button' className='button button-search'>
                Ajoute une annonce
              </button>
            </Link>
          )}
        </div>
        <form className='marketplace-form' onSubmit={props.submitArticleSearch}>
          <label htmlFor='marketplace-search'>
            Où ça?
            <input
              id='marketplace-search'
              className='marketplace-input'
              type='text'
              name='search'
              placeholder='Lyon, Paris ...'
              required
              onChange={props.searchFieldTitle}
            />
          </label>
          <button className='button marketplace-search-button' type='submit'>
            Rechercher
          </button>
        </form>
      </div>

      {!props.isLoaded && (
        <>
          <div className='marketplace-loading-wheel'>
            <div className='loading-wheel'>
              <Loading color={'#FF8552'} />
            </div>
          </div>
        </>
      )}
      {props.isLoaded && (
        <ArticleList userLogged={props.isLogged} itemList={props.responseApi} />
      )}
    </div>
  );
};

export default Marketplace;
