import { Line, SubBanner, SubBannerTitle, Wrap } from '../Company';
import { LinkStyled } from '../../component/Nav';
import styled from '@emotion/styled';
import Fade from 'react-reveal/Fade';

const Labor = () => {
  return (
    <div>
      <Wrap backGround='#fcfcfc'>
        <SubBanner
          url='url(image/submain2.jpg)'
          positionIpad='-700px -90px'
          positionPhone='-450px -0px'
        >
          <SubBannerTitle>CONSULTING</SubBannerTitle>
        </SubBanner>

        <ButtonsWrap>
          <LinkStyled to='/labor'>
            <Button color='#053dc0' marginBottomPhone>
              <ButtonImg
                src='image/labor-consulting-w.png'
                marginBottom='5px'
              />
              <ButtonText color='white' weight='600'>
                노무컨설팅
              </ButtonText>
            </Button>
          </LinkStyled>

          <LinkStyled to='/tax'>
            <Button color='white'>
              <ButtonImg src='image/tax-consulting.png' marginBottom='9px' />
              <ButtonText color='#053dc0' weight='900'>
                세무컨설팅
              </ButtonText>
            </Button>
          </LinkStyled>

          <LinkStyled to='/hospital'>
            <Button color='white'>
              <ButtonImg
                src='image/hospital-open-consulting.png'
                marginBottom='6px'
              />
              <ButtonText color='#053dc0' weight='900'>
                개원컨설팅
              </ButtonText>
            </Button>
          </LinkStyled>

          <LinkStyled to='/edu'>
            <Button color='white' positionPhone>
              <ButtonImg src='image/edu-consulting.png' marginBottom='6px' />
              <ButtonText color='#053dc0' weight='900'>
                교육컨설팅
              </ButtonText>
            </Button>
          </LinkStyled>

          <LinkStyled to='/ad'>
            <Button color='white' positionPhone>
              <ButtonImg src='image/ad-consulting.png' marginBottom='3px' />
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
              <MainImg url='image/labor1.jpg' />
            </MainImgWrap>
          </Fade>

          <Fade bottom>
            <MainTextBlock>
              <MainTitle>노무 컨설팅</MainTitle>
              <MainText>
                동물병원을 운영하는 동시에 매년 변경되는 근로기준법에 발맞추어
                근로계약 시 채결해야 하는 각종 서류, 근로 규칙 준수 등을
                체크하는 것은 많은 시간과 노력을 요하는 일입니다. IBS파트너스는
                최저임금 인상 및 개정된 근로기준법에 준하여 사업장 실정에 맞는
                IBS만의 특별한 노무서비스를 제공해드리고 있습니다.
              </MainText>
            </MainTextBlock>
          </Fade>
        </MainImgTextWrap>

        <LaborContentsWrap>
          <Fade bottom delay={0}>
            <LaborContentsBox>
              <BoxImage url='image/labor2.jpg' />
              <BoxTitle>근로계약서 연봉계약서 설계</BoxTitle>
              <BoxText>
                전 직원들을 대상으로 근로계약서 연봉계약서 등의 모든 서류를
                관리하는 것은 많은 시간과 노동을 요하는 일입니다. 혼자서 병원의
                모든 부분을 직접 케어하시기 어려운 원장님들을 위해서
                IBS파트너스는 새로운 직원의 근로계약 체결 시, 매 해 연봉협상시에
                병원에 방문하여 원장님의 업무를 도와드립니다.
              </BoxText>
            </LaborContentsBox>
          </Fade>

          <Fade bottom delay={500}>
            <LaborContentsBox>
              <BoxImage url='image/labor3.jpg' />
              <BoxTitle>임금설계, 임금대장 작성</BoxTitle>
              <BoxText>
                IBS파트너스는 매해 개정되는 최신 근로기준법에 준하여 병원실정에
                맞는 임금설계와 임금대장 작성을 도와드리고 있습니다. 직원별
                근무시간에 맞는 최저임금 계산 및 매월 급여대장을 작성해 드리며
                2021년 11월부터 근로자에게 의무적으로 교부해야 하는 임금명세서
                또한 준비해 드리고 있습니다.
              </BoxText>
            </LaborContentsBox>
          </Fade>

          <Fade bottom delay={1000}>
            <LaborContentsBox middle>
              <BoxImage url='image/labor4.jpg' />
              <BoxTitle>근로자의 사직, 퇴직금 산정</BoxTitle>
              <BoxText>
                근로자의 퇴사 시 사직원을 못 받게 되는 경우가 빈번하게
                발생됩니다. 사직원을 받지 못하는 경우에 발생할 수 있는 문제들을
                미연에 방지하기 위해서 IBS파트너스는 근로자의 퇴사시 대면 또는
                비대면으로 사직원을 대신 수령해 드립니다. 사직원 수령 후
                사직처리까지 완료해 드립니다.
              </BoxText>
            </LaborContentsBox>
          </Fade>
        </LaborContentsWrap>
      </Wrap>
    </div>
  );
};

export const ButtonsWrap = styled.div`
  width: 860px;
  height: 123px;
  margin: 100px auto;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    width: 80%;
    margin: 100px auto 70px auto;
  }

  @media screen and (max-width: 760px) {
    display: grid;
    grid-template-columns: 28% 28% 28%;
    margin: 50px 0 50px 0;
  }
`;

