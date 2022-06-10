import './contact.scss';

const Contact = (props) => (
  <div className="contact main-container">
    <h1 className="title">Que puis-je pour toi jeune skateur ?</h1>
    <div className="contact-container">
      <img className="contact-image" alt="" src={props.logo} />
      <form className="contact-form" onSubmit={props.handleSubmitMessage}>
        <label className="contact-label">Sujet</label>
        <input
          id="subject"
          onChange={props.handleChange}
          className="contact-input"
          type="text"
          required
        />
        <label className="contact-label">Email</label>
        <input
          id="email"
          onChange={props.handleChange}
          className="contact-input"
          type="email"
          required
        />
        <label className="contact-label"> Message</label>
        <textarea
          id="message"
          onChange={props.handleChange}
          className="contact-input-message"
          required
        />

        <button className="button" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  </div>
);

export default Contact;
