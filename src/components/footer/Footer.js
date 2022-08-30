import React from "react";
import "./Footer.css";
import { Container, Col, Row } from "react-bootstrap";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

export default function Footer() {
  return (
    <div>
      <Container fluid>
        <Row md={2} id="rowFooter">

          <Col md={4}  lg={3} xl={4} className="border" id="firstColElem">
            <img src={require('../../image/footer.jpeg')} className="w-100 h-100" style={{objectFit:"cover"}} alt="" />
          </Col>

          <Col md={8} lg={9} xl={10} className="" id="secondColElem">

            <Row md={2} className="pt-xl-0 h-100 " id="rowTextFooter">
              <Col md={8} lg={10} xl={9} className="col-12   d-flex flex-column  justify-content-lg-center align-items-lg-start" id="infoCol">
                  

                  <p className="txt   fw-bold mt-lg-4"> Faegheh Hajizadeh</p>
                  <p className="  txt fw-bold">Assistant Prof</p>
                  <p className="fw-bold txt "><span><MailIcon /></span> Email : hajizade@iasbs.ac.ir</p>
                  <p className="fw-bold txt "><span><CallIcon /></span> Tel :+98-2433-1520-13</p>
                  <p className="fw-bold txt  "><span><FmdGoodIcon /></span>
                    444 Prof. Yousef Sobouti Blvd.,<br /><span className="ps-4">Zanjan 45137-66731, Iran</span> 
                  </p>
              <div className="d-flex justify-content-start  txt ps-3">
              <a href="https://www.linkedin.com/in/faegheh-hajizadeh-36136442/" target="_blank"><LinkedInIcon className="fs-1 text-primary icon" /></a>
                  <a href="https://scholar.google.com/citations?user=jAT17hkAAAAJ&hl=en" target="_blank"><img
                    src="./image/icon/icons8-google-scholar-100-2.png"
                    className="icon ms-2"
                    style={{ width: "40px", height: "40px" }}
                    alt=""
                  /></a>
                  <a href="https://www.researchgate.net/profile/Faegheh-Hajizadeh" target="_blank"><img
                    src="./image/icon/researchGit.png"
                    className="icon ms-2"
                    style={{ width: "40px", height: "40px" }}
                    alt=""
                  /></a>
              </div>
                  
                
              </Col>

              <Col md={4} lg={2} xl={3} className="col-12  d-flex flex-md-column   justify-content-evenly   " id="armCol">
                 
                  <a href="https://iasbs.ac.ir/" target="_blank"><img src="./image/main.png" className="argImg bg-light" alt="" /></a>
                    <a href="https://iasbs.ac.ir/departments/physics/" target="_blank"><img
                    src="./image/Department of physics.png"
                    className="argImg"
                    alt=""
                    /></a>
                 
               
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
