import { AnimalTypes, IBoardItem } from "../components/types";
import config from "../config";

export const boardLevel1: IBoardItem[] = [
  {
    id: "3",
    gridPositionDrop: [2, 2],
    gridPositionDrag: [6, 2],
    imgsrcDrop: config.assets.sheepReceiver,
    imgsrcDrag: config.assets.sheep,
    type: AnimalTypes.SHEEP,
    isCollected: false,
  },
  {
    id: "4",
    gridPositionDrop: [1, 3],
    gridPositionDrag: [5, 1],
    imgsrcDrop: config.assets.cowReceiver,
    imgsrcDrag: config.assets.cow,
    type: AnimalTypes.COW,
    isCollected: false,
  },
];

export const boardLevel2: IBoardItem[] = [
  {
    id: "1",
    gridPositionDrop: [3, 4],
    gridPositionDrag: [4, 1],
    imgsrcDrop: config.assets.giraffeReceiver,
    imgsrcDrag: config.assets.giraffe,
    type: AnimalTypes.GIRAFFE,
    isCollected: false,
  },
  {
    id: "2",
    gridPositionDrop: [1, 2],
    gridPositionDrag: [5, 3],
    imgsrcDrop: config.assets.elephantReceiver,
    imgsrcDrag: config.assets.elephant,
    type: AnimalTypes.ELEPHANT,
    isCollected: false,
  },
];

export const levelBoards = [boardLevel1, boardLevel2];
