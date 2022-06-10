import { connect } from 'react-redux';

import AddSale from '../../components/Marketplace/AddSale';
import { updateField } from '../../actions/userActions';
import returnBase64Img from '../../generic_functions';

import {
  callGetMarketplaceList,
  setOnLoadingStatus,
  submitMarketplaceAddArticle,
} from '../../actions/marketplaceActions';

const mapStateToProps = (state) => ({
  articlesList: state.marketplace.articlesList,
  isLoaded: state.marketplace.isLoaded,
  isLoading: state.marketplace.isLoading,
  title: state.marketplace.title,
  place: state.marketplace.place,
  price: state.marketplace.price,
  image: state.marketplace.image,
  story: state.marketplace.story,
});

const mapDispatchToProps = (dispatch) => ({
  callArticleApiGet: () => {
    dispatch(callGetMarketplaceList());
  },
  handleOnChange: (event) => {
    dispatch(updateField(event.target.id, event.target.value));
    console.log(event);
  },
  setOnLoading: () => {
    dispatch(setOnLoadingStatus());
  },
  handleUploadLocalImage: async (event) => {
    const imgName = event.target.id;
    const imgValue = event.target.files[0];
    const imgValueURL = URL.createObjectURL(event.target.files[0]);
    // <img src={URL.createObjectURL(`data:image/jpeg;base64,${this.state.image}`)} />
    const imgBase64 = await returnBase64Img(imgValue);
    console.log(imgName);
    console.log(imgValueURL);
    console.log(imgBase64);
    dispatch(updateField(imgName, imgValue));
    dispatch(updateField('addSaleImage', imgBase64));
    console.log('commande envoyée');
  },
  handleAddArticle: (event) => {
    event.preventDefault();
    console.log('on passe dans handleAddArticle');
    dispatch(submitMarketplaceAddArticle());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddSale);
