import styled from "styled-components";

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  padding: 20px;
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const CartTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: var(--secondary-color);
`;

export const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid var(--secondary-color);
  border-radius: 5px;
`;

export const CartItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 20px;
`;

export const CartItemInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: var(--secondary-color);

  .product-name {
    display: flex;
    align-items: center;
    width: 20rem;
    max-width: 100%;
  }

  .product-title {
    font-size: 0.7rem;
    font-weight: 700;
    margin-bottom: 10px;

    button {
      background-color: transparent;
      border: none;
      color: var(--secondary-color);
      font-size: 1rem;
      font-weight: 400;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .product-price {
    display: flex;
    font-size: 1rem;
    font-weight: 400;

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      flex-direction: column;
    }
  }

  .product-quantity {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      margin: 0 10px;
      border: 1px solid var(--secondary-color);
      border-radius: 5px;
      background-color: transparent;
      color: var(--secondary-color);
      font-size: 1rem;
      font-weight: 400;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        background-color: var(--secondary-color);
        color: var(--primary-color);
      }
    }
  }

  .product-price {
    display: flex;
    font-size: 1rem;
    font-weight: 400;

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      flex-direction: column;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CartEmpty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--secondary-color);
  }
  a {
    font-size: 1rem;
    font-weight: 700;
    color: var(--secondary-color);
    text-decoration: none;
    margin-left: 10px;
    transition: all 1s ease-in-out;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const CartItemHeader = styled.h3`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--secondary-color);
`;

export const CartBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 20px;
  border: 1px solid var(--secondary-color);
  border-radius: 5px;
  max-width: 1200px;

  .cart-bottom-checkout {
    width: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .cart-bottom-checkout-total {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      a {
        background-color: transparent;
        border: none;
        color: var(--secondary-color);
        font-size: 1rem;
        font-weight: 400;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
      }
      a:hover {
        text-decoration: underline;
      }
    }

    & > button {
      width: 100%;
      justify-content: center;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    .cart-bottom-checkout {
      width: 100%;
    }
  }
`;
