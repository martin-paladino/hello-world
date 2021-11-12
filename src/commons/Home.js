import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import Cards from "../commons/Card";
import {Link} from "react-router-dom"

function Home({ data }) {
  return (
    <div>
      <Carousel>
        {data.map((courses) => {
          return (
            <Carousel.Item>
              <Container>
                <Row>
                  <Col sm={4}>
              <Link to="/cards">
                    <Cards courses={courses} />
            </Link>
                  </Col>
                </Row>
              </Container>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default Home;



