import React, { useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Description.css";
import vineyard from "../videos/vineyard.mp4";
import greekgodwine from "../videos/greekgodwine.mp4";
import pourwine from "../videos/pourwine.mp4";
import womanWine from "../videos/womanWine.mp4";

const Description = () => {
  const videoRefs = {
    vineyard: useRef(null),
    greekgodwine: useRef(null),
    pourwine: useRef(null),
    womanWine: useRef(null),
  };

  // Function to play a specific video on mouseover
  const playVideo = (videoName) => {
    if (videoRefs[videoName].current) {
      videoRefs[videoName].current.play().catch((error) => {
        // Handle the error (e.g., show a message to the user)
      });
    }
  };

  // Function to pause a specific video on mouseout
  const pauseVideo = (videoName) => {
    if (videoRefs[videoName].current) {
      videoRefs[videoName].current.pause();
    }
  };

  return (
    <Container fluid className="description-container" id="description">
      <hr />
      {/* 1st row */}
      <Row>
        <h2 className="text-center description-heading">History & Facts</h2>
        <Col>
          <video
            src={vineyard}
            width="100%"
            autoPlay
            onMouseOver={() => playVideo("vineyard")}
            onMouseOut={() => pauseVideo("vineyard")}
            ref={videoRefs.vineyard}
            className="description-videos"
          ></video>
        </Col>
        <Col xs="12" md="6" className="text-column">
          <div className="text-div">
            <p>
              Vineyards can grow various grape varieties, each suited for
              different types of wine. The choice of grape variety depends on
              factors such as climate, soil, and regional traditions. Common
              grape varieties include Chardonnay, Cabernet Sauvignon, Merlot,
              and Pinot Noir.
            </p>
            <p>
              Terroir refers to the combination of environmental factors that
              influence a vineyard's grapes, including the soil type, climate,
              topography, and local traditions. These factors can significantly
              impact the flavor and characteristics of the wine produced.
            </p>
            <p>
              Vineyards are found all over the world, from traditional
              wine-producing regions like France, Italy, and California to
              emerging wine regions in places like New Zealand, Chile, and South
              Africa. The location of a vineyard greatly influences the style of
              wine it can produce.
            </p>
          </div>
        </Col>
      </Row>

      {/* 2nd row */}
      <Row>
        <Col xs="12" md="6" className="text-column">
          <div className="text-div">
            <p>
              In Greek mythology, wine was associated with both the god of wine
              and revelry, Dionysus (or Bacchus in Roman mythology), and the god
              of craftsmanship, festivals, and theater, Hephaestus. Wine had
              significant cultural and mythological importance in ancient
              Greece.{" "}
            </p>
            <p>
              Dionysus was one of the Olympian gods and was often depicted as
              the god of wine, grapes, and fertility. He was known for
              introducing the cultivation of the vine, the art of winemaking,
              and the joy of drinking to mortals. Dionysus was associated with
              both the ecstasy of drunken revelry and the creative inspiration
              that often accompanied it.
            </p>
            <p>
              In summary, wine held a special place in ancient Greek culture,
              with Dionysus as the god who embodied its essence. The Greeks
              celebrated wine in various festivals and associated it with both
              joyful revelry and creative inspiration. This cultural
              significance has left a lasting legacy in the world's perception
              of wine and its role in society.
            </p>
          </div>
        </Col>
        <Col>
          <video
            src={greekgodwine}
            width="100%"
            autoPlay
            onMouseOver={() => playVideo("greekgodwine")}
            onMouseOut={() => pauseVideo("greekgodwine")}
            ref={videoRefs.greekgodwine}
            className="description-videos"
          ></video>
        </Col>
      </Row>
      {/* 3rd row */}
      <Row>
        <Col>
          <video
            src={pourwine}
            width="100%"
            autoPlay
            onMouseOver={() => playVideo("pourwine")}
            onMouseOut={() => pauseVideo("pourwine")}
            ref={videoRefs.pourwine}
            className="description-videos"
          ></video>
        </Col>
        <Col xs="12" md="6" className="text-column">
          <div className="text-div">
            <p>
              There are several main categories of wine, including red, white,
              rosé, sparkling, and dessert wines, each with its own production
              methods and characteristics.
            </p>
            <p>
              Many wines improve with age, but not all. Factors such as grape
              variety, winemaking techniques, and storage conditions influence a
              wine's aging potential. Red wines often have more aging potential
              than white wines.
            </p>
            <p>
              Wine tasting involves evaluating a wine's appearance, aroma,
              flavor, and mouthfeel. Professional wine tasters, known as
              sommeliers, are trained to assess wines and make recommendations.
            </p>
          </div>
        </Col>
      </Row>
      {/* 4th row */}
      <Row>
        <Col xs="12" md="6" className="text-column">
          <div className="text-div">
            <p>
              Moderate wine consumption has been associated with potential
              health benefits, including a reduced risk of heart disease and
              certain types of cancer. However, excessive alcohol consumption
              can have adverse health effects.
            </p>
            <p>
              Red wine, in particular, contains compounds like resveratrol and
              flavonoids, which have antioxidant properties. These compounds may
              help improve cardiovascular health by reducing inflammation,
              lowering LDL (bad) cholesterol, and increasing HDL (good)
              cholesterol levels. This, in turn, may reduce the risk of heart
              disease.
            </p>
            <p>
              Some studies have suggested that moderate wine consumption may
              have a beneficial effect on blood sugar control. Resveratrol,
              found in red wine, has been studied for its potential to improve
              insulin sensitivity, which can be important for people with type 2
              diabetes.
            </p>
          </div>
        </Col>
        <Col>
          <video
            src={womanWine}
            width="100%"
            autoPlay
            onMouseOver={() => playVideo("womanWine")}
            onMouseOut={() => pauseVideo("womanWine")}
            ref={videoRefs.womanWine}
            className="description-videos"
          ></video>
        </Col>
      </Row>
    </Container>
  );
};

export default Description;
