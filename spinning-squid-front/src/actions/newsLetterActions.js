export const SUBMIT_NEWSLETTER_SUCCESS = 'SUBMIT_NEWSLETTER_SUCCESS';
export const SUBMIT_NEWSLETTER = 'SUBMIT_NEWSLETTER';

export const successSubmitNewsLetter = (data) => ({
  type: SUBMIT_NEWSLETTER_SUCCESS,
  message_success: data,
});
export const submitNewsLetter = () => ({
  type: SUBMIT_NEWSLETTER,
});
