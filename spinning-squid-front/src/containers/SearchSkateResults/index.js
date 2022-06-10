import { connect } from 'react-redux';
import { updateField } from '../../actions/userActions';
import {
  callGetSkateparkDetails,
  setOnSkateparkDetailsLoading,
  submitDeleteSpot,
  setIsLoadingToFalse,
} from '../../actions/skateparkActions';
import SearchSkateResults from '../../components/SearchSkateResults';

const mapStateToProps = (state, ownProps) => {
  //console.log(ownProps);
  return {
    detailsNotMatching:
      ownProps.match.params.resultat != state.skatepark.addSpot.id,
    skateparkName: ownProps.match.params.resultat,
    isLoaded: state.skatepark.addSpot.spotAddIsLoaded,
    isLoading: state.skatepark.addSpot.spotAddIsLoading,
    locationOnMap: state.skatepark.locationOnMap,
    responseAPI: state.skatepark.responseAPI,
    skateparkTitle: state.skatepark.addSpot.title,
    skateparkImg: state.skatepark.addSpot.uploadedImg,
    adresse: state.skatepark.addSpot.street,
    postal: state.skatepark.addSpot.postal,
    town: state.skatepark.addSpot.town,
    parking: state.skatepark.addSpot.parking,
    water: state.skatepark.addSpot.water,
    trashcan: state.skatepark.addSpot.trashcan,
    lighting: state.skatepark.addSpot.lighting,
    table: state.skatepark.addSpot.table,
    benche: state.skatepark.addSpot.benche,
    etatRadioBtn: state.skatepark.addSpot.etatRadioBtn,
    latitude: state.skatepark.addSpot.latitude,
    longitude: state.skatepark.addSpot.longitude,
    id: ownProps.match.params.resultat,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getSkateparkDetails: (skateparkName) => {
    dispatch(setIsLoadingToFalse());
    dispatch(callGetSkateparkDetails(skateparkName));
  },
  callDeleteSkatepark: () => {
    dispatch(submitDeleteSpot());
  },
  setOnLoading: () => {
    dispatch(setOnSkateparkDetailsLoading());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchSkateResults);
