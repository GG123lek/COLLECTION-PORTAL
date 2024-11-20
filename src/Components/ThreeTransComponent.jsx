import "./ThreeTransComponent.css";
import imagetransone from "../assets/Images/imagetransone.png";
import imagetranstwo from "../assets/Images/imagetranstwo.png";
import trek from "../assets/Images/imageuserfour.png";
import ofall from "../assets/Images/mainpi.svg";

function ThreeTransComponent() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "10px",
        flexDirection: "column",
        position: "relative",
        left: "120px",
        bottom: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <div className="transcontainerthree">
          <img src={imagetransone} alt="Institution" style={{ width: "40px" }} />
          <p>Filter by Institution</p>
        </div>
        <div className="transcontainerthrees">
          <img src={imagetranstwo} alt="Billers" style={{ width: "40px" }} />
          <p>Filter by Billers</p>
        </div>
        <div className="transcontainerthrees">
          <img src={trek} alt="Location" style={{ width: "35px" }} />
          <p>Filter by Location</p>
        </div>
        <div className="transcontainers">
          <img src={ofall} alt="Status" style={{ width: "35px" }} />
          <p>Status</p>
        </div>
      </div>
    </div>
  );
}

export default ThreeTransComponent;
