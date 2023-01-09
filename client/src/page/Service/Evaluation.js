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

const Evaluation = () => {
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
          <Button color='#053dc0' positionPhone>
            <ButtonImg
              src='/image/evaluation-service-w.png'
              marginBottom='6px'
            />
            <ButtonText color='white' weight='600'>
              감정평가
            </ButtonText>
          </Button>
        </LinkStyled>
      </ButtonsWrap>

      <MainImgTextWrap>
        <Fade bottom>
          <MainImgWrap>
            <MainImgBack />
            <MainImg url='image/evaluation-img1.jpg' />
          </MainImgWrap>
        </Fade>

        <Fade bottom>
          <MainTextBlock>
            <MainTitle>감정평가</MainTitle>
            <MainText>
              동산이나 부동산 같은 재산의 경제적 가치를 판단하는 작업으로,
              자본주의 사회에서 존재하는 모든 것이 대상이 됩니다. 부동산 뿐만
              아니라 특허권, 상표권, 영업권, 기업가치 등 모두가 감정평가의
              대상입니다. 감정평가가 필요하신 경우 에상 가격을 바로 확인하신 후,
              진행 여부는 추후에 결정할 수 있습니다. IBS파트너스는 신속 상담을
              지원해 드리고 있습니다.
            </MainText>
          </MainTextBlock>
        </Fade>
      </MainImgTextWrap>
      <ContentWrap>
        <Fade bottom>
          <ContentTitle>감정 평가가 필요한 경우</ContentTitle>
        </Fade>
        <ContentBlock>
          <Fade bottom>
            <WhiteBox>
              <IconBlock>
                <EvaIcon url='image/eva-icon1.png' />
                <EvaText>합 의</EvaText>
              </IconBlock>
              <EvaText2>
                동업자간 사업체를 합리적으로 분할하고 싶은 경우 가치 평가
              </EvaText2>
            </WhiteBox>
          </Fade>
          <Fade bottom delay={500}>
            <WhiteBox>
              <IconBlock>
                <EvaIcon url='image/eva-icon2.png' />
                <EvaText>절 세</EvaText>
              </IconBlock>
              <EvaText2>
                영업권 평가를 통하여 절세 효과를 누리고 싶을 때
              </EvaText2>
            </WhiteBox>
          </Fade>
        </ContentBlock>
        <ContentBlock>
          <Fade bottom>
            <WhiteBox>
              <IconBlock>
                <EvaIcon url='image/eva-icon3.png' />
                <EvaText>수 익</EvaText>
              </IconBlock>
              <EvaText2>
                특허권을 회사에 파는 경우 수익을 증대 시키고 싶을 때
              </EvaText2>
            </WhiteBox>
          </Fade>
          <Fade bottom delay={500}>
            <WhiteBox>
              <IconBlock>
                <EvaIcon url='image/eva-icon4.png' />
                <EvaText>신 임</EvaText>
              </IconBlock>
              <EvaText2>
                회사의 장부 가치를 상승시키고 대외 신임도를 높이고 싶을 때
              </EvaText2>
            </WhiteBox>
          </Fade>
        </ContentBlock>
        <ContentBlock>
          <Fade bottom>
            <WhiteBox>
              <IconBlock>
                <EvaIcon url='image/eva-icon5.png' />
                <EvaText>거 래</EvaText>
              </IconBlock>
              <EvaText2>특수관계자 간 (혹은 회사간) 거래가 필요할 때</EvaText2>
            </WhiteBox>
          </Fade>
          <Fade bottom delay={500}>
            <WhiteBox>
              <IconBlock>
                <EvaIcon url='image/eva-icon6.png' />
                <EvaText>상 속</EvaText>
              </IconBlock>
              <EvaText2>
                상속, 증여와 관련하여 합법적으로 절세하고 싶을 때
              </EvaText2>
            </WhiteBox>
          </Fade>
        </ContentBlock>
      </ContentWrap>
    </Wrap>
  );
};

const ContentWrap = styled.div`
  width: 900px;
  height: auto;
  margin: 180px auto 100px auto;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    width: 80%;
  }

  @media screen and (max-width: 760px) {
    margin: 100px auto 70px auto;
  }
`;

const ContentTitle = styled.div`
  font-size: 30px;
  color: #053dc0;
  font-weight: 800;
  margin-bottom: 40px;

  @media screen and (max-width: 760px) {
    margin-bottom: 18px;
    font-size: 21px;
  }
`;

const ContentBlock = styled.div`
  display: grid;
  grid-template-columns: 46% 46%;
  justify-content: space-between;
  margin: 30px 0;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 48% 48%;
  }

  @media screen and (max-width: 760px) {
    grid-template-columns: 100%;
    margin: 0;
  }
`;

const WhiteBox = styled.div`
  background-color: white;
  width: 100%;
  padding: 50px 50px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 30% 70%;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;

  @media screen and (max-width: 1024px) {
    padding: 50px 40px;
    height: 190px;
    box-sizing: border-box;
  }

  @media screen and (max-width: 760px) {
    margin: 15px 0;
    border-radius: 40px;
    height: 170px;
  }
`;

const IconBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EvaIcon = styled.div`
  width: 33px;
  height: 35px;
  background-image: url(${props => props.url});
  margin-bottom: 5px;
  background-repeat: no-repeat;
`;
const EvaText = styled.div`
  font-size: 22px;
  color: #053dc0;
  font-weight: 900;

  @media screen and (max-width: 760px) {
    font-size: 18px;
  }
`;

const EvaText2 = styled.div`
  color: #686868;
  margin-left: 25px;
  font-size: 15px;
  line-height: 30px;

  @media screen and (max-width: 1024px) {
    font-size: 15px;
    line-height: 25px;
  }

  @media screen and (max-width: 760px) {
    font-size: 13px;
  }
`;

export default Evaluation;
