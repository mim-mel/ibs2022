import styled from '@emotion/styled/macro';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Nav = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [isConsulting, setIsConsulting] = useState(false);
  const [isPortfolio, setIsPortfolio] = useState(false);
  const [isCustomer, setIsCustomer] = useState(false);

  const isMenuToggle = () => {
    if (isMenu) {
      setIsMenu(false);
    } else {
      setIsMenu(true);
    }
  };

  const isConsultingToggle = () => {
    if (isConsulting) {
      setIsConsulting(false);
    } else {
      setIsConsulting(true);
    }

    if (isConsulting === false && isPortfolio !== isConsulting) {
      setIsPortfolio(false);
    }
    if (isConsulting === false && isCustomer !== isConsulting) {
      setIsCustomer(false);
    }
  };

  const isPortfolioToggle = () => {
    if (isPortfolio) {
      setIsPortfolio(false);
    } else {
      setIsPortfolio(true);
    }

    if (isPortfolio === false && isConsulting !== isPortfolio) {
      setIsConsulting(false);
    }
    if (isPortfolio === false && isCustomer !== isPortfolio) {
      setIsCustomer(false);
    }
  };

  const isCustomerToggle = () => {
    if (isCustomer) {
      setIsCustomer(false);
    } else {
      setIsCustomer(true);
    }

    if (isCustomer === false && isPortfolio !== isCustomer) {
      setIsPortfolio(false);
    }
    if (isCustomer === false && isConsulting !== isCustomer) {
      setIsConsulting(false);
    }
  };

  return (
    <NavWrap>
      <NavBox>
        <LinkStyled to='/'>
          <NavLogo src='/image/ibs-logo.png' alt='logo' />
        </LinkStyled>
        <TitleWrap isMenu={isMenu}>
          <NavTitle>
            <LinkStyled to='/company'>
              <NavTitleText>COMPANY</NavTitleText>
            </LinkStyled>
          </NavTitle>
          <NavTitle>
            <LinkStyled to='/labor'>
              <NavTitleText>
                CONSULTING
                <DropdownArrow
                  onClick={isConsultingToggle}
                  src='/image/drop-down-white.png'
                  isDropdownClicked={isConsulting}
                />
              </NavTitleText>
            </LinkStyled>
            <Bubble isDropdownClicked={isConsulting}>
              <LinkStyled to='/labor'>
                <SubTitle bottom>컨설팅</SubTitle>
              </LinkStyled>
              <LinkStyled to='/funds'>
                <SubTitle>서비스</SubTitle>
              </LinkStyled>
            </Bubble>
          </NavTitle>
          <NavTitle>
            <LinkStyled to='/portfolio'>
              <NavTitleText>
                PORTFOLIO
                <DropdownArrow
                  onClick={isPortfolioToggle}
                  src='/image/drop-down-white.png'
                  isDropdownClicked={isPortfolio}
                />
              </NavTitleText>
            </LinkStyled>
            <Bubble isDropdownClicked={isPortfolio}>
              <LinkStyled to='/portfolio'>
                <SubTitle bottom>포트폴리오</SubTitle>
              </LinkStyled>
              <SubTitle>컨퍼런스</SubTitle>
            </Bubble>
          </NavTitle>
          <NavTitle>
            <NavTitleText>
              CUSTOMER
              <DropdownArrow
                onClick={isCustomerToggle}
                src='/image/drop-down-white.png'
                isDropdownClicked={isCustomer}
              />
            </NavTitleText>
            <Bubble isDropdownClicked={isCustomer}>
              <SubTitle bottom>자료실</SubTitle>
              <SubTitle bottom>온라인문의</SubTitle>
              <SubTitle>FAQ</SubTitle>
            </Bubble>
          </NavTitle>
          <NavTitle>
            <NavTitleText>CONTACT US</NavTitleText>
          </NavTitle>
        </TitleWrap>
        <IsClickedBlock onClick={() => isMenuToggle()}>
          {isMenu ? (
            <IsClickedImg src='/image/x-mark.png' />
          ) : (
            <IsClickedImg src='/image/burger.png' />
          )}
        </IsClickedBlock>
      </NavBox>
    </NavWrap>
  );
};

