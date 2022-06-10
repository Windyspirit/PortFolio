import { UPDATE_FIELD } from '../actions/userActions';
import {
  MARKETPLACE_ON_LOADING,
  MARKETPLACE_DETAILS_ON_LOADING,
  GET_MARKETPLACE_INITIAL_LIST_SUCCESS,
  GET_MARKETPLACE_ARTICLE_LIST_SUCCESS,
  GET_MARKETPLACE_ARTICLE_DETAILS_SUCCESS,
  POST_MARKETPLACE_ADD_ARTICLE_SUCCESS,
  POST_MARKETPLACE_UPDATE_ARTICLE_SUCCESS,
  POST_MARKETPLACE_DELETE_ARTICLE_SUCCESS,
} from '../actions/marketplaceActions';

export const initialState = {
  articleList: ['un', 'deux', 'trois'],
  searchFieldSale: 'marketplaceField initial state',
  responseApi: {},
  isLoading: false,
  isLoaded: false,
  addSale: {
    saleAddIsLoading: false,
    id: 'initial state',
    title: '',
    place: '',
    price: '',
    image: 'initial state',
    story: '',
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_FIELD:
      if (action.fieldName === 'marketplace-search') {
        return {
          ...state,
          searchFieldSale: action.fieldValue,
        };
      }
      if (action.fieldName === 'addSaleTitle') {
        return {
          ...state,
          addSale: {
            ...state.addSale,
            title: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'addSalePlace') {
        return {
          ...state,
          addSale: {
            ...state.addSale,
            place: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'addSalePrice') {
        return {
          ...state,
          addSale: {
            ...state.addSale,
            price: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'addSaleImage') {
        return {
          ...state,
          addSale: {
            ...state.addSale,
            image: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'addSaleDescription') {
        return {
          ...state,
          addSale: {
            ...state.addSale,
            story: action.fieldValue,
          },
        };
      }
      return state;

    case MARKETPLACE_ON_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case MARKETPLACE_DETAILS_ON_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case GET_MARKETPLACE_ARTICLE_LIST_SUCCESS:
      return {
        ...state,
        responseApi: action.responseApi,
        isLoaded: action.loaded,
      };

    case GET_MARKETPLACE_INITIAL_LIST_SUCCESS:
      return {
        ...state,
        responseApi: action.responseApi,
        isLoaded: action.loaded,
      };
    // case GET_MARKETPLACE_ARTICLE_DETAILS_SUCCESS:
    //   return {
    //     ...state,
    //     addSale: {
    //       ...state.addSale,
    //       responseApi: action.responseApi,
    //       detailsArticleIsLoaded: action.loaded,
    //     },
    //   };

    case GET_MARKETPLACE_ARTICLE_DETAILS_SUCCESS:
      return {
        ...state,
        responseApi: action.responseApi,
        isLoading: false,
        isLoaded: false,
        addSale: {
          ...state.addSale,
          saleAddIsLoading: true,
          id: action.responseApi.id,
          title: action.responseApi.title.rendered,
          price: action.responseApi.meta.price,
          place: action.responseApi.meta.place,
          image: action.responseApi._embedded['wp:featuredmedia'][0].source_url,
          story: action.responseApi.content.rendered,
        },
      };

    case POST_MARKETPLACE_ADD_ARTICLE_SUCCESS:
      return {
        ...state,
        message: action.message_success,
      };

    case POST_MARKETPLACE_UPDATE_ARTICLE_SUCCESS:
      return {
        ...state,
        searchField: action.fieldValue,
      };

    case POST_MARKETPLACE_DELETE_ARTICLE_SUCCESS:
      return {
        ...state,
        searchField: action.fieldValue,
      };

    default:
      return state;
  }
};

export default reducer;
