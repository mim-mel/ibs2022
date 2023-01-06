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

const CompanyX = () => {
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
            <ButtonImg src='/image/funds-service-w.png' marginBottom='5px' />
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
    </Wrap>
  );
};

export default CompanyX;
