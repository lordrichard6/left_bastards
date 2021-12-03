import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import { BsYoutube } from "react-icons/bs";
import { Colors } from "../../../assets/variables";
import { TitleSection, TextNormal } from "../../../assets/variables/typography";

export default function Videos() {
  const data = {
    title: "videos.",
    quote: "Lorme tellus, ac nunc accumsan dolor sit ultricies.",
    text_01: "Subscribe us on",
    text_02: "youtube",
    YTlink: "http://youtube.com",
    icon: <BsYoutube />,
  };

  return (
    <SectionContainer>
      <InnerContainer>
        <TitleSectionAlt>
          {data.title.split("").map((item, i) => {
            return <h1 key={i}>{item}</h1>;
          })}
        </TitleSectionAlt>
        <TextWrapper>
          <TextNormal>{data.quote}</TextNormal>
        </TextWrapper>
        <VideoWrapper>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/woVBQSJ28Y4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoWrapper>
        <Subscribe>
          <p>{data.text_01}</p>
          <p>{data.text_02}</p>
          <Link href={data.YTlink} target="_blank">
            {data.icon}
          </Link>
        </Subscribe>
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
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8)
    ),
    url("/images/header.jpg");
  background-size: cover;
`;

const InnerContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleSectionAlt = styled(TitleSection)`
  h1 {
    &:nth-child(3),
    &:nth-child(7) {
      color: ${Colors.primary};
    }
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;

const VideoWrapper = styled.div`
  display: flex;
  width: 80%;
  height: 35rem;

  @media only screen and (max-width: 764px) {
    height: 25rem;
  }

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }

  @media only screen and (min-width: 2024px) {
    width: 60%;
    height: 50rem;
  }
`;

const Subscribe = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;

  @media only screen and (max-width: 764px) {
    flex-direction: column;
  }

  p {
    letter-spacing: 2px;
    font-size: 1.5rem;

    @media only screen and (min-width: 2024px) {
      font-size: 2rem;
    }

    &:nth-child(2) {
      color: ${Colors.primary};
      text-transform: uppercase;
      margin-left: 0.6rem;
    }
  }
  svg {
    font-size: 2.5rem;
    color: ${Colors.primary};
    margin-left: 0.4rem;
    transition: 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.05) translateY(-0.5rem);
      box-shadow: 0 2.5rem 4rem rgba(${Colors.dark}, 0.5);
      z-index: 20;
    }

    @media only screen and (min-width: 2024px) {
      font-size: 3rem;
    }
  }
`;
