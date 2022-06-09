import React, { useState } from "react";
import people from "./data";
import "./index";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const check = (n) => {
    console.log(n);
    if (n > people.length - 1) {
      n = 0;
    }
    if (n <= 0) {
      n = people.length - 1;
    }
    return n;
  };

  const nextPerson = () => {
    setIndex((prev) => {
      prev = prev + 1;

      return check(prev);
    });
  };

  const prevPerson = () => {
    setIndex((prev) => {
      prev = prev - 1;
      return check(prev);
    });
  };

  const randomPerson = () => {
    let n = Math.floor(Math.random() * people.length);
    console.log(n);
    if (n == index) n++;
    setIndex(check(n));
  };

  // return <h2>review component</h2>;
  return (
    <article className="review">
      {/* review component */}
      <div className="img-container">
        <img src={image} className="person-img" />
        <span className="qoute-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
        <button className="random-btn" onClick={randomPerson}>
          Suprise Me
        </button>
      </div>
    </article>
  );
};

export default Review;
