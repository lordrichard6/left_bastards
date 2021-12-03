import styled from "styled-components";

import { Colors } from "../../../assets/variables";
import { founders, members, page } from "../../../assets/data/members";
import Group from "./group";

export default function Team() {
  return (
    <SectionContainer>
      <InnerContainer>
        <TitleWrapper>
          {page.title.split("").map((item, i) => {
            return <h1 key={i}>{item}</h1>;
          })}
        </TitleWrapper>
        <TextWrapper>
          <p>{page.quote}</p>
        </TextWrapper>
        <Group title={page.group_01} quote={page.quote_01} data={founders} />
        <Group title={page.group_02} quote={page.quote_02} data={members} />
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
  color: ${Colors.white};
  background: ${Colors.secondary};
`;

const InnerContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;

  h1 {
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: 400;
    letter-spacing: 4px;
    margin-bottom: 1rem;

    @media only screen and (min-width: 2024px) {
      font-size: 3rem;
      font-weight: 500;
    }

    &:nth-child(1),
    &:nth-child(6),
    &:nth-child(7),
    &:nth-child(11),
    &:nth-child(12),
    &:nth-child(17) {
      color: ${Colors.primary};
    }
    &:nth-child(7),
    &:nth-child(12) {
      margin-left: 1rem;
    }
  }
`;

const TextWrapper = styled.div`
  width: 70%;
  text-align: center;
  margin-bottom: 2rem;

  @media only screen and (min-width: 2024px) {
    font-size: 1.5rem;
    font-weight: 400;
  }
`;
