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

const Ad = () => {
  return (
    <div>
      <Wrap>
        <SubBanner url='url(/image/submain2.jpg)'>
          <SubBannerTitle>CONSULTING</SubBannerTitle>
        </SubBanner>
        <ButtonsWrap>
          <LinkStyled to='/labor'>
            <Button color='white'>
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
            <Button color='white'>
              <ButtonImg src='/image/edu-consulting.png' marginBottom='6px' />
              <ButtonText color='#053dc0' weight='900'>
                교육컨설팅
              </ButtonText>
            </Button>
          </LinkStyled>

          <LinkStyled to='/ad'>
            <Button color='#053dc0'>
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

export default Ad;
