import { useState } from "react";
import { useBoardContext } from "../../../board/useBoardContext";
import config from "../../../config";
import style from "./index.module.css";
import cn from "classnames";

const StartScreen: React.FC = () => {
  const { startTheGame } = useBoardContext();
  const [triggerAnimation, setTriggerAnimation] = useState<boolean>(false);

  const start = () => {
    setTriggerAnimation(true);
    setTimeout(() => startTheGame(), 800);
  };

  return (
    <div
      className={cn(style.startScreen, triggerAnimation && style.animateScreen)}
    >
      <img className={style.cow} src={config.assets.cowStartScreen} alt={""} />

      <img
        className={style.giraffe}
        src={config.assets.giraffeStartScreen}
        alt={""}
      />

      <div className={style.startWrap}>
        <div className={style.dogWrap}>
          <img
            className={style.dog}
            src={config.assets.dogStartScreen}
            alt={""}
          />
          <button className={style.startButton}>Start</button>
          <button className={style.startButtonClickable} onClick={start} />
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
