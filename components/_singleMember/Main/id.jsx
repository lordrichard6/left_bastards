import styled from "styled-components";

import { FaFacebookSquare } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import Button from "./button";
import { TitleSecondary } from "../../../assets/variables/typography";

export default function Id({
  id_origin,
  id_age,
  id_living,
  id_hobbies,
  instagram,
  facebook,
}) {
  return (
    <Container>
      <LeftWrapper>
        <Button icon={<ImInstagram />} link={instagram} />
        <Button icon={<FaFacebookSquare />} link={facebook} />
      </LeftWrapper>
      <RightWrapper>
        <TitleSecondary>ID</TitleSecondary>
        <div>
          <h2>Origem:</h2>
          <h2>{id_origin}</h2>
        </div>
        <div>
          <h2>idade:</h2>
          <h2>{id_age}</h2>
        </div>
        <div>
          <h2>Residencia:</h2>
          <h2>{id_living}</h2>
        </div>
        <div>
          <h2>Hobbies:</h2>
          <h2>{id_hobbies}</h2>
        </div>
      </RightWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 8rem;
  }
`;

const LeftWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const RightWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    margin: 1.5rem 0;
    width: 100%;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 0.2rem 0;

    h2 {
      width: 50%;

      @media only screen and (min-width: 2024px) {
        font-size: 2rem;
      }
    }
  }
`;
