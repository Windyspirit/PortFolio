import axios from 'axios';
import {
  SUBMIT_NEWSLETTER,
  successSubmitNewsLetter,
} from '../actions/newsLetterActions';
import { baseURI, baseSpinningSquid } from '../routesBack';

const newsLetterMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_NEWSLETTER:
      const endPointAdd_Spot = '/newsletter';
      // console.log('juste avant requete axios SUBMIT_NEWSLETTER');
      // console.log('décommenter requete axios');
      axios
        .post(baseSpinningSquid + endPointAdd_Spot, {
          email: store.getState().newsletter.email,
        })
        .then((response) => {
          console.log('response from API : ');
          console.log(response);
          store.dispatch(
            successSubmitNewsLetter(
              'a remplacer par kekchose ou pas dans contactMiddleware'
            )
          );
        })
        .catch((error) => {
          console.warn(error);
        });

      break;
    default:
  }
  next(action);
};
export default newsLetterMiddleware;
