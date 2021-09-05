import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselDiv = () => (
  <Carousel showArrows infiniteLoop showStatus={false} autoPlay interval={6100}>
    <div>
      <div className="myCarousel">
        <p>
          It's freeing to be able to catch up on customized news and not be
          distracted by a social media element on the same site
        </p>
        <h3>- Shirley Fultz</h3>
        <h4>Designer</h4>
      </div>
    </div>

    <div>
      <div className="myCarousel">
        <p>
          The simple and intuitive design makes it easy for me use. I highly
          recommend Fetch to my peers.
        </p>
        <h3>- Daniel Keystone</h3>
        <h4>Designer</h4>
      </div>
    </div>

    <div>
      <div className="myCarousel">
        <p>
          I enjoy catching up with Fetch on my laptop, or on my phone when I'm
          on the go!
        </p>
        <h3>- Theo Sorel</h3>
        <h4>Designer</h4>
      </div>
    </div>
  </Carousel>
);

export default CarouselDiv;
