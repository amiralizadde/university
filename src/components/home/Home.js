import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "./Home.css";
import TimeLine from "./TimeLine";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

export default function Home() {
  const [index, setIndex] = useState(0);
  const [slideImg, setSlideImg] = useState([
    "./image/slider1.jpg",
    "./image/slider2.jpg",
    "./image/slider3.jpg",
  ]);

  const nextImage = () => {
    setIndex((prevState) => {
      if (prevState == 2) {
        return 0;
      } else {
        return prevState + 1;
      }
    });
  };

  const prevImage = () => {
    setIndex((prevState) => {
      if (prevState == 0) {
        return 2;
      } else {
        return prevState - 1;
      }
    });
  };

  useEffect(() => {
    console.log("index : ", index);
    console.log("slideImg[index] : ", slideImg[index]);
  }, [index]);

  return (
    <>
      <div id="imageHome" style={{height:"60vw"}}>
        <img src={slideImg[index]} id="image-slides" className="w-100" />
        <ChevronRightIcon id="right" onClick={nextImage} />
        <KeyboardArrowLeftIcon id="left" onClick={prevImage} />
      </div>

      <section>
        <Container fluid id="textContainer" className="d-flex flex-column align-items-center">
          <p className="fs-1 p-3 text-white text-center">About Our Group</p>
          <hr className="bg-light w-75" style={{height:'5px'}} />
          <p className="text-center w-75 text-light lh-lg" style={{textAlign:"justify"}}>
            We are interested in multiple aspects of optical micromanipulation,
            new microscopy techniques, and imaging. Current projects in our
            group primarily deal with the optics and applications of optical
            tweezers. Optical tweezers refer to a particular geometry where a
            laser beam is focused through a high numerical aperture lens. This
            geometry is used to generate a three-dimensional optical trap by
            exerting a radiation force on tiny particles. Optical tweezers with
            nanometer positioning ability, along with sub-picoNewton force
            resolution, have become a valuable tool for micromanipulation in
            biology and physical sciences.
          </p>
        </Container>
      </section>

      <section>
      <TimeLine />
      </section>
    </>
  );
}
