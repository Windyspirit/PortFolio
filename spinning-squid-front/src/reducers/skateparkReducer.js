import { UPDATE_FIELD } from '../actions/userActions';
import {
  FILL_STATE,
  SKATEPARK_ON_LOADING,
  SET_ON_LOADING_FALSE,
  UPDATE_LOCATION_ON_MAP,
  RESET_LOCATION_ON_MAP,
  SKATEPARK_DETAILS_ON_LOADING,
  GET_SKATEPARK_LIST_SUCCESS,
  GET_SKATEPARK_DETAILS_SUCCESS,
  SUBMIT_ADD_SPOT_SUCCESS,
  SUBMIT_UPDATE_SPOT_SUCCESS,
  SUBMIT_DELETE_SPOT_SUCCESS,
  GET_SKATEPARK_BY_CITY_SUCCESS,
} from '../actions/skateparkActions';

export const initialState = {
  skateparkLocationList: ['un', 'deux', 'trois'],
  searchFieldTown: 'searchFieldTown test state',
  responseAPI: {},
  isLoaded: false,
  isLoading: false,
  locationOnMap: {
    lat: 46.23219,
    lng: 2.20966,
  },
  skateparkToDisplay_Id: 'initial state showDetails',
  addSpot: {
    spotAddIsLoading: false,
    spotAddIsLoaded: false,
    id: 'initial state',
    title: '',
    categorySkatepark: false,
    categoryPumptrack: false,
    categoryStreet: false,
    street: '',
    postal: '',
    town: '',
    latitude: '',
    longitude: '',
    parking: false,
    water: false,
    trashcan: false,
    lighting: false,
    table: false,
    benche: false,
    etatRadioBtn: 'initial etatRadioBtn value into state',
    uploadedImg: 'initial state',
    imgNameToDisplay: 'No file chosen',
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_FIELD:
      if (action.fieldName === 'town-search') {
        return {
          ...state,
          searchFieldTown: action.fieldValue,
        };
      }
      if (action.fieldName === 'titleSkatepark') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            title: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'categorySkatepark') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            categorySkatepark: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'categoryPumptrack') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            categoryPumptrack: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'categoryStreet') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            categoryStreet: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'parking') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            parking: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'water') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            water: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'trashcan') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            trashcan: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'lighting') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            lighting: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'table') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            table: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'benche') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            benche: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'addSpotStreet') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            street: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'addSpotPostal') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            postal: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'addSpotTown') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            town: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'addSpotlongitude') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            longitude: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'addSpotlatitude') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            latitude: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'uploadImage') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            uploadedImg: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'addSpotNew') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            etatRadioBtn: 'New',
          },
        };
      }
      if (action.fieldName === 'addSpotGood') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            etatRadioBtn: 'Good',
          },
        };
      }
      if (action.fieldName === 'addSpotWay') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            etatRadioBtn: 'Way',
          },
        };
      }
      if (action.fieldName === 'addSpotEndoflife') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            etatRadioBtn: 'Endoflife',
          },
        };
      }
      if (action.fieldName === 'imgNameToDisplay') {
        return {
          ...state,
          addSpot: {
            ...state.addSpot,
            imgNameToDisplay: action.fieldValue,
          },
        };
      }
      return state;

    case SET_ON_LOADING_FALSE:
      return {
        ...state,
        isLoading: false,
      };
    case SKATEPARK_ON_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_LOCATION_ON_MAP:
      return {
        ...state,
        locationOnMap: action.locationOnMap,
      };
    case RESET_LOCATION_ON_MAP:
      return {
        ...state,
        locationOnMap: action.locationOnMap,
      };
    case RESET_LOCATION_ON_MAP:
      return {
        ...state,
        locationOnMap: action.locationOnMap,
      };
    case SKATEPARK_DETAILS_ON_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SKATEPARK_LIST_SUCCESS:
      return {
        ...state,
        responseAPI: action.responseAPI,
        isLoaded: action.loaded,
      };
    case GET_SKATEPARK_DETAILS_SUCCESS:
      // console.log(action.responseAPI);
      return {
        ...state,
        responseAPI: action.responseAPI,
        isLoading: false,
        isLoaded: false,
        addSpot: {
          ...state.addSpot,
          spotAddIsLoading: !state.addSpot.isLoading,
          spotAddIsLoaded: !state.addSpot.isLoaded,
          id: action.responseAPI.id,
          title: action.responseAPI.title.rendered,
          categorySkatepark: action.responseAPI.meta.skatepark,
          categoryPumptrack: action.responseAPI.meta.pumptrack,
          categoryStreet: action.responseAPI.meta.streetspot,
          street: action.responseAPI.meta.street,
          postal: action.responseAPI.meta.zipcode,
          town: action.responseAPI.meta.city,
          latitude: action.responseAPI.meta.latitude,
          longitude: action.responseAPI.meta.longitude,
          parking: action.responseAPI.meta.parking,
          water: action.responseAPI.meta.water,
          trashcan: action.responseAPI.meta.trashcan,
          lighting: action.responseAPI.meta.lighting,
          table: action.responseAPI.meta.table,
          benche: action.responseAPI.meta.benche,
          etatRadioBtn: action.responseAPI.meta.state,
          uploadedImg:
            action.responseAPI._embedded['wp:featuredmedia'][0].source_url,
        },
      };
    case GET_SKATEPARK_BY_CITY_SUCCESS:
      return {
        ...state,
        responseAPI: action.responseAPI,
        isLoaded: action.loaded,
      };
    case SUBMIT_ADD_SPOT_SUCCESS:
      return {
        ...state,
        message: action.message_success,
      };
    case SUBMIT_UPDATE_SPOT_SUCCESS:
      return {
        ...state,
        message: action.message_success,
      };
    case FILL_STATE:
      return {
        ...state,
      };
    //--------------------------------------------------------------
    // à compléter
    case SUBMIT_DELETE_SPOT_SUCCESS:
      return {
        ...state,
      };
    //-------------------------------------------------------------
    default:
      return state;
  }
};

export default reducer;
