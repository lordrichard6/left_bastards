import styled from "styled-components";

import { TitleBig } from "../../../assets/variables/typography";
import { SectionContainer } from "../../../assets/variables";
import { header } from "../../../assets/data/home";

export default function Header() {
  return (
    <SectionContainer image={header.image}>
      <Slogan>{header.slogan}</Slogan>
      <TitleBig>{header.title}</TitleBig>
    </SectionContainer>
  );
}

const Slogan = styled.h2`
  color: #c4c4c4;
  font-size: 2rem;
  font-weight: 800;
  font-style: normal;
  line-height: 100%;
  letter-spacing: 0.2em;
  margin: 2px;
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);

  @media only screen and (max-width: 768px) {
    text-align: center;
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
  @media only screen and (min-width: 2024px) {
    font-size: 3rem;
    text-align: center;
  }
`;
