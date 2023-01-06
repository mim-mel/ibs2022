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

const CompanyBuild = () => {
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
          <Button color='white'>
            <ButtonImg src='/image/risk-service.png' marginBottom='3px' />
            <ButtonText color='#053dc0' weight='900'>
              리스크관리
            </ButtonText>
          </Button>
        </LinkStyled>

        <LinkStyled to='/companybuild'>
          <Button color='#053dc0'>
            <ButtonImg
              src='/image/company-open-service-w.png'
              marginBottom='6px'
            />
            <ButtonText color='white' weight='600'>
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
            <MainImg url='image/company-build1.jpg' />
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
          <ContentsWrap2>
            <Title>STEP 01</Title>
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
          </ContentsWrap2>
        </Fade>

        <Fade bottom delay={500}>
          <ContentsWrap2 top>
            <Title>STEP 02</Title>
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
          </ContentsWrap2>
        </Fade>

        <Fade bottom delay={0}>
          <ContentsWrap2>
            <Title>STEP 03</Title>
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
          </ContentsWrap2>
        </Fade>

        <Fade bottom delay={500}>
          <ContentsWrap2 top>
            <Title>STEP 04</Title>
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
          </ContentsWrap2>
        </Fade>

        <Fade bottom delay={0}>
          <ContentsWrap2>
            <Title>STEP 05</Title>
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
          </ContentsWrap2>
        </Fade>

        <Fade bottom delay={500}>
          <ContentsWrap2 top>
            <Title>STEP 06</Title>
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
          </ContentsWrap2>
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

const ContentsWrap2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  top: ${props => (props.top ? '90px' : '')};
`;

const Title = styled.div`
  width: 100%;
  font-size: 25px;
  color: #7f7f7f;
  font-weight: 600;
  text-align: left;
  margin-left: 60px;
  margin-bottom: 20px;
`;

const ContentBox = styled.div`
  width: 360px;
  height: 290px;
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

export default CompanyBuild;
