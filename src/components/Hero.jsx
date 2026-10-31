import { Fragment } from 'react';
import { asset } from '../utils/asset';

const STATS = [
  { num: '11+', label: 'Projects' },
  { num: '9', label: 'Tech Skills' },
  { num: '∞', label: 'Curiosity' },
];
const BADGES = ['Python', 'Flutter', 'JS', 'PHP'];

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg-grid"></div>
      <div className="hero-orb orb-1"></div>
      <div className="hero-orb orb-2"></div>
      <div className="hero-orb orb-3"></div>

      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-lg-7 hero-content">
            <span className="hero-eyebrow">
              <span className="eyebrow-dot"></span> Available for Opportunities
            </span>
            <h1 className="hero-title">
              Hi, I'm<br />
              <span className="hero-name" id="heroName">Dave B. Lausa</span>
            </h1>
            <p className="hero-sub">
              <span className="typed-wrapper">
                <span id="typed">Full-Stack Developer &amp; Mobile App Builder</span>
                <span className="cursor-blink">|</span>
              </span>
            </p>
            <p className="hero-desc">
              Computer Science student at Tangub City Global College, crafting software that
              matters, from mobile apps to intelligent systems.
            </p>

            <div className="hero-actions d-flex flex-wrap gap-3">
              <a className="btn btn-primary-glow" href="#projects">
                View My Work <i className="bi bi-arrow-right ms-2"></i>
              </a>
              <a className="btn btn-ghost" href="#contact">Get In Touch</a>
              <a className="btn btn-ghost" download href={asset('assets/resume.pdf')}>
                <i className="bi bi-download me-2"></i>Resume
              </a>
            </div>

            <div className="hero-stats d-flex gap-4 mt-5">
              {STATS.map((s, i) => (
                <Fragment key={s.label}>
                  {i > 0 && <div className="stat-divider"></div>}
                  <div className="stat-item">
                    <span className="stat-num">{s.num}</span>
                    <span className="stat-label">{s.label}</span>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>

          <div className="col-lg-5 d-flex justify-content-center mt-5 mt-lg-0">
            <div className="hero-card-wrap" id="heroCard">
              <div className="hero-card">
                <div className="card-shine"></div>
                <div className="card-avatar-ring">
                  <img alt="Dave B. Lausa" className="card-avatar" id="avatarImg" src={asset('avatar.png')} />
                </div>
                <div className="card-info">
                  <h3>Dave B. Lausa</h3>
                  <p>Computer Science Student</p>
                  <div className="card-badges d-flex flex-wrap gap-2 justify-content-center">
                    {BADGES.map((b) => <span className="badge-tech" key={b}>{b}</span>)}
                  </div>
                </div>
                <div className="card-status">
                  <span className="status-pulse"></span> Open to work
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-mouse"><div className="scroll-wheel"></div></div>
        <span>Scroll</span>
      </div>
    </section>
  );
}
