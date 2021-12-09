import styled from "styled-components";
import Image from "next/image";

import { Colors } from "../../../assets/variables";
import { TitleBig } from "../../../assets/variables/typography";
import { HeaderContainer } from "../../../assets/variables";

export default function Header({ carImg, imgSrc, imgAlt, name }) {
  return (
    <HeaderContainer image={carImg} height="50vh">
      <ImageWrapper>
        <Image
          src={imgSrc}
          layout="fill"
          objectPosition="center"
          objectFit="cover"
          alt={imgAlt}
        />
      </ImageWrapper>
      <TitleWrapper>
        <TitleBig>{name}</TitleBig>
      </TitleWrapper>
    </HeaderContainer>
  );
}

const ImageWrapper = styled.div`
  position: absolute;
  width: 25rem;
  height: 25rem;
  bottom: 0;
  left: 0;
  border-radius: 1000px;
  border: 10px solid ${Colors.dark};
  transform: translate(50%, 50%);
  z-index: 30;

  @media screen and (max-width: 768px) {
    width: 100vw;
    transform: translate(0, 50%);
  }

  @media screen and (min-width: 2024px) {
    width: 35rem;
    height: 35rem;
  }

  img {
    border-radius: 1000px;
  }
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: 10rem;

  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
    margin-right: 0;
  }

  @media screen and (min-width: 2024px) {
    width: 80%;
    margin-bottom: 2rem;
  }

  h1 {
    letter-spacing: 4px;
    line-height: 5rem;
    font-size: 3rem;

    @media screen and (min-width: 2024px) {
      font-size: 6rem;
    }
  }
`;
