import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/balaji_logo.png";

// Sample product data
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
  ],
  rings: [
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
  ],
  bracelets: [
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
  ],
  earrings: [
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
};

// Styled Components
const ShopContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Full height for footer alignment */
`;

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #ecebfa; /* Header color */
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Logo = styled.img`
  height: 50px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchBar = styled.input`
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 25px;
  width: 300px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #fddc5c;
  }
`;

const SearchButton = styled.button`
  background-color: #fddc5c;
  color: black;
  border: none;
  padding: 10px 15px;
  border-radius: 25px;
  cursor: pointer;
  margin-left: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #fbc02d;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const CategoriesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 100px 0 20px; /* Space for header */
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

const ProductsSection = styled.section`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px; /* To account for the header */
`;

const ProductCard = styled.div`
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

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 40px 20px;
  text-align: center;
  margin-top: auto; /* Push footer to the bottom */
  display: flex; /* Use flexbox for alignment */
  flex-direction: column; /* Stack elements vertically */
  align-items: center; /* Center items horizontally */
  justify-content: center; /* Center items vertically */
  min-height: 200px; /* Ensure enough height for content */
`;

const FooterHeading = styled.h3`
  font-size: 2rem;
  color: #fddc5c;
  margin-bottom: 10px;
`;

const FooterText = styled.p`
  font-size: 1.1rem;
  color: #ddd;
  max-width: 800px;
  margin: 10px 0; /* Space between paragraphs */
`;

const FooterLink = styled.a`
  color: #fddc5c;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter products based on the search query
  const filteredProducts = productsData[selectedCategory].filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ShopContainer>
      <Header>
        <Logo src={logo} alt="Jewelry Logo" />
        <SearchContainer>
          <SearchBar
            placeholder="Search for products..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <SearchButton>Search</SearchButton>
        </SearchContainer>
      </Header>

      {/* Categories Section */}
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

      {/* Products Section */}
      <ProductsSection>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </ProductCard>
        ))}
      </ProductsSection>

      {/* Footer */}
      <FooterContainer>
        <FooterHeading>About Premium Jewelry</FooterHeading>
        <FooterText>
          We offer a curated collection of exquisite jewelry, designed to make
          you shine. Our pieces are crafted with the utmost care and precision.
        </FooterText>
        <FooterText>
          <FooterLink href="mailto:info@premiumjewelry.com">
            info@premiumjewelry.com
          </FooterLink>{" "}
          <br />
          Phone: +123 456 7890
        </FooterText>
      </FooterContainer>
    </ShopContainer>
  );
};

export default Shop;
