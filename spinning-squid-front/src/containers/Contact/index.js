import { connect } from 'react-redux';

import Contact from '../../components/Contact';
import logo from '../../assets/img/logo-blanc.png';
import { updateField } from '../../actions/userActions';
import { submitMessage } from '../../actions/contactActions';

const mapStateToProps = (state) => ({
  subject: state.contact.subject,
  email: state.contact.email,
  message: state.contact.message,
  logo: logo,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (event) => {
    dispatch(updateField(event.target.id, event.target.value));
  },
  handleSubmitMessage: (event) => {
    event.preventDefault();
    dispatch(submitMessage());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
