import "./animated.scss";

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span className={`${letterClass} _${idx + i}`} key={i}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
