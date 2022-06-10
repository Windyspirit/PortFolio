import { connect } from 'react-redux';
import {
  submitMarketplaceSearchDetails,
  setOnSaleDetailsLoading,
} from '../../actions/marketplaceActions';
import DetailsArticle from '../../components/Marketplace/DetailsArticle';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return {
    detailsNotMatching:
      ownProps.match.params.saleId != state.marketplace.addSale.id,
    saleId: ownProps.match.params.saleId,
    isLoaded: state.marketplace.isLoaded,
    saleAddIsLoading: state.marketplace.addSale.saleAddIsLoading,
    responseApi: state.marketplace.responseApi,
    title: state.marketplace.addSale.title,
    place: state.marketplace.addSale.place,
    price: state.marketplace.addSale.price,
    story: state.marketplace.addSale.story,
    image: state.marketplace.addSale.image,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getSaleDetails: (saleId) => {
    dispatch(submitMarketplaceSearchDetails(saleId));
  },
  setOnLoadingSale: () => {
    dispatch(setOnSaleDetailsLoading());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsArticle);
