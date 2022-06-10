import { UPDATE_FIELD } from '../actions/userActions';
import { SUBMIT_MESSAGE_SUCCESS } from '../actions/contactActions';

export const initialState = {
  subject: '',
  email: '',
  message: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_FIELD:
      if (action.fieldName === 'subject') {
        return {
          ...state,
          subject: action.fieldValue,
        };
      }
      if (action.fieldName === 'email') {
        return {
          ...state,
          email: action.fieldValue,
        };
      }
      if (action.fieldName === 'message') {
        return {
          ...state,
          message: action.fieldValue,
        };
      }

    case SUBMIT_MESSAGE_SUCCESS:
      return {
        ...state,
        response_API: action.message_success,
      };
    default:
      return state;
  }
};

export default reducer;
