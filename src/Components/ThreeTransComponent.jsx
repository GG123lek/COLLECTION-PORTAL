import "./ThreeTransComponent.css";
import imagetransone from "../assets/Images/imagetransone.png";
import imagetranstwo from "../assets/Images/imagetranstwo.png";
import trek from "../assets/Images/imageuserfour.png";
import ofall from "../assets/Images/mainpi.svg";

function ThreeTransComponent() {
  return (
    <div className="container">
      <div className="flex-container">
        <div className="transcontainerthree">
          <img src={imagetransone} alt="Filter by Institution" className="icon" />
          <p>Filter by Institution</p>
        </div>
        <div className="transcontainerthrees">
          <img src={imagetranstwo} alt="Filter by Billers" className="icon" />
          <p>Filter by Billers</p>
        </div>
        <div className="transcontainerthrees">
          <img src={trek} alt="Filter by Location" className="icon" />
          <p>Filter by Location</p>
        </div>
        <div className="transcontainers">
          <img src={ofall} alt="Status" className="icon" />
          <p>Status</p>
        </div>
      </div>
    </div>
  );
}

export default ThreeTransComponent;
