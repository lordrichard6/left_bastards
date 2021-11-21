import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/logo_gold.png";
import { Colors } from "../../../assets/variables";

export default function Sponsors() {
  const data = [
    {
      imgSrc: logo,
      alt: "",
      link: "",
    },
    {
      imgSrc: logo,
      alt: "",
      link: "",
    },
    {
      imgSrc: logo,
      alt: "",
      link: "",
    },
    {
      imgSrc: logo,
      alt: "",
      link: "",
    },
  ];

  return (
    <SectionContainer>
      <InnerContainer>
        <TitleWrapper>
          <h1>O</h1>
          <h1>U</h1>
          <h1>R</h1>
          <h1>S</h1>
          <h1>P</h1>
          <h1>O</h1>
          <h1>N</h1>
          <h1>S</h1>
          <h1>O</h1>
          <h1>R</h1>
          <h1>S</h1>
          <h1>.</h1>
        </TitleWrapper>
        <TextWrapper>
          <p>Lorme tellus, ac nunc accumsan dolor sit ultricies.</p>
        </TextWrapper>
        <SponsorsWrapper>
          {data.map((item, i) => {
            return (
              <Sponsor key={i}>
                <Image src={item.imgSrc} alt={item.alt} objectFit="cover" />
              </Sponsor>
            );
          })}
        </SponsorsWrapper>
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
  background: ${Colors.secondary};
  color: ${Colors.white};
`;

const InnerContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 2024px) {
    width: 60%;
  }
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
    &:nth-child(6),
    &:nth-child(9),
    &:nth-child(12) {
      color: ${Colors.primary};
    }
    &:nth-child(4) {
      margin-left: 1rem;
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

const SponsorsWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 764px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const Sponsor = styled.div`
  width: 10rem;
  height: auto;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  @media only screen and (max-width: 764px) {
    margin:1rem 0;
  }

  @media only screen and (min-width: 2024px) {
    width: 15rem;
  }

  &:hover {
    transform: scale(1.05) translateY(-0.5rem);
    box-shadow: 0 2.5rem 4rem rgba(${Colors.dark}, 0.5);
    z-index: 20;
  }
`;
