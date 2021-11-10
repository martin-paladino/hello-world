import React from "react";
import { Card, Button, Container, Col, Row } from "react-bootstrap";
import Cards from "../commons/Card";
const Grid = ({ data }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {data.map((courses) => {
        return (
          <Container>
            <Row>
              <Col sm={4}>
                <Cards courses={courses} />
              </Col>
            </Row>
          </Container>
        );
      })}
      )
    </div>
  );
};

export default Grid;
