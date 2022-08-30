import React, { useState } from "react";
import "./Gallery.css";
import { imagesGallery } from "../../data/DataGallery";
import { Container, Col, Row } from "react-bootstrap";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import CloseIcon from '@mui/icons-material/Close';

export default function Gallery() {
  const [images, setImages] = useState(imagesGallery);
  const [test, setTest] = useState(false);
  const [bigSlideImg, setBigSlideImg] = useState(null);
  const [show  , setShow] =useState(false)

  const showImage = (id, event) => {
    setShow(true);
    let image = images.find((img) => img.id === id);
    setBigSlideImg(image.img);
  };

  const nextImg = () => {

    let img = images.find((item) => item.img === bigSlideImg);

    let nextImg = images.find((item) =>{

        if(img.id === images.length){
            return images[0]
        }else{
           return  item.id === img.id + 1
        }

    });
    setBigSlideImg(nextImg.img);

  };

  const prevImg = () => {
    let img = images.find((item) => item.img === bigSlideImg);

    let prevImg = images.find((item) =>{

        if(img.id === 1){
            return item.id === images[images.length-1].id
        }else{
           return  item.id === img.id - 1
        }

    });
    setBigSlideImg(prevImg.img);
  };

  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{ position: "relative" }}
      >
        <Container fluid className="contain p-sm-5">
          <Row
            sm={2}
            lg={4}
            className="d-flex justify-content-center justify-content-lg-start"
          >
            {images.map((imgItem) => (
              <Col sm={6} lg={3} className="col-10  p-3" key={imgItem.id}>
                <img
                  src={imgItem.img}
                  className=""
                  id="ImgItem"
                  onClick={(event) => showImage(imgItem.id, event)}
                  style={{ objectFit: "cover", height: "25vw", width: "100%" }}
                />
              </Col>
            ))}
          </Row>
        </Container>

        {show ? <Container id="bigImgContain" className="w-50">
          <div id="bigImg">
            <img src={bigSlideImg} className="w-100 h-100" id="imageSlide" />

            <ChevronRightIcon
              className="position-absolute fs-1 icon"
              style={{ top: "50%", right: "0" }}
              onClick={nextImg}
            />

            <KeyboardArrowLeftIcon
              className="position-absolute fs-1 icon"
              style={{ top: "50%", left: "0" }}
              onClick={prevImg}
            />
            <CloseIcon  className="position-absolute fs-1  icon"
              style={{ top: "10px", right: "20px" , color:'white'}}
              onClick={()=>setShow(false)} />
          </div>
        </Container> : ''}
      </div>
    </>
  );
}
