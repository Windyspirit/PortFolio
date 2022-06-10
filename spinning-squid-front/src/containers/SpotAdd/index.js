import { connect } from 'react-redux';
import { updateField } from '../../actions/userActions';
import { submitAddSpot } from '../../actions/skateparkActions';
import returnBase64Img from '../../generic_functions';

import SpotAdd from '../../components/SpotAdd';

const mapStateToProps = (state) => ({
  etatRadioBtn: state.skatepark.addSpot.etatRadioBtn,
});

const mapDispatchToProps = (dispatch) => ({
  handleChangeField: (event) => {
    dispatch(updateField(event.target.id, event.target.value));
  },
  handleChangeCheckbox: (event) => {
    dispatch(updateField(event.target.id, event.target.checked));
  },
  handleUploadLocalImage: async (event) => {
    const imgName = event.target.id;
    const imgValue = event.target.files[0];
    const imgValueURL = URL.createObjectURL(event.target.files[0]);
    //<img src={URL.createObjectURL(`data:image/jpeg;base64,${this.state.image}`)} />
    const imgBase64 = await returnBase64Img(imgValue);
    console.log(imgName);
    console.log(imgValueURL);
    console.log(imgBase64);
    dispatch(updateField(imgName, imgValue));
    dispatch(updateField('uploadImage', imgBase64));
    console.log('commande envoyée');
  },
  handleSubmitAddPost: (event) => {
    event.preventDefault();
    //const encodedImg = createBase64Image(selectedImg);
    console.log('on passe dans handleSubmitAddPost');
    dispatch(submitAddSpot());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SpotAdd);
