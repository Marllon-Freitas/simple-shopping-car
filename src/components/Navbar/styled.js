import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  background-color: var(--primary-color);
  color: var(--secondary-color);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: var(--secondary-color) 1px solid ;
  /* add a beatful box shadow */
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
`;

export const MenuItem = styled.li`
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  align-content: center;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  padding: 0.5rem 1rem;
  border: var(--primary-color) 1px solid;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  svg {
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: var(--primary-color);
    color: var(--secondary-color);
    border: var(--secondary-color) 1px solid;
  }

  &:focus {
    outline: none;
  }

  p {
    display: inline-block;
  }
`;

