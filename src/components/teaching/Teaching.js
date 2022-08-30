import React, { useState } from "react";
import "./Teaching.css";
import  {current , previous} from '../../data/DataTeaching'
import { Container } from "react-bootstrap";

export default function Teaching() {

    const[Current , setCurrent] = useState(current)
    const[Previous , setPrevios] = useState(previous)

  return (
    <div >
      <section>
        <div >
          <img
            src={require("../../image/teaching/TeachingSiteBanner.jpg")}
            className="w-100 h-100"
            alt=""
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </section>



                                 {/*______________Current Semester________  */}


      <section>
        <div className="">
          <p className="h3 mt-5 text-center">Current Semester</p>
          <hr
            className="w-75 mx-auto bg-secondary"
            style={{ padding: "2px" }}
          />
        </div>

        <Container>
        <ol>
            {Current.map((item) => (
              <>
                <li className="fs-6 p-2 fw-bold" key={item.id} style={{textAlign:"justify"}}>{item.title} <br/> {item.time}</li>
             
              </>
            ))}
          </ol>
        </Container>
      
        </section>


                          {/*_____________ Previous Semesters __________________*/}


        <section>
        <div className="">
          <p className="h3 mt-5 text-center">Previous Semesters</p>
          <hr
            className="w-75 mx-auto bg-secondary"
            style={{ padding: "2px" }}
          />
        </div>

        <Container>
        <ol>
            {Previous.map((item) => (
              <>
                <li className="fs-6 p-2 fw-bold" style={{textAlign:"justify"}}>{item}</li>
              </>
            ))}
          </ol>
        </Container>
      
        </section>

    </div>
  );
}
