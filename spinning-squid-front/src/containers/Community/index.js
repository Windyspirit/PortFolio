import { connect } from 'react-redux';

import Community from '../../components/Community';
import { updateField } from '../../actions/userActions';
import {
  callGetArticleList,
  setOnLoadingStatus,
  emptyDetailsArticle,
} from '../../actions/communityActions';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  detailsLoaded: state.community.addArticle.postAddIsLoading,
  articlesList: state.community.articlesList,
  responseApi: state.community.responseApi,
  isLoaded: state.community.isLoaded,
  isLoading: state.community.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  callArticleApiGet: () => {
    dispatch(callGetArticleList());
  },
  handleOnChange: (event) => {
    dispatch(updateField(event.target.id, event.target.value));
  },
  setOnLoading: () => {
    dispatch(setOnLoadingStatus());
  },
  emptyDetailsArticle: () => {
    dispatch(emptyDetailsArticle());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Community);
