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

const Funds = () => {
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
          <Button color='#053dc0' marginBottomPhone>
            <ButtonImg src='/image/funds-service-w.png' marginBottom='3px' />
            <ButtonText color='white' weight='600'>
              정부지원금
            </ButtonText>
          </Button>
        </LinkStyled>

        <LinkStyled to='/risks'>
          <Button color='white'>
            <ButtonImg src='/image/risk-service.png' marginBottom='3px' />
            <ButtonText color='#053dc0' weight='900'>
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
            <MainImg url='image/funds1.jpg' />
          </MainImgWrap>
        </Fade>

        <Fade bottom>
          <MainTextBlock>
            <MainTitle>정부지원금</MainTitle>
            <MainText>
              정부에서 시행하는 정부지원금 선정 및 지원 요건 충족을 위한 업무를
              지원해 드립니다. 지금까지 몰라서 놓쳐왔던 정부지원금을 챙기는 것
              만으로도 많은 인건비를 절감하실 수 있습니다. IBS파트너스는 매년
              새롭게 업데이트되는 신설 지원금 및 개정사항을 상시 체크하고
              있습니다.
            </MainText>
          </MainTextBlock>
        </Fade>
      </MainImgTextWrap>

      <ContentsWrap>
        <Fade bottom delay={0}>
          <ContentBox>
            <ContentImgCircle>
              <ContentImg url='image/funds2.png' />
            </ContentImgCircle>
            <ContentTitle>두루누리 사회보험료 지원</ContentTitle>
            <ContentText>
              사업주와 소속 근로자의 사회보험료 일부를 국가에서 지원함으로써
              사회보험 가입에 따른 부담을 완화
            </ContentText>
          </ContentBox>
        </Fade>

        <Fade bottom delay={500}>
          <ContentBox top>
            <ContentImgCircle>
              <ContentImg url='image/funds3.png' />
            </ContentImgCircle>
            <ContentTitle>고용안정 장려금</ContentTitle>
            <ContentText>
              전일제 근로자의 소정근로시간 단축시에 사업주를 지원, 육아휴직
              등으로 인해 대체인력 채용시에 사업주를 지원
            </ContentText>
          </ContentBox>
        </Fade>

        <Fade bottom delay={0}>
          <ContentBox>
            <ContentImgCircle>
              <ContentImg url='image/funds4.png' />
            </ContentImgCircle>
            <ContentTitle>고용창출 장려금</ContentTitle>
            <ContentText>
              취업이 곤란한 사람을 고용하는 사업주에게 장려금을 지급, 청년을
              정규직으로 채용한 중소, 중견기업에 인건비를 지원
            </ContentText>
          </ContentBox>
        </Fade>

        <Fade bottom delay={500}>
          <ContentBox top>
            <ContentImgCircle>
              <ContentImg url='image/funds5.png' />
            </ContentImgCircle>
            <ContentTitle>청년내일 채움 공제</ContentTitle>
            <ContentText>
              정부와 사업주, 청년근로자가 적금형식으로 일정금액을 저금한 수
              성과보상금 형태로 지금하는 공제
            </ContentText>
          </ContentBox>
        </Fade>
      </ContentsWrap>
    </Wrap>
  );
};

const ContentsWrap = styled.div`
  width: 750px;
  height: auto;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  grid-gap: 45px;
  margin-bottom: 250px;
  margin-top: 180px;

  @media screen and (max-width: 1024px) {
    width: 80%;
    grid-gap: 25px;
    margin-top: 120px;
    margin-bottom: 180px;
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
  width: 340px;
  height: 360px;
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
    width: 280px;
    height: 290px;
    margin: 0 auto;
  }
`;

const ContentImgCircle = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 100px;
  background-color: #053dc0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;

  @media screen and (max-width: 1024px) {
    width: 110px;
    height: 110px;
  }

  @media screen and (max-width: 760px) {
    width: 100px;
    height: 100px;
  }
`;

const ContentImg = styled.div`
  width: 65px;
  height: 65px;
  background-image: url(${props => props.url});
  background-size: 65px;
  background-repeat: no-repeat;
  margin: auto;

  @media screen and (max-width: 1024px) {
    width: 58px;
    height: 58px;
    background-size: 58px;
  }

  @media screen and (max-width: 760px) {
    width: 50px;
    height: 50px;
    background-size: 50px;
  }
`;

const ContentTitle = styled.div`
  font-size: 21px;
  font-weight: 800;
  color: #053dc0;
  margin-bottom: 15px;

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 760px) {
    font-size: 19px;
    margin-bottom: 10px;
  }
`;

const ContentText = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #686868;
  width: 240px;
  margin: 0px auto;
  line-height: 25px;

  @media screen and (max-width: 760px) {
    font-size: 13px;
    line-height: 23px;
    width: 220px;
  }
`;

export default Funds;
