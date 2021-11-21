import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import { BsYoutube } from "react-icons/bs";
import picture from "../../../public/images/header.jpg";
import { Colors } from "../../../assets/variables";

export default function Videos() {
  return (
    <SectionContainer>
      <InnerContainer>
        <TitleWrapper>
          <h1>V</h1>
          <h1>I</h1>
          <h1>D</h1>
          <h1>E</h1>
          <h1>O</h1>
          <h1>S</h1>
          <h1>.</h1>
        </TitleWrapper>
        <TextWrapper>
          <p>Lorme tellus, ac nunc accumsan dolor sit ultricies.</p>
        </TextWrapper>
        <VideoWrapper>
          <Image src={picture} alt="" objectFit="cover" />
        </VideoWrapper>
        <Subscribe>
          <p>Subscribe us on</p>
          <p>youtube</p>
          <Link href="http://youtube.com" target="_blank">
            <BsYoutube />
          </Link>
        </Subscribe>
      </InnerContainer>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6rem 0;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8)
    ),
    url("/images/header.jpg");
  background-size: cover;
`;

const InnerContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;

  h1 {
    font-size: 2.5rem;
    font-weight: 400;
    letter-spacing: 4px;
    margin-bottom: 1rem;

    @media only screen and (min-width: 2024px) {
      font-size: 3rem;
      font-weight: 500;
    }

    &:nth-child(3),
    &:nth-child(7) {
      color: ${Colors.primary};
    }
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;

  @media only screen and (min-width: 2024px) {
    font-size: 1.5rem;
    font-weight: 400;
  }
`;

const VideoWrapper = styled.div`
  display: flex;
  width: 80%;
  height: 30rem;

  @media only screen and (max-width: 764px) {
    width: 100%;
    height: 20rem;
  }

  @media only screen and (min-width: 2024px) {
    width: 60%;
    height: 50rem;
  }
`;

const Subscribe = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;

  @media only screen and (max-width: 764px) {
    flex-direction: column;
  }

  p {
    letter-spacing: 2px;
    font-size: 1.5rem;

    @media only screen and (min-width: 2024px) {
      font-size: 2rem;
    }

    &:nth-child(2) {
      color: ${Colors.primary};
      text-transform: uppercase;
      margin-left: 0.6rem;
    }
  }
  svg {
    font-size: 2.5rem;
    color: ${Colors.primary};
    margin-left: 0.4rem;
    transition: 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.05) translateY(-0.5rem);
      box-shadow: 0 2.5rem 4rem rgba(${Colors.dark}, 0.5);
      z-index: 20;
    }

    @media only screen and (min-width: 2024px) {
      font-size: 3rem;
    }
  }
`;
