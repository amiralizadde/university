import React from "react";
import "./timeLine.css";
import { Col, Row } from "react-bootstrap";

export default function TimelineItem(props) {
  let { id, img, name, job, biography  , data} = props;
  console.log('data : ' , data);
  return (
    <Row className="p-5 " id="rowElem">
      <Col  lg={6} className="col-12  d-flex flex-column" id="colElem">
        <div className="" id="colContainer">
          <span className="tag"></span>
         <p className="date">{data}</p>
          <img
            src={img}
            className="w-100 h-auto"
            alt=""
            style={{ height: "30vw", objectFit: "cover" }}
          />
          <p>{name}</p>
          <p>{job}</p>
          <ul>
            {biography.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </div>
      </Col>

    </Row>
  );
}
