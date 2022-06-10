import axios from 'axios';
import {
  SUBMIT_MESSAGE,
  successSubmitMessage,
} from '../actions/contactActions';
import { baseURI, baseSpinningSquid } from '../routesBack';

const contactMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_MESSAGE:
      const endPointContact = baseSpinningSquid + '/send-email';
      console.log('juste avant requete axios SUBMIT_MESSAGE');
      axios
        .post(endPointContact, {
          subject: store.getState().contact.subject,
          email: store.getState().contact.email,
          message: store.getState().contact.message,
        })
        .then((response) => {
          console.log('response from API : ');
          console.log(response);
          store.dispatch(successSubmitMessage());
          window.alert(
            `
            Ton message a bien été envoyé.
            Merci.
            `
          );
          // location.reload();
        })
        .catch((error) => {
          console.warn(error);
        });
      // store.dispatch(
      //   successSubmitMessage(
      //     'a remplacer par kekchose ou pas dans contactMiddleware'
      //   )
      // );

      break;
    default:
  }
  next(action);
};
export default contactMiddleware;
