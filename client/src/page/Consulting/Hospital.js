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

const Hospital = () => {
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
            <Button color='#053dc0'>
              <ButtonImg
                src='/image/hospital-open-consulting-w.png'
                marginBottom='6px'
              />
              <ButtonText color='white' weight='600'>
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
              <MainImg url='image/hospital1.jpg' />
            </MainImgWrap>
          </Fade>

          <Fade bottom>
            <MainTextBlock>
              <MainTitle>개원 컨설팅</MainTitle>
              <MainText>
                IBS 파트너스는 부동산 입지선정부터 자금대출, 인테리어, 의료장비,
                제약, 소모품, 동업계약서, 세무 노무 경영지원, 직원채용, 교육
                까지 개원에 필요한 모든 분야에서 토탈 서비스를 제공해 드리고
                있습니다. 동물병원 개원에 필요한 A~Z까지의 프리미엄 개원
                서비스를 IBS 파트너스가 함께하겠습니다.
              </MainText>
            </MainTextBlock>
          </Fade>
        </MainImgTextWrap>

        <ContentsWrap>
          <Fade bottom>
            <ImgtextBlock marginBottom>
              <HospitalImg src='image/hospital2.jpg' />
              <TextBlock margin='0 0 0 70px'>
                <ContentTitle>인테리어</ContentTitle>
                <ContentText>
                  깔끔한 인테리어는 신뢰와 믿음감을 줍니다. 병원에 들어가는 작은
                  소모품부터 병원 기계 그리고 인테리어까지 아이비에스 파트너스는
                  모든 부분에서 도움을 드릴 수 있습니다. 편안한 스타일부터
                  모던하고 현대적인 스타일까지 원장님의 성향에 맞는 맞는형
                  인테리어 업체를 추천 해드리겠습니다.
                </ContentText>
              </TextBlock>
            </ImgtextBlock>
          </Fade>

          <Fade bottom>
            <ImgtextBlock marginBottom>
              <TextBlock margin='0 80px 0 60px'>
                <ContentTitle>동업계약서 작성</ContentTitle>
                <ContentText>
                  서로의 든든한 지원자가 되어주는 동업파트너와의 원만한 관계를
                  위해서라도 확실하고 세부적인 동업계약서를 통해 분쟁의 소지를
                  없애는 것이 중요합니다. 손해와 수익을 분담하는 방법, 경영에
                  관한 사항, 탈퇴에 관한 사항 등 실무상 빈번히 문제가 되는
                  사항들을 다툼의 여지없이 협의하에 계약서에 작성해 놓아야
                  합니다. 어렵고 복잡한 동업계약서 작성 아이비에스 파트너스가
                  함께하겠습니다.
                </ContentText>
              </TextBlock>
              <HospitalImg
                src='image/hospital3.jpg'
                marginRight
                marginLeft
                order='-1'
              />
            </ImgtextBlock>
          </Fade>

          <Fade bottom>
            <ImgtextBlock>
              <HospitalImg src='image/hospital4.jpg' />
              <TextBlock margin='0 0 0 100px'>
                <ContentTitle>동물병원 브랜딩</ContentTitle>
                <ContentText>
                  병원을 브랜딩화 하기 위해서는 병원의 강점이 무엇인지 어떤
                  문구로 우리 병원을 홍보해야 하는지 사람들의 머릿속에
                  동물병원을 각인시키는 것이 중요합니다. 수백가지의 동물병원들과
                  비교를 통해서 원장 선생님의 동물병원이 지닌 강점과 약점을
                  파악하여 가장 효과적인 브랜딩을 제공해 드리겠습니다.
                </ContentText>
              </TextBlock>
            </ImgtextBlock>
          </Fade>
        </ContentsWrap>
      </Wrap>
    </div>
  );
};

const ContentsWrap = styled.div`
  margin-top: 170px;
  width: 920px;
  height: auto;
  margin-bottom: 150px;

  @media screen and (max-width: 1024px) {
    width: 80%;
    margin: 130px auto 70px auto;
  }

  @media screen and (max-width: 760px) {
    margin: 60px 0 100px 0;
    width: 80%;
  }
`;

const ImgtextBlock = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: ${props => (props.marginBottom ? '100px' : '')};

  @media screen and (max-width: 1024px) {
    margin-bottom: ${props => (props.marginBottom ? '70px' : '')};
  }

  @media screen and (max-width: 760px) {
    display: grid;
    grid-template-columns: 100%;
  }
`;

const HospitalImg = styled.img`
  border-radius: 40px;
  box-shadow: rgba(0, 0, 0, 0.3) 4px 5px 12px;
  margin-right: ${props => (props.marginRight ? '50px' : '')};

  @media screen and (max-width: 1024px) {
    transform: scale(0.8);
    margin-right: ${props => (props.marginRight ? '' : '')};
    margin-left: ${props => (props.marginLeft ? '20px' : '')};
  }

  @media screen and (max-width: 760px) {
    order: ${props => props.order};
    position: relative;
    transform: translate(-50%, 0) scale(0.7);
    left: 50%;
    margin: 0;
  }
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: ${props => props.margin};

  @media screen and (max-width: 1024px) {
    margin: 0;
    width: 300px;
  }

  @media screen and (max-width: 760px) {
    width: 90%;
    margin: 0 auto;
  }
`;

const ContentTitle = styled.div`
  color: #053dc0;
  font-size: 30px;
  margin-bottom: 20px;
  font-weight: 700;

  @media screen and (max-width: 1024px) {
    font-size: 28px;
  }

  @media screen and (max-width: 760px) {
    margin-bottom: 15px;
    font-size: 26px;
  }
`;

const ContentText = styled.div`
  color: #686868;
  font-size: 15px;
  line-height: 25px;

  @media screen and (max-width: 1024px) {
    font-size: 13px;
    line-height: 20px;
  }

  @media screen and (max-width: 760px) {
    font-size: 12px;
  }
`;

export default Hospital;
