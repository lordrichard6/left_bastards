import styled from "styled-components";

import { Colors } from "../../../assets/variables";
import { galleryPictures, gallery } from "../../../assets/data/home";
import { TitleSection, TextNormal } from "../../../assets/variables/typography";
import ImageSlider from "./imageSlider";

export default function Gallery() {
  return (
    <SectionContainer>
      <InnerContainer>
        <TitleSection>
          {gallery.title.split("").map((item, i) => {
            return <h1 key={i}>{item}</h1>;
          })}
        </TitleSection>
        <TextWrapper>
          <TextNormal>Lorme tellus, ac nunc accumsan dolor sit ultricies.</TextNormal>
        </TextWrapper>
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

const TextWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;
