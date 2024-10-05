import styled from "styled-components";
import backgroundImage from "../assets/slider-bg.jpg";

// Responsive breakpoints
const breakpoints = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1024px",
};

export const HomeContainer = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0; /* Removed top padding */
  margin: 0; /* Ensure no margins are added */
`;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  background-color: #ecebfa;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  margin: 0; /* Ensure no margins are added */

  @media (max-width: ${breakpoints.mobile}) {
    padding: 10px 20px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const Logo = styled.img`
  height: 50px;
  cursor: pointer;

  @media (max-width: ${breakpoints.mobile}) {
    height: 40px;
  }
`;

export const FixedSearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }
`;

export const SearchBar = styled.input`
  padding: 10px 15px;
  width: 300px;
  border: 2px solid #ddd;
  border-radius: 25px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: #8a4baf;
    box-shadow: 0 0 5px rgba(138, 75, 175, 0.5);
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

export const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: #fddc5c;
  color: black;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #fbc02d;
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

export const LoginButton = styled.button`
  padding: 10px 20px;
  background-color: #8a4baf;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #763e94;
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`;

export const HeroSectionContainer = styled.section`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 70vh;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ProductCard = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductInfo = styled.div`
  padding: 10px 0;
  text-align: center;
`;

export const ProductName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

export const ProductDescription = styled.p`
  font-size: 0.9rem;
  margin-bottom: 10px;
  color: #666;
`;

export const ProductPrice = styled.p`
  font-size: 1rem;
  color: #888;
  margin-bottom: 15px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 10px;
`;

export const BuyButton = styled.button`
  background-color: #4caf50;
  color: white;
  gap: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #45a049;
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const CartButton = styled.button`
  background-color: #fddc5c;
  color: black;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #fbc02d;
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const HeroHeading = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: #fddc5c;
  margin-bottom: 20px;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`;

export const HeroSubtext = styled.p`
  font-size: 1.4rem;
  margin-bottom: 30px;
  color: #e0e0e0;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

export const HeroButton = styled.button`
  background-color: #fddc5c;
  color: black;
  border: none;
  padding: 15px 30px;
  font-size: 1.2rem;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #fbc02d;
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(1px);
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
    padding: 12px 25px;
  }
`;
