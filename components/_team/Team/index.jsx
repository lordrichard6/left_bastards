import styled from "styled-components";

import { Colors } from "../../../assets/variables";
import { TitleSection, TextNormal } from "../../../assets/variables/typography";
import { members, page } from "../../../assets/data/members";
import Group from "./group";

export default function Team() {
  return (
    <SectionContainer>
      <InnerContainer>
        <TitleSection>
          {page.title.split("").map((item, i) => {
            return <h1 key={i}>{item}</h1>;
          })}
        </TitleSection>
        <TextWrapper>
          <TextNormal>{page.quote}</TextNormal>
        </TextWrapper>
        {/* <Group title={page.group_01} quote={page.quote_01} data={founders} /> */}
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

const TextWrapper = styled.div`
  width: 70%;
  text-align: center;
  margin-bottom: 1rem;

  @media only screen and (min-width: 2024px) {
    font-size: 1.5rem;
    font-weight: 400;
  }
`;
