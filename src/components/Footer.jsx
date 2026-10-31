import { SITE } from '../data/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <span className="footer-brand">Dave<span className="brand-accent">.</span></span>
          </div>
          <div className="col-md-4 text-center">
            <p className="footer-copy">© 2026 {SITE.name}. Built with ❤️</p>
          </div>
          <div className="col-md-4 d-flex justify-content-md-end justify-content-center gap-3 mt-3 mt-md-0">
            <a className="footer-social" href={`mailto:${SITE.email}`} aria-label="Email">
              <i className="bi bi-envelope-fill"></i>
            </a>
            <a className="footer-social" href={SITE.github.url} target="_blank" rel="noopener" aria-label="GitHub">
              <i className="bi bi-github"></i>
            </a>
            <a className="footer-social" href={SITE.facebook.url} target="_blank" rel="noopener" aria-label="Facebook">
              <i className="bi bi-facebook"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
