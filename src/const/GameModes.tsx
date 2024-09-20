import { GameModeConfiguration } from '@interfaces/GameMode.interface';

export const GameModes: GameModeConfiguration[] = [
  {
    mode: 'NOOB',
    boardSize: 3,
    winningRows: 3,
    color: 'bg-red',
  },
  {
    mode: 'BEGINNER',
    boardSize: 6,
    winningRows: 4,
    color: 'bg-pink',
  },
  {
    mode: 'INTERMEDIATE',
    boardSize: 9,
    winningRows: 5,
    color: 'bg-orange',
  },
  {
    mode: 'EXPERT',
    boardSize: 11,
    winningRows: 6,
    color: 'bg-yellow',
  },
];
