import { connect } from 'react-redux';
import { updateField } from '../../actions/userActions';
import {
  callGetSkateparkList,
  successGetSkateparkList,
  successSubmitAddSpot,
  setOnLoadingStatus,
  getSkateparkByCity,
  updateLocationOnMap,
  resetLocationOnMap,
} from '../../actions/skateparkActions';
import SearchMap from '../../components/SearchMap';

const mapStateToProps = (state, ownProps) => {
  //console.log(ownProps);
  return {
    isLogged: state.user.isLogged,
    skateparkLocationList: state.skatepark.skateparkLocationList,
    responseAPI: state.skatepark.responseAPI,
    isLoading: state.skatepark.isLoading,
    isLoaded: state.skatepark.isLoaded,
    locationOnMap: state.skatepark.locationOnMap,
  };
};

const mapDispatchToProps = (dispatch) => ({
  callApiGet: () => {
    dispatch(callGetSkateparkList());
  },
  setOnLoading: () => {
    dispatch(setOnLoadingStatus());
  },
  searchFieldTown: (event) => {
    const inputId = event.target.id;
    const inputValue = event.target.value;
    dispatch(updateField(inputId, inputValue));
  },
  submitSkateparkSearch: (event) => {
    event.preventDefault();
    dispatch(getSkateparkByCity());
  },
  moveLocationOnMap: (data) => {
    dispatch(updateLocationOnMap(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchMap);
