import "./css/Sunny.scss";
import { ReactComponent as Man } from "../svg/man.svg";

function Sunny() {
  return (
    <div className="SunnyCompo">
      <div className="innerCircle">
        <Man width="110" height="110" />
      </div>
      <div className="sunnyContainer"></div>
    </div>
  );
}

export default Sunny;
