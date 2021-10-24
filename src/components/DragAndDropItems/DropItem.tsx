import React, { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import style from "./index.module.css";
import cn from "classnames";
import { IDropItem } from "../types";
import { getGridPositionStyle } from "../helper";
import { useBoardContext } from "../../board/useBoardContext";

export const DropItem: React.FC<IDropItem> = (props) => {
  const { gridPosition, id, type, imgsrc, imgsrcAnimate } = props;
  const [animate, setAnimate] = useState<boolean>(false);
  const gridPositionStyle = getGridPositionStyle(gridPosition);

  useEffect(() => {
    setAnimate(false);
  }, [id]);

  const { setItemCollected } = useBoardContext();

  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept: type,
    drop: () => {
      setAnimate(true);
      const audio = new Audio(`${type}.mp3`);
      audio.play();
      setItemCollected(id, type);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const droppable = isOver && canDrop;

  return (
    <img
      className={cn(
        style.dropItem,
        droppable && style.droppable,
        animate && style.collectAnimation
      )}
      style={gridPositionStyle}
      src={animate ? imgsrcAnimate : imgsrc}
      ref={dropRef}
      alt={"drop-element"}
    />
  );
};
