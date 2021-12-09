import styled from "styled-components";

import { Colors } from "../../../assets/variables";

export default function Button({icon, link}) {
  return (
    <Container>
      Follow
      <a href={link} class="icon">
        {icon}
      </a>
    </Container>
  );
}

const Container = styled.button`
  background: ${Colors.primary};
  color: ${Colors.secondary};
  font-family: inherit;
  padding: 0.35em;
  padding-left: 1.2em;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 0.4rem;
  border: none;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  /* box-shadow: inset 0 0 1.6em -0.6em ${Colors.primary}; */
  overflow: hidden;
  position: relative;
  height: 3rem;
  padding-right: 3.3em;
  cursor: pointer;
  margin: 0.2rem 0;

  .icon {
    background: ${Colors.secondary};
    margin-left: 1em;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.2rem;
    width: 2.2rem;
    border-radius: 0.4rem;
    right: 0.3em;
    transition: all 0.3s;
  }

  :hover .icon {
    width: calc(100% - 0.6em);
  }

  .icon svg {
    /* width: 1.1em; */
    font-size: 1.8rem;
    transition: transform 0.3s;
    color: ${Colors.primary};
  }

  :hover .icon svg {
    transform: translateX(0.1em);
  }

  :active .icon {
    transform: scale(0.95);
  }
`;
