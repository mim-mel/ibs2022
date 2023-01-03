import { SubBanner, SubBannerTitle, Wrap } from '../Company';
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

const Ad = () => {
  return (
    <div>
      <Wrap>
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
              <ButtonImg src='/image/labor-consulting.png' marginBottom='6px' />
              <ButtonText color='#053dc0' weight='900'>
                노무컨설팅
              </ButtonText>
            </Button>
          </LinkStyled>
          <LinkStyled to='/tax'>
            <Button color='white'>
              <ButtonImg src='/image/tax-consulting.png' marginBottom='9px' />
              <ButtonText color='#053dc0' weight='900'>
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
            <Button color='#053dc0' positionPhone>
              <ButtonImg src='/image/ad-consulting-w.png' marginBottom='4px' />
              <ButtonText color='white' weight='600'>
                홍보컨설팅
              </ButtonText>
            </Button>
          </LinkStyled>
        </ButtonsWrap>

        <MainImgTextWrap>
          <Fade bottom>
            <MainImgWrap>
              <MainImgBack />
              <MainImg url='image/ad1.jpg' />
            </MainImgWrap>
          </Fade>

          <Fade bottom>
            <MainTextBlock>
              <MainTitle>홍보 컨설팅</MainTitle>
              <MainText>
                고객응대의 첫 접점은 온라인입니다. IBS파트너스는 동물병원 특색에
                맞는 브랜드 컨설팅부터 디자인 서비스까지 동물병원 마케팅에
                필요한 전반적인 서비스를 제공해드리고 있습니다. 홈페이지형
                블로그부터 웹, 앱, SNS전반에 걸쳐 폭 넓은 선택지를
                제공해드립니다.
              </MainText>
            </MainTextBlock>
          </Fade>
        </MainImgTextWrap>

        <ContentsWrap>
          <Fade bottom>
            <ImgTextBlock marginBottom>
              <ImgBox>
                <Img src='image/ad2.jpg' />
              </ImgBox>
              <TextBlock>
                <ContentTitle>동물병원 브랜딩</ContentTitle>
                <ContentText>
                  IBS파트너스는 500여 곳의 동물병원을 관리하며 쌓아온 경험에서
                  나온 깊은 이해로 각 동물병원의 장점이 무엇인지 파악하고
                  분석합니다. 동물병원 브랜딩의 첫 시작은 차별화입니다.
                  원장선생님의 니즈를 파악 후 동물병원의 방향성을 설정해
                  동물병원의 컨셉을 구체화합니다.
                </ContentText>
              </TextBlock>
            </ImgTextBlock>
          </Fade>

          <Fade bottom>
            <ImgTextBlock marginBottom marginLeft>
              <ImgBox>
                <Img src='image/ad3.jpg' />
              </ImgBox>
              <TextBlock>
                <ContentTitle>웹,블로그 디자인</ContentTitle>
                <ContentText>
                  대부분의 신규 고객은 인터넷 공간으로부터 유입되어 옵니다.
                  인터넷 공간에 노출되지 않는 동물병원은 신규고객을 확보하기
                  어렵습니다. IBS파트너스는 동물병원은 해당 동물병원만의 특색을
                  살려 웹과, 홈페이지형 블로그를 디자인해 드리고 있습니다
                </ContentText>
              </TextBlock>
            </ImgTextBlock>
          </Fade>

          <Fade bottom>
            <ImgTextBlock>
              <ImgBox>
                <Img src='image/ad4.jpg' />
              </ImgBox>
              <TextBlock>
                <ContentTitle>인쇄물 디자인</ContentTitle>
                <ContentText>
                  로고부터, 리플렛, 배너까지 동물병원을 개업하기 위해 준비해야
                  할 것은 산더미입니다. 인쇄물마다 외주업체를 알아보는 것도
                  번거로우신가요? IBS파트너스의 전담 디자인팀이 그 모든것을
                  해결해 드립니다. IBS파트너스의 디자인 팀은 원장님과의 세심한
                  소통을 통해 정확한 니즈를 파악한 후 작업을 진행합니다.
                </ContentText>
              </TextBlock>
            </ImgTextBlock>
          </Fade>
        </ContentsWrap>
      </Wrap>
    </div>
  );
};

const ContentsWrap = styled.div`
  width: 850px;
  height: auto;
  margin-top: 170px;
  margin-bottom: 150px;

  @media screen and (max-width: 1024px) {
    width: 80%;
    margin: 130px auto 100px auto;
  }

  @media screen and (max-width: 760px) {
    margin: 100px 0 100px 0;
    width: 80%;
  }
`;

const ImgTextBlock = styled.div`
  display: flex;
  width: 87%;
  margin-bottom: ${props => (props.marginBottom ? '70px' : '')};
  justify-content: space-between;
  margin-left: ${props => (props.marginLeft ? 'auto' : '')};

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 760px) {
    display: grid;
    grid-template-columns: 100%;
    margin: 0;
    margin-bottom: ${props => (props.marginBottom ? '50px' : '')};
    width: 100%;
  }
`;

const ImgBox = styled.div`
  width: 275px;
  height: 275px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;
  border-radius: 40px;

  @media screen and (max-width: 1024px) {
    width: 245px;
    height: 245px;
  }

  @media screen and (max-width: 760px) {
    margin: 0 auto;
    margin-bottom: 30px;
  }
`;

const Img = styled.img`
  border-radius: 30px;

  @media screen and (max-width: 1024px) {
    transform: scale(0.9);
  }

  @media screen and (max-width: 760px) {
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 385px;

  @media screen and (max-width: 1024px) {
    width: 270px;
  }

  @media screen and (max-width: 760px) {
    margin: 0 auto;
  }
`;

const ContentTitle = styled.div`
  color: #053dc0;
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: 700;

  @media screen and (max-width: 1024px) {
    font-size: 27px;
  }

  @media screen and (max-width: 760px) {
  }
`;

const ContentText = styled.div`
  color: #686868;
  font-size: 15px;
  line-height: 25px;
  margin-bottom: ${props => (props.marginBottom ? '25px' : '')};

  @media screen and (max-width: 1024px) {
    font-size: 13px;
    line-height: 23px;
  }

  @media screen and (max-width: 760px) {
  }
`;

export default Ad;
