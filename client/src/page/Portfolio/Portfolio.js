import { SubBanner, SubBannerTitle, Wrap } from '../Company';
import styled from '@emotion/styled/macro';
import { useState } from 'react';
import PortfolioList from './PortfolioList';
import PortfolioHospital from './PortfolioHospital';
import PortfolioTax from './PortfolioTax';
import PortfolioLabor from './PortfolioLabor';
import PortfolioSystem from './PortfolioSystem';
import PortfolioConflict from './PortfolioConflict';
import PortfolioEdu from './PortFolioEdu';

const Portfolio = () => {
  // 카테고리 ui state
  const [portfolio, setPortfolio] = useState(true);
  const [hospital, setHospital] = useState(false);
  const [tax, settax] = useState(false);
  const [labor, setLabor] = useState(false);
  const [system, setSystem] = useState(false);
  const [conflict, setConflict] = useState(false);
  const [edu, setEdu] = useState(false);

  const onPortfolio = e => {
    e.preventDefault(e);

    setPortfolio(true);
    setHospital(false);
    settax(false);
    setLabor(false);
    setSystem(false);
    setConflict(false);
    setEdu(false);
  };

  const onHospital = e => {
    e.preventDefault(e);

    setPortfolio(false);
    setHospital(true);
    settax(false);
    setLabor(false);
    setSystem(false);
    setConflict(false);
    setEdu(false);
  };

  const onTax = e => {
    e.preventDefault(e);

    setPortfolio(false);
    setHospital(false);
    settax(true);
    setLabor(false);
    setSystem(false);
    setConflict(false);
    setEdu(false);
  };

  const onLabor = e => {
    e.preventDefault(e);

    setPortfolio(false);
    setHospital(false);
    settax(false);
    setLabor(true);
    setSystem(false);
    setConflict(false);
    setEdu(false);
  };

  const onSystem = e => {
    e.preventDefault(e);

    setPortfolio(false);
    setHospital(false);
    settax(false);
    setLabor(false);
    setSystem(true);
    setConflict(false);
    setEdu(false);
  };

  const onConflict = e => {
    e.preventDefault(e);

    setPortfolio(false);
    setHospital(false);
    settax(false);
    setLabor(false);
    setSystem(false);
    setConflict(true);
    setEdu(false);
  };

  const onEdu = e => {
    e.preventDefault(e);

    setPortfolio(false);
    setHospital(false);
    settax(false);
    setLabor(false);
    setSystem(false);
    setConflict(false);
    setEdu(true);
  };

  return (
    <Wrap backGround='#fcfcfc'>
      <SubBanner
        url='url(/image/submain3.jpg)'
        positionIpad='-700px -90px'
        positionPhone='-450px -0px'
      >
        <SubBannerTitle>PORTFOLIO</SubBannerTitle>
      </SubBanner>
      <CategoryWrap>
        <Category state={portfolio} onClick={e => onPortfolio(e)}>
          관리병원
        </Category>
        <Category state={hospital} onClick={e => onHospital(e)}>
          개원
        </Category>
        <Category state={tax} onClick={e => onTax(e)}>
          세무
        </Category>
        <Category state={labor} onClick={e => onLabor(e)}>
          노무
        </Category>
        <Category state={system} onClick={e => onSystem(e)}>
          병원운용
        </Category>
        <Category state={conflict} onClick={e => onConflict(e)}>
          분쟁
        </Category>
        <Category state={edu} onClick={e => onEdu(e)}>
          교육
        </Category>
      </CategoryWrap>
      {portfolio ? <PortfolioList /> : ''}
      {hospital ? <PortfolioHospital /> : ''}
      {tax ? <PortfolioTax /> : ''}
      {labor ? <PortfolioLabor /> : ''}
      {system ? <PortfolioSystem /> : ''}
      {conflict ? <PortfolioConflict /> : ''}
      {edu ? <PortfolioEdu /> : ''}
    </Wrap>
  );
};

const CategoryWrap = styled.div`
  width: 750px;
  justify-content: center;
  align-items: center;
  display: grid;
  grid-template-columns: 14% 14% 14% 14% 14% 14% 14%;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    width: 80%;
  }

  @media screen and (max-width: 760px) {
    width: 85%;
  }
`;

const Category = styled.div`
  margin: 100px 0;
  width: 100%;
  color: ${props => (props.state ? 'white' : '#777777')};
  background-color: ${props => (props.state ? '#053dc0' : '')};
  height: 50px;
  display: flex;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  border-radius: 17px;
  cursor: pointer;

  &:hover {
    color: ${props => (props.state ? 'white' : 'black')};
  }

  @media screen and (max-width: 1024px) {
    margin: 70px 0;
  }

  @media screen and (max-width: 760px) {
    font-size: 10px;
    height: 30px;
    border-radius: 8px;
    margin: 40px 0;
  }
`;

export default Portfolio;
