import { GameModeConfiguration } from '@interfaces/GameMode.interface';

export const GameModes: GameModeConfiguration[] = [
  {
    mode: 'NOOB',
    boardSize: 3,
    color: 'bg-red',
  },
  {
    mode: 'BEGINNER',
    boardSize: 6,
    color: 'bg-pink',
  },
  {
    mode: 'INTERMEDIATE',
    boardSize: 9,
    color: 'bg-orange',
  },
  {
    mode: 'EXPERT',
    boardSize: 11,
    color: 'bg-yellow',
  },
];
