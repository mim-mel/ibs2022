import styled from '@emotion/styled/macro';
import { useState } from 'react';

const ConsultingSection = () => {
  const [toggle, setToggle] = useState(false);

  const onConsulting = () => {
    setToggle(false);
  };

  const onService = () => {
    setToggle(true);
  };

  return (
    <Wrap>
      <TitleBlock>
        <ArrowBlock onClick={onConsulting}>
          <Arrow1 src='/image/arrow-fill.png' toggle={toggle} />
          <Consulting toggle={toggle}>Our Consulting</Consulting>
        </ArrowBlock>
        <ArrowBlock onClick={onService}>
          <Arrow2 src='/image/arrow-fill.png' toggle={toggle} />
          <Service toggle={toggle}>Our Service</Service>
        </ArrowBlock>
      </TitleBlock>
      <ImgIconWrap>
        <Img toggle={toggle} />
        <IconWrap>
          {/* icon1 */}
          <IconBlock>
            <Icon1 toggle={toggle} />
            <IconTextBlock>
              <IconTextTitle>
                {toggle ? '정부지원금' : '노무컨설팅'}
              </IconTextTitle>
              <IconTextInfo>
                {toggle
                  ? '내일채움공제, 고용안정 장려금 등'
                  : '근로계약서, 임금대장, 퇴직금 산정 등'}
              </IconTextInfo>
            </IconTextBlock>
          </IconBlock>
          {/* icon2 */}
          <IconBlock>
            <Icon2 toggle={toggle} />
            <IconTextBlock>
              <IconTextTitle>
                {toggle ? '리스크관리' : '세무컨설팅'}
              </IconTextTitle>
              <IconTextInfo>
                {toggle
                  ? '직원혹은 고객과의 분쟁 해결'
                  : '소득세 관리, 맞춤형 절세 방안 제시 등'}
              </IconTextInfo>
            </IconTextBlock>
          </IconBlock>
          {/* icon3 */}
          <IconBlock>
            <Icon3 toggle={toggle} />
            <IconTextBlock>
              <IconTextTitle>
                {toggle ? '법인설립' : '개원컨설팅'}
              </IconTextTitle>
              <IconTextInfo>
                {toggle
                  ? '법인설립 절차 대리진행'
                  : '동업계약서 작성, 인테리어 등'}
              </IconTextInfo>
            </IconTextBlock>
          </IconBlock>
          {/* icon4 */}
          <IconBlock>
            <Icon4 toggle={toggle} />
            <IconTextBlock>
              <IconTextTitle>
                {toggle ? '법인청산' : '교육컨설팅'}
              </IconTextTitle>
              <IconTextInfo>
                {toggle
                  ? '법인청산 절차 대리진행'
                  : 'C.S 교육, 법정 의무 교육 등'}
              </IconTextInfo>
            </IconTextBlock>
          </IconBlock>
          {/* icon5 */}
          <IconBlock>
            <Icon5 toggle={toggle} />
            <IconTextBlock>
              <IconTextTitle>
                {toggle ? '감정평가' : '홍보컨설팅'}
              </IconTextTitle>
              <IconTextInfo>
                {toggle
                  ? '감정평가 신속 상담 지원 및 진행'
                  : '홈페이지형 블로그, 웹사이트 제작'}
              </IconTextInfo>
            </IconTextBlock>
          </IconBlock>
        </IconWrap>
      </ImgIconWrap>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 1100px;
  height: 800px;
  margin: 150px auto;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1400px) {
    width: 950px;
  }

  @media screen and (max-width: 1024px) {
    width: 80%;
    margin: 80px auto;
  }

  @media screen and (max-width: 768px) {
    margin: 40px auto;
  }
`;

const TitleBlock = styled.div`
  width: 300px;
  height: 130px;

  @media screen and (max-width: 1024px) {
    height: auto;
  }
`;

const ArrowBlock = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Arrow1 = styled.img`
  width: 15px;
  height: 15px;
  display: ${props => (props.toggle ? 'none' : 'block')};
  margin-right: 10px;
  position: absolute;
  left: -10%;

  @media screen and (max-width: 768px) {
    width: 10px;
    height: 10px;
    left: -6%;
  }
`;

const Arrow2 = styled.img`
  width: 15px;
  height: 15px;
  display: ${props => (props.toggle ? 'block' : 'none')};
  margin-right: 10px;
  position: absolute;
  left: -10%;

  @media screen and (max-width: 768px) {
    width: 10px;
    height: 10px;
    left: -6%;
  }
`;

const Consulting = styled.div`
  font-family: 'Lexend Deca', sans-serif;
  font-size: 23px;
  font-weight: ${props => (props.toggle ? '500' : '600')};
  color: ${props => (props.toggle ? '#646464' : '#0559ce')};

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const Service = styled.div`
  font-family: 'Lexend Deca', sans-serif;
  font-size: 23px;
  font-weight: ${props => (props.toggle ? '600' : '500')};
  color: ${props => (props.toggle ? '#0559ce' : '#646464')};

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const ImgIconWrap = styled.div`
  display: grid;
  grid-template-columns: 60% 28%;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1400px) {
    grid-template-columns: 60% 35%;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 60% 38%;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
    justify-content: center;
  }
