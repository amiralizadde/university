import React from "react";
import { Row, Col } from "react-bootstrap";

export default function ResearchItems(props) {

  let { id, img, titleProject, stuProject, explain, DoiText ,DoiLink  ,Collaboration } = props;

  return (
    <Row lg={2} className="p-5">
      <Col lg={5}>
        <img src={img} alt="" className="w-100" />
      </Col>

      <Col lg={7}>
        <p className="fs-3 fw-bold">{titleProject}</p>
        <p className="fs-5 fw-bold">{stuProject}</p>
        <p className="fs-5 fw-bold">{Collaboration ? <p>In Collaboration<a href="#" className="text-secondary"> {Collaboration}</a></p> : ''}</p>

        <p className="fw-bold">{explain}</p>
        <p>{DoiText? <a href={DoiLink} target="_blank">{DoiText}</a> : ''}</p>
      </Col>
    </Row>
  );
}
