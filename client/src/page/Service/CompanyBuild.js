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
        <SubBannerTitle>SERVICE</SubBannerTitle>
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
              <ContentIconWrap>
                <ContentIconBlock>
                  <ContentIcon url='image/company-build-icon1.png' />
                </ContentIconBlock>
                <ContentTitle>상호가능여부 확인 후 상호명 결정</ContentTitle>
              </ContentIconWrap>
              <ContentText>
                상호명이 중복되지 않도록 현재 사용 중인 법인 이름을 검색해봐야
                합니다
              </ContentText>
            </ContentBox>
          </ContentsWrap2>
        </Fade>

        <Fade bottom delay={500}>
          <ContentsWrap2 top>
            <Title>STEP 02</Title>
            <ContentBox>
              <ContentIconWrap>
                <ContentIconBlock>
                  <ContentIcon url='image/company-build-icon2.png' />
                </ContentIconBlock>
                <ContentTitle>
                  회사운영 총괄을 위한 본점 소재지 결정
                </ContentTitle>
              </ContentIconWrap>
              <ContentText>
                법인 등기부 등본에 기재된 사업 목적을 바탕으로 사업자 등록을
                진행하기에, 사업목적을 확실하게 정하는 것이 중요합니다.
              </ContentText>
            </ContentBox>
          </ContentsWrap2>
        </Fade>

        <Fade bottom delay={0}>
          <ContentsWrap2>
            <Title>STEP 03</Title>
            <ContentBox>
              <ContentIconWrap>
                <ContentIconBlock>
                  <ContentIcon url='image/company-build-icon3.png' />
                </ContentIconBlock>
                <ContentTitle>사업특성을 고려한 회사 자본금 준비</ContentTitle>
              </ContentIconWrap>
              <ContentText>
                대부분의 사업은 100원 이상의 자본금만 있어도 가능합니다.
                일반적으로 1천~2천 만원 정도의 규모로 사업을 시작합니다.
              </ContentText>
            </ContentBox>
          </ContentsWrap2>
        </Fade>

        <Fade bottom delay={500}>
          <ContentsWrap2 top>
            <Title>STEP 04</Title>
            <ContentBox>
              <ContentIconWrap>
                <ContentIconBlock>
                  <ContentIcon url='image/company-build-icon4.png' />
                </ContentIconBlock>
                <ContentTitle>사업을 영위할 사업 목적 결정</ContentTitle>
              </ContentIconWrap>
              <ContentText>
                법인 등기부 등본에 기재된 사업 목적을 바탕으로 사업자 등록을
                진행하기에, 사업목적을 확실하게 정하는 것이 중요합니다.
              </ContentText>
            </ContentBox>
          </ContentsWrap2>
        </Fade>

        <Fade bottom delay={0}>
          <ContentsWrap2>
            <Title>STEP 05</Title>
            <ContentBox>
              <ContentIconWrap>
                <ContentIconBlock>
                  <ContentIcon url='image/company-build-icon5.png' />
                </ContentIconBlock>
                <ContentTitle>회사를 대표할 회사 임원구성 결정</ContentTitle>
              </ContentIconWrap>
              <ContentText>
                법인설립시 법적으로 등기되는 대표이사, 이사, 감사 등의임원을
                선정해야 합니다.
              </ContentText>
            </ContentBox>
          </ContentsWrap2>
        </Fade>

        <Fade bottom delay={500}>
          <ContentsWrap2 top>
            <Title>STEP 06</Title>
            <ContentBox>
              <ContentIconWrap>
                <ContentIconBlock>
                  <ContentIcon url='image/company-build-icon6.png' />
                </ContentIconBlock>
                <ContentTitle>필요서류 준비 법인설립 완료</ContentTitle>
              </ContentIconWrap>
              <ContentText>
                법인설립에 필요한 여러가지 서류를 제출하는 것으로 법인설립
                절차가 마무리 됩니다.
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
  grid-gap: 80px;
  margin-bottom: 250px;
  margin-top: 180px;

  @media screen and (max-width: 1024px) {
    width: 80%;
    grid-gap: 25px;
    margin-top: 120px;
    margin-bottom: 230px;
  }

  @media screen and (max-width: 760px) {
    grid-template-columns: 100%;
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
  top: ${props => (props.top ? '140px' : '')};

  @media screen and (max-width: 760px) {
    top: 0;
  }
`;

const Title = styled.div`
  width: 100%;
  font-size: 25px;
  color: #7f7f7f;
  font-weight: 600;
  text-align: left;
  margin-left: 60px;
  margin-bottom: 20px;

  @media screen and (max-width: 760px) {
    font-size: 22px;
  }
`;

const ContentBox = styled.div`
  width: 370px;
  height: 280px;
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
    height: 260px;
  }

  @media screen and (max-width: 760px) {
    top: ${props => (props.top ? '0' : '')};
    width: 280px;
    height: 230px;
    margin-bottom: 20px;
  }
`;

const ContentIconWrap = styled.div`
  display: grid;
  width: 70%;
  grid-template-columns: 25% 70%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 25% 68%;
  }
`;

const ContentIconBlock = styled.div`
  width: 53px;
  height: 53px;
  border-radius: 15px;
  border: 3px solid #053dc0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 760px) {
    width: 45px;
    height: 45px;
  }
`;

const ContentIcon = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(${props => props.url});
  background-size: 30px;
  background-repeat: no-repeat;
  margin: auto;

  @media screen and (max-width: 760px) {
    width: 25px;
    height: 25px;
    background-size: 25px;
  }
`;

const ContentTitle = styled.div`
  font-size: 22px;
  font-weight: 800;
  color: #053dc0;
  line-height: 30px;

  @media screen and (max-width: 1024px) {
    font-size: 19px;
  }

  @media screen and (max-width: 760px) {
    font-size: 15px;
    line-height: 25px;
  }
`;

const ContentText = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #686868;
  width: 71%;
  margin: 0px auto;
  line-height: 27px;

  @media screen and (max-width: 1024px) {
    font-size: 13px;
    line-height: 25px;
  }

  @media screen and (max-width: 760px) {
    font-size: 12px;
    line-height: 23px;
  }
`;

export default CompanyBuild;
