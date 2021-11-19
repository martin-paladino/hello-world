import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/general.css"
import "../assets/styles/footer.css"

function Footer() {

  return (
    <div id="footer">
      <div id="footerEl">
        <Link to="/">
          <img id="logoHW"
            style={{ width: "70px", height: "auto" }}
            src="https://i.stack.imgur.com/o2dfh.png"
            alt=""
          />
        </Link>
      </div>
      <div id="footerEl"><h3 className="textobarra , margin-derechos"
      >
        2021 (C) <br></br>
        Todos los derechos reservados.<br></br>
      </h3>
      </div>
      <div id="footerEl">
        <h3 className="textobarra , margin-contacto" >
          Contacto:<br></br>
          courses@hello_world.com
        </h3>
      </div>
    </div>
  );
}

export default Footer;