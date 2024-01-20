import "./styles.css";

const BreakingText = ({ text }) => {
  return (
    <div className="breakingText">
      <span className="">{text[0]}</span>
      <span className="breaking">{text[1]}</span>
      <span className="">{text[2]}</span>
    </div>
  );
};

export default BreakingText;
