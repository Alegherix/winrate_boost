import SvgCrosshair from '../components/svg_components/Crosshair';
import SvgGames from '../components/svg_components/Games';
import SvgAssignment from '../components/svg_components/Assignment';
import SvgComputer from '../components/svg_components/Computer';
import SvgNotebookPencil from '../components/svg_components/NotebookPencil';

export interface Card {
  heading: String;
  text: String;
  svgComponent: React.SVGProps<SVGSVGElement>;
}

const cards: Card[] = [
  {
    heading: 'Aim Guides',
    text:
      'Learn what to focus on, how to train it and take your aim to the next level',
    svgComponent: <SvgCrosshair />,
  },
  {
    heading: 'Gear Setup',
    text: 'Find out the best setup suited for you to maximize performance',
    svgComponent: <SvgComputer />,
  },
  {
    heading: 'Checklist',
    text:
      'Create a personal checklist to know what to practice each time you step into a game',
    svgComponent: <SvgNotebookPencil />,
  },
  {
    heading: 'Score Keeper',
    text:
      'Keep a track of your score to know wheter or not you are actually improving',
    svgComponent: <SvgGames />,
  },
];

export default cards;
