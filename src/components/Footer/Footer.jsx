import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="mainFooter">
      <div className="container-md">
        <hr />
        <div className="mainFooterWrapper">
          <img src={require("./logo.svg")} alt="Logo" />
          <a href="https://instasport.co/">Instasport – спортхаб онлайн!</a>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
