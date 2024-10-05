// src/components/HeroSection.js
import React from "react";
import {
  HeroSectionContainer,
  HeroHeading,
  HeroSubtext,
  HeroButton,
} from "./StyledComponent";

const HeroSection = ({ handleShopNow }) => {
  return (
    <HeroSectionContainer>
      <HeroHeading>Discover Timeless Elegance</HeroHeading>
      <HeroSubtext>Premium Jewelry Crafted with Excellence</HeroSubtext>
      <HeroButton onClick={handleShopNow}>Shop Now</HeroButton>
    </HeroSectionContainer>
  );
};

export default HeroSection;
