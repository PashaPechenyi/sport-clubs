import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./Cities.scss";

function Cities({ allCities, activeCity, changeActiveCity }) {
  return (
    <div className="cities">
      <div className="container-md">
        <ul className="nav nav-tabs">
          <TransitionGroup>
            {activeCity && (
              <CSSTransition
                key="activeCity"
                timeout={300}
                classNames="refreshAnimation"
              >
                <li className="nav-item">
                  <span
                    className="nav-link nav-link-refresh"
                    onClick={() => changeActiveCity(null)}
                  >
                    <span className="fa fa-refresh"></span>
                  </span>
                </li>
              </CSSTransition>
            )}
          </TransitionGroup>

          {allCities.map((city) => (
            <li key={city} className="nav-item">
              <span
                className={activeCity === city ? "nav-link active" : "nav-link"}
                onClick={() => changeActiveCity(city)}
              >
                {city}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default React.memo(Cities);
