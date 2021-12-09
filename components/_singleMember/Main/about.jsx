import styled from "styled-components";
import Image from "next/image";

import { Colors } from "../../../assets/variables";
import {
  TextNormal,
  TitleSecondary,
} from "../../../assets/variables/typography";

export default function About({ about_imgSrc, about_imgAlt }) {
  return (
    <Container>
      <LeftWrapper>
        <TitleSecondary>Sobre Mim</TitleSecondary>
        <TextNormal>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, quos!
          Sed aperiam perspiciatis culpa commodi iure? Cumque porro maiores quas
          esse dolorum atque suscipit quam, libero accusamus? Illum, ex nisi.{" "}
        </TextNormal>
      </LeftWrapper>
      <RightWrapper>
        <ImageWrapper>
          <Image
            src={about_imgSrc}
            objectFit="cover"
            objectPosition="center"
            alt={about_imgAlt}
          />
        </ImageWrapper>
      </RightWrapper>
    </Container>
  );
}
const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  margin: 2rem 0;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }

  @media only screen and (min-width: 2024px) {
    width: 60%;
  }
`;

const LeftWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-right: 10px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-right: 0;
  }
`;

const RightWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ImageWrapper = styled.div`
  height: 20rem;
  display: flex;
  flex-direction: column;
  border: 2px solid ${Colors.primary};
  border-radius: 4px;
  margin-left: 10px;

  @media screen and (max-width: 768px) {
    margin-left: 0;
  }

  @media only screen and (min-width: 2024px) {
    height: 30rem;
  }
`;