const NavWrap = styled.div`
  width: 100%;
  height: 65px;
  background-color: white;
  z-index: 20;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavBox = styled.div`
  width: 1100px;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1400px) {
    width: 1000px;
  }

  @media screen and (max-width: 1024px) {
    width: 80vw;
  }

  @media screen and (max-width: 768px) {
    width: 87vw;
  }
`;

const NavLogo = styled.img`
  width: 150px;
  height: auto;
  margin-top: 5px;

  @media screen and (max-width: 1024px) {
    width: 140px;
  }

  @media screen and (max-width: 768px) {
    width: 120px;
  }
`;

const TitleWrap = styled.div`
  width: 700px;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.2s;
  margin-left: auto;

  @media screen and (max-width: 1400px) {
    width: 650px;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: ${props => (props.isMenu ? 'auto' : '0')};
    overflow: hidden;
    position: absolute;
    top: 65px;
    left: 0;
    flex-direction: column;
    justify-content: left;
    background-color: #053dc0;
  }
`;

const Bubble = styled.div`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100px;
  height: auto;
  padding: 20px 30px;
  background: #f9f9f9;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 12px;
  display: none;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;

  :after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 0 15px 15px;
    border-color: #f9f9f9 transparent;
    display: block;
    width: 0;
    z-index: 1;
    top: -15px;
    left: 65px;
  }

  @media screen and (max-width: 1024px) {
    display: flex;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    transform: translate(0, 0);
    border-radius: 0;
    background: #0559ce;
    padding: 0;
    height: ${props => (props.isDropdownClicked ? 'auto' : '0')};
    overflow: hidden;
    transition: 0.2s;
    box-shadow: rgba(0, 0, 0, 0) 0px 4px 12px;

    :after {
      display: none;
    }
  }
`;

const SubTitle = styled.div`
  color: #646464;
  margin: 8px;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.6px;
  cursor: pointer;

  @media (hover: hover) {
    &:hover {
      color: #053dc0;
      font-weight: 600;
    }
  }

  @media screen and (max-width: 1024px) {
    color: white;
    font-size: 16px;
    padding: 15px 80px;
    margin: 0;
    border-bottom: ${props =>
      props.bottom ? 'rgba(255,255,255,0.2) solid 0.3px' : 'null'};
  }

  @media screen and (max-width: 768px) {
    padding: 15px 40px;
  }
`;

const NavTitle = styled.div`
  margin-top: 6px;
  text-transform: uppercase;
  display: inline-block;
  position: relative;
  cursor: pointer;
  padding: 60px 0;

  :after {
    display: block;
    content: '';
    border-bottom: solid 2px #053dc0;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }

  @media (hover: hover) {
    &:hover:after {
      transform: scaleX(1);
    }

    :hover ${Bubble} {
      display: flex;
    }
  }

  @media screen and (max-width: 1024px) {
    font-size: 17px;
    padding: 0;
    width: 100%;
    border-bottom: 0.1px solid rgba(255, 255, 255, 0.3);
    color: white;
    margin-top: 0;
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
`;

const NavTitleText = styled.div`
  color: #646464;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.5px;
  margin-bottom: 3px;
  position: relative;

  @media screen and (max-width: 1024px) {
    margin: 20px;
    color: white;
    padding-left: 60px;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    padding-left: 4vw;
  }
`;
const IsClickedBlock = styled.div``;

const IsClickedImg = styled.img`
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
  }
`;

const DropdownArrow = styled.img`
  width: 25px;
  position: absolute;
  left: 78%;
  top: 11%;
  display: none;
  transition: 0.2s;
  transform: ${props =>
    props.isDropdownClicked ? 'rotate(180deg)' : 'rotate(0deg)'};

  @media screen and (max-width: 1024px) {
    display: inline-block;
  }
`;

export default Nav;
