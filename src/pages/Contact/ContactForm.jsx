import './ContactForm.css';

function ContactForm() {
  return (
    <section>
      <h2>Kontakta mig Här!</h2>
      <form className="contact-card">

        <label>Namn</label>
        <div className='name-group'>
          <input type="text" name="firstname" placeholder="Förnamn" />
          <input type="text" name="lastname" placeholder="Efternamn" />
        </div>

        <label>Email</label>
        <input type="email" name="email" placeholder="name@domain.com" />

        <label>Meddelande</label>
        <textarea name="message" placeholder="Your message"></textarea>

        <button type="submit">Send</button>

      </form>
    </section>
  );
}

export default ContactForm;

