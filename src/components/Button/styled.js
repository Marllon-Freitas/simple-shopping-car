import styled from "styled-components";

export const ButtonComponent = styled.button`
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
  text-align: center;

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
