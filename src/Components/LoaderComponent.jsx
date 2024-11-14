
import { PacmanLoader } from 'react-spinners';
import "./LoaderComponent.css"

const LoaderComponent = ({ loading }) => {
  return (
    <div className="loader-container">
      <PacmanLoader loading={loading} size={40} color={"#ffcc00"} />
    </div>
  );
};

export default LoaderComponent;
