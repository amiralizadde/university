import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./People.css";
import Student from "./Student";
import students from "../../data/DataStudents";
import DataAlumniStu from '../../data/DataAlumniStu'
import AlumniStu from './AlumniStu'

export default function People() {
  const[alumni , setAlumni] = useState(DataAlumniStu)
  const [studets, setStudets] = useState(students);
  return (

    <div >
      <section>
        <div  style={{height:"60vw"}}>
          <img
            src="./Image/people/Grouppic.webp"
            className="w-100"
            id="imageHeader"
            alt=""
          />
        </div>
      </section>

      <section>
        <Container>
          <Row lg={2} className="p-3">
            {studets.map((student) => (
              <Student key={student.id} {...student}/>
            ))}
          </Row>
        </Container>
      </section>


      <section id="alumni">
        <div className="">
          <p className="h3 mt-5 text-center">Alumni</p>
          <hr className="w-75 mx-auto bg-secondary" style={{padding:'2px'}}/>
        </div>

        <Container>
          <ol className="pt-5 lh-lg">
            {alumni.map(item => (
              <AlumniStu key={item.id} {...item}/>
            ))}
          </ol>
        </Container>
      </section>
    </div>
  );
}
