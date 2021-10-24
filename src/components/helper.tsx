import { CSSProperties } from "react";

export const getGridPositionStyle = (gridPosition: [number, number]) => {
  return { gridArea: `${gridPosition[0]}/${gridPosition[1]}` } as CSSProperties;
};
