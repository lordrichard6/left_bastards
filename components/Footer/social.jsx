import styled from "styled-components";
import Image from "next/image";

import { Colors, TitleFooter } from "../../assets/variables";
import { ImInstagram, ImFacebook2, ImYoutube } from "react-icons/im";
import logo from "../../public/logo_black.png";

export default function Social() {
  const data = [
    {
      href: "/",
      icon: <ImInstagram />,
    },
    {
      href: "/",
      icon: <ImFacebook2 />,
    },
    {
      href: "/",
      icon: <ImYoutube />,
    },
  ];

  return (
    <FooterSection>
      <TitleFooter color={Colors.secondary} className="margin">Social</TitleFooter>
      <IconWrapper>
        {data.map((item, i) => {
          return (
            <a key={i} href={item.href}>
              {item.icon}
            </a>
          );
        })}
      </IconWrapper>
      <LogoContainer>
        <Image src={logo} alt="logo left bastards" />
      </LogoContainer>
    </FooterSection>
  );
}

const FooterSection = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .margin {
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 768px) {
    margin: 1rem 0;
  }
`;
const IconWrapper = styled.div`
  color: ${Colors.secondary};
  font-size: 2.2rem;

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
  }
  a {
    margin: 0 1rem;
    svg {
      transition: 0.3s ease-in-out;
      cursor: pointer;

      &:hover {
        color: ${Colors.white};
        transform: scale(1.05) translateY(-0.5rem);
        box-shadow: 0 2.5rem 4rem rgba(${Colors.dark}, 0.5);
        z-index: 20;
      }
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100px;
  height: 90px;
  margin-top: 1rem;

  @media screen and (max-width: 768px) {
    width: 150px;
    height: 130px;
  }
  @media screen and (min-width: 2024px) {
    width: 200px;
    height: 170px;
  }
`;
