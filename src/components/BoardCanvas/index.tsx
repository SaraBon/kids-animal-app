import { useBoardContext } from "../../board/useBoardContext";
import style from "./index.module.css";
import cn from "classnames";
import { Animations } from "./Animations";
import StartScreen from "./StartScreen";

export const BoardCanvas: React.FC = () => {
  const { state } = useBoardContext();
  const gameHasStarted = state.level !== 0;

  return (
    <div className={style.background}>
      {gameHasStarted ? (
        <div className={cn(style.playground, style[`level${state.level}`])}>
          <div className={style.grid}>
            <Animations level={state.level} />
            {state.board.map((item) => (
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
