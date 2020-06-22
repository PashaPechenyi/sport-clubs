import React from "react";
import "./ClubsCards.scss";

function ClubsCards({ clubsForReturn }) {
  return (
    <div className="clubsCardsBlock">
      <div className="container-md">
        <div className="row">
          {clubsForReturn.map(({ link, logo, title_short, title }) => {
            if (
              logo.slice(-3).toLowerCase() !== "png" &&
              logo.slice(-3).toLowerCase() !== "jpg"
            ) {
              logo = require("./default-image.png");
            }

            return (
              <div className="col-3" key={title}>
                <a href={link}>
                  <img src={logo} alt="clubs logo" className="card-img-top" />
                </a>

                <p className="clubsName">{title_short}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default React.memo(ClubsCards);
