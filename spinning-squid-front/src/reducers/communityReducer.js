import { UPDATE_FIELD } from '../actions/userActions';
import {
  EMPTY_DETAILS_ARTICLE,
  ARTICLE_ON_LOADING,
  ARTICLE_DETAILS_ON_LOADING,
  GET_ARTICLE_LIST_SUCCESS,
  GET_ARTICLE_DETAILS_SUCCESS,
  POST_ADD_ARTICLE_SUCCESS,
  UPDATE_ARTICLE_DETAILS_SUCCESS,
  DELETE_ARTICLE_DETAILS_SUCCESS,
} from '../actions/communityActions';

export const initialState = {
  articleList: ['un', 'deux', 'trois'],
  searchField: 'communityField initial state',
  responseApi: {},
  isLoading: false,
  isLoaded: false,
  addArticle: {
    postAddIsLoading: false,
    postAddIsLoaded: false,
    id: 'initial state',
    title: '',
    date: '',
    place: '',
    image: 'initial state',
    story: '',
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_FIELD:
      if (action.fieldName === 'addPostTitle') {
        return {
          ...state,
          addArticle: {
            ...state.addArticle,
            title: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'addPostDate') {
        return {
          ...state,
          addArticle: {
            ...state.addArticle,
            date: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'addPostPlace') {
        return {
          ...state,
          addArticle: {
            ...state.addArticle,
            place: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'addPostImage') {
        return {
          ...state,
          addArticle: {
            ...state.addArticle,
            image: action.fieldValue,
          },
        };
      }
      if (action.fieldName === 'addPostDescription') {
        return {
          ...state,
          addArticle: {
            ...state.addArticle,
            story: action.fieldValue,
          },
        };
      }
      return state;

    case EMPTY_DETAILS_ARTICLE:
      return {
        ...state,
        addArticle: {
          ...state.addArticle,
          postAddIsLoading: false,
        },
      };
    case ARTICLE_ON_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case ARTICLE_DETAILS_ON_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ARTICLE_LIST_SUCCESS:
      return {
        ...state,
        responseApi: action.responseApi,
        isLoaded: action.loaded,
      };
    case GET_ARTICLE_DETAILS_SUCCESS:
      return {
        ...state,
        responseApi: action.responseApi,
        isLoading: false,
        isLoaded: false,
        addArticle: {
          ...state.addArticle,
          postAddIsLoading: true,
          id: action.responseApi.id,
          title: action.responseApi.title.rendered,
          date: action.responseApi.meta.date,
          place: action.responseApi.meta.place,
          image: action.responseApi._embedded['wp:featuredmedia'][0].source_url,
          story: action.responseApi.content.rendered,
        },
      };
    case POST_ADD_ARTICLE_SUCCESS:
      return {
        ...state,
        message: action.message_success,
      };
    case UPDATE_ARTICLE_DETAILS_SUCCESS:
      return {
        ...state,
        searchField: action.fieldValue,
      };
    case DELETE_ARTICLE_DETAILS_SUCCESS:
      return {
        ...state,
        searchField: action.fieldValue,
      };
    default:
      return state;
  }
};

export default reducer;
