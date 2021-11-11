import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import Cards from "../commons/Card";

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
                    <Cards courses={courses} />
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



