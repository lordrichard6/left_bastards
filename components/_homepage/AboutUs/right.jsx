import styled from "styled-components";
import Link from "next/link";

import { Colors } from "../../../assets/variables";
import { social, about } from "../../../assets/data/home";
import { TitleSection, TextNormal } from "../../../assets/variables/typography";

export default function Right() {
  return (
    <RightContainer>
      <TitleSectionAlt>
        {about.title.split("").map((item, i) => {
          return <h1 key={i}>{item}</h1>;
        })}
      </TitleSectionAlt>
      <TextWrapper>
        <TextNormal>{about.text}</TextNormal>
      </TextWrapper>
      <IconWrapper>
        {social.map((item, i) => {
          return (
            <Link key={i} href={item.link}>
              {item.icon}
            </Link>
          );
        })}
      </IconWrapper>
    </RightContainer>
  );
}

const RightContainer = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 2rem;
  padding-top: 6rem;
  padding-bottom: 6rem;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-right: 0;
    text-align: center;
  }
`;

const TitleSectionAlt = styled(TitleSection)`
  width: 80%;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }

  h1 {
    &:nth-child(5) {
      margin-right: 1rem;
    }
    &:nth-child(3),
    &:nth-child(6),
    &:nth-child(8) {
      color: #caa82f;
    }
  }
`;

const TextWrapper = styled.div`
  width: 80%;

  @media only screen and (min-width: 2024px) {
    padding-right: 20%;
  }
`;

const IconWrapper = styled.div`
  width: 80%;
  color: ${Colors.primary};
  font-size: 4rem;
  margin: 2rem 0;

  @media only screen and (min-width: 2024px) {
    font-size: 5rem;
  }

  svg {
    transition: 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.05) translateY(-0.5rem);
      box-shadow: 0 2.5rem 4rem rgba(${Colors.dark}, 0.5);
      z-index: 20;
    }
  }
`;
