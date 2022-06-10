export const SUBMIT_MESSAGE_SUCCESS = 'SUBMIT_MESSAGE_SUCCESS';
export const SUBMIT_MESSAGE = 'SUBMIT_MESSAGE';

export const successSubmitMessage = (data) => ({
  type: SUBMIT_MESSAGE_SUCCESS,
  message_success: data,
});
export const submitMessage = () => ({
  type: SUBMIT_MESSAGE,
});
