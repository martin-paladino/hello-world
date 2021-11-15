import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

// estilos

import "../assets/styles/general.css"
import "../assets/styles/footer.css"

function Footer() {
  return (
    
      <div className="footer">
        <div>
          <Link to="/">
              <Card.Img
                style={{ width: "100px", height: "auto" }}
                src="https://i.stack.imgur.com/o2dfh.png"
                alt=""
              />
          </Link>
          </div>
          <div>
          <h3 className="textobarra">© 2021 hello_world. <br/> Todos los derechos reservados.</h3></div>
          <div>
          <h3 className="textobarra">
              Contacto:<br></br>
              courses@hello_world.com
          </h3>
        </div>
      </div>
  );
}

export default Footer;