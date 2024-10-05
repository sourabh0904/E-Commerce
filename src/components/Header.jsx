import React from "react";
import {
  Logo,
  HeaderContainer,
  FixedSearchBarContainer,
  SearchBar,
  SearchButton,
  LoginButton,
} from "./StyledComponent";
import logo from "../assets/balaji_logo.png";
import { Link } from "react-router-dom";

const Header = ({
  searchQuery,
  setSearchQuery,
  handleSearch,
  handleGoogleLogin,
}) => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo" />
      <FixedSearchBarContainer>
        <SearchBar
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
        <LoginButton onClick={handleGoogleLogin}>Login</LoginButton>
        <SearchButton>
          <Link to="/cart">Go to Cart</Link>
        </SearchButton>
      </FixedSearchBarContainer>
    </HeaderContainer>
  );
};

export default Header;
