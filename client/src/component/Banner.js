import styled from '@emotion/styled/macro';
import { useEffect, useState } from 'react';

const Banner = () => {
  const [count, setCount] = useState(0);
  const elementLength = 6;

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => (prev === elementLength - 1 ? 0 : prev + 1));
    }, 2800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <BannerWrap>
      <BannerContentsWrap>
        <BannerContentsBlock>
          <BannerTitie>IBS PARTNERS</BannerTitie>
          <SubTitle>동물병원 컨설팅 전문회사</SubTitle>
          <Text>
            IBS 파트너스는 동물병원 전담팀을 구성하고 있습니다.
            <br />
            다년간의 경험을 통해 동물병원 원장님들에게 합리적이고
            <br />
            현실적인 관리 솔루션을 제공해 드리겠습니다.
          </Text>
          <Button>MORE INFO</Button>
        </BannerContentsBlock>
      </BannerContentsWrap>
      <SliderWrap>
        <SliderBlock count={count}>
          <img src='/image/main2.jpg' alt='main-img2' />
          <img src='/image/main1.jpg' alt='main-img1' />
          <img src='/image/main2.jpg' alt='main-img2' />
          <img src='/image/main1.jpg' alt='main-img1' />
          <img src='/image/main2.jpg' alt='main-img2' />
          <img src='/image/main1.jpg' alt='main-img1' />
        </SliderBlock>
      </SliderWrap>
    </BannerWrap>
  );
};

const BannerWrap = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const BannerContentsWrap = styled.div`
  width: 1100px;
  height: 100%;
  margin: 0 auto;
  position: relative;
`;

const BannerContentsBlock = styled.div`
  width: 50%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 0%;
  transform: translate(0, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BannerTitie = styled.h1`
  font-family: 'Lexend Deca', sans-serif;
  font-size: 90px;
  font-weight: 800;
  color: #053dc0;
  margin: 0;
  margin-bottom: 20px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  color: #053dc0;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Text = styled.div`
  font-size: 17px;
  color: #787878;
  line-height: 33px;
`;

const Button = styled.button`
  margin-top: 40px;
  font-family: 'Lexend Deca', sans-serif;
  font-size: 17px;
  font-weight: 500;
  color: #053dc0;
  border: 2px solid #053dc0;
  width: 160px;
  padding: 13px;
  background-color: white;
  border-radius: 10px;
  transition: 0.2s;

  &:hover {
    background-color: #053dc0;
    border: 2px solid #053dc0;
    color: white;
    font-weight: 500;
  }
`;

const SliderWrap = styled.div`
  width: 50%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  font-size: 100px;
  top: 0;
  left: 57%;
  border-end-start-radius: 200px;
`;

const SliderBlock = styled.div`
  display: flex;
  position: relative;
  top: 0;
  left: ${props => '-' + props.count * 834 + 'px'};
  transition: 0.5s;

  img {
    height: 100%;
  }
`;

export default Banner;
