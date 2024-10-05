import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import { HomeContainer } from "../components/StyledComponent";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import Footer from "../components/Footer";
import SpecialProducts from "../components/SpecialProduct";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/shop?search=${searchQuery}`);
    }
  };

  const handleShopNow = () => {
    navigate("/shop");
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      alert(`Welcome ${user.displayName}`);
      navigate("/dashboard");
    } catch (error) {
      console.error("Google Login Failed:", error);
    }
  };

  const products = [
    {
      name: "Diamond Ring",
      price: "$299.99",
      image: "../assets/jewelry2.jpg",
      description:
        "An exquisite diamond ring that radiates elegance and charm.",
    },
    {
      name: "Gold Necklace",
      price: "$249.99",
      image: "../assets/jewelry5.jpg",
      description:
        "A beautiful gold necklace that adds a touch of elegance to any outfit.",
    },
    {
      name: "Silver Bracelet",
      price: "$149.99",
      image: "../assets/jewelry3.jpg",
      description:
        "A sleek and stylish silver bracelet perfect for any occasion.",
    },
    {
      name: "Pearl Earrings",
      price: "$199.99",
      image: "../assets/jewelry8.jpg",
      description:
        "Stunning pearl earrings that capture the essence of sophistication.",
    },
  ];

  return (
    <HomeContainer>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        handleGoogleLogin={handleGoogleLogin}
      />
      <HeroSection handleShopNow={handleShopNow} />
      <SpecialProducts products={products} />
      <Footer />
    </HomeContainer>
  );
};

export default HomePage;
