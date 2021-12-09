import styled from "styled-components";
import Image from "next/image";

import { members } from "../../../assets/data/members";
import { Colors } from "../../../assets/variables";

export default function Car({ imgSrc, imgAlt }) {
  return (
    <Container>
      <LeftWrapper>
        <ImageWrapper>
          <Image
            src={imgSrc}
            objectFit="cover"
            objectPosition="center"
            alt={imgAlt}
          />
        </ImageWrapper>
      </LeftWrapper>
      <RightWrapper>
        <h1>Engine</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, quos!
          Sed aperiam perspiciatis culpa commodi iure? Cumque porro maiores quas
          esse dolorum atque suscipit quam, libero accusamus? Illum, ex nisi.{" "}
        </p>
      </RightWrapper>
    </Container>
  );
}
const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  margin: 2rem 0;
`;

const RightWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 10px;

  h1 {
    width: 100%;
    font-size: 2.5rem;
    text-transform: uppercase;
  }
`;

const LeftWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;

const ImageWrapper = styled.div`
  height: 20rem;
  display: flex;
  flex-direction: column;
  border: 2px solid ${Colors.primary};
  border-radius: 4px;
`;