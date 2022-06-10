import { connect } from 'react-redux';

import App from '../../components/App';
import { fillState } from '../../actions/userActions';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  getLocalStorageDataToState: () => {
    //console.log('test refresh de page');
    const userLogs = localStorage.getItem('logged');
    //console.log(userLogs);
    if (userLogs) {
      dispatch(fillState(userLogs));
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
