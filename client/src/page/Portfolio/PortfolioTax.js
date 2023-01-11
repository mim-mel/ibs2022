import styled from '@emotion/styled/macro';
import Fade from 'react-reveal/Fade';

const PortfolioTax = () => {
  return (
    <ContentWrap>
      <Fade bottom>
        <WhiteBox>
          <ImgBack>
            <Img url='image/tax-icon1.png' />
          </ImgBack>
          <TextBlock>
            <Title>경조사 비용처리</Title>
            <BoxText>상담내용</BoxText>
            <Text marginBottom>
              평소 만남이 잦은 A원장님은 경조사 및 개원 축하 방문이 많았지만
              비용처리가 가능한 것임을 몰랐습니다.
            </Text>
            <BoxText>컨설팅</BoxText>
            <Text>
              경조사 비용은 1건당 20만원의 한도로 비용처리가 가능합니다. 사업용
              통장의 적용란을 이용하여 경조사 내용을 적어 기록하도록 합니다.
              입증된 경조사 비용은 경비로 처리됩니다.
            </Text>
          </TextBlock>
        </WhiteBox>
      </Fade>
      <Fade bottom>
        <WhiteBox>
          <ImgBack>
            <Img url='image/tax-icon2.png' />
          </ImgBack>
          <TextBlock>
            <Title>가족명의로 회사 비품 구매</Title>
            <BoxText>상담내용</BoxText>
            <Text marginBottom>
              회사를 다니는 아내는 카드로 병원 관련 비품을 자주 구매했습니다.
            </Text>
            <BoxText>컨설팅</BoxText>
            <Text>
              가족 명의 카드로 구입한 병원업무 비용은 누락되었을 가능성이
              높습니다. 되도록 사업자 명의 카드로 일괄 구매하고 누락된 비용은
              업무 연관성 여부를 살펴 체크해야 합니다.
            </Text>
          </TextBlock>
        </WhiteBox>
      </Fade>
      <Fade bottom>
        <WhiteBox>
          <ImgBack>
            <Img url='image/tax-icon3.png' />
          </ImgBack>
          <TextBlock>
            <Title>1인 원장님의 비용관리 및 자금결제</Title>
            <BoxText>상담내용</BoxText>
            <Text marginBottom>
              홀로 동물병원을 운영하는 B원장님은 병원 업무 이외에도 비용관리와
              자금 결제 업무를 모두 혼자 해결해야 했습니다.
            </Text>
            <BoxText>컨설팅</BoxText>
            <Text>
              비용 전용 계좌를 만들어 정기적으로 발생하는 금액을 처리해야
              합니다. 공과금, 임대료, 직원급여 등을 자동이체 하면 고정비 파악이
              가능하고 세무조사 대응에도 큰 도움이 됩니다.
            </Text>
          </TextBlock>
        </WhiteBox>
      </Fade>
      <Fade bottom>
        <WhiteBox>
          <ImgBack>
            <Img url='image/tax-icon4.png' />
          </ImgBack>
          <TextBlock>
            <Title>페이닥터 고용</Title>
            <BoxText>상담내용</BoxText>
            <Text marginBottom>
              입소문 덕에 매출이 오르고 있어 페이닥터의 고용 여부 및
              페이닥터와의 세무 재무 분담이 효율성을 고민하셨습니다.
            </Text>
            <BoxText>컨설팅</BoxText>
            <Text>
              페이닥터의 급여와, 매출신장의 손익 분기점을 파악해야 합니다.
              매출과 비용 관련 업무는 가급적 원장님이 직접 하셔야 합니다.
            </Text>
          </TextBlock>
        </WhiteBox>
      </Fade>
      <Fade bottom>
        <WhiteBox marginBottom>
          <ImgBack>
            <Img url='image/tax-icon5.png' />
          </ImgBack>
          <TextBlock>
            <Title>상속증여 문제</Title>
            <BoxText>상담내용</BoxText>
            <Text marginBottom>
              임대사업을 운영하는 부모님을 두신 원장님은 종신보험 가입시 보험
              계약을 누구의 이름으로 계약해야 상속세 정세 측면에서 유리할지
              궁금해 하셨습니다.
            </Text>
            <BoxText>컨설팅</BoxText>
            <Text>
              소득이 있는 상속인 이름으로 계약되어야 부모님의 상속 재산이
              가산되지 않습니다. 가입 전 추정상속세를 계산하여 금액을
              설계합니다.
            </Text>
          </TextBlock>
        </WhiteBox>
      </Fade>
    </ContentWrap>
  );
};

const ContentWrap = styled.div`
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

const WhiteBox = styled.div`
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

const ImgBack = styled.div`
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

const Img = styled.div`
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

const TextBlock = styled.div`
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

const Title = styled.div`
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

const Text = styled.div`
  font-size: 13px;
  color: #686868;
  line-height: 20px;
  letter-spacing: -0.1px;
  margin-bottom: ${props => (props.marginBottom ? '10px' : 0)};

  @media screen and (max-width: 760px) {
    font-size: 11px;
    text-align: center;
    line-height: 18px;
    text-align: start;
  }
`;

const BoxText = styled.div`
  font-size: 12px;
  color: white;
  width: 70px;
  height: 25px;
  border-radius: 7px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #053dc0;
  margin-bottom: 5px;
`;

export default PortfolioTax;
