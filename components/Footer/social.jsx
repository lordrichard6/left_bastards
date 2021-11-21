import styled from "styled-components";
import Image from "next/image";

import breakpoint from "../../assets/variables/breakpoints";
import { Colors, TitleSection } from "../../assets/variables";
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
      <TitleSection className="margin">Social</TitleSection>
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
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .margin {
    margin-bottom: 1rem;
  }

  @media screen and (${breakpoint.device.mobile}) {
    margin: 1rem 0;
  }
`;
const IconWrapper = styled.div`
  color: ${Colors.secundary};
  font-size: 2.2rem;

  @media screen and (${breakpoint.device.tablet}) {
    display: flex;
    justify-content: center;
  }
  a {
    margin: 0 1rem;
    &:hover {
      color: ${Colors.white};
      transition: 0.2s ease-in-out;
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100px;
  height: 90px;
  margin-top: 1rem;

  @media screen and (${breakpoint.device.mobile}) {
    width: 150px;
    height: 130px;
  }
  @media screen and (${breakpoint.device.desktop}) {
    width: 200px;
    height: 170px;
  }
`;
