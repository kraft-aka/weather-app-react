import { MdOnlinePrediction } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        {" "}
        <MdOnlinePrediction
          style={{ position: "relative", bottom: "-0.1rem", left: "-.1rem" }}
        />{" "}
        Weather-App 2022
      </p>
    </div>
  );
};

export default Footer;
