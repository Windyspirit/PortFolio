import axios from 'axios';
import {
  CHECK_USER,
  GET_USER_INFO,
  getUserDataProfileSuccess,
  GET_USER_SKATEPARK,
  getUserDataSkatepark,
  getUserDataSkateparkSuccess,
  GET_USER_ARTICLE,
  getUserDataArticle,
  getUserDataArticleSuccess,
  GET_USER_SALE,
  getUserDataSale,
  getUserDataSaleSuccess,
  SUBMIT_LOGIN,
  successLogin,
  successRegister,
  SUBMIT_REGISTER,
  SUBMIT_UPDATE_PROFILE,
  SUBMIT_DELETE_PROFILE,
} from '../actions/userActions';
import { baseURIUser, baseSpinningSquid, baseURI } from '../routesBack';
import { push, goForward } from 'connected-react-router';

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      axios
        .post(baseURIUser + '/token', {
          username: store.getState().user.usernameConnexion,
          password: store.getState().user.passwordConnexion,
        })
        .then((response) => {
          //console.log('response from API : ');
          //console.log(response);
          const doneLogin = successLogin(response.data.token);
          if (response.data.token) {
            const JSONInformationsObject = JSON.stringify(response.data);
            localStorage.setItem('userData', JSONInformationsObject);
            localStorage.setItem('logged', true);
          }
          store.dispatch(doneLogin);
        })
        .catch((error) => {
          console.warn(error);
          window.alert(`
          Votre nom utilisateur et/ou votre mot de passe est incorrect.
          `);
        });

      break;

    case SUBMIT_REGISTER:
      axios
        .post(baseSpinningSquid + '/newuser-save', {
          username: store.getState().user.usernameInscription,
          password: store.getState().user.passwordInscription,
          email: store.getState().user.email,
          lastname: store.getState().user.lastname,
          firstname: store.getState().user.firstname,
          street: store.getState().user.street,
          postal: store.getState().user.postal,
          city: store.getState().user.city,
        })
        .then((response) => {
          console.log('response from API : ');
          console.log(response);
          console.log(response.data);
          console.log(response.data.succes);
          if (response.data.succes === 'this username already exist') {
            window.alert(
              `
              Cet utilisateur est déjà inscrit.
              `
            );
          } else if (response.data.succes === 'this email is already used') {
            window.alert(
              `
              Cet email est déjà utilisé.
              `
            );
          } else {
            window.alert(
              `
              Inscription réussie!
              Connectez-vous.
              `
            );
          }
          const clearInput = successRegister();
          store.dispatch(clearInput);
        })
        .catch((error) => {
          console.warn(error);
        });

      break;
    case CHECK_USER:
      //console.log(JSON.parse(localStorage.getItem('userData')).token);
      const options = {
        headers: {
          Authorization:
            'Bearer ' + JSON.parse(localStorage.getItem('userData')).token,
        },
      };
      axios
        .post(baseURIUser + '/token/validate', null, options)
        .then((response) => {
          //console.log('response from API : ');
          //console.log(response.data);
        })
        .catch((error) => {
          console.warn(error);
        });

      break;
    case GET_USER_INFO:
      const userVar = JSON.parse(
        localStorage.getItem('userData')
      ).user_display_name; //username localstorage
      //console.log(userVar);
      axios
        .get(baseURI + '/users?slug=' + userVar)
        .then((response) => {
          console.log('response from API : ');
          console.log(response.data);
          //ajouter dispatch pour utiliser l'id de avatar dans une autre requete
          //renvoyant l'image du user
          //baseURI + /media/[idAvatar]
          store.dispatch(getUserDataProfileSuccess(response.data));
          store.dispatch(getUserDataSkatepark(response.data));
          store.dispatch(getUserDataArticle(response.data));
          store.dispatch(getUserDataSale(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });

      break;
    case GET_USER_SKATEPARK:
      const user_skatepark = store.getState().user.profile.userId;
      // console.log(user_skatepark);
      axios
        .get(baseURI + '/skatepark?author=' + user_skatepark)
        .then((response) => {
          console.log('response from API : ');
          console.log(response);
          store.dispatch(getUserDataSkateparkSuccess(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });

      break;
    case GET_USER_ARTICLE:
      const user_article = store.getState().user.profile.userId;
      // console.log(user_article);
      axios
        .get(baseURI + '/article?author=' + user_article)
        .then((response) => {
          console.log('response from API : ');
          console.log(response);
          store.dispatch(getUserDataArticleSuccess(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });

      break;
    case GET_USER_SALE:
      const user_sale = store.getState().user.profile.userId;
      // console.log(user_sale);
      axios
        .get(baseURI + '/sale?author=' + user_sale)
        .then((response) => {
          console.log('response from API : ');
          console.log(response);
          store.dispatch(getUserDataSaleSuccess(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });

      break;
    case SUBMIT_UPDATE_PROFILE:
      console.log('Renseigner path update profile dans la requete axios');
      axios
        .post(baseSpinningSquid + '/user-edit', {
          username: store.getState().user.profile.usernameEdit,
          password: store.getState().user.profile.passwordEdit,
          email: store.getState().user.profile.emailEdit,
          lastname: store.getState().user.profile.lastnameEdit,
          firstname: store.getState().user.profile.firstnameEdit,
          street: store.getState().user.profile.streetEdit,
          zipcode: store.getState().user.profile.postalEdit,
          city: store.getState().user.profile.cityEdit,
          image: store.getState().user.profile.avatarImageEdit,
        })
        .then((response) => {
          console.log('response from API : ');
          console.log(response);
          window.alert(
            `
            La modification de votre profil a bien été enregistrée.
            Rendez-vous dans la page de votre Profil pour
            voir les modifications.
            Bisous.
            `
          );
          store.dispatch(push('/connexion'));
        })
        .catch((error) => {
          console.warn(error);
        });

      break;
    case SUBMIT_DELETE_PROFILE:
      console.log('Renseigner path update profile dans la requete axios');
      const options_Delete = {
        headers: {
          Authorization:
            'Bearer ' + JSON.parse(localStorage.getItem('userData')).token,
        },
      };
      axios
        .post(
          baseSpinningSquid + '/user-delete',
          {
            //id: store.getState().user.profile.userId,
          },
          options_Delete
        )
        .then((response) => {
          console.log('response from API : ');
          console.log(response);
          window.alert(
            `
            La modification de votre profil a bien été enregistrée.
            Rendez-vous dans la page de votre Profil pour
            voir les modifications.
            Bisous.
            `
          );
          store.dispatch(push('/connexion'));
        })
        .catch((error) => {
          console.warn(error);
        });

      break;

    default:
  }
  next(action);
};
export default authMiddleware;
