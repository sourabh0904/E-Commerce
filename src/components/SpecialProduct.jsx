import React from "react";
import styled from "styled-components";
import { useCart } from "../CartContext";

const SpecialProductsContainer = styled.div`
  background-color: #f9f9f9;
  padding: 60px 20px;
  margin: 50px 0;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  justify-items: center;
`;

const ProductCard = styled.div`
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  max-width: 300px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 12px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 20px;
`;

const ProductName = styled.h2`
  font-size: 1.5rem;
  color: #333;
  font-weight: 700;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.4;
  margin-bottom: 15px;
`;

const ProductPrice = styled.p`
  font-size: 1.5rem;
  color: #fddc5c;
  font-weight: bold;
  margin-bottom: 20px;
`;

const BuyButton = styled.button`
  background-color: #fddc5c;
  color: black;
  padding: 12px 25px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #fbc02d;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const SpecialProducts = ({ products }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <SpecialProductsContainer>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.name}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>{product.price}</ProductPrice>
              <BuyButton>Buy Now</BuyButton>
              <BuyButton onClick={() => handleAddToCart(product)}>
                Add to Cart
              </BuyButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>
    </SpecialProductsContainer>
  );
};

export default SpecialProducts;
