import { Container, Row } from "react-bootstrap";
import React, { useState } from "react";
import "./Research.css";
import { MostPublication ,OngoingData} from "../../data/DataResearch";
import ResearchItems from "./ResearchItems";

export default function Research() {
  const [mostPublication, setMostPublication] = useState(MostPublication);
  return (
    <div>
      <section>
        <div className="" style={{height:"60vw"}}>
          <img
            src={require("../../image/research/atom-header.jpg")}
            className="w-100 h-100"
            alt=""
            style={{
              objectFit:"cover"
            }}
          />
        </div>
      </section>

      <section id="resent-publication">
        <div className="">
          <p className="h3 mt-5 text-center">Most Recent Publications</p>
          <hr
            className="w-75 mx-auto bg-secondary"
            style={{ padding: "2px" }}
          />
        </div>

        <Container fluid>
          {mostPublication.map((item) => (
            <ResearchItems key={item.id} {...item} />
          ))}

          <div className="">
            <p className="h3 mt-5 text-center">Ongoing Projects</p>
            <hr
              className="w-75 mx-auto bg-secondary"
              style={{ padding: "2px" }}
            />
          </div>
          {OngoingData.map((item) => (
            <ResearchItems key={item.id} {...item} />
          ))}
        </Container>
      </section>
    </div>
  );
}
