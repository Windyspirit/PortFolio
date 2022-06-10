import axios from 'axios';
import { baseURI, baseSpinningSquid } from '../routesBack';
import {
  GET_MARKETPLACE_INITIAL_LIST,
  GET_MARKETPLACE_ARTICLE_LIST,
  GET_MARKETPLACE_ARTICLE_DETAILS,
  POST_MARKETPLACE_ADD_ARTICLE,
  POST_MARKETPLACE_UPDATE_ARTICLE,
  POST_MARKETPLACE_DELETE_ARTICLE,
  successMarketplaceSearch,
  successMarketplaceSearchDetails,
  successMarketplaceInitialSearch,
  successMarketplaceAddArticle,
  successMarketplaceUpdateArticle,
  successMarketplaceDeleteArticle,
} from '../actions/marketplaceActions';
import { push } from 'connected-react-router';

const marketplaceMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_MARKETPLACE_INITIAL_LIST:
      const endPointSale = baseURI + '/sale?_embed=true';
      // axios
      //   .get(endPointSale)
      //   .then((response) => {
      //     console.log('response from API : ');
      //     console.log(response);
      //     store.dispatch(successMarketplaceInitialSearch(response.data));
      //   })
      //   .catch((error) => {
      //     console.warn(error);
      //   });

      const exemple = [
        {
          id: 1,
          title: 'Roulement plaqué or',
          price: 150,
          place: 'Paris',
        },
      ];
      setTimeout(() => {
        store.dispatch(successMarketplaceInitialSearch(exemple));
        // console.log('call API ok');
      }, 1000);

      break;
    case GET_MARKETPLACE_ARTICLE_LIST:
      const endPointSaleSearch =
        baseURI +
        '/sale/?meta_key=place&meta_value=' +
        store.getState().marketplace.searchFieldSale +
        '&_embed=true';
      console.log(store.getState().marketplace.searchFieldSale);
      axios
        .get(endPointSaleSearch)
        .then((response) => {
          console.log('response from API : ');
          console.log(response);
          store.dispatch(successMarketplaceSearch(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      // setTimeout(() => {
      //   store.dispatch(
      //     successMarketplaceSearch(
      //       'a remplacer par le call API dans marketplaceMiddleware'
      //     )
      //   );
      // }, 3000);

      break;

    case GET_MARKETPLACE_ARTICLE_DETAILS:
      const sale_Id = action.saleId;
      console.log(action.saleId);
      const endPointDetails_Sale =
        baseURI + '/sale/' + sale_Id + '?_embed=true';
      // console.log('on y passe youpi');
      axios
        .get(endPointDetails_Sale)
        .then((response) => {
          console.log('response from API : ');
          console.log(response);
          console.log(response.data);
          store.dispatch(successMarketplaceSearchDetails(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      // store.dispatch(
      //   successMarketplaceSearchDetails(
      //     'a remplacer par le call API dans marketplaceMiddleware'
      //   )
      // );

      break;

    case POST_MARKETPLACE_ADD_ARTICLE:
      const endPointAddSale = baseSpinningSquid + '/add-sale';
      console.log(JSON.parse(localStorage.getItem('userData')).token);
      const options_ADD = {
        headers: {
          Authorization:
            'Bearer ' + JSON.parse(localStorage.getItem('userData')).token,
        },
      };
      console.log('on y passe youpi');
      axios
        .post(
          endPointAddSale,
          {
            title: store.getState().marketplace.addSale.title,
            place: store.getState().marketplace.addSale.place,
            price: store.getState().marketplace.addSale.price,
            image: store.getState().marketplace.addSale.image,
            story: store.getState().marketplace.addSale.story,
          },
          options_ADD
        )
        .then((response) => {
          console.log('response from API : ');
          console.log(response);
          store.dispatch(successMarketplaceAddArticle());
          window.alert(
            `
            L'ajout de votre matos à vendre a bien été enregistré.
            Bisous.
            `
          );
          store.dispatch(push('/trouve-ton-matos'));
          window.location.reload();
        })
        .catch((error) => {
          console.warn(error);
        });
      // store.dispatch(
      //   successMarketplaceAddArticle(
      //     'a remplacer par le call API dans marketplaceMiddleware'
      //   )
      // );

      break;
    case POST_MARKETPLACE_UPDATE_ARTICLE:
      // axios
      //   .get(baseURI + endPointSale)
      //   .then((response) => {
      //     console.log('response from API : ');
      //     console.log(response);
      // store.dispatch(
      //   successGetSkateparkList(response.data)
      // );
      // })
      // .catch((error) => {
      //   console.warn(error);
      // });
      store.dispatch(
        successMarketplaceUpdateArticle(
          'a remplacer par le call API dans marketplaceMiddleware'
        )
      );

      break;
    case POST_MARKETPLACE_DELETE_ARTICLE:
      // axios
      //   .get(baseURI + endPointSale)
      //   .then((response) => {
      //     console.log('response from API : ');
      //     console.log(response);
      // store.dispatch(
      //   successGetSkateparkList(response.data)
      // );
      // })
      // .catch((error) => {
      //   console.warn(error);
      // });
      store.dispatch(
        successMarketplaceDeleteArticle(
          'a remplacer par le call API dans marketplaceMiddleware'
        )
      );

      break;
    default:
  }
  next(action);
};
export default marketplaceMiddleware;
