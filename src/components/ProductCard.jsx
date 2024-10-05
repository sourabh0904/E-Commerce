import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 240px;
  text-align: center;
  transition: transform 0.3s;
  img {
    max-width: 100%;
    border-radius: 10px;
  }
  h3 {
    font-size: 1.5rem;
    color: #333;
  }
  p {
    font-size: 1.2rem;
    color: #777;
  }
  &:hover {
    transform: translateY(-5px);
  }
`;

const ProductCard = ({ product }) => (
  <Card>
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>{product.price}</p>
  </Card>
);

export default ProductCard;
