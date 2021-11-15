import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <Card className="bg-dark text-white">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Link to="/">
            <button>
              <Card.Img
                style={{ width: "100px", height: "auto" }}
                src="https://i.stack.imgur.com/o2dfh.png"
                alt=""
              />
            </button>
          </Link>
          <Card.Text>© 2021 hello_world, Inc.</Card.Text>
          <Card.Text style={{textAlign: "center"}}>
              Contact<br></br>
              courses@hello_world.com
          </Card.Text>
          <Card.Title></Card.Title>
        </div>
      </Card>
    </div>
  );
}

export default Footer;