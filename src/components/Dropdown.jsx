// One navbar dropdown. Open/close state lives in <Navbar /> so only
// one dropdown can be open at a time.
export default function Dropdown({ id, label, items, open, onToggle, onNavigate }) {
  return (
    <div className="dropdown">
      <button
        id={`${id}Btn`}
        className={`dropdown-btn${open ? ' active' : ''}`}
        type="button"
        aria-expanded={open}
        onClick={onToggle}
      >
        {label} <span className="dropdown-arrow">▼</span>
      </button>
      <ul id={`${id}Menu`} className={`dropdown-menu${open ? ' show' : ''}`}>
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              onClick={onNavigate}
              {...(item.external ? { target: '_blank', rel: 'noopener' } : {})}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
