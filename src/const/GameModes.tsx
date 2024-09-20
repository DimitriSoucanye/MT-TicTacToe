import { GameModeConfiguration } from '@interfaces/GameMode';

export const GameModes: GameModeConfiguration[] = [
  {
    mode: 'NOOB',
    row: 3,
    color: 'bg-red',
  },
  {
    mode: 'BEGINNER',
    row: 6,
    color: 'bg-pink',
  },
  {
    mode: 'INTERMEDIATE',
    row: 9,
    color: 'bg-orange',
  },
  {
    mode: 'EXPERT',
    row: 11,
    color: 'bg-yellow',
  },
];
