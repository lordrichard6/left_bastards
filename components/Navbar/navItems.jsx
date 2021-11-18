import styled from "styled-components";
import Link from "next/link";

import { Colors } from "../../assets/variables";

export default function NavItems() {
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
    <NavMenu>
      {data.map((item, i) => {
        return (
          <NavItem key={i}>
            <Link href={item.href}>
              <Name>{item.name}</Name>
            </Link>
          </NavItem>
        );
      })}
    </NavMenu>
  );
}

const NavMenu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0;
  z-index: 2;

  @media screen and (max-width: 810px) {
    display: none;
  }
`;

const NavItem = styled.li`
  cursor: pointer;
  margin-top: 3px;
  margin: 0 1rem;
`;

const Name = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;
  &:hover {
    padding-top: 3px;
    transition: 0.1s ease-in-out;
    border-bottom: 3px solid ${Colors.secondary};
  }
`;
