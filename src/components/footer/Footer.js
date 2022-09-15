import { MdOnlinePrediction } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        {" "}
        <MdOnlinePrediction
          style={{ position: "absolute", bottom: "22px", left: "28%" }}
        />{" "}
        Weather-App 2022
      </p>
    </div>
  );
};

export default Footer;
