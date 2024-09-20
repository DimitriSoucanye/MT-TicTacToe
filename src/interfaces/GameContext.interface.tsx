import { GameBoard } from '@interfaces/GameBoard.interface';
import { GameModeConfiguration } from '@interfaces/GameMode.interface';

export interface GameContextType {
  mode?: GameModeConfiguration;
  winner?: number | null;
  setMode?: (mode: GameModeConfiguration) => void;
  resetBoard?: () => void;
  setBoard?: (board: GameBoard[][]) => void;
  setSelectedCell?: (x: number, y: number) => void;
  board?: GameBoard[][];
}