`;

const Img = styled.div`
  background-image: ${props =>
    props.toggle
      ? 'url(/image/service-img.jpg)'
      : 'url(/image/consulting-img.jpg)'};
  width: 600px;
  height: 600px;
  border-radius: 40px;
  transition: 0.2s;

  @media screen and (max-width: 1400px) {
    width: 550px;
    height: 550px;
    background-size: 550px;
  }

  @media screen and (max-width: 1024px) {
    width: 330px;
    height: 330px;
    background-size: 330px;
  }

  @media screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
    background-size: 300px;
    margin: 30px auto;
  }
`;

const IconWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const IconBlock = styled.div`
  display: flex;
  width: 100%;
  padding: 35px 30px;
  border-radius: 20px;
  transition: 0.3s;
  position: relative;
  top: 0;
  left: 0;
  cursor: pointer;
  align-items: center;

  @media (hover: hover) {
    &:hover {
      background-color: white;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;
      position: relative;
      top: -10px;
      left: -10px;
    }
  }

  @media screen and (max-width: 1400px) {
    padding: 30px 25px;
  }

  @media screen and (max-width: 1024px) {
    padding: 15px 15px;
  }

  @media screen and (max-width: 768px) {
    padding: 20px 30px;
  }
`;

const IconTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;

  @media screen and (max-width: 1024px) {
    margin-left: 20px;
  }
`;

const Icon1 = styled.div`
  background-image: ${props =>
    props.toggle
      ? 'url(/image/funds-service.png)'
      : 'url(/image/labor-consulting.png)'};
  width: 50px;
  height: 50px;
  background-repeat: no-repeat;

  @media screen and (max-width: 1024px) {
    width: 40px;
    height: 40px;
    background-size: 38px;
  }
`;

const Icon2 = styled.div`
  background-image: ${props =>
    props.toggle
      ? 'url(/image/risk-service.png)'
      : 'url(/image/tax-consulting.png)'};
  width: 50px;
  height: 50px;
  background-repeat: no-repeat;

  @media screen and (max-width: 1024px) {
    width: 40px;
    height: 40px;
    background-size: 38px;
  }
`;

const Icon3 = styled.div`
  background-image: ${props =>
    props.toggle
      ? 'url(/image/corporation-consulting.png)'
      : 'url(/image/hospital-open-consulting.png)'};
  width: 50px;
  height: 50px;
  background-repeat: no-repeat;

  @media screen and (max-width: 1024px) {
    width: 40px;
    height: 40px;
    background-size: 38px;
  }
`;

const Icon4 = styled.div`
  background-image: ${props =>
    props.toggle
      ? 'url(/image/corporation-x-consulting.png)'
      : 'url(/image/edu-consulting.png)'};
  width: 50px;
  height: 50px;
  background-repeat: no-repeat;

  @media screen and (max-width: 1024px) {
    width: 40px;
    height: 40px;
    background-size: 38px;
  }
`;

const Icon5 = styled.div`
  background-image: ${props =>
    props.toggle
      ? 'url(/image/valuation-service.png)'
      : 'url(/image/ad-consulting.png)'};
  width: 50px;
  height: 50px;
  background-repeat: no-repeat;

  @media screen and (max-width: 1024px) {
    width: 40px;
    height: 40px;
    background-size: 38px;
  }
`;

const IconTextTitle = styled.div`
  font-size: 20px;
  color: #0559ce;
  font-weight: 700;
  margin-bottom: 10px;

  @media screen and (max-width: 1024px) {
    font-size: 17px;
  }
`;

const IconTextInfo = styled.div`
  font-size: 14px;
  color: #646464;

  @media screen and (max-width: 1024px) {
    font-size: 12px;
  }
`;

export default ConsultingSection;
