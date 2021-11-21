import styled from "styled-components";

import Right from "./right";
import Left from "./left";

export default function AboutUs() {
  return (
    <SectionContainer>
      <InnerContainer>
        <Left />
        <Right />
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
`;

const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
