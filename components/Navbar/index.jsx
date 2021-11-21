import styled from 'styled-components'

import { FaBars } from "react-icons/fa";
import { Colors } from "../../assets/variables";
import Logo from './logo'
import NavItems from './navItems'

export default function Navbar({toggle}) {
    return (
        <Nav id='top'>
            <NavbarWrapper>
                <Logo />
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavItems />
            </NavbarWrapper>
        </Nav>
    )
}

const Nav = styled.nav`
  margin: 0;
  padding: 2px;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 1;
  background-color: ${Colors.primary};
`

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 390px) {
    transform: translate(-100%, 50%)!important;
    font-size: 1.8rem !important;
  }
  @media screen and (max-width: 810px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 2rem;
    cursor: pointer;
    color: ${Colors.secondary};
  }
`;