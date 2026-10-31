import { asset } from '../utils/asset';

export default function ProjectCard({ project: p, onOpenDetails, onOpenShot }) {
  const prevent = (fn) => (e) => {
    e.preventDefault();
    fn(p.slug);
  };

  return (
    <div className={`project-card tilt-card${p.shot ? ' has-shots' : ''}${p.featured ? ' featured' : ''}`}>
      <div className="pc-shine"></div>
      {p.featured && <div className="pc-featured-badge">⭐ Featured</div>}

      {p.shot && (
        <div className="pc-shots pc-shots-flyer">
          <a
            aria-label={`View full screenshot of ${p.title}`}
            className="pc-shots-link"
            href={`#shot-${p.slug}`}
            onClick={prevent(onOpenShot)}
          >
            <div className="pc-shots-expand"><i className="bi bi-arrows-angle-expand"></i></div>
            <img alt={p.shotAlt} className="pc-shot active pc-shot-contain" src={asset(p.shot)} />
          </a>
        </div>
      )}

      <div className="pc-tag">{p.tag}</div>
      <div className={`pc-icon${p.iconColor ? ` ${p.iconColor}` : ''}`}>
        <i className={`bi ${p.icon}`}></i>
      </div>
      <h3>{p.title}</h3>
      <p>{p.summary}</p>

      <div className="pc-tech d-flex flex-wrap gap-2 mt-2">
        {p.tech.map((t) => <span key={t}>{t}</span>)}
      </div>

      <div className="pc-footer d-flex justify-content-end align-items-center mt-3">
        <div className="pc-links">
          <a
            className="pc-link pc-details-btn"
            href={`#modal-${p.slug}`}
            title="View Project"
            onClick={prevent(onOpenDetails)}
          >
            <i className="bi bi-eye"></i>
          </a>
          <a className="pc-link" href={p.github} rel="noopener" target="_blank" title="Source Code">
            <i className="bi bi-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
