import styled from "styled-components";

import { Colors } from "../../../assets/variables";
import { TextNormal } from "../../../assets/variables/typography";
import Card from "./card";

export default function Group({ data }) {
  return (
    <SectionContainer>
      <FoundersWrapper>
        {data.map((item, i) => {
          return (
            <Card
              key={i}
              link={`/team/${item.slug}`}
              imgSrc={item.imgSrc}
              imgAlt={item.imgAlt}
              name={item.name}
            />
          );
        })}
      </FoundersWrapper>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FoundersWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 1rem;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

  @media only screen and (min-width: 2024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
