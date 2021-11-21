import styled from "styled-components";
import Image from "next/image";

import picture from "../../../public/images/header.jpg";
import { Colors } from "../../../assets/variables";

export default function Gallery() {
  const data = [
    {
      imgSrc: picture,
      alt: "",
    },
    {
      imgSrc: picture,
      alt: "",
    },
    {
      imgSrc: picture,
      alt: "",
    },
    {
      imgSrc: picture,
      alt: "",
    },
  ];
  console.log(data.imgSrc);
  return (
    <SectionContainer>
      <InnerContainer>
        <TitleWrapper>
          <h1>G</h1>
          <h1>A</h1>
          <h1>L</h1>
          <h1>L</h1>
          <h1>E</h1>
          <h1>R</h1>
          <h1>Y</h1>
          <h1>.</h1>
        </TitleWrapper>
        <TextWrapper>
          <p>Lorme tellus, ac nunc accumsan dolor sit ultricies.</p>
        </TextWrapper>
        <GalleryWrapper>
          {data.map((item, i) => {
            return (
              <ImageWrapper key={i}>
                <Image src={item.imgSrc} alt={item.alt} objectFit="cover" />
              </ImageWrapper>
            );
          })}
        </GalleryWrapper>
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
    &:nth-child(4),
    &:nth-child(8) {
      color: #caa82f;
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

const GalleryWrapper = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }

  @media only screen and (min-width: 2024px) {
    width: 100%;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  width: 12rem;
  height: 20rem;

  @media only screen and (min-width: 2024px) {
    width: 22%;
    height: 40rem;
  }
`;
