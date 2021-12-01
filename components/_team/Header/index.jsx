import styled from "styled-components";
import Image from "next/image";

import { TitleBig } from "../../../assets/variables/typography";
import { SectionContainer } from "../../../assets/variables";
import { header } from "../../../assets/data/members";

export default function Header() {
  return (
    <SectionContainer image={header.image}>
      <ImageWrapper>
        <Image src={header.logo} alt="logo left bastards" />
      </ImageWrapper>
      <TitleBig>{header.title}</TitleBig>
    </SectionContainer>
  );
}

const ImageWrapper = styled.div`
  position: absolute;
  width: 40rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.4;
`;
