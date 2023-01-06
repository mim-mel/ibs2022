import { Line, SubBanner, SubBannerTitle, Wrap } from '../Company';
import { ButtonsWrap, Button, ButtonImg, ButtonText } from './Labor';
import {
  MainImgTextWrap,
  MainImgWrap,
  MainImg,
  MainImgBack,
  MainTextBlock,
  MainText,
  MainTitle,
} from './Labor';
import { LinkStyled } from '../../component/Nav';
import styled from '@emotion/styled';
import Fade from 'react-reveal/Fade';

const Tax = () => {
  return (
    <div>
      <Wrap backGround='#fcfcfc'>
        <SubBanner
          url='url(/image/submain2.jpg)'
          positionIpad='-700px -90px'
          positionPhone='-450px -0px'
        >
          <SubBannerTitle>CONSULTING</SubBannerTitle>
        </SubBanner>
        <ButtonsWrap>
          <LinkStyled to='/labor'>
            <Button color='white' marginBottomPhone>
              <ButtonImg src='/image/labor-consulting.png' marginBottom='5px' />
              <ButtonText color='#053dc0' weight='900'>
                노무 컨설팅
              </ButtonText>
            </Button>
          </LinkStyled>

          <LinkStyled to='/tax'>
            <Button color='#053dc0'>
              <ButtonImg src='/image/tax-consulting-w.png' marginBottom='7px' />
              <ButtonText color='white' weight='600'>
                세무컨설팅
              </ButtonText>
            </Button>
          </LinkStyled>

          <LinkStyled to='/hospital'>
            <Button color='white'>
              <ButtonImg
                src='/image/hospital-open-consulting.png'
                marginBottom='6px'
              />
              <ButtonText color='#053dc0' weight='900'>
                개원컨설팅
              </ButtonText>
            </Button>
          </LinkStyled>

          <LinkStyled to='/edu'>
            <Button color='white' positionPhone>
              <ButtonImg src='/image/edu-consulting.png' marginBottom='6px' />
              <ButtonText color='#053dc0' weight='900'>
                교육컨설팅
              </ButtonText>
            </Button>
          </LinkStyled>

          <LinkStyled to='/ad'>
            <Button color='white' positionPhone>
              <ButtonImg src='/image/ad-consulting.png' marginBottom='3px' />
              <ButtonText color='#053dc0' weight='900'>
                홍보컨설팅
              </ButtonText>
            </Button>
          </LinkStyled>
        </ButtonsWrap>

        <MainImgTextWrap>
          <Fade bottom>
            <MainImgWrap>
              <MainImgBack />
              <MainImg url='image/tax1.jpg' />
            </MainImgWrap>
          </Fade>

          <Fade bottom>
            <MainTextBlock>
              <MainTitle>세무 컨설팅</MainTitle>
              <MainText>
                피해갈 수 있는 세금은 없지만 줄일 수 있는 세금은 있습니다.
                IBS파트너스는 각 병원의 실무 환경에 맞는 세무컨설팅을 구상하여
                전략적인 절세방안을 제시해 드리고 있습니다. 세무 컨설팅 이후에도
                지속적인 병원 방문을 통해 병원 경영에 필요한 부분들을
                원장선생님과 함께 고민하고 해결을 돕고 있습니다.
              </MainText>
            </MainTextBlock>
          </Fade>
        </MainImgTextWrap>

        <ContentsWrap>
          <Fade bottom delay={500}>
            <ContentBox top>
              <ContentImg url='image/tax2.jpg' />
              <ContentText>정부지원금을 활용한 맞춤형 절세방안</ContentText>
            </ContentBox>
          </Fade>

          <Fade bottom delay={0}>
            <ContentBox>
              <ContentImg url='image/tax3.jpg' />
              <ContentText>분기별 매출 매입 결산으로 소득세관리</ContentText>
            </ContentBox>
          </Fade>

          <Fade bottom delay={500}>
            <ContentBox top>
              <ContentImg url='image/tax4.jpg' />
              <ContentText>현재 내고계신 세금의 적정성 체크</ContentText>
            </ContentBox>
          </Fade>

          <Fade bottom delay={0}>
            <ContentBox>
              <ContentImg url='image/tax5.jpg' />
              <ContentText>사업주 소득에 맞는 1:1절세 컨설팅</ContentText>
            </ContentBox>
          </Fade>
        </ContentsWrap>
      </Wrap>
    </div>
  );
};

const ContentsWrap = styled.div`
  width: 740px;
  height: auto;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  grid-gap: 40px;
  margin-bottom: 250px;
  margin-top: 130px;

  @media screen and (max-width: 1024px) {
    width: 80%;
    grid-gap: 25px;
    margin-top: 100px;
    margin-bottom: 200px;
  }

  @media screen and (max-width: 760px) {
    grid-template-columns: 100%;
    grid-template-rows: 23.5%;
    margin-top: 100px;
    margin-bottom: 100px;
  }
`;

const ContentBox = styled.div`
  top: ${props => (props.top ? '70px' : '')};
  width: 352px;
  height: 370px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;
  position: relative;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    width: 310px;
    height: 320px;
  }

  @media screen and (max-width: 760px) {
    top: ${props => (props.top ? '0' : '')};
    width: 300px;
    height: 310px;
    margin: 0 auto;
  }
`;

const ContentImg = styled.div`
  width: 310px;
  height: 255px;
  background-image: url(${props => props.url});
  border-radius: 30px;
  background-size: 310px;
  margin-bottom: 35px;

  @media screen and (max-width: 1024px) {
    width: 270px;
    height: 200px;
    background-size: 270px;
    background-position: 0 -20px;
  }

  @media screen and (max-width: 760px) {
    width: 260px;
    height: 190px;
    background-size: 270px;
    background-position: 0 -20px;
  }
`;

const ContentText = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #686868;
  margin-bottom: 15px;
`;

export default Tax;
