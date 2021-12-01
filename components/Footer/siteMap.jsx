import styled from "styled-components";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";

import { Colors, TitleFooter } from "../../assets/variables";

export default function SiteMap() {
  const data = [
    {
      href: "/",
      item: "Home",
    },
    {
      href: "/team",
      item: "Team",
    },
  ];

  return (
    <FooterSection>
      <TitleFooter color={Colors.secondary}>Sitemap</TitleFooter>
      <LinkScroll to="top" smooth={true} duration={600} spy={true}>
        <h3>Go to Top</h3>
      </LinkScroll>
      {data.map((item, i) => {
        return (
          <Link key={i} href={item.href} passHref>
            <h3>{item.item}</h3>
          </Link>
        );
      })}
    </FooterSection>
  );
}

const FooterSection = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 764px) {
    width: 100%;
    order: 3;
    margin-top: 1rem;
  }

  h3 {
    font-weight: 400;
    margin: 0.4rem 0;
    cursor: pointer;
    letter-spacing: 2px;

    @media only screen and (min-width: 2024px) {
      font-size: 1.6rem;
    }

    &:hover {
      color: ${Colors.white};
      transition: 0.3s ease-in-out;
    }
  }
`;
