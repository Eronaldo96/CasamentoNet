// import { Grid, Card, CardMedia, Typography } from "@mui/material";
import React from "react";
// import { Carousel } from "react-bootstrap";
// import fotoCasal from "../../assets/images/ENSAIOBIAEIAN-044.jpg";
// import logoUm from "../../assets/images/download (1).png";
// import logoDois from "../../assets/images/wallpaperflare.com_wallpaper.jpg";

import "./styles.scss";

export default function HomePage() {
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex) => {
  //   setIndex(selectedIndex);
  // };
  return (
    <div className="homeStyle">
      <div>
        {/* <div className="image-text">Maria & José</div> */}
        {/* <h2 className="vessiculo">
          "E, sobre tudo isto, revestí-vos do amor, que é o vínculo da
          perfeição."
        </h2> */}
        {/* <br></br> */}
        {/* <h6 style={{ float: "right" }} className="vessiculo">
          Colossenses 3:14
        </h6> */}
      </div>
      {/* <div className="carouselContainer">
        <Carousel fade activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img className="carousel-image" src={logoUm} alt="Imagem 1" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel-image" src={logoDois} alt="Imagem 2" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div> */}

      {/* <div className="container" style={{ marginBottom: "20px" }}> */}
      {/* <div className="row">
          <span>
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
          </span>
        </div> */}
      {/* <hr /> */}
      {/* <div className="row">
          <div className="col-sm-5 textoCasal">
            <h2>Teste de textos</h2>
            <span>
              Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
              ligula porta felis euismod semper. Praesent commodo cursus magna,
              vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
              commodo.
            </span>
          </div>
          <div className="col-sm-7">
            <img className="ImagemCasalTexto" src={fotoCasal} alt="fotoCasal" />
          </div>
        </div> */}
      {/* </div> */}

      {/* <div className="container card-custom ">
        <div className="row col-sm-7">
          <h2>Teste de textos</h2>
          <span>
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
          </span>
        </div>
        <div className="col-sm-5">
          <img
            style={{ width: "500px", height: "500px", borderRadius: "5px" }}
            src={fotoCasal}
            alt="fotoCasal"
          />
        </div>
        <hr className="featurette-divider" />
        <div className="row col-sm-7">
          <h2>Teste de textos</h2>
          <span>
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
          </span>
        </div>
        <div className="col-sm-5">
          <img
            style={{ width: "500px", height: "500px", borderRadius: "5px" }}
            src={fotoCasal}
            alt="fotoCasal"
          />
        </div>
      </div> */}

      {/* <Carousel>
        <div>
          <img src={logoUm} alt="Imagem 1" />
        </div>
        <div>
          <img src={logoDois} alt="Imagem 2" />
        </div>
      </Carousel> */}

      {/* <Grid container spacing={2}>
        {images.map((image, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt={`Image ${index + 1}`}
                height="200"
                image={image}
                title={`Image ${index + 1}`}
              />
              <Typography variant="subtitle1" align="center">
                Image {index + 1}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid> */}
    </div>
  );
}
