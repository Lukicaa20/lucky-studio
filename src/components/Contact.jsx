const whatsappHref =
  "https://wa.me/385000000000?text=Hi%2C%20I%27m%20interested%20in%20a%20custom%20product.";
const emailHref = "mailto:hello@luckystudio.hr";

const Contact = () => {
  return (
    <section className="content-section contact-section" id="contact">
      <div className="contact-section__intro">
        <p className="contact-section__eyebrow">Let's build something</p>
        <h2>Start your custom project</h2>
        <p className="contact-section__lead">
          The easiest way to reach Lucky Studio is through WhatsApp. If you already have an idea,
          reference, or rough concept, send it over and we can take it from there.
        </p>
        <p className="contact-section__text">
          Custom products, prototypes, functional parts, and visual concepts all start with a
          simple message. Email is available too, and Instagram can be added once it goes live.
        </p>
      </div>

      <div className="contact-section__panel">
        <a
          className="contact-section__primary"
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
        >
          <span className="contact-section__primary-icon">
            <img src="/whatsapp_logo.svg" alt="WhatsApp logo" />
          </span>
          <span className="contact-section__primary-copy">
            <strong>Message on WhatsApp</strong>
            <span>Fastest way to start a conversation about your idea.</span>
          </span>
        </a>

        <div className="contact-section__meta">
          <a className="contact-section__secondary" href={emailHref}>
            <span className="contact-section__secondary-icon">
              <img src="/mail_icon.svg" alt="Mail icon" />
            </span>
            <span>hello@luckystudio.hr</span>
          </a>

          <div className="contact-section__coming-soon">
            <span className="contact-section__secondary-icon">
              <img src="/instagram_icon.svg" alt="Instagram icon" />
            </span>
            <span>Instagram coming soon</span>
          </div>
        </div>

        <div className="contact-section__note">
          <p>Preview links are placeholders for now and can be swapped for your real contact info.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
