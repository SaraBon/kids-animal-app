import React from "react";
import { useDrag } from "react-dnd";
import style from "./index.module.css";
import cn from "classnames";
import { IDragItem } from "../types";
import { getGridPositionStyle } from "../helper";
import { useBoardContext } from "../../board/useBoardContext";

export const DragItem: React.FC<IDragItem> = (props) => {
  const { id, gridPosition, type, imgsrc } = props;

  const gridPositionStyle = getGridPositionStyle(gridPosition);

  const { isItemCollected } = useBoardContext();

  const itemCollected = isItemCollected(id);

  const [{ isDragging }, dragRef] = useDrag({
    type: type,
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const showDragItem = !isDragging && !itemCollected;

  return (
    <>
      {showDragItem && (
        <img
          className={cn(style.dragItem)}
          style={gridPositionStyle}
          src={imgsrc}
          ref={dragRef}
          alt={"drag-element"}
        />
      )}
    </>
  );
};
