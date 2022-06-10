import { connect } from 'react-redux';
import { updateField } from '../../actions/userActions';
import {
  submitUpdateSpot,
  callGetSkateparkDetails,
  fillState,
  submitDeleteSpot,
} from '../../actions/skateparkActions';
import returnBase64Img from '../../generic_functions';

import SpotEdit from '../../components/SpotEdit';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  console.log(ownProps.match.params.skateparkId);
  console.log(state.skatepark.addSpot.id);
  console.log(ownProps.match.params.skateparkId != state.skatepark.addSpot.id);
  return {
    spotAddIsLoading: state.skatepark.addSpot.spotAddIsLoading,
    skateparkId: ownProps.match.params.skateparkId,
    checkBadValue:
      ownProps.match.params.skateparkId != state.skatepark.addSpot.id,
    title: state.skatepark.addSpot.title,
    categorySkatepark: state.skatepark.addSpot.categorySkatepark,
    categoryPumptrack: state.skatepark.addSpot.categoryPumptrack,
    categoryStreet: state.skatepark.addSpot.categoryStreet,
    street: state.skatepark.addSpot.street,
    postal: state.skatepark.addSpot.postal,
    town: state.skatepark.addSpot.town,
    latitude: state.skatepark.addSpot.latitude,
    longitude: state.skatepark.addSpot.longitude,
    parking: state.skatepark.addSpot.parking,
    water: state.skatepark.addSpot.water,
    trashcan: state.skatepark.addSpot.trashcan,
    lighting: state.skatepark.addSpot.lighting,
    table: state.skatepark.addSpot.table,
    benche: state.skatepark.addSpot.benche,
    etatRadioBtn: state.skatepark.addSpot.etatRadioBtn,
    uploadedImg: state.skatepark.addSpot.imgNameToDisplay,
  };
};

const mapDispatchToProps = (dispatch, state) => ({
  fillState: (skateparkId) => {
    dispatch(fillState(skateparkId));
  },
  getSkateparkDetails: (skateparkId) => {
    dispatch(callGetSkateparkDetails(skateparkId));
  },
  handleChangeField: (event) => {
    dispatch(updateField(event.target.id, event.target.value));
  },
  handleChangeCheckbox: (event) => {
    dispatch(updateField(event.target.id, event.target.checked));
  },
  handleUploadLocalImage: async (event) => {
    const imgName = event.target.id;
    const nameForField = event.nativeEvent.target.files[0].name;
    const imgValue = event.target.files[0];
    const imgValueURL = URL.createObjectURL(event.target.files[0]);
    const imgBase64 = await returnBase64Img(imgValue);
    console.log(event.nativeEvent);
    console.log(nameForField);
    console.log(imgName);
    console.log(imgValueURL);
    console.log(imgBase64);
    dispatch(updateField('imgNameToDisplay', nameForField));
    dispatch(updateField('uploadImage', imgBase64));
    console.log('commande envoyée');
  },
  handleSubmitEditPost: (event) => {
    event.preventDefault();
    //const encodedImg = createBase64Image(selectedImg);
    //console.log('on passe dans handleSubmitUpdatePost');
    dispatch(submitUpdateSpot());
  },
  callDeleteSkatepark: () => {
    dispatch(submitDeleteSpot());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SpotEdit);
