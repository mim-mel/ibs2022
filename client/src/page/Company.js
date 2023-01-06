import styled from '@emotion/styled/macro';
import Fade from 'react-reveal/Fade';

const Company = () => {
  return (
    <Wrap>
      <SubBanner url='url(/image/submain1.jpg)'>
        <SubBannerTitle>COMPANY</SubBannerTitle>
      </SubBanner>
      <Fade bottom>
        <AboutBlock>
          <Fade bottom delay={1000}>
            <AboutImg src='/image/about-img.jpg' />
          </Fade>

          <AboutTextBlock>
            <Fade bottom delay={500}>
              <AboutTitle>About IBS</AboutTitle>
            </Fade>

            <Fade bottom delay={700}>
              <AboutText margin>
                IBS 파트너스는 지금까지 전국 500여곳의 동물병원 원장님과
                함께했습니다. 동물병원 전담팀을 구성하고 있는 IBS파트너스는
                세무, 노무, 교육, 개원 등 관리에 필요한 전 분야에 걸쳐 도움을
                드릴 수 있습니다. 다년간의 경험과 노하우로 정말 도움이 되는
                솔루션을 제공하겠습니다.
              </AboutText>
            </Fade>

            <Fade bottom delay={900}>
              <AboutText>
                IBS 파트너스와 함께라면 더 성공적으로 동물병원을 운영할 수
                있습니다. 세무, 노무, 홍보, 리스크 관리까지 동물병원 운영에
                필요한 모든 분야에 걸쳐 IBS의 전문적인 컨설팅을 받을 수
                있습니다.
              </AboutText>
            </Fade>
          </AboutTextBlock>
        </AboutBlock>
      </Fade>
      <Line />
      <Fade bottom>
        <IbsMapTitle>IBS Map</IbsMapTitle>
      </Fade>
      <Fade bottom>
        <IbsMapImg src='/image/organization.jpg' />
      </Fade>
    </Wrap>
  );
};

export const Line = styled.div`
  width: 100%;
  height: 0.1px;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const Wrap = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.backGround};
`;

export const SubBanner = styled.div`
  width: 100%;
  height: 630px;
  background-image: ${props => props.url};
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    height: 500px;
    background-position: ${props => props.positionIpad};
  }

  @media screen and (max-width: 760px) {
    height: 350px;
    background-size: 300%;
    background-position: ${props => props.positionPhone};
  }
`;

export const SubBannerTitle = styled.div`
  font-size: 60px;
  letter-spacing: 5px;
  color: white;
  font-family: 'Lexend Deca', sans-serif;
  font-weight: 500;
  margin-top: 50px;

  @media screen and (max-width: 1024px) {
    font-size: 45px;
  }

  @media screen and (max-width: 760px) {
    font-size: 30px;
    letter-spacing: 3px;
  }
`;

const AboutBlock = styled.div`
  position: relative;
  width: 1000px;
  height: 530px;
  background-color: #053dc0;
  margin: 230px auto 100px auto;
  border-radius: 50px;

  @media screen and (max-width: 1024px) {
    width: 80%;
    height: 370px;
    margin: 150px auto 100px auto;
  }

  @media screen and (max-width: 760px) {
    height: 430px;
    border-radius: 30px;
    margin: 290px auto 80px auto;
  }
`;

const AboutImg = styled.img`
  position: absolute;
  border: 15px white solid;
  top: -60px;
  left: 80px;

  @media screen and (max-width: 1024px) {
    transform: scale(0.7);
    top: -130px;
    left: 0;
  }

  @media screen and (max-width: 760px) {
    transform: scale(0.6);
    top: -300px;
    left: -11%;
  }
`;

const AboutTextBlock = styled.div`
  width: 45%;
  height: 100%;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 5px;

  @media screen and (max-width: 760px) {
    width: 92%;
    margin: 0;
    padding: 0;
    margin-left: 12%;
    padding-top: 55px;
  }
`;

const AboutTitle = styled.div`
  color: white;
  font-size: 37px;
  font-weight: 500;
  font-family: 'Lexend Deca', sans-serif;
  margin-bottom: 30px;

  @media screen and (max-width: 1024px) {
    font-size: 32px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 760px) {
    font-size: 25px;
    margin-bottom: 15px;
  }
`;

const AboutText = styled.div`
  color: white;
  font-size: 14px;
  font-weight: 300;
  width: 85%;
  line-height: 27px;
  margin-bottom: ${props => (props.margin ? '20px' : '0')};

  @media screen and (max-width: 1024px) {
    font-size: 11px;
    line-height: 20px;
    margin-bottom: ${props => (props.margin ? '15px' : '0')};
  }
`;

const IbsMapTitle = styled.div`
  color: #053dc0;
  font-size: 37px;
  font-weight: 600;
  font-family: 'Lexend Deca', sans-serif;
  margin: 100px auto;

  @media screen and (max-width: 760px) {
    margin: 80px auto;
    font-size: 30px;
  }
`;

const IbsMapImg = styled.img`
  width: 850px;
  height: auto;
  margin-bottom: 150px;

  @media screen and (max-width: 1024px) {
    width: 650px;
  }

  @media screen and (max-width: 760px) {
    width: 350px;
    margin-bottom: 100px;
  }
`;
export default Company;
