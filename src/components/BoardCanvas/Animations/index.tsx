import style from "./index.module.css";
import cn from "classnames";

interface Props {
  level: number;
}

export const Animations: React.FC<Props> = ({ level }) => {
  switch (level) {
    case 1:
      return (
        <div className={style.treeWrap}>
          <div className={style.fruit1Fallen} />
          <div className={style.fruit2Fallen} />
          <div className={style.fruit3Fallen} />
          <div className={style.tree}>
            <div className={style.fruit1} />
            <div className={style.fruit2} />
            <div className={style.fruit3} />
            <div className={style.trunk}>
              <div className={style.leftbranch} />
              <div className={style.rightbranch} />
            </div>
          </div>
        </div>
      );
    case 2:
      return (
        <>
          <div className={cn(style.birdContainer, style.birdContainerOne)}>
            <div className={cn(style.bird, style.birdOne)}></div>
          </div>

          <div className={cn(style.birdContainer, style.birdContainerTwo)}>
            <div className={cn(style.bird, style.birdTwo)}></div>
          </div>

          <div className={cn(style.birdContainer, style.birdContainerThree)}>
            <div className={cn(style.bird, style.birdThree)}></div>
          </div>

          <div className={cn(style.birdContainer, style.birdContainerFour)}>
            <div className={cn(style.bird, style.birdFour)}></div>
          </div>
        </>
      );
    default:
      return (
        <>
          <div className={cn(style.birdContainer, style.birdContainerOne)}>
            <div className={cn(style.bird, style.birdOne)}></div>
          </div>

          <div className={cn(style.birdContainer, style.birdContainerTwo)}>
            <div className={cn(style.bird, style.birdTwo)}></div>
          </div>

          <div className={cn(style.birdContainer, style.birdContainerThree)}>
            <div className={cn(style.bird, style.birdThree)}></div>
          </div>

          <div className={cn(style.birdContainer, style.birdContainerFour)}>
            <div className={cn(style.bird, style.birdFour)}></div>
          </div>
        </>
      );
  }
};
