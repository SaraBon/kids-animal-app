import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
import { BoardContextProvider } from "./board/useBoardContext";
import { BoardCanvas } from "./components/BoardCanvas";
import { Preview } from "react-dnd-preview";
import { PreviewImage } from "./components/PreviewImage";
import { IPreviewProps } from "./components/types";

const dndOtions = {
  enableMouseEvents: true,
};

const generatePreview = ({ itemType, item, style }: IPreviewProps) => {
  return (
    <div className="item-list__item" style={style}>
      <PreviewImage type={itemType} />
    </div>
  );
};

function App() {
  return (
    <DndProvider backend={TouchBackend} options={dndOtions}>
      <BoardContextProvider>
        <BoardCanvas />
        <Preview generator={generatePreview} />
      </BoardContextProvider>
    </DndProvider>
  );
}

export default App;
