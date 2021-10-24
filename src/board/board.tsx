import { DragItem } from "../components/DragAndDropItems/DragItem";
import { DropItem } from "../components/DragAndDropItems/DropItem";
import { AnimalTypes, IBoardItem } from "../components/types";
import config from "../config";

export const boardLevel1: IBoardItem[] = [
  {
    id: "3",
    receiver: (
      <DropItem
        id={"3"}
        gridPosition={[2, 2]}
        imgsrc={config.assets.sheepReceiver}
        imgsrcAnimate={config.assets.sheep}
        type={AnimalTypes.SHEEP}
      />
    ),
    dragItem: (
      <DragItem
        id={"3"}
        gridPosition={[6, 2]}
        imgsrc={config.assets.sheep}
        type={AnimalTypes.SHEEP}
      />
    ),
    type: AnimalTypes.SHEEP,
    isCollected: false,
  },
  {
    id: "4",
    receiver: (
      <DropItem
        id={"4"}
        gridPosition={[1, 3]}
        imgsrc={config.assets.cowReceiver}
        imgsrcAnimate={config.assets.cow}
        type={AnimalTypes.COW}
      />
    ),
    dragItem: (
      <DragItem
        id={"4"}
        gridPosition={[5, 1]}
        imgsrc={config.assets.cow}
        type={AnimalTypes.COW}
      />
    ),
    type: AnimalTypes.COW,
    isCollected: false,
  },
];

export const boardLevel2: IBoardItem[] = [
  {
    id: "1",
    receiver: (
      <DropItem
        id={"1"}
        gridPosition={[3, 4]}
        imgsrc={config.assets.giraffeReceiver}
        imgsrcAnimate={config.assets.giraffe}
        type={AnimalTypes.GIRAFFE}
      />
    ),
    dragItem: (
      <DragItem
        id={"1"}
        gridPosition={[4, 1]}
        imgsrc={config.assets.giraffe}
        type={AnimalTypes.GIRAFFE}
      />
    ),
    type: AnimalTypes.GIRAFFE,
    isCollected: false,
  },
  {
    id: "2",
    receiver: (
      <DropItem
        id={"2"}
        gridPosition={[1, 2]}
        imgsrc={config.assets.elephantReceiver}
        imgsrcAnimate={config.assets.elephant}
        type={AnimalTypes.ELEPHANT}
      />
    ),
    dragItem: (
      <DragItem
        id={"2"}
        gridPosition={[5, 3]}
        imgsrc={config.assets.elephant}
        type={AnimalTypes.ELEPHANT}
      />
    ),
    type: AnimalTypes.ELEPHANT,
    isCollected: false,
  },
];

export const levelBoards = [boardLevel1, boardLevel2];
