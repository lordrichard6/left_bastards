import styled from "styled-components";
import Image from "next/image";

import { Colors } from "../../../assets/variables";
import { TitleBig } from "../../../assets/variables/typography";
import { HeaderContainer } from "../../../assets/variables";
import { members } from "../../../assets/data/members";

export default function Header() {
  return (
    <HeaderContainer image={members[0].carImg} height='40rem'>
      <ImageWrapper>
        <Image
          src={members[0].imgSrc}
          layout="fill"
          objectPosition="center"
          objectFit="cover"
          alt={members[0].imgAlt}
        />
      </ImageWrapper>
    <TitleWrapper>
      <TitleBig>{members[0].name}</TitleBig>
    </TitleWrapper>
      
    </HeaderContainer>
  );
}

const ImageWrapper = styled.div`
  position: absolute;
  width: 30rem;
  height: 30rem;
  bottom: 0;
  left: 0;
  border-radius: 1000px;
  border: 10px solid ${Colors.dark};
  transform: translate(40%, 50%);
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
  }
`;
