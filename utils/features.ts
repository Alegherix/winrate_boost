interface Card {
  heading: String;
  text: String;
  path: string;
}

const cards: Card[] = [
  {
    heading: 'Aim Guides',
    text:
      'Learn what to focus on, how to train it and take your aim to the next level',
    path: '/crosshair2.svg',
  },
  {
    heading: 'Gear Setup',
    text: 'Find out the best setup suited for you to maximize performance',
    path: '/computer.svg',
  },
  {
    heading: 'Checklist',
    text:
      'Create a personal checklist to know what to practice each time you step into a game',
    path: '/notebook.svg',
  },
  {
    heading: 'Score Keeper',
    text:
      'Keep a track of your score to know wheter or not you are actually improving',
    path: '/rifle.svg',
  },
];

export default cards;
