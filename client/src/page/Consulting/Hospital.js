import { Line, SubBanner, SubBannerTitle, Wrap } from '../Company';
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
      <Wrap>
        <SubBanner url='url(/image/submain2.jpg)'>
          <SubBannerTitle>CONSULTING</SubBannerTitle>
        </SubBanner>
        <ButtonsWrap>
          <LinkStyled to='/labor'>
            <Button color='white'>
              <ButtonImg src='/image/labor-consulting.png' />
              <ButtonText color='#053dc0' weight='900'>
                노무컨설팅
              </ButtonText>
            </Button>
          </LinkStyled>
          <LinkStyled to='/tax'>
            <Button color='white'>
              <ButtonImg src='/image/tax-consulting.png' />
              <ButtonText color='#053dc0' weight='900'>
                세무컨설팅
              </ButtonText>
            </Button>
          </LinkStyled>

          <LinkStyled to='/hospital'>
            <Button color='#053dc0'>
              <ButtonImg src='/image/hospital-open-consulting-w.png' />
              <ButtonText color='white' weight='600'>
                개원컨설팅
              </ButtonText>
            </Button>
          </LinkStyled>

          <LinkStyled to='/edu'>
            <Button color='white'>
              <ButtonImg src='/image/edu-consulting.png' />
              <ButtonText color='#053dc0' weight='900'>
                교육컨설팅
              </ButtonText>
            </Button>
          </LinkStyled>

          <LinkStyled to='/ad'>
            <Button color='white'>
              <ButtonImg src='/image/ad-consulting.png' />
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
        <Line />
      </Wrap>
    </div>
  );
};

const ButtonsWrap = styled.div`
  width: 860px;
  height: 123px;
  margin: 100px auto;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.div`
  height: 123px;
  width: 123px;
  background-color: ${props => props.color};
  border-radius: 35px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 12px;
  position: relative;
  top: 0;
  left: 0;
  cursor: pointer;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    top: -10px;
  }
`;

const ButtonImg = styled.div`
  width: 45px;
  height: 50px;
  background-size: 45px;
  background-repeat: no-repeat;
  background-image: url(${props => props.src});
  margin-bottom: ${props => props.marginBottom};
`;

const ButtonText = styled.div`
  font-size: 14px;
  color: ${props => props.color};
  font-weight: ${props => props.weight};
`;

export default Hospital;
