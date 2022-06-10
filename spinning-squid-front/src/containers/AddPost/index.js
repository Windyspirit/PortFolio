import { connect } from 'react-redux';

import AddPost from '../../components/Community/AddPost';
import { updateField } from '../../actions/userActions';
import returnBase64Img from '../../generic_functions';

import {
  callGetArticleList,
  setOnLoadingStatus,
  submitAddArticle,
} from '../../actions/communityActions';

const mapStateToProps = (state) => ({
  articlesList: state.community.articlesList,
  isLoaded: state.community.isLoaded,
  isLoading: state.community.isLoading,
  title: state.community.title,
  date: state.community.date,
  place: state.community.place,
  image: state.community.uploadedImg,
  story: state.community.story,
});

const mapDispatchToProps = (dispatch) => ({
  callArticleApiGet: () => {
    dispatch(callGetArticleList());
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
    dispatch(updateField('addPostImage', imgBase64));
    console.log('commande envoyée');
  },
  handleAddArticle: (event) => {
    event.preventDefault();
    console.log('on passe dans handleAddArticle');
    dispatch(submitAddArticle());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
