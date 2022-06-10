import Loading from '../../components/Loading';
import BlockMap from './BlockMap';
import React from 'react';
import { Link } from 'react-router-dom';
import './searchMap.scss';

const SearchMap = (props) => {
  if (!props.isLoading) {
    props.callApiGet();
    props.setOnLoading();
  }

  return (
    <div className='main-container search'>
      <h1 className='title'>Trouve ton SkatePark</h1>
      {props.isLogged && (
        <button className='button addSpot-button' type='button'>
          <Link to='/trouve-ton-skatepark/ajoute-ton-spot'>
            Ajoute ton spot
          </Link>
        </button>
      )}
      {!props.isLogged && (
        <button className='button addSpot-button' type='button'>
          <Link to='/connexion'>Ajoute ton spot</Link>
        </button>
      )}

      <form className='search-form' onSubmit={props.submitSkateparkSearch}>
        <label className='search-label'>
          Où ça?
          <input
            id='town-search'
            className='search-input'
            type='text'
            name='town'
            placeholder='Paris, Lyon ...'
            required
            onChange={props.searchFieldTown}
          />
        </label>
        <button className='button search-button' type='submit'>
          Rechercher
        </button>
      </form>

      <div className='search-result'>
        {!props.isLoaded && (
          <>
            <div className='loading-wheel'>
              <Loading color={'#FF8552'} />
            </div>
          </>
        )}
        {props.isLoaded && (
          <BlockMap
            responseAPI={props.responseAPI}
            locationOnMap={props.locationOnMap}
            moveLocationOnMap={props.moveLocationOnMap}
          />
        )}
      </div>
    </div>
  );
};

export default SearchMap;
