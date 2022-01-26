import img from "../images/logo.svg";
import Generator from "./Generator";

const Home = () => {
  return (
    <div className="home">
      <div className="header">
        <img src={img} alt="randomGenerator"/>
        <p className="para">
          Generate random numbers using quantum physics. This generator utilizes
          Quantis QRNG Chip that exploits elementary quantum optic processes,
          fundamentally probabilistic to produce true randomness
        </p>
      </div>
      <Generator />
    </div>
  );
};

export default Home;
