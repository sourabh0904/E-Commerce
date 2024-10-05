import React from "react";
import styled from "styled-components";

// Styled Component for Footer
const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 40px 20px;
  text-align: center;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  width: 100%; /* Ensures footer spans the entire width */
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
  margin: 10px 0;
`;

const FooterLink = styled.a`
  color: #fddc5c;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => (
  <FooterContainer>
    <FooterHeading>About Premium Jewelry</FooterHeading>
    <FooterText>
      We offer a curated collection of exquisite jewelry, designed to make you
      shine. Our pieces are crafted with the utmost care and precision.
    </FooterText>
    <FooterText>
      <FooterLink href="mailto:info@premiumjewelry.com">
        info@premiumjewelry.com
      </FooterLink>
      <br />
      Phone: +123 456 7890
    </FooterText>
  </FooterContainer>
);

export default Footer;
