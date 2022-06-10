import './profile.scss';
import logo2 from '../../assets/img/logo2.png';
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';

const Profile = (props) => {
  // console.log(props.contributeSkate);
  if (!props.profileIsLoading) {
    props.handleCheckUserUpdateProfile();
  }

  return (
    <div className='profile main-container'>
      <h1 className='title profile-title'>
        Bienvenue sur ton compte {props.usernameConnection}
      </h1>

      <div className='profile-container'>
        <img className='profile-avatar' src={logo2} alt='avatar' />
        <p className='profile-name'>{props.usernameConnection}</p>

        <div className='profile-button-dock'>
          <Popup
            trigger={
              <button className='button' type='button'>
                Editer mon profil
              </button>
            }
            modal
            nested
          >
            {(close) => (
              <div className='modal'>
                <div className='header'> Modifie ton profil </div>
                <form
                  className='form'
                  onSubmit={props.handleSubmitUpdateProfile}
                >
                  <div className='content'>
                    {/* <label className="form-edit-label" htmlFor="usernameEdit">
                      Nom d'utilisateur
                      <input
                        id="usernameEdit"
                        type="text"
                        className="form-edit-input"
                        value={props.usernameEdit}
                        // required
                        onChange={props.handleChange}
                      />
                    </label> */}
                    <label className='form-edit-label' htmlFor='lastnameEdit'>
                      Nom
                      <input
                        id='lastnameEdit'
                        type='text'
                        className='form-edit-input'
                        value={props.lastnameEdit}
                        // required
                        onChange={props.handleChange}
                      />
                    </label>
                    <label className='form-edit-label' htmlFor='firstnameEdit'>
                      Prénom
                      <input
                        id='firstnameEdit'
                        type='text'
                        className='form-edit-input'
                        value={props.firstnameEdit}
                        // required
                        onChange={props.handleChange}
                      />
                    </label>
                    <label className='form-edit-label' htmlFor='streetEdit'>
                      Rue
                      <input
                        id='streetEdit'
                        type='text'
                        className='form-edit-input'
                        value={props.streetEdit}
                        // required
                        onChange={props.handleChange}
                      />
                    </label>
                    <label className='form-edit-label' htmlFor='postalEdit'>
                      Code postal
                      <input
                        id='postalEdit'
                        type='text'
                        className='form-edit-input'
                        value={props.postalEdit}
                        // required
                        onChange={props.handleChange}
                      />
                    </label>
                    <label className='form-edit-label' htmlFor='cityEdit'>
                      Ville
                      <input
                        id='cityEdit'
                        type='text'
                        className='form-edit-input'
                        value={props.cityEdit}
                        // required
                        onChange={props.handleChange}
                      />
                    </label>
                    <label className='form-edit-label' htmlFor='emailEdit'>
                      Email
                      <input
                        id='emailEdit'
                        type='email'
                        className='form-edit-input'
                        value={props.emailEdit}
                        // required
                        onChange={props.handleChange}
                      />
                    </label>
                    <label className='form-edit-label' htmlFor='passwordEdit'>
                      Password
                      <input
                        id='passwordEdit'
                        type='password'
                        className='form-edit-input'
                        value={props.passwordEdit}
                        // required
                        onChange={props.handleChange}
                      />
                    </label>
                    <label className='form-edit-label' htmlFor='passwordEdit'>
                      Avatar
                      <input
                        id='avatarImage'
                        type='file'
                        className='form-edit-input'
                        // required
                        onChange={props.handleUploadLocalImage}
                      />
                    </label>
                  </div>
                  <div className='actions'>
                    <button
                      type='button'
                      className='button'
                      onClick={() => {
                        close();
                      }}
                    >
                      Annuler
                    </button>
                    <button type='submit' className='button'>
                      Valider
                    </button>
                  </div>
                </form>
              </div>
            )}
          </Popup>
          <button className='button' type='button' onClick={props.handleDelete}>
            Supprimer compte
          </button>
        </div>
      </div>

      <div className='profile-contribution'>
        <h2 className='profile-contribution-title'>Mes contributions</h2>
        <h2 className='profile-add-title'>Ajout de Spot</h2>
        <div className='profile-contribution-articles'>
          {props.contributeSkate &&
            props.contributeSkate.map((item) => {
              const urlSkateId = '/trouve-ton-skatepark/' + item.id;
              const urlSkateEditId =
                '/trouve-ton-skatepark/modifie-ton-spot/' + item.id;
              return (
                <>
                  <h3 className='profile-articles-title'>
                    {item.title.rendered}
                  </h3>
                  <div className='profile-articles-button-dock'>
                    <Link to={urlSkateId}>
                      <button className='button' type='button'>
                        Consulter
                      </button>
                    </Link>
                    <Link to={urlSkateEditId}>
                      <button className='button' type='button'>
                        Modifier
                      </button>
                    </Link>
                  </div>
                </>
              );
            })}
        </div>
        <h2 className='profile-add-title'>Matos à vendre</h2>
        <div className='profile-contribution-articles'>
          {props.contributeSale &&
            props.contributeSale.map((item) => {
              const urlSaleId = '/trouve-ton-matos/' + item.id;
              return (
                <>
                  <h3 className='profile-articles-title'>
                    {item.title.rendered}
                  </h3>
                  <div className='profile-articles-button-dock'>
                    <Link to={urlSaleId}>
                      <button className='button' type='button'>
                        Consulter
                      </button>
                    </Link>
                    <button className='button' type='button' to=''>
                      Modifier
                    </button>
                  </div>
                </>
              );
            })}
        </div>
        <h2 className='profile-add-title'>Ajout d'évènement</h2>
        <div className='profile-contribution-articles'>
          {props.contributeSale &&
            props.contributeArticle.map((item) => {
              const urlArticleId = '/communaute/' + item.id;
              return (
                <>
                  <h3 className='profile-articles-title'>
                    {item.title.rendered}
                  </h3>
                  <div className='profile-articles-button-dock'>
                    <Link to={urlArticleId}>
                      <button
                        className='button button-articles'
                        type='button'
                        to='/communaute/'
                      >
                        Consulter
                      </button>
                    </Link>
                    <button
                      className='button button-articles'
                      type='button'
                      to=''
                    >
                      Modifier
                    </button>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
