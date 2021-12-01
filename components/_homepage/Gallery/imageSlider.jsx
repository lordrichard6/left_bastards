import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

import { Colors } from "../../../assets/variables";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

export default function ImageSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <GalleryWrapper>
      <BsArrowLeftSquareFill className="leftArrow" onClick={prevSlide} />
      <BsArrowRightSquareFill className="rightArrow" onClick={nextSlide} />
      {slides.map((item, i) => {
        return (
          <ImageWrapper
            key={i}
            className={i === current ? "slide active" : "slide"}
          >
            {i === current && (
              <Image src={item.imgSrc} alt={item.alt} objectFit="cover" />
            )}
          </ImageWrapper>
        );
      })}
    </GalleryWrapper>
  );
}

const GalleryWrapper = styled.div`
  margin: 1rem 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }

  @media only screen and (min-width: 2024px) {
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    font-size: 2.5rem;
    color: ${Colors.dark};
    cursor: pointer;
    z-index: 10;
    user-select: none;

    @media only screen and (max-width: 764px) {
      font-size: 2rem;
    }
  }
  .leftArrow {
    left: 30px;

    @media only screen and (max-width: 764px) {
      left: 10px;
    }
  }
  .rightArrow {
    right: 30px;

    @media only screen and (max-width: 764px) {
      right: 10px;
    }
  }
  .slide {
    opacity: 0;
    animation-duration: 1s ease;
  }
  .slide.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
  }
`;

const ImageWrapper = styled.div`
  @media only screen and (min-width: 2024px) {
  }

  img {
    border-radius: 10px;
  }
`;
