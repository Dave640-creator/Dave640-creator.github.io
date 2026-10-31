import { asset } from '../utils/asset';

export default function Lightbox({ project: p, onClose }) {
  const close = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className="lightbox-target open" role="dialog" aria-modal="true" aria-label={p.shotAlt}>
      <a aria-label="Close" className="lightbox-close" href="#" onClick={close}>
        <i className="bi bi-x-lg"></i>
      </a>
      <a aria-label="Close" className="lightbox-backdrop" href="#" onClick={close}></a>
      <img alt={p.shotAlt} className="lightbox-img" src={asset(p.shot)} />
    </div>
  );
}
