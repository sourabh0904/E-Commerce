import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import styled from "styled-components";

const ProductSection = ({ products }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <SectionContainer>
      <ProductGrid>
        {products.map((product, index) => (
          <ProductCard key={index}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>{product.price}</ProductPrice>
              <AddToCartButton onClick={() => addToCart(product)}>
                Add to Cart
              </AddToCartButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>
    </SectionContainer>
  );
};

export default ProductSection;

// Styled Components
const SectionContainer = styled.section`
  padding: 20px;
  background-color: #f5f5f5;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const ProductCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

const ProductInfo = styled.div`
  padding: 10px 0;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  color: #888;
`;

const AddToCartButton = styled.button`
  background-color: #fddc5c;
  color: black;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #fbc02d;
  }
`;
