import React from "react";
import styled from "styled-components";

const CategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 0 20px;
`;

const CategoryButton = styled.button`
  background-color: #fddc5c;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #fbc02d;
  }
  &:active {
    transform: scale(0.95);
  }
`;

const Categories = ({ handleCategoryClick }) => (
  <CategoriesContainer>
    <CategoryButton onClick={() => handleCategoryClick("all")}>
      All Products
    </CategoryButton>
    <CategoryButton onClick={() => handleCategoryClick("necklaces")}>
      Necklaces
    </CategoryButton>
    <CategoryButton onClick={() => handleCategoryClick("rings")}>
      Rings
    </CategoryButton>
    <CategoryButton onClick={() => handleCategoryClick("bracelets")}>
      Bracelets
    </CategoryButton>
    <CategoryButton onClick={() => handleCategoryClick("earrings")}>
      Earrings
    </CategoryButton>
  </CategoriesContainer>
);

export default Categories;
