import config from "../../config";
import { AnimalTypes } from "../types";
import style from "./index.module.css";

export const PreviewImage: React.FC<{ type: AnimalTypes }> = ({ type }) => {
  return (
    <img
      className={style.previewImage}
      src={config.assets[type]}
      alt={"preview-element"}
    />
  );
};
