import React from 'react';
import { Link } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import logo1 from '../../assets/img/logo-hover-5.png';
import Img from '../../assets/img/Skateparktest.jpg';
import './searchSkateResults.scss';
import Loading from '../../components/Loading';

const Wrapper = styled.img`
  //background-color: black;
  border-radius: 25px;
  width: 30px;
  height: 30px;
  transform: translate(-15px, -15px);
  &:hover {
    width: 50px;
    height: 50px;
    transform: translate(-25px, -35px);
  }
`;
const Marker = (props) => {
  return (
    <Wrapper id={'WrapperId' + props.id} className='' src={logo1}></Wrapper>
  );
};

const SearchSkateResults = (props) => {
  console.log(props.id);
  console.log(props.longitude);
  console.log(props.latitude);
  if (!props.isLoading || props.detailsNotMatching) {
    props.getSkateparkDetails(props.skateparkName);
    props.setOnLoading();
  }
  return (
    <div
      id='skateparkDetails'
      className='skateparkDetails-searchresult main-container'
    >
      {!props.isLoaded && (
        <>
          <div className='skateparkDetails-loading-wheel'>
            <div className='loading-wheel'>
              <Loading color={'#FF8552'} />
            </div>
          </div>
        </>
      )}
      {props.isLoaded && (
        <>
          <h3 className='skateparkDetails-title'>{props.skateparkTitle}</h3>
          <img
            className='skateparkDetails-searchresultimage'
            src={props.skateparkImg}
            alt='skatepark Achères'
          />
          {/* <span className="searchresultstars">Etoiles</span>

          <div className="rating">
            <a href="#5" title="Génial !">
              ★
            </a>
            <a href="#4" title="Chouette !">
              ★
            </a>
            <a href="#3" title="Fonctionnel">
              ★
            </a>
            <a href="#2" title="Bof">
              ★
            </a>
            <a href="#1" title="Nul">
              ★
            </a>
          </div> */}
          <div className='skateparkDetails-description'>
            <div className='skateparkDetails-adresse-etat'>
              <div className='skateparkDetails-searchresulttitle'>Adresse:</div>
              <div className='skateparkDetails-searchresultadress'>
                {props.adresse} {props.town} {props.postal}
              </div>
              <div className='skateparkDetails-searchresulttitle'>
                Etat général:
              </div>
              <div className='skateparkDetails-detailssearchresult'>
                {props.etatRadioBtn === 'New' ? 'Neuf' : ''}
                {props.etatRadioBtn === 'Good' ? 'Bien' : ''}
                {props.etatRadioBtn === 'Way' ? 'Moyen' : ''}
                {props.etatRadioBtn === 'Endoflife' ? 'En fin de vie' : ''}
              </div>
            </div>
            <div className='skateparkDetails-equipement'>
              <div className='skateparkDetails-searchresulttitle'>
                Equipement:
              </div>
              <div className='skateparkDetails-detailssearchresult'>
                {props.parking && <div> Parking</div>}
                {props.water && <div> Eau</div>}
                {props.trashcan && <div> Poubelle</div>}
                {props.lighting && <div> Eclairage</div>}
                {props.table && <div> Tables</div>}
                {props.benche && <div> Bancs</div>}
              </div>
            </div>
          </div>

          <div className='skateparkDetails-searchresulttitle padding-bottom-2em'>
            Map de l'adresse
          </div>
          <div className='skateparkDetails-search-map'>
            <GoogleMapReact
              id='googlemapreact'
              bootstrapURLKeys={{
                key: 'AIzaSyAglZjyBm532ApJYhxUDEVnmIo0Zd_JsjY',
              }}
              center={props.locationOnMap}
              defaultZoom={7}
              yesIWantToUseGoogleMapApiInternals
            >
              <Marker
                key={props.id}
                id={props.id}
                //text={place.name}
                lat={props.latitude}
                lng={props.longitude}
              />
            </GoogleMapReact>
          </div>
        </>
      )}
      <div className='skateparkDetails-buttons'></div>
    </div>
  );
};

export default SearchSkateResults;

//http://romain-talbot.vpnuser.lan/SpinningSquad_Apotheose/projet-skatepark/public/wp-json/wp/v2/skatepark/?meta_key=city&meta_value=[nomDeLaVille]
//baseSpinningSquid + /add-article ou /update-article ou /delete-article ou /add-sale ou /update-sale ou /delete-sale
//baseURI + "/skatepark/" + Id + "?_embed=true"
