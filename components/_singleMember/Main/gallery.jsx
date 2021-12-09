import styled from "styled-components";

import { galleryPictures } from "../../../assets/data/home";
import ImageSlider from "../../_homepage/Gallery/imageSlider";

export default function Gallery() {
  return (
    <SectionContainer>
      <InnerContainer>
        <h1>galeria</h1>
        <ImageSlider slides={galleryPictures} />
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
  margin: 2rem 0;
`;

const InnerContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    text-align: center;
    width: 100%;
    font-size: 2.5rem;
    text-transform: uppercase;
    margin-bottom: 1.8rem;
  }
`;
