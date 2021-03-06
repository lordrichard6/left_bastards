import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import { Colors } from "../../assets/variables";
import logo from "../../public/logo_black.png";

export default function Logo() {
  return (
    <LogoContainer>
      <LogoWrapper>
        <Link href="/">
          <Image src={logo} alt="left bastards logo" />
        </Link>
      </LogoWrapper>
      <h1>left bastards</h1>
    </LogoContainer>
  );
}

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: ${Colors.secondary};
    font-size: 2.2rem;
    font-weight: 400;
    letter-spacing: -1px;
    margin: 0;

    @media screen and (max-width: 390px) {
      display: none;
    }
  }
`;

const LogoWrapper = styled.div`
  width: 60px;
  height: 60px;
  margin-right: 0.5rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;
