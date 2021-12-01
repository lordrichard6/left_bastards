import styled from "styled-components";

import { Colors } from "../../../assets/variables";
import { TextNormal } from "../../../assets/variables/typography";
import Card from "./card";

export default function Group({ title, quote, data }) {
  return (
    <SectionContainer>
      <TeamTitle>{title}</TeamTitle>
      <TextNormal>{quote}</TextNormal>
      <FoundersWrapper>
        {data.map((item, i) => {
          return (
            <Card
              key={i}
              link={item.link}
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

const TeamTitle = styled.h1`
  color: ${Colors.primary};
  font-weight: 400;
  letter-spacing: 6px;
  margin-bottom: 0.5rem;
`;

const FoundersWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 1rem;
`;
