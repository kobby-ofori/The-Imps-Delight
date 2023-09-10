import React from "react";
import { Container } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <Container className="about-container">
      <h2>WINE</h2>
      <p>
        The origins of wine production date back to around 6000-4000 BC in what
        is now Georgia and Iran. Early winemakers fermented grapes, likely
        discovering the process accidentally. Wine quickly spread to ancient
        Egypt and Mesopotamia (modern-day Iraq). In these cultures, wine was
        associated with religious rituals and used for medicinal purposes. The
        Greeks and Romans embraced wine culture, developing advanced techniques
        for winemaking and storage. Wine became a symbol of status and pleasure
        in these civilizations.Wine production and consumption spread throughout
        Europe, including regions like France, Italy, and Spain. Monasteries
        played a significant role in preserving winemaking knowledge during the
        Middle Ages. European explorers, such as Christopher Columbus,
        introduced grapevines to the Americas in the late 15th century. This led
        to the establishment of vineyards in regions like California, Chile, and
        Argentina.
      </p>
      <p>
        Today, the world of wine is incredibly diverse, with countless grape
        varieties, styles, and regions. Sustainability and organic winemaking
        practices are also on the rise, reflecting a growing awareness of
        environmental concerns.
      </p>
      <p>
        This history only scratches the surface of wine's intricate and storied
        past. Wine remains a symbol of culture, tradition, and celebration in
        many parts of the world, and its allure continues to captivate people
        across the globe.
      </p>
      <button className="btn">Read More</button>
    </Container>
  );
};

export default About;
