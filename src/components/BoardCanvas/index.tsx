import { useBoardContext } from "../../board/useBoardContext";
import style from "./index.module.css";
import cn from "classnames";
import { Animations } from "./Animations";
import StartScreen from "./StartScreen";

export const BoardCanvas: React.FC = () => {
  const { board, level } = useBoardContext();

  const gameHasStarted = level !== 0;

  return (
    <div className={style.background}>
      {gameHasStarted ? (
        <div className={cn(style.playground, style[`level${level}`])}>
          <div className={style.grid}>
            <Animations level={level} />
            {board.map((item) => (
              <>
                <> {item.receiver} </>
                <> {item.dragItem} </>
              </>
            ))}
          </div>
        </div>
      ) : (
        <StartScreen />
      )}
    </div>
  );
};
