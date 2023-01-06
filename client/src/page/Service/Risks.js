import { Line, SubBanner, SubBannerTitle, Wrap } from '../Company';
import {
  ButtonsWrap,
  Button,
  ButtonImg,
  ButtonText,
} from '../Consulting/Labor';
import {
  MainImgTextWrap,
  MainImgWrap,
  MainImg,
  MainImgBack,
  MainTextBlock,
  MainText,
  MainTitle,
} from '../Consulting/Labor';
import { LinkStyled } from '../../component/Nav';
import styled from '@emotion/styled';
import Fade from 'react-reveal/Fade';

const Risks = () => {
  return (
    <Wrap backGround='#fcfcfc'>
      <SubBanner
        url='url(/image/submain2.jpg)'
        positionIpad='-700px -90px'
        positionPhone='-450px -0px'
      >
        <SubBannerTitle>CONSULTING</SubBannerTitle>
      </SubBanner>
      <ButtonsWrap>
        <LinkStyled to='/funds'>
          <Button color='white' marginBottomPhone>
            <ButtonImg src='/image/funds-service.png' marginBottom='5px' />
            <ButtonText color='#053dc0' weight='900'>
              정부지원금
            </ButtonText>
          </Button>
        </LinkStyled>

        <LinkStyled to='/risks'>
          <Button color='#053dc0'>
            <ButtonImg src='/image/risk-service-w.png' marginBottom='3px' />
            <ButtonText color='white' weight='600'>
              리스크관리
            </ButtonText>
          </Button>
        </LinkStyled>

        <LinkStyled to='/companybuild'>
          <Button color='white'>
            <ButtonImg
              src='/image/company-open-service.png'
              marginBottom='6px'
            />
            <ButtonText color='#053dc0' weight='900'>
              법인설립
            </ButtonText>
          </Button>
        </LinkStyled>

        <LinkStyled to='/companyx'>
          <Button color='white' positionPhone>
            <ButtonImg src='/image/company-x-service.png' marginBottom='6px' />
            <ButtonText color='#053dc0' weight='900'>
              법인청산
            </ButtonText>
          </Button>
        </LinkStyled>

        <LinkStyled to='/evaluation'>
          <Button color='white' positionPhone>
            <ButtonImg src='/image/evaluation-service.png' marginBottom='6px' />
            <ButtonText color='#053dc0' weight='900'>
              감정평가
            </ButtonText>
          </Button>
        </LinkStyled>
      </ButtonsWrap>

      <MainImgTextWrap>
        <Fade bottom>
          <MainImgWrap>
            <MainImgBack />
            <MainImg url='image/risks1.jpg' />
          </MainImgWrap>
        </Fade>

        <Fade bottom>
          <MainTextBlock>
            <MainTitle>리스크관리</MainTitle>
            <MainText>
              법인회사 운영 중 발생할 수 있는 사건사고를 IBS파트너스와 함께 미리
              대비하세요. 여러 곳의 법인 회사들을 관리하며 다양한 케이스의 사건
              사고들을 해결했습니다. 경험에서 나온 데이터와 협력사의 법률 자문을
              토대로 예기치 못한 사고가 발생해도 언제나 해답을 찾아드리겠습니다.
            </MainText>
          </MainTextBlock>
        </Fade>
      </MainImgTextWrap>

      <ContentsWrap>
        <Fade bottom delay={0}>
          <ContentsWrap2>
            <ContentTitle>1. 직원과의 분쟁</ContentTitle>
            <ContentsBox>
              <BoxImage url='image/risks2.jpg' />
              <TagWrap>
                <Tag marginBottom='15px'>
                  <TagText>노동분쟁 해결</TagText>
                </Tag>
                <Tag>
                  <TagText>연차,퇴직금,각종 수당</TagText>
                </Tag>
                <Tag>
                  <TagText>부당해고</TagText>
                </Tag>
                <Tag>
                  <TagText>사직원 미작성</TagText>
                </Tag>
                <Tag>
                  <TagText>근로계약서 미작성</TagText>
                </Tag>
                <Tag>
                  <TagText>유연한 권고사직</TagText>
                </Tag>
              </TagWrap>
            </ContentsBox>
          </ContentsWrap2>
        </Fade>

        <Fade bottom delay={1000}>
          <ContentsWrap2>
            <ContentTitle>2. 고객과의 분쟁</ContentTitle>
            <ContentsBox middle>
              <BoxImage url='image/risks3.jpg' />
              <TagWrap>
                <Tag marginBottom='15px'>
                  <TagText>진료비/수술비 미결제</TagText>
                </Tag>
                <Tag>
                  <TagText>법률자문</TagText>
                </Tag>
                <Tag>
                  <TagText>법률소송</TagText>
                </Tag>
                <Tag>
                  <TagText>의료분쟁</TagText>
                </Tag>
                <Tag>
                  <TagText>반려동물 유기</TagText>
                </Tag>
                <Tag>
                  <TagText>블랙컨슈머와의 분쟁</TagText>
                </Tag>
              </TagWrap>
            </ContentsBox>
          </ContentsWrap2>
        </Fade>
      </ContentsWrap>
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
    width: 80%;
  }
`;

const ContentsWrap2 = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 760px) {
    justify-content: center;
    align-items: center;
  }
`;

const ContentTitle = styled.div`
  color: #053dc0;
  font-size: 25px;
  font-weight: 700;
  margin-left: 10px;
  margin-bottom: 25px;
  text-align: left;

  @media screen and (max-width: 1024px) {
    font-size: 25px;
  }

  @media screen and (max-width: 760px) {
    margin-bottom: 30px;
    font-size: 22px;
    font-weight: 800;
    width: 100%;
    margin-left: 20px;
  }
`;

const ContentsBox = styled.div`
  width: 500px;
  height: 480px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;
  margin-bottom: 150px;
  border-radius: 50px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 0;
  transition: 0.3s;

  &:hover {
    top: -10px;
  }

  @media screen and (max-width: 1024px) {
    width: 310px;
    height: 320px;
    padding: 20px 0;
    border-radius: 40px;
    margin-bottom: 100px;
  }

  @media screen and (max-width: 760px) {
    margin-bottom: 70px;
    width: 290px;
    height: 310px;
  }
`;

const BoxImage = styled.div`
  width: 430px;
  height: 280px;
  background-image: url(${props => props.url});
  border-radius: 30px;
  margin-bottom: 25px;

  @media screen and (max-width: 1024px) {
    width: 280px;
    height: 180px;
    background-size: 280px;
    margin-bottom: 15px;
    background-repeat: no-repeat;
  }

  @media screen and (max-width: 760px) {
    width: 270px;
    height: 190px;
    background-size: 280px;
  }
`;

const TagWrap = styled.div`
  width: 430px;
  display: grid;
  grid-template-columns: 31.5% 31.5% 31.5%;
  justify-content: space-between;
  margin-top: 10px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 48% 48%;
    width: 90%;
  }
`;

const Tag = styled.div`
  width: 100%;
  height: 40px;
  background-color: #053dc0;
  border-radius: 18px;
  margin-bottom: ${props => (props.marginBottom ? '15px' : '')};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 4px 8px;

  @media screen and (max-width: 1024px) {
    height: 36px;
    margin: 7px 0;
  }

  @media screen and (max-width: 760px) {
    height: 34px;
    margin: 5px 0;
  }
`;

const TagText = styled.div`
  color: white;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: -0.3px;

  @media screen and (max-width: 1024px) {
    font-size: 13px;
  }

  @media screen and (max-width: 760px) {
    font-size: 12.5px;
  }
`;

export default Risks;
