import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import { Colors } from "../../../assets/variables";

export default function Card({ link, imgSrc, imgAlt, name }) {
  return (
    <CardWrapper>
      <Link href={link}>
        <ImageWrapper className="image">
          <Image
            src={imgSrc}
            objectFit="cover"
            objectPosition="center"
            alt={imgAlt}
          />
        </ImageWrapper>
      </Link>
      <div className="text">
        <h2>{name}</h2>
      </div>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  display: flex;
  position: relative;
  border: 2px solid ${Colors.primary};
  border-radius: 4px;
  cursor: pointer;
  height: 30rem;
  width: 20rem;
  overflow: hidden;

  @media only screen and (min-width: 2024px) {
    height: 35rem;
    width: 25rem;
  }

  .text {
    position: absolute;
    top: 80%;
    left: 40%;
    transform: translate(-50%, -50%);
    width: 80%;
    color: ${Colors.dark};
    box-sizing: border-box;
    padding: 25px;
    z-index: 100;
    text-shadow: 5px 5px 10px black;
  }

  h2 {
    color: ${Colors.primary};
    font-size: 3rem;
    font-family: Poppins;
    font-weight: 800;
    letter-spacing: 4px;
    text-transform: uppercase;
    line-height: 1;
    margin-bottom: 0;
    opacity: 0;
    transition: 0.5s;
    transition-timing-function: linear;
    transform: translateY(-10px);

    @media screen and (max-width: 1024px) {
      opacity: 1;
    }
  }

  &:hover {
    .image {
      opacity: 1;
      transform: scale(1.1);
    }
    h2 {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const ImageWrapper = styled.div`
  opacity: 0.4;
  display: flex;
  transition: 0.3s ease-in-out;

  @media screen and (max-width: 1024px) {
    opacity: 0.8;
  }
`;
