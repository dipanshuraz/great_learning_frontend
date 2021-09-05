import React, { useRef, useState, useEffect } from "react";
import "./styles/global.scss";
import logo from "./assets/gl-logo-white.png";

import Video from "./assets/video.png";
import { Accordion } from "./components/Accordian/Accordion";
import Laptop from "./assets/laptop.png";
import CarouselDiv from "./components/CarouselDiv/CarouselDiv";
import MentorShip from "./assets/mentorship.svg";
import CareerAssist from "./assets/career-assistance.svg";
import Curriculum from "./assets/curriculum.svg";
import Form from "./components/Form/Form";
import Overlay from "./components/Overlay/Overlay";

const AccordianData = [
  {
    title: "Introduction to Data Science",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur doloremque labore dolor velit quisquam aspernatur quidem voluptatibus, accusantium voluptas.",
  },
  {
    title: "Business Finance",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur doloremque labore dolor velit quisquam aspernatur quidem voluptatibus, accusantium voluptas.",
  },
  {
    title: "Marketing and Finance",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur doloremque labore dolor velit quisquam aspernatur quidem voluptatibus, accusantium voluptas.",
  },
  {
    title: "SQL Programming",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur doloremque labore dolor velit quisquam aspernatur quidem voluptatibus, accusantium voluptas.",
  },
  {
    title: "Advanced Statistics",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur doloremque labore dolor velit quisquam aspernatur quidem voluptatibus, accusantium voluptas.",
  },
];

const iconsData = [
  {
    src: MentorShip,
    title: "Introduction to Data Science",
    color: "#F7D354",
  },
  {
    src: CareerAssist,
    title: "Business Finance",
    color: "#4FC5F1",
  },
  {
    src: Curriculum,
    title: "Marketing and Finance",
    color: "#4AAA8E",
  },
];

function App() {
  const initialState = {
    name: "",
    email: "",
    mobile: "",
    experience: "",
    organization: "",
  };

  const [data, setData] = useState(initialState);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const lsData = localStorage.getItem("data");
    if (lsData) setData(JSON.parse(lsData));
  }, []);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    localStorage.setItem("data", JSON.stringify(data));
  };

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];

        if (!first.isIntersecting) {
          setIsShow(true);
        } else {
          setIsShow(false);
        }
      },
      { threshold: 0 },
    ),
  );

  const [element, setElement] = useState(null);

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  const { name, email, mobile, experience, organization } = data;
  return (
    <div className="container">
      <img src={logo} alt="" className="logo" />

      <Overlay>
        <div ref={setElement} className="content-details__form__container">
          <Form
            name={name}
            email={email}
            mobile={mobile}
            experience={experience}
            organization={organization}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>

        <div className="details">
          <h3 className="details__name">
            PG Program in <br /> Data Science and Business Analytics
          </h3>
          <h4 className="details__description">
            Learn Data Science, Business Analytics with India's #1 course and
            power ahead in your career
          </h4>
          <h3 className="details__duration">
            11 Months <br /> Online Mentorship
          </h3>
        </div>
      </Overlay>

      <div className="why-learn-video">
        <h2 className="title">WHY LEARN FROM GREAT LEARNING</h2>
        <hr className="primary__seperator" />
        <img src={Video} className="why-learn-video__icon" alt="" />
        <div className="why-learn-video__section">
          {iconsData.map(({ color, src, title }) => (
            <div className="why-learn-video__section-item">
              <div
                className="why-learn-video__section-item__image"
                style={{ background: color }}>
                <img src={src} alt="img" />
              </div>
              <p>{title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="curriculum-snapshot">
        <span className="curriculum-snapshot__title title">
          CURRICULUM SNAPSHOT
        </span>
        <hr className="primary__seperator" />
        <div className="accordion">
          {AccordianData.map(({ title, body }) => (
            <Accordion title={title}>{body}</Accordion>
          ))}
        </div>
      </div>

      <div className="learning-outcome">
        <span className="learning-outcome__title title">LEARNING OUTCOME</span>
        <hr className="primary__seperator" />
        <div className="learning-outcome__details">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis hic
            nihil at veritatis facere. Beatae, maxime ipsam animi alias
            quibusdam numquam voluptas.
          </p>
          <div className="learning-outcome__details__section">
            <img
              src={Laptop}
              className="learning-outcome__details__section-image"
              alt=""
            />

            <div className="learning-outcome__details__section-text">
              <ul className="leaf">
                {[1, 2, 3, 4].map(() => (
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facilis hic nihil at veritatis facere. Beatae, maxime ipsam
                    animi alias quibusdam numquam voluptas.
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonials">
        <span className="testimonials__title title">TESTIMONIALS</span>
        <hr className="primary__seperator" />
        <CarouselDiv />
      </div>

      <div className="about-us">
        <span className="about-us__title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolores
          reprehenderit tenetur eaque nemo tempora praesentium assumenda
          molestiae atque doloremque. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quasi dolores reprehenderit tenetur eaque nemo
          tempora praesentium assumenda molestiae.
        </span>
      </div>

      <div className={`footer ${isShow ? "sticky" : ""}`}>
        <button type="button" className="footer__button">
          Apply Now
        </button>
      </div>
    </div>
  );
}

export default App;
