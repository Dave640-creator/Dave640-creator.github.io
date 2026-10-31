import { mainSkills, alsoSkills } from '../data/skills';
import { asset } from '../utils/asset';

function SkillCard({ name, count, Icon }) {
  return (
    <div className="col-6 col-sm-4 col-md-3 col-lg-2">
      <div className="skill-card" data-skill={name}>
        <div className="skill-icon"><Icon /></div>
        <span>{name}</span>
        <div className="skill-count">{count}</div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="section-pad section-alt" id="skills">
      <div className="container">
        <div className="section-label text-center">Skills</div>
        <h2 className="section-title text-center">My <span className="text-accent">Tech Stack</span></h2>
        <p className="section-text text-center mx-auto mb-5" style={{ maxWidth: 560 }}>
          Technologies I use to build real-world solutions, spanning frontend, backend, mobile,
          and databases.
        </p>

        <div className="skills-orbit">
          <div className="row g-4 justify-content-center">
            {mainSkills.map((s) => <SkillCard key={s.name} {...s} />)}
          </div>
        </div>

        <p className="text-center skills-divider-label">Also working with</p>
        <div className="also-skills">
          {alsoSkills.map(({ name, Icon, size, img }) => (
            <span className="badge-tech" key={name}>
              {Icon ? <Icon size={size} /> : <img alt="" className="badge-icon" src={asset(img)} />} {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
