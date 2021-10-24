import { CSSProperties, ReactElement } from "react";

export interface IBoardItem {
  id: string;
  receiver: ReactElement;
  dragItem: ReactElement;
  type: string;
  isCollected: boolean;
}

export enum AnimalTypes {
  ELEPHANT = "elephant",
  WOLF = "wolf",
  GIRAFFE = "giraffe",
  COW = "cow",
  SHEEP = "sheep",
}

export interface IDragItem {
  id: string;
  gridPosition: [number, number];
  type: string;
  imgsrc: string;
}

export interface IDropItem {
  id: string;
  gridPosition: [number, number];
  type: string;
  imgsrc: string;
  imgsrcAnimate: string;
}

export interface IPreviewProps {
  itemType: AnimalTypes;
  item: any;
  style: CSSProperties;
}
