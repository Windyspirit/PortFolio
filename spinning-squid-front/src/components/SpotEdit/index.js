import './spotedit.scss';
import axios from 'axios';
import { baseSpinningSquid } from '../../routesBack';

const SpotEdit = (props) => {
  console.log(props.skateparkId);
  if (!props.spotAddIsLoading || props.checkBadValue) {
    props.getSkateparkDetails(props.skateparkId);
  }

  const transfer = (event) => {
    props.handleUploadLocalImage(event);
    //console.log(event);
    const fileChosen = document.getElementById('file-chosen');
    fileChosen.textContent = event.target.files[0].name;
  };
  const tryUpdateBDD = () => {
    // const options_UPDATE = {
    //   headers: {
    //     Authorization:
    //       'Bearer ' + JSON.parse(localStorage.getItem('userData')).token,
    //   },
    // };
    //console.log(options_UPDATE);
    axios
      .post(baseSpinningSquid + '/skatepark-edit', {
        id: 151,
        title: 'prouttt',
        skatepark: '',
        pumptrack: '',
        streetspot: '',
        street: '',
        zipcode: '04000',
        city: 'marseille',
        latitude: '',
        longitude: '',
        parking: '',
        water: '',
        trashcan: '',
        lighting: '',
        table: '',
        benche: '',
        state: '',
        image: '',
      })
      .then((response) => {
        console.log('response from API : ');
        console.log(response);
        window.alert(
          `
            La modification de skatepark a bien été enregistrée.
            Bisous.
            `
        );
      })
      .catch((error) => {
        console.warn(error);
      });
  };
  return (
    <div className='main-container spotadd-container'>
      <h2 className='title'>Modifie ton Spot</h2>

      <form className='spotadd-form' onSubmit={props.handleSubmitAddPost}>
        <div className='spotadd-form-container'>
          <div className='spotadd-container-title-type'>
            <div className='spotadd-container-title'>
              <h2 className='spotadd-title'>Titre</h2>
              <input
                id='titleSkatepark'
                className='spotadd-input-title'
                type='text'
                name='skatepark'
                placeholder='SkatePark de Grenoble Centre'
                onChange={props.handleChangeField}
                value={props.title}
              />
            </div>
            <div className='spotadd-container-category'>
              <label
                htmlFor='category-skatepark'
                className='spotadd-label-category'
              >
                SkatePark
                <input
                  id='categorySkatepark'
                  className='spotadd-check-category'
                  type='checkbox'
                  name='skatepark'
                  onChange={props.handleChangeCheckbox}
                  value={props.categorySkatepark}
                />
              </label>

              <label
                htmlFor='category-pumptrack'
                className='spotadd-label-category'
              >
                PumpTrack
                <input
                  id='categoryPumptrack'
                  className='spotadd-check-category'
                  type='checkbox'
                  name='pumptrack'
                  onChange={props.handleChangeCheckbox}
                  value={props.categoryPumptrack}
                />
              </label>

              <label
                htmlFor='category-street'
                className='spotadd-label-category'
              >
                Street
                <input
                  id='categoryStreet'
                  className='spotadd-check-category'
                  type='checkbox'
                  name='streetspot'
                  onChange={props.handleChangeCheckbox}
                  value={props.categoryStreet}
                />
              </label>
            </div>
          </div>

          <div className='spotadd-container-informations'>
            <div className='spotadd-container-information-adress-image'>
              <div className='spotadd-container-adress'>
                <h2 className='spotadd-title'>Adresse</h2>
                <input
                  id='addSpotStreet'
                  className='spotadd-input'
                  type='text'
                  name='street'
                  placeholder='Rue'
                  required
                  onChange={props.handleChangeField}
                  value={props.street}
                />
                <input
                  id='addSpotPostal'
                  className='spotadd-input'
                  type='text'
                  name='postal'
                  placeholder='Code Postal'
                  required
                  onChange={props.handleChangeField}
                  value={props.postal}
                />
                <input
                  id='addSpotTown'
                  className='spotadd-input'
                  type='text'
                  name='town'
                  placeholder='Ville'
                  required
                  onChange={props.handleChangeField}
                  value={props.town}
                />
                <input
                  id='addSpotlongitude'
                  className='spotadd-input'
                  type='number'
                  step='0.00001'
                  name='longitude'
                  placeholder='longitude'
                  required
                  onChange={props.handleChangeField}
                  value={props.longitude}
                />
                <input
                  id='addSpotlatitude'
                  className='spotadd-input'
                  type='number'
                  step='0.00001'
                  name='latitude'
                  placeholder='latitude'
                  required
                  onChange={props.handleChangeField}
                  value={props.latitude}
                />
              </div>
              <div className='spotadd-container-image'>
                <h2 className='spotadd-title'>Image</h2>
                <input
                  id='uploadImage'
                  className='spotadd-input-image add-image'
                  type='file'
                  name='image'
                  accept='image/png, image/jpeg'
                  multiple
                  required
                  onChange={transfer}
                  hidden
                />
              </div>
            </div>

            <div className='spotadd-container-equipment-state'>
              <div className='spotadd-container-equipment'>
                <h2 className='spotadd-title'>Equipement</h2>
                <label htmlFor='parking' className='spotadd-label-equipment'>
                  Parking
                  <input
                    id='parking'
                    className='spotadd-check-equipment'
                    type='checkbox'
                    name='parking'
                    onChange={props.handleChangeCheckbox}
                    value={props.parking}
                  />
                </label>

                <label htmlFor='water' className='spotadd-label-equipment'>
                  Eau potable
                  <input
                    id='water'
                    className='spotadd-check-equipment'
                    type='checkbox'
                    name='water'
                    onChange={props.handleChangeCheckbox}
                    value={props.water}
                  />
                </label>

                <label htmlFor='trashcan' className='spotadd-label-equipment'>
                  Poubelle
                  <input
                    id='trashcan'
                    className='spotadd-check-equipment'
                    type='checkbox'
                    name='trashcan'
                    onChange={props.handleChangeCheckbox}
                    value={props.trashcan}
                  />
                </label>

                <label htmlFor='lighting' className='spotadd-label-equipment'>
                  Eclairage
                  <input
                    id='lighting'
                    className='spotadd-check-equipment'
                    type='checkbox'
                    name='lighting'
                    onChange={props.handleChangeCheckbox}
                    value={props.lighting}
                  />
                </label>

                <label htmlFor='table' className='spotadd-label-equipment'>
                  Table
                  <input
                    id='table'
                    className='spotadd-check-equipment'
                    type='checkbox'
                    name='table'
                    onChange={props.handleChangeCheckbox}
                    value={props.table}
                  />
                </label>

                <label htmlFor='benche' className='spotadd-label-equipment'>
                  Banc
                  <input
                    id='benche'
                    className='spotadd-check-equipment'
                    type='checkbox'
                    name='benche'
                    onChange={props.handleChangeCheckbox}
                    value={props.benche}
                  />
                </label>
              </div>

              <div className='spotadd-container-state'>
                <h2 className='spotadd-title'>Etat</h2>
                <label htmlFor='new' className='spotadd-label-state'>
                  Neuf
                  <input
                    id='addSpotNew'
                    className='spotadd-radio'
                    type='radio'
                    name='state'
                    onChange={props.handleChangeCheckbox}
                  />
                </label>
                <label htmlFor='good' className='spotadd-label-state'>
                  Bien
                  <input
                    id='addSpotGood'
                    className='spotadd-radio'
                    type='radio'
                    name='state'
                    onChange={props.handleChangeCheckbox}
                  />
                </label>
                <label htmlFor='way' className='spotadd-label-state'>
                  Moyen
                  <input
                    id='addSpotWay'
                    className='spotadd-radio'
                    type='radio'
                    name='state'
                    onChange={props.handleChangeCheckbox}
                  />
                </label>
                <label htmlFor='endoflife' className='spotadd-label-state'>
                  En fin de vie
                  <input
                    id='addSpotEndoflife'
                    className='spotadd-radio'
                    type='radio'
                    name='state'
                    onChange={props.handleChangeCheckbox}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className='div-button'>
          <button
            type='submit'
            className='button spotadd-button'
            onClick={props.handleSubmitEditPost}
          >
            Modifie ton Spot
          </button>
          <button
            className='button spotDelete-button'
            onClick={props.callDeleteSkatepark}
          >
            Supprimer ce Spot
          </button>
        </div>
      </form>
    </div>
  );
};

export default SpotEdit;
