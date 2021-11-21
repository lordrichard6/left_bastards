import styled from "styled-components";

export default function Left() {
  return (
        <LeftContainer />
  );
}

const LeftContainer = styled.div`
  width: 50%;
  height: auto;
  background: linear-gradient(0deg, #caa82f4a, #caa82f4a),
    url("/images/header.jpg");
  background-position: center;
  background-size: cover;
`;