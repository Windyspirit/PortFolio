/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import styled from 'styled-components';
import logo1 from '../../assets/img/logo-hover-5.png';

const _onChildMouseEnter = (event) => {
  // console.log('on entering child');
  // console.log(event);
  var sheet = document.createElement('style');
  sheet.id = 'stylesheethovericon';
  const element = '#article' + event;
  sheet.innerHTML =
    element +
    `{
    background-color: #c2c2c2;
  }`;
  document.body.appendChild(sheet);
};

const _onChildMouseLeave = (event) => {
  //console.log('on leaving child');
  var sheetToBeRemoved = document.getElementById('stylesheethovericon');
  var sheetParent = sheetToBeRemoved.parentNode;
  sheetParent.removeChild(sheetToBeRemoved);
};
const Wrapper = styled.img`
  //background-color: black;
  border-radius: 25px;
  width: 50px;
  height: 50px;
  transform: translate(-25px, -25px);
  &:hover {
    width: 80px;
    height: 80px;
    transform: translate(-40px, -55px);
  }
`;
//&#9733;
const hoverIcon = (event) => {
  console.log(event);
};
const Marker = (props) => (
  <Wrapper id={'WrapperId' + props.id} className='' src={logo1} />
);
const places = [
  {
    id: 'testid1',
    name: 'testname1',
    lat: 37.40216,
    lng: -122.07427,
  },
];
const MapAndMarkers = (props) => {
  return (
    <GoogleMapReact
      id='googlemapreact'
      bootstrapURLKeys={{
        key: 'AIzaSyAglZjyBm532ApJYhxUDEVnmIo0Zd_JsjY',
      }}
      center={props.locationOnMap}
      defaultZoom={6}
      yesIWantToUseGoogleMapApiInternals
      onChildMouseEnter={_onChildMouseEnter}
      onChildMouseLeave={_onChildMouseLeave}
    >
      {props.responseAPI.map((place) => (
        <Marker
          key={place.id}
          id={place.id}
          // text={place.name}
          lat={place.latitude}
          lng={place.longitude}
          // lat={place.meta.latitude}
          // lng={place.meta.longitude}
        />
      ))}
    </GoogleMapReact>
  );
};

export default MapAndMarkers;
