import styled from "styled-components";
import { Colors } from "./index";

export const TitleBig = styled.h1`
  font-size: 6rem;
  font-family: Poppins;
  font-weight: 800;
  font-style: normal;
  line-height: 100%;
  letter-spacing: 0.2em;
  margin: 0;
  text-transform: uppercase;
  color: ${Colors.primary};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  animation: textshadow 8s infinite alternate;

  @media screen and (max-width: 768px) {
    font-size: 4rem;
    letter-spacing: 0;
    text-align: center;
  }
  @media screen and (min-width: 2024px) {
    font-size: 8rem;
    letter-spacing: 0.3em;
  }

  @keyframes textshadow {
    0% {
      text-shadow: 1px 1px 0px #333333a7;
    }
    10% {
      text-shadow: 3px 3px 2px #333333a7;
    }
    20% {
      text-shadow: 9px 10px 6px #333333a7;
    }
    40% {
      text-shadow: 10px 15px 6px #333333a7;
    }
    60% {
      text-shadow: 0px 10px 4px #333333a7;
    }
    80% {
      text-shadow: -10px 8px 3px #333333a7;
    }
    100% {
      text-shadow: 1px 5px 1px #333333a7;
    }
  }
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: row;

  h1 {
    font-size: 2.5rem;
    font-weight: 400;
    letter-spacing: 4px;
    margin-bottom: 1rem;
    text-transform: uppercase;
    white-space: pre-wrap;
    text-shadow: 1px 2px 3px #00000081;

    &:nth-child(3n) {
      color: ${Colors.primary};
    }

    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }

    @media only screen and (min-width: 2024px) {
      font-size: 3rem;
      font-weight: 500;
    }
  }
`;

export const TitleSecondary = styled.h2`
  width: 100%;
  font-size: 2.5rem;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    /* font-size: 1rem; */
  }

  @media only screen and (min-width: 2024px) {
    font-size: 3.5rem;
  }
`;

export const TextNormal = styled.p`
  font-size: 1.2rem;
  white-space: pre-line;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }

  @media only screen and (min-width: 2024px) {
    font-size: 1.5rem;
  }
`;
