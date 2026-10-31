import { useEffect, useState } from 'react';
import projects from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import Lightbox from './Lightbox';

export default function Projects() {
  const [index, setIndex] = useState(0);        // first visible card in the carousel
  const [modalSlug, setModalSlug] = useState(null);
  const [shotSlug, setShotSlug] = useState(null);

  const last = projects.length - 1;
  const modalProject = projects.find((p) => p.slug === modalSlug);
  const shotProject = projects.find((p) => p.slug === shotSlug);

  // Esc closes the top-most overlay, and the page behind doesn't scroll
  useEffect(() => {
    if (!modalSlug && !shotSlug) return;
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      if (shotSlug) setShotSlug(null);
      else setModalSlug(null);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [modalSlug, shotSlug]);

  return (
    <section className="section-pad" id="projects">
      <div className="container">
        <div className="section-label text-center">Projects</div>
        <h2 className="section-title text-center">Things I've <span className="text-accent">Built</span></h2>
        <p className="section-text text-center mx-auto mb-5" style={{ maxWidth: 560 }}>
          A selection of projects built with purpose, each solving a real problem.
        </p>

        <div className="projects-carousel-wrap">
          {index > 0 && (
            <button
              type="button" aria-label="Scroll left"
              className="projects-arrow projects-arrow-left"
              onClick={() => setIndex((i) => i - 1)}
            >
              <i className="bi bi-chevron-left"></i>
            </button>
          )}
          {index < last && (
            <button
              type="button" aria-label="Scroll right"
              className="projects-arrow projects-arrow-right"
              onClick={() => setIndex((i) => i + 1)}
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          )}

          <div className="projects-carousel projects-viewport" id="projectsCarousel">
            <div
              className="row g-4 projects-track"
              id="projectsTrack"
              style={{ transform: `translateX(calc(var(--proj-step) * -${index}))` }}
            >
              {projects.map((p) => (
                <div className="col-md-6 col-lg-4" key={p.slug}>
                  <ProjectCard
                    project={p}
                    onOpenDetails={setModalSlug}
                    onOpenShot={setShotSlug}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {modalProject && (
        <ProjectModal
          project={modalProject}
          onClose={() => setModalSlug(null)}
          onViewShot={() => { setShotSlug(modalProject.slug); setModalSlug(null); }}
        />
      )}
      {shotProject && <Lightbox project={shotProject} onClose={() => setShotSlug(null)} />}
    </section>
  );
}
