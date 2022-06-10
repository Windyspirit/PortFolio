import { connect } from 'react-redux';

import DetailsArticle from 'src/components/Marketplace/DetailsArticle';
import {
  submitMarketplaceSearchDetails,
  toggleIsLoading,
} from 'src/actions/marketplaceActions';

const mapStateToProps = (state, ownProps) => ({
  articleId: ownProps.match.params.articleId,
  detailsArticleIsLoading: state.marketplace.addSale.detailsArticleIsLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getDetailsArticle: (data) => {
    dispatch(submitMarketplaceSearchDetails(data));
  },
  handleIsLoading: () => {
    dispatch(toggleIsLoading());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsArticle);
