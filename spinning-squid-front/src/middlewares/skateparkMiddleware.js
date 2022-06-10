/* eslint-disable no-case-declarations */
import axios from 'axios';
import {
  GET_SKATEPARK_LIST,
  successGetSkateparkList,
  GET_SKATEPARK_DETAILS,
  successGetSkateparkDetails,
  SUBMIT_ADD_SPOT,
  successSubmitAddSpot,
  SUBMIT_UPDATE_SPOT,
  successSubmitUpdateSpot,
  SUBMIT_DELETE_SPOT,
  successSubmitDeleteSpot,
  GET_SKATEPARK_BY_CITY,
  successGetSkateparkByCity,
} from '../actions/skateparkActions';
import { baseURI, baseSpinningSquid } from '../routesBack';
import { push, goForward } from 'connected-react-router';

const skateparkMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_SKATEPARK_LIST:
      const endPointSkatepark = '/skatepark?_embed=true';
      //console.log('test ce soir');
      // axios
      //   .get(baseURI + endPointSkatepark)
      //   .then((response) => {
      //     console.log('response from API : ');
      //     console.log(response);
      //     store.dispatch(successGetSkateparkList(response.data));
      //   })
      //   .catch((error) => {
      //     console.warn(error);
      //   });

      const exemple = [
        {
          id: 1,
          title: 'Pumtrack de Paris',
          benche: false,
          city: 'Paris',
          latitude: 48.86606,
          lighting: false,
          longitude: 2.35287,
          parking: false,
          pumptrack: false,
          skatepark: false,
          state: 'Way',
          street: 'rueeeeee',
          streetspot: true,
          table: false,
          trashcan: false,
          water: true,
          zipcode: 'ererererrrr',
        },
        {
          id: 2,
          title: 'Pumtrack de Bourges',
          benche: false,
          city: 'rrrrrrrrrrrrr',
          latitude: 47.08306,
          lighting: false,
          longitude: 2.39435,
          parking: false,
          pumptrack: false,
          skatepark: false,
          state: 'Way',
          street: 'rueeeeee',
          streetspot: true,
          table: false,
          trashcan: false,
          water: true,
          zipcode: 'ererererrrr',
        },
        {
          id: 3,
          title: 'Pumtrack de Monaco',
          benche: false,
          city: 'rrrrrrrrrrrrr',
          latitude: 43.73351,
          lighting: false,
          longitude: 7.4184,
          parking: false,
          pumptrack: false,
          skatepark: false,
          state: 'Way',
          street: 'rueeeeee',
          streetspot: true,
          table: false,
          trashcan: false,
          water: true,
          zipcode: 'ererererrrr',
        },
      ];
      setTimeout(() => {
        // console.log('retour setTimeOut API call');

        store.dispatch(successGetSkateparkList(exemple));
      }, 1000);

      // store.dispatch(
      //   successGetSkateparkList(
      //     'a remplacer par le call API dans skateparkMiddleware'
      //   )
      // );

      break;

    case GET_SKATEPARK_BY_CITY:
      const endPointSkateparkByCity =
        baseURI +
        '/skatepark/?meta_key=city&meta_value=' +
        store.getState().skatepark.searchFieldTown +
        '&_embed=true';
      console.log(store.getState().skatepark.searchFieldTown);
      axios
        .get(endPointSkateparkByCity)
        .then((response) => {
          console.log('response from API : ');
          console.log(response);
          store.dispatch(successGetSkateparkByCity(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });
      // store.dispatch(
      //   successGetSkateparkByCity(
      //     'a remplacer par le call API successGetSkateparkByCity',
      //   ),
      // );
      break;

    case SUBMIT_ADD_SPOT:
      const endPointAdd_Spot = '/newskatepark-save';
      console.log(JSON.parse(localStorage.getItem('userData')).token);
      const options_ADD = {
        headers: {
          Authorization:
            'Bearer ' + JSON.parse(localStorage.getItem('userData')).token,
        },
      };
      //console.log('on y passe youpi');
      axios
        .post(
          baseSpinningSquid + endPointAdd_Spot,
          {
            title: store.getState().skatepark.addSpot.title,
            skatepark: store.getState().skatepark.addSpot.categorySkatepark,
            pumptrack: store.getState().skatepark.addSpot.categoryPumptrack,
            streetspot: store.getState().skatepark.addSpot.categoryStreet,
            street: store.getState().skatepark.addSpot.street,
            zipcode: store.getState().skatepark.addSpot.postal,
            city: store.getState().skatepark.addSpot.town,
            latitude: store.getState().skatepark.addSpot.latitude,
            longitude: store.getState().skatepark.addSpot.longitude,
            parking: store.getState().skatepark.addSpot.parking,
            water: store.getState().skatepark.addSpot.water,
            trashcan: store.getState().skatepark.addSpot.trashcan,
            lighting: store.getState().skatepark.addSpot.lighting,
            table: store.getState().skatepark.addSpot.table,
            benche: store.getState().skatepark.addSpot.benche,
            state: store.getState().skatepark.addSpot.etatRadioBtn,
            image: store.getState().skatepark.addSpot.uploadedImg,
          },
          options_ADD
        )
        .then((response) => {
          console.log('response from API : ');
          console.log(response);
          store.dispatch(
            successSubmitAddSpot(
              'a remplacer par kekchose ou pas dans skateparkMiddleware'
            )
          );
          window.alert(
            `
            L'ajout de skatepark a bien été enregistré.
            Bisous.
            `
          );
          store.dispatch(push('/trouve-ton-skatepark'));
          window.location.reload();
        })
        .catch((error) => {
          console.warn(error);
        });
      // store.dispatch(
      //   successSubmitAddSpot(
      //     'a remplacer par kekchose ou pas dans skateparkMiddleware'
      //   )
      // );

      break;
    case GET_SKATEPARK_DETAILS:
      const skatepark_Id = action.skateparkId;
      const endPointDetails_Spot =
        baseURI + '/skatepark/' + skatepark_Id + '?_embed=true';
      // console.log('on y passe youpi');
      axios
        .get(endPointDetails_Spot)
        .then((response) => {
          console.log('response from API : ');
          console.log(response);
          console.log(response.data);
          store.dispatch(successGetSkateparkDetails(response.data));
        })
        .catch((error) => {
          console.warn(error);
        });

      break;

    case SUBMIT_UPDATE_SPOT:
      const endPointUpdate_Spot = '/skatepark-edit';
      console.log(JSON.parse(localStorage.getItem('userData')).token);
      const options_UPDATE = {
        headers: {
          Authorization:
            'Bearer ' + JSON.parse(localStorage.getItem('userData')).token,
        },
      };
      console.log('on y passe youpi');
      axios
        .post(
          baseSpinningSquid + endPointUpdate_Spot,
          {
            id: store.getState().skatepark.addSpot.id,
            title: store.getState().skatepark.addSpot.title,
            skatepark: store.getState().skatepark.addSpot.categorySkatepark,
            pumptrack: store.getState().skatepark.addSpot.categoryPumptrack,
            streetspot: store.getState().skatepark.addSpot.categoryStreet,
            street: store.getState().skatepark.addSpot.street,
            zipcode: store.getState().skatepark.addSpot.postal,
            city: store.getState().skatepark.addSpot.town,
            latitude: store.getState().skatepark.addSpot.latitude,
            longitude: store.getState().skatepark.addSpot.longitude,
            parking: store.getState().skatepark.addSpot.parking,
            water: store.getState().skatepark.addSpot.water,
            trashcan: store.getState().skatepark.addSpot.trashcan,
            lighting: store.getState().skatepark.addSpot.lighting,
            table: store.getState().skatepark.addSpot.table,
            benche: store.getState().skatepark.addSpot.benche,
            state: store.getState().skatepark.addSpot.etatRadioBtn,
            image: store.getState().skatepark.addSpot.uploadedImg,
          },
          options_UPDATE
        )
        .then((response) => {
          console.log('response from API : ');
          console.log(response);
          store.dispatch(
            successSubmitUpdateSpot(
              'a remplacer par kekchose ou pas dans skateparkMiddleware'
            )
          );
          window.alert(
            `
                  L'ajout de skatepark a bien été enregistré.
                  Bisous.
                  `
          );
          window.location.reload();
        })

        .catch((error) => {
          console.warn(error);
        });
      // store.dispatch(
      //   successSubmitUpdateSpot(
      //     'a remplacer par kekchose ou pas dans skateparkMiddleware'
      //   )
      // );
      console.log('requete update ok');
      store.dispatch(push('/trouve-ton-skatepark'));

      //store.dispatch(goForward());
      console.log('redirection');

      break;

    case SUBMIT_DELETE_SPOT:
      const endPointDelete_Spot = '/skatepark-delete';
      //console.log(JSON.parse(localStorage.getItem('userData')).token);
      const options_DELETE = {
        headers: {
          Authorization:
            'Bearer ' + JSON.parse(localStorage.getItem('userData')).token,
        },
      };
      console.log('on y passe youpi');
      axios
        .post(
          baseSpinningSquid + endPointDelete_Spot,
          {
            id: store.getState().skatepark.addSpot.id,
          },
          options_DELETE
        )
        .then((response) => {
          console.log('response from API : ');
          console.log(response);
          store.dispatch(
            successSubmitDeleteSpot(
              'a remplacer par kekchose ou pas dans skateparkMiddleware'
            )
          );
          window.alert(
            `
                Le skatepark a bien été supprimé.
                Bisous.
                `
          );
          store.dispatch(push('/trouve-ton-skatepark'));
          window.location.reload();
        })
        .catch((error) => {
          console.warn(error);
        });
      console.log('on passe dans skateparkMiddleware');
      store.dispatch(
        successSubmitDeleteSpot(
          'transmission données ok depuis skateparkMiddleware'
        )
      );

      break;
    default:
  }
  next(action);
};
export default skateparkMiddleware;
