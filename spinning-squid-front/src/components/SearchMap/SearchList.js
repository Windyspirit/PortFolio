import React from 'react';
import './searchMap.scss';
/* eslint-disable prefer-template */
/* eslint-disable no-else-return */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
import logo2 from '../../assets/img/logo2.png';
import { Link } from 'react-router-dom';

const _onMouseEnter = (event) => {
  //console.log('on entering child');
  //console.log(event);
  var sheet = document.createElement('style');
  sheet.id = 'stylesheethoverlist';
  const element = '#WrapperId' + event.target.id.substring(7);
  //console.log(element);
  sheet.innerHTML =
    element +
    `{
    background-color: #6e6b6b;
  }`;
  document.body.appendChild(sheet);
};

const _onMouseLeave = (event) => {
  //console.log('on leaving child');
  var sheetToBeRemoved = document.getElementById('stylesheethoverlist');
  var sheetParent = sheetToBeRemoved.parentNode;
  sheetParent.removeChild(sheetToBeRemoved);
};

const SearchList = (list) => {
  //console.log(list);
  // console.log('test' + list.itemList);
  // console.log('test');
  // console.log(list.itemList[0]._embedded['wp:featuredmedia'][0].source_url);

  const mappingArticles = list.itemList.map((item) => {
    const getImageURL = () => {
      // Vérification : la recette a-t-elle une image
      // if (
      //   item &&
      //   item._embedded &&
      //   item._embedded['wp:featuredmedia'] &&
      //   item._embedded['wp:featuredmedia'][0].media_details &&
      //   item._embedded['wp:featuredmedia'][0].media_details.sizes
      // ) {
      //   console.log(item._embedded['wp:featuredmedia']);
      //   if (item._embedded['wp:featuredmedia'][0].media_details.sizes.large) {
      //     return item._embedded['wp:featuredmedia'][0].media_details.sizes.large
      //       .source_url;
      //   } else if (
      //     item._embedded['wp:featuredmedia'][0].media_details.sizes.full
      //   ) {
      //     return item._embedded['wp:featuredmedia'][0].media_details.sizes.full
      //       .source_url;
      //   } else {
      //     return item._embedded['wp:featuredmedia'][0].source_url;
      //   }
      // } else {
      //   return logo2;
      // }
      return logo2;
    };
    const urlDetailSkatepark = '/trouve-ton-skatepark/' + item.id;
    // console.log(item);
    const location = {
      lat: item.latitude,
      lng: item.longitude,
      // lat: item.meta.latitude,
      // lng: item.meta.longitude,
    };
    const updateMap = () => {
      list.moveLocationOnMap(location);
    };
    return (
      <article
        key={item.id}
        id={'article' + item.id}
        onMouseEnter={_onMouseEnter}
        onMouseLeave={_onMouseLeave}
        className='search-list-item'
      >
        <img className='search-list-image' src={getImageURL()} alt='' />
        <div className='block-titre-type'>
          <div>
            <h2 className='search-list-title'>
              {item.title}
              {/* {item.title.rendered} */}
            </h2>
          </div>
          <div>
            <h3 className='search-list-description'>
              {item.skatepark
                ? 'Skatepark'
                : item.pumptrack
                ? 'PumpTrack'
                : 'Street'}
              {/* {item.meta.skatepark
                ? 'Skatepark'
                : item.meta.pumptrack
                ? 'PumpTrack'
                : 'Street'} */}
            </h3>
          </div>
        </div>
        <div className='block-buttons'>
          <div id='special-button'>
            <button className='button ' type='button' onClick={updateMap}>
              Centrer
            </button>
          </div>
          <div>
            <Link to={urlDetailSkatepark}>
              <button className='button'>Details</button>
            </Link>
          </div>
        </div>
      </article>
    );
  });
  return mappingArticles;
};
export default SearchList;
