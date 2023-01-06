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

const Edu = () => {
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
            <Button color='#053dc0' positionPhone>
              <ButtonImg src='/image/edu-consulting-w.png' marginBottom='6px' />
              <ButtonText color='white' weight='600'>
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
              <MainImg url='image/edu1.jpg' />
            </MainImgWrap>
          </Fade>

          <Fade bottom>
            <MainTextBlock>
              <MainTitle>교육 컨설팅</MainTitle>
              <MainText>
                IBS파트너스는 동물병원 전문 교육강사님을 보유하고 있습니다.
                비용과 관리부담은 낮추고 동물병원에 특별화된 무료교육 서비스를
                운용하고 있습니다. 직원들은 병원 성장의 핵심입니다. 직원들의
                역량계발을 통해 병원의 경쟁력을 높여보세요.
              </MainText>
            </MainTextBlock>
          </Fade>
        </MainImgTextWrap>

        <ContentsWrap>
          <Fade bottom>
            <ImgTextBlock marginBottom>
              <ImgBox>
                <Img src='image/edu2.jpg' />
              </ImgBox>
              <TextBlock>
                <ContentTitle>C.S 교육</ContentTitle>
                <ContentText>
                  IBS파트너스는 다수의 교육업체와는 차별화된 동물병원 전문
                  C.S강사님을 보유하고 있습니다. 각 동물병원실정에 맞는 교육을
                  제공하기 위해 원장님과의 상의를 통해 상세한 교육일정을 논의 후
                  진행합니다. 교육후에는 법정의무교육 및 수료증을 발급해
                  드립니다. CS교육을 통해 고객만독 매출증대, 보호자와의 유대감
                  형성, 컴플레인 방지등의 효과가 있습니다.
                </ContentText>
              </TextBlock>
            </ImgTextBlock>
          </Fade>

          <Fade bottom>
            <ImgTextBlock>
              <ImgBox>
                <Img src='image/edu3.jpg' />
              </ImgBox>
              <TextBlock>
                <ContentTitle>법정의무교육</ContentTitle>
                <ContentText marginBottom>
                  매년 1회 이상 의무적으로 이수해야 하는 법정의무교육을
                  진행해드리고 있습니다. 매년 업데이트 되는 최신 내용을 바탕으로
                  교육 내용을 새롭게 구성하고 있습니다. 원장님이 원하시는
                  시간대에 강사님이 병원에 방문하시기 때문에 간편하게 교육을
                  이수하실 수 있습니다. 이수를 했다고 끝나는 것이 아니라
                  법정의무교육을 이수했다는 수료증이 있어야 합니다.
                  IBS파트너스에서는 교육 수료 이후 수료증 발급까지 진행해드리고
                  있습니다.
                </ContentText>
                <TagWrap>
                  <Tag marginBottom>
                    <TagText>개인정보 보호교육</TagText>
                  </Tag>
                  <Tag>
                    <TagText>산업안전 보건교육</TagText>
                  </Tag>
                  <Tag>
                    <TagText>직장내 괴롭힘 예방 교육</TagText>
                  </Tag>
                  <Tag>
                    <TagText>장애인 인식 개선 교육</TagText>
                  </Tag>
                  <Tag>
                    <TagText>성희롱 예방 교육</TagText>
                  </Tag>
                </TagWrap>
              </TextBlock>
            </ImgTextBlock>
          </Fade>
        </ContentsWrap>
      </Wrap>
    </div>
  );
};

const ContentsWrap = styled.div`
  width: 890px;
  height: auto;
  margin-top: 170px;
  margin-bottom: 150px;

  @media screen and (max-width: 1024px) {
    width: 80%;
    margin-top: 150px;
    margin-bottom: 100px;
  }

  @media screen and (max-width: 760px) {
    margin: 100px 0 100px 0;
  }
`;

const ImgTextBlock = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: ${props => (props.marginBottom ? '100px' : '')};
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    margin-bottom: ${props => (props.marginBottom ? '70px' : '')};
  }

  @media screen and (max-width: 760px) {
    display: grid;
    grid-template-columns: 100%;
  }
`;

const ImgBox = styled.div`
  width: 350px;
  height: 350px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;
  border-radius: 40px;

  @media screen and (max-width: 1024px) {
    width: 230px;
    height: 230px;
  }

  @media screen and (max-width: 760px) {
    margin: 0 auto;
    margin-bottom: 30px;
  }
`;

const Img = styled.img`
  border-radius: 30px;

  @media screen and (max-width: 1024px) {
    transform: scale(0.65);
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 423px;

  @media screen and (max-width: 1024px) {
    width: 350px;
  }

  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;

const ContentTitle = styled.div`
  color: #053dc0;
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: 700;

  @media screen and (max-width: 1024px) {
    font-size: 25px;
  }

  @media screen and (max-width: 760px) {
  }
`;

const ContentText = styled.div`
  color: #686868;
  font-size: 15px;
  line-height: 27px;
  margin-bottom: ${props => (props.marginBottom ? '30px' : '')};

  @media screen and (max-width: 1024px) {
    font-size: 12px;
    line-height: 20px;
  }

  @media screen and (max-width: 760px) {
  }
`;

const TagWrap = styled.div`
  display: grid;
  grid-template-columns: 31% 31% 31%;
  justify-content: space-between;
`;

const Tag = styled.div`
  width: 100%;
  height: 40px;
  background-color: #f7f7f7;
  border-radius: 50px;
  margin-bottom: ${props => (props.marginBottom ? '15px' : '')};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 4px 8px;

  @media screen and (max-width: 1024px) {
    height: 36px;
  }

  @media screen and (max-width: 760px) {
  }
`;

const TagText = styled.div`
  color: #053dc0;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: -0.3px;

  @media screen and (max-width: 1024px) {
    font-size: 1px;
  }

  @media screen and (max-width: 760px) {
  }
`;

export default Edu;
