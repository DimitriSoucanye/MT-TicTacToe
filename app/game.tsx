import Game from '@screens/Game';
import { GameProvider } from '@provider/GameProvider';

/**
 * Composant appelé par le router expo lorsque le path /game est affiché
 * @constructor
 */
const GameScreen = () => {
  return (
    <GameProvider>
      <Game />
    </GameProvider>
  );
};

export default GameScreen;
