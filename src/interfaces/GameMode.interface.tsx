export type GameModeConfiguration = {
  mode: 'NOOB' | 'BEGINNER' | 'INTERMEDIATE' | 'EXPERT';
  boardSize: number;
  winningRows: number;
  color: string;
};
