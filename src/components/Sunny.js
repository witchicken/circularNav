import "./css/Sunny.scss";
import { ReactComponent as Man } from "../svg/man.svg";
import { ReactComponent as Sun } from "../svg/sun.svg";
import { ReactComponent as Grass } from "../svg/grass.svg";
import { ReactComponent as WateringCan } from "../svg/wateringCan.svg";
import { ReactComponent as Flower } from "../svg/flower.svg";
import { ReactComponent as Tree } from "../svg/tree.svg";

function Sunny() {
  return (
    <div className="SunnyCompo">
      <div className="innerCircle">
        <Man width="110" height="110" />
      </div>
      <div className="sunnyContainer">
        <Sun className="sun" width="200" height="200 " fill="white" />
        <div className="grassContainer">
          <Grass />
          <Grass />
          <Grass />
          <Grass />
          <Grass />
          <Grass />
          <Grass />
          <Grass />
          <Grass />
          <Grass />
          <Grass />
          <Grass />
          <Grass />
          <Grass />
          <Grass />
          <Grass />
          <Grass />
          <Grass />
          <Grass />
          <Grass />
          <Grass />
          <Grass />
          <Grass />
          <Grass />
          <Grass />
          <Grass />
          <Grass />
          <Grass />
          <Grass />
          <Grass />
        </div>
        <WateringCan className="wateringcan" width="200" height="200" />
      </div>
      <Tree />
      <Flower />
    </div>
  );
}

export default Sunny;
