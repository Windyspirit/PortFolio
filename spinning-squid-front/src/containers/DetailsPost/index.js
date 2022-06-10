import { connect } from 'react-redux';
import {
  submitGetArticleDetails,
  setOnLoadingDetail,
} from '../../actions/communityActions';
import DetailsPost from '../../components/Community/DetailsPost';

const mapStateToProps = (state, ownProps) => {
  // console.log(ownProps);
  // console.log(
  //   'ownProps.match.params.articleId : ' + ownProps.match.params.articleId
  // );
  // console.log(
  //   'state.community.addArticle.id : ' + state.community.addArticle.id
  // );
  return {
    detailsNotMatching:
      ownProps.match.params.articleId != state.community.addArticle.id,
    articleId: ownProps.match.params.articleId,
    isLoaded: state.community.isLoaded,
    postAddIsLoading: state.community.addArticle.postAddIsLoading,
    responseApi: state.community.responseApi,
    title: state.community.addArticle.title,
    place: state.community.addArticle.place,
    date: state.community.addArticle.date,
    story: state.community.addArticle.story,
    image: state.community.addArticle.image,
    isLogged: state.user.isLogged,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getArticleDetails: (articleId) => {
    dispatch(submitGetArticleDetails(articleId));
  },
  setOnLoading: () => {
    dispatch(setOnLoadingDetail());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsPost);
