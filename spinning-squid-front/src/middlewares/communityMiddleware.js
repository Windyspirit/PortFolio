import axios from 'axios';
import {
  GET_ARTICLE_LIST,
  successGetArticleList,
  SUBMIT_ADD_ARTICLE,
  successSubmitAddArticle,
  SUBMIT_UPDATE_ARTICLE,
  successSubmitUpdateArticle,
  SUBMIT_DELETE_ARTICLE,
  successSubmitDeleteArticle,
  GET_ARTICLE_DETAILS,
  successSubmitGetArticleDetails,
} from '../actions/communityActions';
import { baseURI, baseSpinningSquid } from '../routesBack';
import { push } from 'connected-react-router';

const communityMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_ARTICLE_LIST:
      const endPointArticle = baseURI + '/article?_embed=true';
      // console.log('on y passe youpi');
      // axios
      //   .get(endPointArticle)
      //   .then((response) => {
      //     console.log('response from API : ');
      //     console.log(response);
      //     store.dispatch(successGetArticleList(response.data));
      //   })
      //   .catch((error) => {
      //     console.warn(error);
      //   });

      const exemple = [
        {
          id: 1,
          title: 'Tony Hawk Show',
          place: 'Paris',
          date: 'test date',
          content: 'test content',
        },
      ];
      setTimeout(() => {
        store.dispatch(successGetArticleList(exemple));
        // console.log('call API ok');
      }, 1000);

      break;

    case SUBMIT_ADD_ARTICLE:
      const endPointAddArticle = baseSpinningSquid + '/add-article';
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
          endPointAddArticle,
          {
            title: store.getState().community.addArticle.title,
            date: store.getState().community.addArticle.date,
            place: store.getState().community.addArticle.place,
            image: store.getState().community.addArticle.image,
            story: store.getState().community.addArticle.story,
          },
          options_ADD
        )
        .then((response) => {
          console.log('response from API : ');
          console.log(response);
          store.dispatch(successSubmitAddArticle());
          window.alert(
            `
            L'ajout de ton article dans Whassup?! a bien été enregistré.
            Merci.
            `
          );
          store.dispatch(push('/communaute'));
          window.location.reload();
        })
        .catch((error) => {
          console.warn(error);
        });
      // store.dispatch(
      //   successSubmitAddArticle(
      //     'a remplacer par le call API dans communityMiddleware',
      //   ),
      // );

      break;

    case GET_ARTICLE_DETAILS:
      const article_Id = action.articleId;
      console.log(action.articleId);
      const endPointDetails_Article =
        baseURI + '/article/' + article_Id + '?_embed=true';
      // console.log('on y passe youpi');
      axios
        .get(endPointDetails_Article)
        .then((response) => {
          console.log('response from API : ');
          console.log(response);
          console.log(response.data);
          store.dispatch(successSubmitGetArticleDetails(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });

      break;

    case SUBMIT_UPDATE_ARTICLE:
      // const endPointUpdateArticle = baseSpinningSquid + '/update-article';
      // console.log(JSON.parse(localStorage.getItem('userData')).token);
      // const options_UPDATE = {
      //   headers: {
      //     Authorization:
      //       'Bearer ' + JSON.parse(localStorage.getItem('userData')).token,
      //   },
      // };
      // console.log('on y passe youpi');
      // axios
      //   .post(endPointUpdateArticle, {}, options_UPDATE)
      //   .then((response) => {
      //     console.log('response from API : ');
      //     console.log(response);
      //     store.dispatch(
      //       successSubmitUpdateArticle(
      //         'a remplacer par kekchose ou pas dans communityMiddleware',
      //       ),
      //     );
      //     window.alert(
      //       `
      //       La modification de votre article dans Whassup?! a bien été enregistré.
      //       Bisous.
      //       `
      //     );
      //   })
      //   .catch((error) => {
      //     console.warn(error);
      //   });
      store.dispatch(
        successSubmitUpdateArticle(
          'a remplacer par le call API dans communityMiddleware'
        )
      );

      break;

    case SUBMIT_DELETE_ARTICLE:
      // const endPointDeleteArticle = baseSpinningSquid + '/delete-article';
      // console.log(JSON.parse(localStorage.getItem('userData')).token);
      // const options_DELETE = {
      //   headers: {
      //     Authorization:
      //       'Bearer ' + JSON.parse(localStorage.getItem('userData')).token,
      //   },
      // };
      // console.log('on y passe youpi');
      // axios
      //   .post(endPointDeleteArticle, {}, options_DELETE)
      //   .then((response) => {
      //     console.log('response from API : ');
      //     console.log(response);
      //     store.dispatch(
      //       successSubmitDeleteArticle(
      //         'a remplacer par kekchose ou pas dans communityMiddleware',
      //       ),
      //     );
      //     window.alert(
      //       `
      //       La suppression de votre article dans Whassup?! a bien été enregistré.
      //       Bisous.
      //       `
      //     );
      //   })
      //   .catch((error) => {
      //     console.warn(error);
      //   });
      store.dispatch(
        successSubmitDeleteArticle(
          'a remplacer par le call API dans communityMiddleware'
        )
      );

      break;
    //----------------------------------------------------------------------------------
    default:
  }
  next(action);
};
export default communityMiddleware;
