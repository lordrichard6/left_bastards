import styled from "styled-components";
// import Image from "next/image";
import Link from "next/link";

// import { FaTimes } from "react-icons/fa";
import { Colors } from "../../assets/variables";

export default function Sidebar({ isOpen, toggle }) {
  const data = [
    {
      href: "/",
      name: "home",
    },
    {
      href: "/team",
      name: "team",
    },
  ];
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      {/* <Icon onClick={toggle}>
          <CloseIcon />
        </Icon> */}
      <SidebarWrapper>
        <SidebarMenu>
          {data.map((item, i) => {
            return (
              <NavItem key={i} onClick={toggle}>
                <Link href={item.href}>
                  <Name>{item.name}</Name>
                </Link>
              </NavItem>
            );
          })}
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 100;
  width: 80%;
  height: 100vh;
  background: ${Colors.primary};
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100" : "0")};
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

//   const Icon = styled.div`
//     position: absolute;
//     top: 1.2rem;
//     right: 1.5rem;
//     background: transparent;
//     font-size: 2rem;
//     cursor: pointer;
//     outline: none;
//   `;

//   const CloseIcon = styled(FaTimes)`
//     color: ${Colors.secondary};
//   `;

const SidebarWrapper = styled.div``;

const SidebarMenu = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  list-style: none;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  list-style: none;
  margin: 1rem 0;
  cursor: pointer;
`;

const Name = styled.h2`
  transition: 0.2s ease-in-out;
  font-size: 2rem;
  font-weight: 400;
  z-index: 200;
  color: ${Colors.secondary};

  &:hover {
    transition: 0.2s ease-in-out;
  }
`;
