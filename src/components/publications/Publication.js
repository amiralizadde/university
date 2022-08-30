import React, { useState } from "react";
import "./Publication.css";
import {
  Journals,
  conferences,
  presentations,
} from "../../data/DataPublications";
import { Container, Col, Row } from "react-bootstrap";

export default function Publication() {


  const [journals, setJournals] = useState(Journals);
  const [Conferences, setConferences] = useState(conferences);
  const [Presentations, setPresentations] = useState(presentations);
  

  return (
    <div >
      <section className="">
        <div style={{height:"50vw"}}>
          <img
            src={require("../../image/publication/publication.png")}
            className="w-100"
            alt=""
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </section>

      <section id="journals">
        <div className="">
          <p className="h3 text-center">Journals</p>
          <hr
            className="w-75 mx-auto bg-secondary"
            style={{ padding: "2px" }}
          />
        </div>

        <Container>
          <ol>
            {journals.map((item) => (
              <>
                <li className="fs-6 fw-bold ps-3" key={item.id}>
                  <div className=" d-flex justify-content-between">
                    <p className="" style={{ width: "80%" }}>
                      {item.title}
                    </p>
                    <a href={item.link} target="_blank" style={{ textDecoration: "none" }}>
                      Go To Read
                    </a>
                  </div>
                </li>
                <hr />
              </>
            ))}
          </ol>
        </Container>
      </section>

      <section id="conferences">
        <div className="">
          <p className="h3 mt-5 text-center">Conferences</p>
          <hr
            className="w-75 mx-auto bg-secondary"
            style={{ padding: "2px" }}
          />
        </div>
        <Container>
          <p className="h2 ms-4">In English</p>
          <ol>
            {Conferences.inEnglish.map((item) => (
              <>
                <li className="fs-6 p-2 fw-bold" style={{textAlign:"justify"}}>{item}</li>
                <hr />
              </>
            ))}
          </ol>
          <p className="h2 ms-4">In Persian</p>
          <ol>
            {Conferences.inPersion.map((item) => (
              <>
                <li className="fs-6 p-2 fw-bold" style={{textAlign:"justify"}}>{item}</li>
                <hr />
              </>
            ))}
          </ol>
        </Container>
      </section>

      <section id="presentations">
        <div className="">
          <p className="h3 mt-5 text-center">Selected Presentations</p>
          <hr
            className="w-75 mx-auto bg-secondary"
            style={{ padding: "2px" }}
          />
        </div>
        <Container>
          <ol>
            {Presentations.map((item) => (
              <>
                <li className="fs-6 p-2 fw-bold" style={{textAlign:"justify"}}>{item}</li>
                <hr />
              </>
            ))}
          </ol>
        </Container>
      </section>
    </div>
  );
}
