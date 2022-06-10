import logo from '../../assets/img/logo-blanc.png';
import { connect } from 'react-redux';

import NewsLetter from '../../components/NewsLetter';
import { updateField } from '../../actions/userActions';
import { submitNewsLetter } from '../../actions/newsLetterActions';

const mapStateToProps = (state) => ({
  email: state.newsLetter.email,
  logo: logo,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (event) => {
    dispatch(updateField('newsletter' + event.target.id, event.target.value));
  },
  submitNewsLetter: (event) => {
    event.preventDefault();
    dispatch(submitNewsLetter());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsLetter);
