export const EMPTY_DETAILS_ARTICLE = 'EMPTY_DETAILS_ARTICLE';
export const GET_ARTICLE_LIST = 'GET_ARTICLE_LIST';
export const GET_ARTICLE_LIST_SUCCESS = 'GET_ARTICLE_LIST_SUCCESS';
export const GET_ARTICLE_DETAILS = 'GET_ARTICLE_DETAILS';
export const GET_ARTICLE_DETAILS_SUCCESS = 'GET_ARTICLE_DETAILS_SUCCESS';
export const SUBMIT_ADD_ARTICLE = 'SUBMIT_ADD_ARTICLE';
export const POST_ADD_ARTICLE_SUCCESS = 'POST_ADD_ARTICLE_SUCCESS';
export const SUBMIT_UPDATE_ARTICLE = 'SUBMIT_UPDATE_ARTICLE';
export const UPDATE_ARTICLE_DETAILS_SUCCESS = 'UPDATE_ARTICLE_DETAILS_SUCCESS';
export const SUBMIT_DELETE_ARTICLE = 'DELETE_ARTICLE_DETAILS';
export const DELETE_ARTICLE_DETAILS_SUCCESS = 'DELETE_ARTICLE_DETAILS_SUCCESS';
export const ARTICLE_ON_LOADING = 'ARTICLE_ON_LOADING';
export const ARTICLE_DETAILS_ON_LOADING = 'ARTICLE_DETAILS_ON_LOADING';

//------------------------------------------------------------
// à compléter
export const emptyDetailsArticle = () => ({
  type: EMPTY_DETAILS_ARTICLE,
});
export const callGetArticleList = () => ({
  type: GET_ARTICLE_LIST,
});
export const successGetArticleList = (data) => ({
  type: GET_ARTICLE_LIST_SUCCESS,
  responseApi: data,
  loaded: true,
});
export const submitGetArticleDetails = (articleId) => ({
  type: GET_ARTICLE_DETAILS,
  articleId: articleId,
});
export const successSubmitGetArticleDetails = (data) => ({
  type: GET_ARTICLE_DETAILS_SUCCESS,
  responseApi: data,
});
export const submitAddArticle = () => ({
  type: SUBMIT_ADD_ARTICLE,
});
export const successSubmitAddArticle = (message) => ({
  type: POST_ADD_ARTICLE_SUCCESS,
  message_success: message,
});
export const submitUpdateArticle = () => ({
  type: SUBMIT_UPDATE_ARTICLE,
});
export const successSubmitUpdateArticle = (message) => ({
  type: UPDATE_ARTICLE_DETAILS_SUCCESS,
  message_success: message,
});
export const submitDeleteArticle = () => ({
  type: SUBMIT_DELETE_ARTICLE,
});
export const successSubmitDeleteArticle = (message) => ({
  type: DELETE_ARTICLE_DETAILS_SUCCESS,
  message_success: message,
});
export const setOnLoadingStatus = () => ({
  type: ARTICLE_ON_LOADING,
});
export const setOnLoadingDetail = () => ({
  type: ARTICLE_DETAILS_ON_LOADING,
});
