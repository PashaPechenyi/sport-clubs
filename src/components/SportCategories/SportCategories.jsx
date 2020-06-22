import React from "react";
import "./SportCategories.scss";

function SportCategories({
  allSportCategory,
  activeSportCategory,
  changeActiveSportCategory,
}) {
  return (
    <div className="sports">
      <div className="container-md">
        <div className="btn-toolbar">
          <button
            type="button"
            className="btn"
            onClick={() => {
              changeActiveSportCategory(null);
            }}
          >
            <span className="fa fa-refresh"></span>
          </button>

          {allSportCategory.map((item) => (
            <button
              key={item}
              type="button"
              className={
                activeSportCategory === item ? "btn activeSportCategory" : "btn"
              }
              onClick={() => {
                changeActiveSportCategory(item);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default React.memo(SportCategories);
