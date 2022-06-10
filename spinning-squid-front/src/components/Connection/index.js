import './connection.scss';

const Connection = (props) => {
  const handleOnChange = (event) => {
    const inputId = event.target.id;
    const inputValue = event.target.value;

    props.handleChange(inputId, inputValue);
  };

  return (
    <div className="connection main-container">
      <h1 className="title">Connecte toi ou sinon, inscrit toi.</h1>

      <div className="container-forms">
        <form className="form-register" onSubmit={props.handleSubmitRegister}>
          <h2 className="form-title">
            Tu n'a pas de compte ? Crées-en un!
          </h2>
          <label htmlFor="usernameInscription">Nom d'utilisateur
            <input
              id="usernameInscription"
              type="text"
              className="form-input"
              required
              onChange={handleOnChange}
              value={props.usernameInscription}
            />
          </label>
          <label htmlFor="lastname">Nom
            <input
              id="lastname"
              type="text"
              className="form-input"
              required
              onChange={handleOnChange}
              value={props.lastname}
            />
          </label>
          <label htmlFor="firstname">Prénom
            <input
              id="firstname"
              type="text"
              className="form-input"
              required
              onChange={handleOnChange}
              value={props.firstname}
            />
          </label>
          <label htmlFor="street">Rue
            <input
              id="street"
              type="text"
              className="form-input"
              required
              onChange={handleOnChange}
              value={props.street}
            />
          </label>
          <label htmlFor="postal">Code postal
            <input
              id="postal"
              type="text"
              className="form-input"
              required
              onChange={handleOnChange}
              value={props.postal}
            />
          </label>
          <label htmlFor="city">Ville
            <input
              id="city"
              type="text"
              className="form-input"
              required
              onChange={handleOnChange}
              value={props.city}
            />
          </label>
          <label htmlFor="email">Email
            <input
              id="email"
              type="email"
              className="form-input"
              required
              onChange={handleOnChange}
              value={props.email}
            />
          </label>
          <label htmlFor="passwordInscription">Password
            <input
              id="passwordInscription"
              type="password"
              className="form-input"
              required
              onChange={handleOnChange}
              value={props.passwordInscription}
            />
          </label>
          <button className="button" type="submit">
            Inscription
          </button>
        </form>

        <form className="form-connection" onSubmit={props.handleSubmitLogin}>
          <h2 className="form-title">
            Tu a déjà un compte ? Connecte toi!
          </h2>
          <label htmlFor="usernameConnexion">Nom d'utilisateur
            <input
              id="usernameConnexion"
              type="text"
              className="form-input"
              required
              onChange={handleOnChange}
            />
          </label>
          <label htmlFor="passwordConnexion">Password
            <input
              id="passwordConnexion"
              type="password"
              className="form-input"
              required
              onChange={handleOnChange}
            />
          </label>
          <button className="button" type="submit">
            Connexion
          </button>
        </form>
      </div>
    </div>
  );
};

export default Connection;
