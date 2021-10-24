import { createContext, ReactNode, useContext, useState } from "react";
import { IBoardItem } from "../components/types";
import { boardLevel1, levelBoards } from "./board";

interface BoardContextState {
  board: IBoardItem[];
  level: number;
  setItemCollected: (id: string, type: string) => void;
  isItemCollected: (id: string) => boolean;
  startTheGame: () => void;
}

const BoardContext = createContext<BoardContextState>({
  board: boardLevel1,
  level: 0,
  setItemCollected: () => {},
  isItemCollected: () => false,
  startTheGame: () => undefined,
});

export const BoardContextProvider = ({ children }: { children: ReactNode }) => {
  const [board, setBoard] = useState<IBoardItem[]>(boardLevel1);
  const [level, setLevel] = useState<number>(0);

  const setItemCollected = (id: string, type: string) => {
    const audio = new Audio(`${type}.mp3`);
    audio.play();
    const elementIndex = board.findIndex((element) => element.id === id);
    const newBoard = [...board];
    newBoard[elementIndex].isCollected = true;
    setBoard(newBoard);
    // check if all items are collected and if so, level up
    if (newBoard.every((item) => item.isCollected)) {
      setLevel(level + 1);
      setBoard(levelBoards[level]);
    }
  };

  const startTheGame = () => {
    setLevel(1);
  };

  const isItemCollected = (id: string) => {
    const elementIndex = board.findIndex((element) => element.id === id);
    return board[elementIndex].isCollected;
  };

  return (
    <BoardContext.Provider
      value={{ board, level, setItemCollected, isItemCollected, startTheGame }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export const useBoardContext = () => {
  const { board, level, setItemCollected, isItemCollected, startTheGame } =
    useContext(BoardContext);

  return {
    board,
    level,
    setItemCollected,
    isItemCollected,
    startTheGame,
  };
};

export default BoardContext;
