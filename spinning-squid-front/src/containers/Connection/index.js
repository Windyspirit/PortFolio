import { connect } from 'react-redux';

import Connection from '../../components/Connection';
import {
  updateField,
  submitLogin,
  submitRegister,
} from '../../actions/userActions';

const mapStateToProps = (state) => ({
  usernameInscription: state.user.usernameInscription,
  usernameConnexion: state.user.usernameConnexion,
  lastname: state.user.lastname,
  firstname: state.user.firstname,
  street: state.user.street,
  postal: state.user.postal,
  city: state.user.city,
  passwordInscription: state.user.passwordInscription,
  passwordConnexion: state.user.passwordConnexion,
  email: state.user.email,
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (fieldName, fieldValue) => {
    const action = updateField(fieldName, fieldValue);
    dispatch(action);
  },
  handleSubmitLogin: (event) => {
    event.preventDefault();
    dispatch(submitLogin());
  },
  handleSubmitRegister: (event) => {
    event.preventDefault();
    dispatch(submitRegister());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Connection);
