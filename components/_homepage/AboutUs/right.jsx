import styled from "styled-components";
import Link from "next/link";

import { TiSocialYoutubeCircular } from "react-icons/ti";
import { RiInstagramFill, RiFacebookBoxLine } from "react-icons/ri";
import { Colors } from "../../../assets/variables";

export default function Right() {
  const data = [
    {
      link: "/",
      icon: <TiSocialYoutubeCircular />,
      alt: "",
    },
    {
      link: "/",
      icon: <RiInstagramFill />,
      alt: "",
    },
    {
      link: "/",
      icon: <RiFacebookBoxLine />,
      alt: "",
    },
  ];
  return (
        <RightContainer>
          <TitleWrapper>
            <h1>A</h1>
            <h1>B</h1>
            <h1>O</h1>
            <h1>U</h1>
            <h1>T</h1>
            <h1>U</h1>
            <h1>S</h1>
            <h1>.</h1>
          </TitleWrapper>
          <TextWrapper>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Ullamcorper sed duis tristique mattis mauris, vitae non
              adipiscing. Faucibus sem rhoncus amet aliquet feugiat. Et
              tincidunt molestie turpis ac sed.{" "}
            </p>
            <br />
            <p>
              Tortor nulla tincidunt ultricies bibendum sit pulvinar eu congue.
              Aliquet elementum adipiscing dui porttitor varius. Ligula lacus,
              commodo cursus a, ornare cursus ultricies faucibus. In non laoreet
              tempor tellus, semper in. Nibh sem blandit ut dolor turpis tempor
              quam quam felis.{" "}
            </p>
            <br />
            <p>Gravida tellus, ac nunc accumsan dolor sit ultricies.</p>
          </TextWrapper>
          <IconWrapper>
            {data.map((item, i) => {
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
`;

const TitleWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;

  h1 {
    font-size: 2.5rem;
    font-weight: 400;
    letter-spacing: 4px;
    margin-bottom: 1rem;
    /* border-bottom: 2px solid ${Colors.primary}; */

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
`;

const IconWrapper = styled.div`
  width: 80%;
  color: ${Colors.primary};
  font-size: 4rem;
  margin: 2rem 0;
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