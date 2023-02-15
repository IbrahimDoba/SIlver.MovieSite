import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

 const NavContainer = styled.nav`
  display: flex;

  height: 100px;
  width: 99vw;
  overflow-x: hidden;
  overflow: hidden;

  @media screen and (max-width:900px) {
    height: 60px;
  }
`;
 const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-bottom: 2px solid gray;
`;
 const NavLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
`;

 
 const NavLogo = styled(Link)`
  font-size: 30px;
  color: white;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    transition: all 0.5s ease;
    color: #01bf71;
  }
  @media screen and (max-width:900px) {
    font-size: 20px;
  }
`;
 const NavRight = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
`;

 const NavItem = styled.div``;

 const NavLink = styled(Link)`
  font-size: 20px;
  cursor: pointer;
  color: white;
  text-decoration: none;

  &:hover {
    transition: all 0.5s ease;
    color: #01bf71;
  }
  &.active {
    border-bottom: 1px solid #01bf71;
    color: #01bf71;
  }
  @media screen and (max-width:900px) {
    font-size: 13px;
  }
`;

const Navbar = () => {
  return (
    <NavContainer>
      <NavbarWrapper>
        <NavLeft>
          <NavLogo to="/">SILVER.</NavLogo>
        </NavLeft>

        <NavRight>
          <NavItem>
            <NavLink to="/movies">Movies</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/series">Series</NavLink>
          </NavItem>
        </NavRight>
      </NavbarWrapper>
    </NavContainer>
  );
};

export default Navbar;
