import React from "react";
import Fade from "react-reveal/Fade";

const AboutTeamCard = ({ imgSrc, position, text }) => {
  return (
    <Fade bottom cascade>
      <div className="w-full">
        <div className="relative h-96 overflow-hidden rounded-xl">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={imgSrc}
            alt={position}
          />
          <div className="relative z-10 flex items-center justify-center h-full p-4 bg-gradient-to-t from-black/70 via-transparent to-transparent">
            <h3 className="bg-white p-2 rounded-xl w-3/4 text-black text-xl font-semibold text-center">{position}</h3>
          </div>
        </div>
        <h4 className="mt-4 text-lg font-medium text-center">{text}</h4>
      </div>
    </Fade>
  );
};

export default AboutTeamCard;
