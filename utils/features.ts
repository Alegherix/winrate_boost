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
    path: 'images/sniper.jpg',
  },
  {
    heading: 'Gear Setup',
    text: 'Find out the best setup suited for you to maximize performance',
    path: 'images/setup.jpg',
  },
  {
    heading: 'Checklist',
    text:
      'Create a personal checklist to know what to practice each time you step into a game',
    path: '/images/notebook.jpg',
  },
  {
    heading: 'Score Keeper',
    text:
      'Keep a track of your score to know wheter or not you are actually improving',
    path: '/images/weapon-on-log.jpg',
  },
];

export default cards;
