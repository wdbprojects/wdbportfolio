import React, { useEffect, useState } from "react";
import {
  FiChevronRight,
  FiChevronLeft,
} from "react-icons/fi";
import { Button, Typography } from "@mui/material";
import dataTestimonials from "../dataTestimonials";

const Testimonials = () => {
  const [people, setPeople] = useState(dataTestimonials);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  /* useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 10000);
    return () => {
      clearInterval(slider);
    };
  }, [index]); */

  return (
    <div className="testimonialsSection">
      <div className="title">
        <Typography
          variant="h3"
          color="secondary"
          className="testimonialsSection__title">
          Testimonials
        </Typography>
      </div>

      <div className="testimonialsSection__center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          let position = "nextSlide";
          const lastItem = people.length - 1;
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === lastItem)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img
                src={image}
                alt={name}
                className="personImg"
              />
              <Typography
                variant="h4"
                className="personName">
                {name}
              </Typography>
              <Typography
                variant="h6"
                className="personTitle">
                {title}
              </Typography>
              <Typography
                variant="body1"
                className="personQuote">
                {quote}
              </Typography>
            </article>
          );
        })}
        <Button
          variant="outlined"
          className="btnPrev"
          color="secondary"
          onClick={() => {
            setIndex(index - 1);
          }}>
          <FiChevronLeft />
        </Button>
        <Button
          variant="outlined"
          className="btnNext"
          color="secondary"
          onClick={() => {
            setIndex(index + 1);
          }}>
          <FiChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default Testimonials;
