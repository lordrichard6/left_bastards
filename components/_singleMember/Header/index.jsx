import styled from "styled-components";
import Image from "next/image";

import { Colors } from "../../../assets/variables";
import { TitleBig } from "../../../assets/variables/typography";
import { HeaderContainer } from "../../../assets/variables";

export default function Header({carImg, imgSrc, imgAlt, name}) {
  return (
    <HeaderContainer image={carImg} height='30rem'>
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
  h1 {
    letter-spacing: 4px;
    font-size: 3rem;
  }
`;