export const Button = styled.div`
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

  @media screen and (max-width: 1024px) {
    height: 100px;
    width: 100px;
    border-radius: 25px;
  }

  @media screen and (max-width: 760px) {
    height: 85px;
    width: 85px;
    border-radius: 20px;
    position: relative;
    margin-bottom: ${props => (props.marginBottomPhone ? '20px' : '')};
    transform: ${props => (props.positionPhone ? 'translate(65%, 0)' : '')};
  }
`;

export const ButtonImg = styled.div`
  width: 45px;
  height: 50px;
  background-size: 45px;
  background-repeat: no-repeat;
  background-image: url(${props => props.src});
  margin-bottom: ${props => props.marginBottom};

  @media screen and (max-width: 1024px) {
    transform: scale(0.9);
  }

  @media screen and (max-width: 760px) {
    transform: scale(0.8);
    margin-bottom: 0;
  }
`;

export const ButtonText = styled.div`
  font-size: 14px;
  color: ${props => props.color};
  font-weight: ${props => props.weight};

  @media screen and (max-width: 1024px) {
    font-size: 13px;
  }

  @media screen and (max-width: 760px) {
    font-size: 11px;
  }
`;

export const MainImgTextWrap = styled.div`
  width: 1100px;
  height: auto;
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  @media screen and (max-width: 1024px) {
    width: 80%;
    margin-top: 0;
  }

  @media screen and (max-width: 760px) {
    width: 80%;
    display: grid;
    grid-template-columns: 100%;
  }
`;

export const MainImgWrap = styled.div`
  @media screen and (max-width: 760px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 90px;
    position: relative;
  }
`;

export const MainImgBack = styled.div`
  width: 346px;
  height: 346px;
  background-color: #053dc0;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 50px;

  @media screen and (max-width: 1024px) {
    width: 270px;
    height: 270px;
    border-radius: 45px;
  }

  @media screen and (max-width: 760px) {
    width: 240px;
    height: 240px;
    border-radius: 40px;
    top: 0;
    left: 8%;
  }
`;

export const MainImg = styled.div`
  width: 346px;
  height: 346px;
  background-image: url(${props => props.url});
  background-size: 346px;
  z-index: 10;
  position: relative;
  transform: translate(35px, 35px);
  border-radius: 50px;

  @media screen and (max-width: 1024px) {
    width: 270px;
    height: 270px;
    background-size: 270px;
    border-radius: 45px;
    transform: translate(30px, 30px);
  }

  @media screen and (max-width: 760px) {
    width: 240px;
    height: 240px;
    border-radius: 40px;
    transform: translate(20px, 20px);
  }
`;

export const MainTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    width: 300px;
    margin-left: auto;
  }

  @media screen and (max-width: 760px) {
    margin: auto;
    margin-top: 30px;
  }
`;

export const MainTitle = styled.div`
  font-size: 35px;
  color: #053dc0;
  font-weight: 800;
  margin: 30px 0;
  margin-bottom: 30px;

  @media screen and (max-width: 1024px) {
    font-size: 30px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 760px) {
    font-size: 25px;
    margin-bottom: 15px;
  }
`;

export const MainText = styled.div`
  font-size: 17px;
  line-height: 30px;
  color: #686868;

  @media screen and (max-width: 1024px) {
    font-size: 13px;
    line-height: 23px;
  }

  @media screen and (max-width: 760px) {
    font-size: 12px;
  }
`;

const LaborContentsWrap = styled.div`
  width: 1100px;
  margin-top: 170px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    width: 80%;
    margin-top: 130px;
    display: grid;
    grid-template-columns: 48% 48%;
  }

  @media screen and (max-width: 760px) {
    grid-template-columns: 100%;
    margin-top: 90px;
    margin-bottom: 50px;
  }
`;

const LaborContentsBox = styled.div`
  width: 345px;
  height: 410px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;
  margin-bottom: 150px;
  border-radius: 40px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 0;
  transition: 0.3s;

  &:hover {
    top: -10px;
  }

  @media screen and (max-width: 1024px) {
    width: 310px;
    height: 370px;
    margin-bottom: 50px;
    position: relative;
    transform: ${props => (props.middle ? 'translate(55%, 0)' : '')};
    margin-right: 0;
  }

  @media screen and (max-width: 760px) {
    transform: ${props => (props.middle ? 'translate(0, 0)' : '')};
    margin: 0 auto;
    margin-bottom: 40px;
    width: 280px;
    height: 340px;
  }
`;

const BoxImage = styled.div`
  width: 280px;
  height: 190px;
  background-image: url(${props => props.url});
  border-radius: 30px;
  margin-bottom: 20px;

  @media screen and (max-width: 1024px) {
    width: 250px;
    height: 160px;
  }
`;

const BoxTitle = styled.div`
  font-size: 20px;
  color: #053dc0;
  font-weight: 700;
  margin-bottom: 10px;

  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }

  @media screen and (max-width: 760px) {
    font-size: 18px;
  }
`;

const BoxText = styled.div`
  font-size: 13px;
  line-height: 18px;
  color: #686868;
  letter-spacing: -0.1px;
  width: 80%;

  @media screen and (max-width: 1024px) {
    font-size: 12px;
  }

  @media screen and (max-width: 760px) {
    font-size: 11px;
    line-height: 16px;
  }
`;

export default Labor;
