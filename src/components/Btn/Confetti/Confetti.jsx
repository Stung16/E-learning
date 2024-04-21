import React from "react";
import ConfettiExplosion from "react-confetti-explosion";

const Confetti = () => {
  const [isExploding, setIsExploding] = React.useState(false);
  return (
    <div>
      <span
        onClick={() => {
          setIsExploding(!isExploding);
        }}
      >
        baasm vao day
      </span>
      {/* <Confetii particleCount={100} spread={70}/> */}
      {isExploding && <ConfettiExplosion force={0.5} />}
      {/* particleCount: 100,
  spread: 70,
  origin: { y: 0.6 } */}
    </div>
  );
};

export default Confetti;
