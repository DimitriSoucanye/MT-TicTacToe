import { GameBoard } from '@interfaces/GameBoard.interface';

export interface GameContextType {
  mode?: string;
  setMode?: (mode: string) => void;
  setBoard?: (board: GameBoard[][]) => void;
  setSelectedCell?: (x: number, y: number) => void;
  board?: GameBoard[][];
}
