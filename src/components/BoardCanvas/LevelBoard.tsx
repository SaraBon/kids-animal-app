import { useBoardContext } from "../../board/useBoardContext";
import style from "./index.module.css";
import cn from "classnames";
import { Animations } from "./Animations";
import { DropItem } from "../DragAndDropItems/DropItem";
import { DragItem } from "../DragAndDropItems/DragItem";

export const LevelBoard: React.FC = () => {
  const { state } = useBoardContext();

  return (
    <div className={cn(style.playground, style[`level${state.level}`])}>
      <div className={style.levelCount}>Level {state.level}</div>
      <div className={style.grid}>
        <Animations level={state.level} />
        {state.board.map((item) => (
          <>
            <DropItem
              id={item.id}
              gridPosition={item.gridPositionDrop}
              imgsrc={item.imgsrcDrop}
              imgsrcAnimate={item.imgsrcDrag}
              type={item.type}
            />
            <DragItem
              id={item.id}
              gridPosition={item.gridPositionDrag}
              imgsrc={item.imgsrcDrag}
              type={item.type}
            />
          </>
        ))}
      </div>
    </div>
  );
};
