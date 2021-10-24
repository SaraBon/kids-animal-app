import React from "react";
import { createContext, ReactNode, useContext } from "react";
import { IBoardItem } from "../components/types";
import { boardLevel1, levelBoards } from "./board";

interface BoardState {
  board: IBoardItem[];
  level: number;
}

type IReducerAction =
  | { type: "startGame" }
  | { type: "setItemCollected"; id: string };

const initialState: BoardState = {
  board: boardLevel1,
  level: 0,
};

export const reducer = (state: BoardState, action: IReducerAction) => {
  switch (action.type) {
    case "startGame":
      return { level: 1, board: state.board };
    case "setItemCollected": {
      const newBoard = state.board;
      const element = newBoard.find((element) => element.id === action.id);
      element!.isCollected = true;

      const allItemsCollected = newBoard.every((item) => item.isCollected);
      const isLastLevel = state.level === levelBoards.length;
      return {
        board: allItemsCollected
          ? isLastLevel
            ? newBoard
            : levelBoards[state.level]
          : newBoard,
        level: allItemsCollected
          ? isLastLevel
            ? state.level
            : state.level + 1
          : state.level,
      };
    }

    default:
      throw new Error();
  }
};

interface BoardContextState {
  state: BoardState;

  setItemCollected: (id: string, type: string) => void;
  isItemCollected: (id: string) => boolean;
  startTheGame: () => void;
}

const BoardContext = createContext<BoardContextState>({
  state: {
    board: boardLevel1,
    level: 0,
  },

  setItemCollected: () => {},
  isItemCollected: () => false,
  startTheGame: () => undefined,
});

export const BoardContextProvider = ({ children }: { children: ReactNode }) => {
  // const [board, setBoard] = useState<IBoardItem[]>(boardLevel1);
  // const [level, setLevel] = useState<number>(0);

  const [state, dispatch] = React.useReducer<
    React.Reducer<BoardState, IReducerAction>
  >(reducer, initialState);

  const setItemCollected = (id: string) => {
    dispatch({ type: "setItemCollected", id });
  };

  const startTheGame = () => {
    dispatch({ type: "startGame" });
  };

  const isItemCollected = (id: string) => {
    const element = state.board.find(
      (element: IBoardItem) => element.id === id
    );
    return element!.isCollected;
  };

  return (
    <BoardContext.Provider
      value={{ state, isItemCollected, startTheGame, setItemCollected }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export const useBoardContext = () => {
  const { state, isItemCollected, startTheGame, setItemCollected } =
    useContext(BoardContext);

  return {
    state,
    setItemCollected,
    isItemCollected,
    startTheGame,
  };
};

export default BoardContext;
