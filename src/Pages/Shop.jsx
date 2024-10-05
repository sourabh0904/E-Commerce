import React, { useState } from "react";
import Header from "../components/Header";
import Categories from "../components/Categories";
import ProductsSection from "../components/ProductSection";
import Footer from "../components/Footer";
import styled from "styled-components";

// Sample product data (replace ... with actual data)
const productsData = {
  all: [
    {
      id: 1,
      name: "Gold Necklace",
      price: "$199.99",
      image: "../assets/jewelry1.jpg",
    },
    {
      id: 2,
      name: "Pearl Necklace",
      price: "$149.99",
      image: "../assets/jewelry5.jpg",
    },
    {
      id: 3,
      name: "Diamond Ring",
      price: "$299.99",
      image: "../assets/jewelry2.jpg",
    },
    {
      id: 4,
      name: "Emerald Ring",
      price: "$249.99",
      image: "../assets/jewelry6.jpg",
    },
    {
      id: 5,
      name: "Silver Bracelet",
      price: "$149.99",
      image: "../assets/jewelry3.jpg",
    },
    {
      id: 6,
      name: "Leather Bracelet",
      price: "$79.99",
      image: "../assets/jewelry7.jpg",
    },
    {
      id: 7,
      name: "Gold Hoops",
      price: "$99.99",
      image: "../assets/jewelry4.jpg",
    },
    {
      id: 8,
      name: "Diamond Studs",
      price: "$199.99",
      image: "../assets/jewelry8.jpg",
    },
  ],
  necklaces: [
    {
      id: 9,
      name: "Gold Necklace",
      price: "$199.99",
      image: "../assets/jewelry1.jpg",
    },
    {
      id: 10,
      name: "Pearl Necklace",
      price: "$149.99",
      image: "../assets/jewelry5.jpg",
    },
  ],
  rings: [
    {
      id: 11,
      name: "Diamond Ring",
      price: "$299.99",
      image: "../assets/jewelry2.jpg",
    },
    {
      id: 12,
      name: "Emerald Ring",
      price: "$249.99",
      image: "../assets/jewelry6.jpg",
    },
  ],
  bracelets: [
    {
      id: 13,
      name: "Silver Bracelet",
      price: "$149.99",
      image: "../assets/jewelry3.jpg",
    },
    {
      id: 14,
      name: "Leather Bracelet",
      price: "$79.99",
      image: "../assets/jewelry7.jpg",
    },
  ],
  earrings: [
    {
      id: 15,
      name: "Gold Hoops",
      price: "$99.99",
      image: "../assets/jewelry4.jpg",
    },
    {
      id: 16,
      name: "Diamond Studs",
      price: "$199.99",
      image: "../assets/jewelry8.jpg",
    },
  ],
};

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const ShopContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  `;

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = productsData[selectedCategory].filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ShopContainer>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Categories handleCategoryClick={handleCategoryClick} />
      <ProductsSection products={filteredProducts} />
      <Footer />
    </ShopContainer>
  );
};

export default Shop;
