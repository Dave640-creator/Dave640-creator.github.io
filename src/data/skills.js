import {
  FlutterIcon, SQLiteIcon, HtmlIcon, CssIcon, JavaScriptIcon,
  PythonIcon, TypeScriptIcon, PhpIcon, MySqlIcon, FirebaseIcon,
} from '../components/TechIcons';

export const mainSkills = [
  { name: 'Flutter', count: 'Used in 7 projects', Icon: FlutterIcon },
  { name: 'SQLite', count: 'Used in 3 projects', Icon: SQLiteIcon },
  { name: 'HTML', count: 'Built this site', Icon: HtmlIcon },
  { name: 'CSS', count: 'Built this site', Icon: CssIcon },
  { name: 'JavaScript', count: 'Built this site', Icon: JavaScriptIcon },
];

// `Icon` = inline SVG component, `img` = file inside /public
export const alsoSkills = [
  { name: 'Python', Icon: PythonIcon, size: 16 },
  { name: 'TypeScript', Icon: TypeScriptIcon, size: 14 },
  { name: 'PHP', Icon: PhpIcon, size: 14 },
  { name: 'MySQL', Icon: MySqlIcon, size: 14 },
  { name: 'Firebase', Icon: FirebaseIcon, size: 14 },
  { name: 'Canva', img: 'assets/icons/canva.webp' },
  { name: 'Figma', img: 'assets/icons/figma.webp' },
];
