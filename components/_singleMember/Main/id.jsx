import styled from "styled-components";

import { FaFacebookSquare } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import Button from './button'

export default function Id({origin, age, living, hobbies, instagram, facebook}) {
  return (
      <Container>
        <LeftWrapper>
            <Button icon={<ImInstagram />} link={instagram} />
            <Button icon={<FaFacebookSquare />} link={facebook} />
        </LeftWrapper>
        <RightWrapper>
          <h1>ID</h1>
          <div>
            <h2>Origem:</h2>
            <h2>{origin}</h2>
          </div>
          <div>
            <h2>idade:</h2>
            <h2>{age}</h2>
          </div>
          <div>
            <h2>Residencia:</h2>
            <h2>{living}</h2>
          </div>
          <div>
            <h2>Hobbies:</h2>
            <h2>{hobbies}</h2>
          </div>
        </RightWrapper>
      </Container>
  );
}

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
`;

const LeftWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20%;
`;

const RightWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  h1 {
      font-size: 2.5rem;
  }

  div {
      width: 100%;
      display: flex;
      flex-direction: row;
      margin: 0.2rem 0;
      h2 {
          width: 50%;
      }
  }
`;