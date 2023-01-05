import styled from "styled-components";

export const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  width: 80%;
`;

export const ProductsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: var(--secondary-color) 1px solid;
  padding: 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ProductButton = styled.button`
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
`;


export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
`;

export const ProductTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 1rem 0;
`;

export const ProductDescription = styled.p`
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 1rem 0;
`;
