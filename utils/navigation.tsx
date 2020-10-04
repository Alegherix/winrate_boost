import { Activated } from './Constants';
import SvgDashboard from '../components/svg_components/Dashboard';
import SvgRifle from '../components/svg_components/Rifle';
import SvgGraph from '../components/svg_components/Graph';
import SvgAssignment from '../components/svg_components/Assignment';
import SvgCrosshair from '../components/svg_components/Crosshair';
import SvgChecklist from '../components/svg_components/Checklist';
import SvgContacts from '../components/svg_components/Contacts';
import SvgGames from '../components/svg_components/Games';

export interface AuthNavigationComponentProps {
  text: String;
  path: string;
  svgComponent: React.SVGProps<SVGSVGElement>;
  activated?: Activated;
}

const AuthNavItems: AuthNavigationComponentProps[] = [
  {
    text: 'Dashboard',
    path: '/dashboard',
    svgComponent: <SvgDashboard />,
  },
  {
    text: 'Guides',
    path: '/guides',
    svgComponent: <SvgContacts />,
  },
  {
    text: 'Checklist',
    path: '/checklist',
    svgComponent: <SvgChecklist />,
  },
  {
    text: 'Scorekeeper',
    path: '/scorekeeper',
    svgComponent: <SvgGames />,
  },
  {
    text: 'Gametracker',
    path: '/gametracker',
    svgComponent: <SvgCrosshair />,
  },
  {
    text: 'Journal',
    path: '/journal',
    svgComponent: <SvgAssignment />,
  },
  {
    text: 'Goaltracker',
    path: '/goaltracker',
    svgComponent: <SvgGraph />,
  },
];

const UserNavItems: AuthNavigationComponentProps[] = [
  {
    text: 'Settings',
    path: '/settings',
    svgComponent: <SvgGraph />,
  },
  {
    text: 'Sign out',
    path: '/',
    svgComponent: <SvgGraph />,
  },
];

export default AuthNavItems;
