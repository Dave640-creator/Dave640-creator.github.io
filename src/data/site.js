export const SITE = {
  name: 'Dave B. Lausa',
  email: 'beloylausa@gmail.com',
  github: { url: 'https://github.com/Dave640-creator', handle: 'Dave640-creator' },
  facebook: { url: 'https://www.facebook.com/dave.lausa.96', handle: 'dave.lausa.96' },
  location: 'Tangub City, Philippines',
};

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
];

export const PROJECT_MENU = [
  { label: 'All Projects', href: '#projects' },
  { label: 'Visitor Management System', href: '#projects' },
  { label: 'Smart Seat Planner', href: '#projects' },
];

export const CONNECT_MENU = [
  { label: 'Email', href: `mailto:${SITE.email}` },
  { label: 'GitHub', href: SITE.github.url, external: true },
  { label: 'Facebook', href: SITE.facebook.url, external: true },
];
