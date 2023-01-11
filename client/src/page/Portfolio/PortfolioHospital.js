import styled from '@emotion/styled/macro';
import Fade from 'react-reveal/Fade';

const PortfolioHospital = () => {
  return (
    <ContentWrap>
      <Fade bottom>
        <WhiteBox>
          <ImgBack>
            <Img url='image/hospital-icon1.png' />
          </ImgBack>
          <TextBlock>
            <Title>24시 동물병원 개원 사례</Title>
            <Text>
              24시 동물의료센터는 IBS파트너스와 함께 개원 준비를 진행하였습니다.
              동업계약서 작성, 직원 근무형태 및 인력충원에 대한 부분과
              정부지원금 활용을 통해 최단기간 정상화에 돌입하였고 전반적인
              서비스에 굉장히 만족하셨으며 현재도 지속적으로 관리를 받고
              계십니다.
            </Text>
          </TextBlock>
        </WhiteBox>
      </Fade>
      <Fade bottom>
        <WhiteBox>
          <ImgBack>
            <Img url='image/hospital-icon2.png' />
          </ImgBack>
          <TextBlock>
            <Title>3인 동업개원</Title>
            <Text>
              현재 금융시스템에서는 동업사업자보다 개인 단독 사업자의 대출
              금액이 큽니다. 때문에 동업 개업시에도 단독사업자로 처리를 해놓는
              경우가 많은데, 이런 경우에 문제는 3명의 동업자 중 1명에게만대출,
              리스크 등의 법정 책임이 과중하게 지워진다는 것입니다.
              IBS파트너스는 각 동업자간의 재정 상태를 분석하고 충분한 대화와
              질문을 이끌어 리스크를 최소화시켜 드립니다. 현장에서 맞춤형
              동업계약서를 작성해 드리며 추후 발생할 수 있는 문제점까지
              최소화시켜 드립니다.
            </Text>
          </TextBlock>
        </WhiteBox>
      </Fade>
      <Fade bottom>
        <WhiteBox marginBottom>
          <ImgBack>
            <Img url='image/hospital-icon3.png' />
          </ImgBack>
          <TextBlock>
            <Title>준공 미완료 건물 계약금 반환소송</Title>
            <Text>
              신도시에 개원을 준비하는 A원장님은 아직 준공 전인 건물에 보증금의
              약 10%(1500만원)을 걸어 부동산 계약을 하셨으나 시간이 지나고
              개원을 준비해야하는 시기까지 준공이 나지 않아 부득이하게 다른
              위치에 새로이 부동산 임대차 계약을 진행하게 되었습니다.하지만
              부동산 계약을 위해 걸어놓았던 1500만원을 되돌려받지 못하셨습니다.
              이에 IBS파트너스는 법률자문 및 소솔을 통해 1500만원의 보증금을
              받아 드렸고 원만한 합의를 이끌어 내었습니다.
            </Text>
          </TextBlock>
        </WhiteBox>
      </Fade>
    </ContentWrap>
  );
};

export const ContentWrap = styled.div`
  width: 1300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 48.5% 48.5%;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    width: 80%;
    grid-template-columns: 100%;
  }

  @media screen and (max-width: 760px) {
  }
`;

export const WhiteBox = styled.div`
  width: 100%;
  height: 270px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;
  border-radius: 30px;
  position: relative;
  top: 0;
  transition: 0.3s;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: ${props => (props.marginBottom ? '150px' : '40px')};
  display: grid;
  grid-template-columns: 30% 55%;
  justify-content: space-between;

  &:hover {
    top: -10px;
  }

  @media screen and (max-width: 1024px) {
    height: 250px;
    grid-template-columns: 30% 60%;
    margin-bottom: ${props => (props.marginBottom ? '100px' : '40px')};
  }

  @media screen and (max-width: 760px) {
    grid-template-columns: 100%;
    height: auto;
    margin-bottom: ${props => (props.marginBottom ? '70px' : '40px')};
  }
`;

export const ImgBack = styled.div`
  width: 230px;
  height: 230px;
  background-color: #053dc0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  @media screen and (max-width: 1024px) {
    width: 210px;
    height: 210px;
  }

  @media screen and (max-width: 760px) {
    width: 100%;
    border-radius: 30px;
    height: 180px;
  }
`;

export const Img = styled.div`
  width: 125px;
  height: 125px;
  background-image: url(${props => props.url});
  background-size: 125px;

  @media screen and (max-width: 1024px) {
    width: 110px;
    height: 110px;
    background-size: 110px;
  }
`;

export const TextBlock = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding-right: 15px;

  @media screen and (max-width: 760px) {
    margin: 0;
    padding: 0;
  }
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 800;
  color: #053dc0;
  margin-bottom: 20px;

  @media screen and (max-width: 760px) {
    font-size: 18px;
    margin: 20px 0 15px 0;
    text-align: center;
  }
`;

export const Text = styled.div`
  font-size: 13px;
  color: #686868;
  line-height: 20px;
  letter-spacing: -0.1px;

  @media screen and (max-width: 760px) {
    font-size: 11px;
    text-align: center;
    line-height: 18px;
  }
`;

export default PortfolioHospital;
