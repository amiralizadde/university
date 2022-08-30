import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function AlumniStu(props) {
  let {id, name, grade, linkedIn, CurrentUniLink , CurrentUniText } = props;
  return (
    <li className="px-2 m-2" style={{ letterSpacing: "", fontWeight: "700" }}>
      {`${name}(${grade})`}
      {CurrentUniLink ? (
        <a href={CurrentUniLink} className="ms-2" id="currntUniElem" target="_blank">
          {CurrentUniText}
        </a>
      ) : (
        " "
      )}
      {linkedIn ? (
        <a href={linkedIn}><LinkedInIcon className="text-primary fs-3 mx-3 socialMediaStu" id="" /></a>
      ) : (
        ""
      )}
    </li>
  );
}
