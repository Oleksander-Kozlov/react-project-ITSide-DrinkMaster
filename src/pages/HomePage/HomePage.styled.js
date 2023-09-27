import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HomeSection = styled.section`
  font-family: 'Manrope', Arial, sans-serif;
  max-width: 480px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 80px;
  padding-bottom: 80px;
  margin-left: auto;
  margin-right: auto;
  color: #f3f3f3;
  background-color: #0a0a11;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 120px;
    padding-bottom: 140px;
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 185px;
  }
`;

export const AddDrinkContainer = styled.div`
  padding: 10px;
  display: block;
  margin-bottom: 112px;

  @media screen and (min-width: 768px) {
    margin-bottom: 123px;
  }

  @media screen and (min-width: 1280px) {
    position: relative;
    margin-bottom: 218px;
  }
`;

export const LeftSideHero = styled.div`
  @media screen and (min-width: 1280px) {
    width: 715px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 16px;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.19;

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
    font-size: 56px;
    line-height: 1.07;
  }

  @media screen and (min-width: 1280) {
    margin-bottom: 28px;
    font-size: 64px;
    line-height: 1.06;
  }
`;

export const Discribe = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.43;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    margin-bottom: 48px;
    font-size: 18px;
    line-height: 1.33;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 40px;
  }
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  width: auto;
  margin-right: auto;
  padding: 8px 16px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  border-radius: 42px;
  background: #f3f3f3;
  margin-bottom: 47px;
  color: #161f37;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.23;

  @media screen and (min-width: 768px) {
    padding: 18px 44px;
    margin-bottom: 54px;
    font-size: 16px;
    line-height: 1.13;
  }
`;

export const HeroImg = styled.img`
  display: block;
  width: 252px;
  height: auto;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 359px;
    height: auto;
  }

  @media screen and (min-width: 1280px) {
    position: absolute;
    top: -57px;
    right: 36px;
  }
`;

export const CategoryDrinkContainer = styled.div`
  margin-bottom: 60px;
`;

export const LinkBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
