import React from "react";
import { Col } from "react-bootstrap";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Student(props) {
  
  let { id, name, lastName, socialMedia, grade, email, img, tel } = props;


  return (
    <Col lg={6} className=" d-flex p-3" id="stuColElem">

      <div id="picDivElem">
        <img src={img} className="w-100" id="picElem" alt="" style={{height:"230px" , objectFit:"cover"}} />
      </div>

      <div className="ms-3 mt-4">
        <p className=" fs-5 fw-bold ">
          {name}
          {lastName}
        </p>

        <p className=" mb-2  fw-bold">{grade}</p>
        {tel ? <p className="fw-light fs-6 mt-3">Tel : {tel}</p> : ""}

        <p className="fw-light fs-6" >Email : <br /> {email}</p>


        {socialMedia.map((item) =>
          (item.linkedIn ? <a href={item.linkedIn} target="_blank"><LinkedInIcon className="fs-2 socialMediaStu" /></a> :
          item.researchGit ? (<a href={item.researchGit} target="_blank"><img src="./image/icon/researchGit.png" className="socialMediaStu" style={{width:"50px" ,height:"50px"}} /></a>) :
          item.googleScholar ? (<a href={item.googleScholar} target="_blank"><img src="./image/icon/icons8-google-scholar-100-2.png" className="socialMediaStu" style={{width:"50px" ,height:"50px"}} /></a>) : ' '
        )
        )}
      </div>
    </Col>
  );
}

