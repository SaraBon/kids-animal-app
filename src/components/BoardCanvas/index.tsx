import { useBoardContext } from "../../board/useBoardContext";
import style from "./index.module.css";
import StartScreen from "./StartScreen";
import { LevelBoard } from "./LevelBoard";

export const BoardCanvas: React.FC = () => {
  const { state } = useBoardContext();

  const gameHasStarted = state.level !== 0;

  return (
    <div className={style.background}>
      {gameHasStarted ? <LevelBoard /> : <StartScreen />}
    </div>
  );
};
