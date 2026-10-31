import { SITE } from '../data/site';

const CONTACT_ITEMS = [
  { icon: 'bi-envelope', label: 'Email', text: SITE.email, href: `mailto:${SITE.email}` },
  { icon: 'bi-github', label: 'GitHub', text: SITE.github.handle, href: SITE.github.url, external: true },
  { icon: 'bi-facebook', label: 'Facebook', text: SITE.facebook.handle, href: SITE.facebook.url, external: true },
  { icon: 'bi-geo-alt', label: 'Location', text: SITE.location },
];

export default function Contact() {
  return (
    <section className="section-pad section-alt contact-minimal" id="contact">
      <div className="container">
        <div className="row g-5 g-lg-4">
          <div className="col-lg-5">
            <div className="cm-label">Get in touch</div>
            <h2 className="cm-heading">Let's<br />Connect.</h2>
            <p className="cm-lede">I'm open to collaborations, internships, and interesting projects.</p>
            <div className="cm-divider"></div>

            <ul className="cm-list">
              {CONTACT_ITEMS.map((c) => (
                <li key={c.label}>
                  <i className={`bi ${c.icon}`}></i>
                  <div>
                    <span className="cm-list-label">{c.label}</span>
                    {c.href ? (
                      <a href={c.href} {...(c.external ? { target: '_blank', rel: 'noopener' } : {})}>{c.text}</a>
                    ) : (
                      <span className="cm-static">{c.text}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="cm-availability">
              <span className="status-pulse"></span> Available for opportunities
            </div>
          </div>

          <div className="col-lg-7">
            <div className="cm-form-label">Send a message</div>
            <p className="cm-form-lede">I'd love to hear from you.</p>
            <p className="cm-form-note">
              Submitting opens your email app with this message pre-filled, ready to send.
            </p>

            <form action={`mailto:${SITE.email}`} className="cm-form" encType="text/plain" method="post">
              <div className="row g-4">
                <div className="col-sm-6">
                  <div className="cm-field">
                    <label htmlFor="cName">Name</label>
                    <input id="cName" name="Name" placeholder="Your name" required type="text" />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="cm-field">
                    <label htmlFor="cEmail">Email</label>
                    <input id="cEmail" name="Email" placeholder="your@email.com" required type="email" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="cm-field">
                    <label htmlFor="cSubject">Subject</label>
                    <input id="cSubject" name="Subject" placeholder="What's this about?" type="text" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="cm-field">
                    <label htmlFor="cMessage">Message</label>
                    <textarea
                      id="cMessage" name="Message" rows={4} required
                      placeholder="Tell me about your project or opportunity..."
                    ></textarea>
                  </div>
                </div>
                <div className="col-12">
                  <button className="cm-submit" id="sendBtn" type="submit">
                    <span id="btnText">Send Message</span>
                    <i className="bi bi-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
