import { useEffect } from 'react';
import { SubBanner, SubBannerTitle, Wrap } from './Company';
import styled from '@emotion/styled/macro';
import Fade from 'react-reveal/Fade';
import MapSection from '../component/MapSection';
import { LinkStyled } from '../component/Nav';

const Contact = () => {
  return (
    <Wrap>
      <SubBanner
        url='url(/image/submain7.jpg)'
        positionIpad='-700px -90px'
        positionPhone='-450px -0px'
      >
        <SubBannerTitle>CONTACT US</SubBannerTitle>
      </SubBanner>
      <ContentsWrap>
        <Fade bottom delay={0}>
          <LinkStyled to='/form'>
            <ContentsBox>
              <BoxImage url='image/contact-icon1.jpg' />
              <BoxTitle>온라인 문의하기</BoxTitle>
              <BoxText>지금 온라인 문의하기</BoxText>
            </ContentsBox>
          </LinkStyled>
        </Fade>

        <Fade bottom delay={500}>
          <StyledA href='tel:02-6951-3323'>
            <ContentsBox>
              <BoxImage url='image/contact-icon2.jpg' />
              <BoxTitle>전화로 문의하기</BoxTitle>
              <BoxText>02-6951-3323</BoxText>
            </ContentsBox>
          </StyledA>
        </Fade>

        <Fade bottom delay={1000}>
          <StyledA href='https://pf.kakao.com/_xexbSxcK'>
            <ContentsBox middle>
              <BoxImage url='image/contact-icon3.jpg' />
              <BoxTitle>카카오로 문의하기</BoxTitle>
              <BoxText>카카오 플러스채널 가기</BoxText>
            </ContentsBox>
          </StyledA>
        </Fade>
      </ContentsWrap>
      <MapSection />
    </Wrap>
  );
};

const ContentsWrap = styled.div`
  width: 1100px;
  margin-top: 170px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    width: 80%;
    margin-top: 130px;
    display: grid;
    grid-template-columns: 48% 48%;
  }

  @media screen and (max-width: 760px) {
    grid-template-columns: 100%;
    margin-top: 90px;
    margin-bottom: 50px;
  }
`;

const StyledA = styled.a`
  text-decoration: none;
`;

const ContentsBox = styled.div`
  width: 345px;
  height: 250px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;
  border-radius: 40px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 0;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    top: -10px;
    background: rgb(5, 61, 192);
    background: linear-gradient(
      337deg,
      rgba(5, 61, 192, 0.07) 0%,
      rgba(255, 255, 255, 1) 51%,
      rgba(5, 61, 192, 0.07) 100%
    );
  }

  @media screen and (max-width: 1024px) {
    width: 300px;
    height: 250px;
    margin-bottom: 50px;
    position: relative;
    transform: ${props => (props.middle ? 'translate(55%, 0)' : '')};
    margin-right: 0;
  }

  @media screen and (max-width: 760px) {
    transform: ${props => (props.middle ? 'translate(0, 0)' : '')};
    margin: 0 auto;
    margin-bottom: 40px;
    width: 280px;
    height: 340px;
  }
`;

const BoxImage = styled.div`
  width: 70px;
  height: 70px;
  background-color: #053dc0;
  background-size: 70px;
  background-image: url(${props => props.url});
  border-radius: 20px;
  margin-bottom: 20px;

  @media screen and (max-width: 1024px) {
  }
`;

const BoxTitle = styled.div`
  font-size: 20px;
  color: #053dc0;
  font-weight: 700;
  margin-bottom: 10px;

  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }

  @media screen and (max-width: 760px) {
    font-size: 18px;
  }
`;

const BoxText = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: #686868;
  letter-spacing: -0.1px;
  width: 80%;
  text-align: center;
  transition: 0.3s;

  @media screen and (max-width: 1024px) {
    font-size: 12px;
  }

  @media screen and (max-width: 760px) {
    font-size: 11px;
    line-height: 16px;
  }
`;

export default Contact;
