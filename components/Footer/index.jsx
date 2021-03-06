import styled from "styled-components";

import { Colors, TextSmall } from "../../assets/variables";

// import Contact from "./contact";
import Social from "./social";
import Sitemap from "./siteMap";
import Contact from "./contact";

export default function Footer() {
  return (
    <SectionContainer>
      <InnerContainer>
        <GroupContainer>
          <Sitemap />
          <Social />
          <Contact />
        </GroupContainer>
        <Copyright>
          <TextSmall>
            Copyright &copy; {new Date().getFullYear()} Left Bastards.
          </TextSmall>
          <TextSmall>All rights reserved.</TextSmall>
        </Copyright>
      </InnerContainer>
    </SectionContainer>
  );
}

const SectionContainer = styled.footer`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: ${Colors.primary};
  color: ${Colors.secondary};
  font-family: Poppins;
`;

const InnerContainer = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  z-index: 1;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }

  @media screen and (min-width: 2024px) {
    width: 60%;
  }
`;

const GroupContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const Copyright = styled.div`
  /* border-top: 1px solid ; */
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;
