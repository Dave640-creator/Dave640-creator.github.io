export default function ProjectModal({ project: p, onClose, onViewShot }) {
  const stop = (fn) => (e) => {
    e.preventDefault();
    fn();
  };

  return (
    <div className="project-modal-target open" role="dialog" aria-modal="true" aria-label={p.title}>
      <a aria-label="Close" className="project-modal-backdrop" href="#" onClick={stop(onClose)}></a>
      <div className="project-modal-panel">
        <a aria-label="Close" className="project-modal-close" href="#" onClick={stop(onClose)}>
          <i className="bi bi-x-lg"></i>
        </a>

        <div className="pm-icon"><i className={`bi ${p.icon}`}></i></div>
        <h3 className="pm-title">{p.title}</h3>
        <p className="pm-desc">{p.description}</p>

        <h4 className="pm-sub">Key Features</h4>
        <ul className="pm-features">
          {p.features.map((f) => <li key={f}>{f}</li>)}
        </ul>

        <div className="pm-tech d-flex flex-wrap gap-2">
          {p.tech.map((t) => <span key={t}>{t}</span>)}
        </div>

        <div className="pm-actions">
          {p.shot && (
            <a className="btn-primary-glow pm-view-shots" href={`#shot-${p.slug}`} onClick={stop(onViewShot)}>
              <i className="bi bi-images me-1"></i> View Screenshot
            </a>
          )}
          <a className="btn-ghost pm-github" href={p.github} rel="noopener" target="_blank">
            <i className="bi bi-github me-1"></i> View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
