import { asset } from '../utils/asset';

const HIGHLIGHTS = [
  { icon: 'bi-phone-fill', color: 'text-cyan', title: 'Mobile Dev', sub: 'Flutter & Dart' },
  { icon: 'bi-globe2', color: 'text-violet', title: 'Web Dev', sub: 'HTML / CSS / JS / PHP' },
  { icon: 'bi-database-fill', color: 'text-pink', title: 'Databases', sub: 'MySQL · SQLite · Firebase' },
  { icon: 'bi-cpu-fill', color: 'text-cyan', title: 'Problem Solver', sub: 'Algorithms & Systems' },
];

export default function About() {
  return (
    <section className="section-pad" id="about">
      <div className="container">
        <div className="section-label">About Me</div>
        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <div className="about-visual">
              <div className="av-frame">
                <img alt="Dave B. Lausa" className="about-photo" id="aboutPhoto" src={asset('avatar.png')} />
                <div className="av-decoration av-deco-1"></div>
                <div className="av-decoration av-deco-2"></div>
              </div>
              <div className="av-card glass-card">
                <span className="av-card-icon">
                  <img alt="TCGC" className="av-card-icon-img" src={asset('assets/icons/tcgc.png')} />
                </span>
                <div>
                  <strong>Tangub City Global College</strong>
                  <span>BS Computer Science</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <h2 className="section-title">
              Passionate about <span className="text-accent">building</span> things that matter
            </h2>
            <p className="section-text">
              Hello! I'm Dave B. Lausa, a BS Computer Science student passionate about software
              development. I enjoy building mobile apps, web applications, and systems that solve
              real-world problems.
            </p>
            <p className="section-text">
              I am continuously improving my skills in programming and exploring modern
              technologies, whether that's crafting smooth UI experiences, architecting scalable
              backends, or experimenting with AI-driven features.
            </p>

            <div className="about-highlights row g-3 mt-2">
              {HIGHLIGHTS.map((h) => (
                <div className="col-sm-6" key={h.title}>
                  <div className="highlight-card glass-card">
                    <i className={`bi ${h.icon} ${h.color}`}></i>
                    <div>
                      <strong>{h.title}</strong>
                      <span>{h.sub}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
