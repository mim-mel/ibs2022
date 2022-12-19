import styled from '@emotion/styled/macro';
import { useEffect, useState } from 'react';

const portfolioArray = [
  {
    src: '/image/sp1.jpg',
    name: '넬 동물의료센터',
  },
  {
    src: '/image/sp2.jpg',
    name: '금천24시 K동물의료센터',
  },
  {
    src: '/image/sp3.jpg',
    name: '다나을 24시 동물병원',
  },
  {
    src: '/image/sp4.jpg',
    name: '아인스 동물병원',
  },
  {
    src: '/image/sp5.jpg',
    name: '다솜동물메디컬센터',
  },
  {
    src: '/image/sp6.jpg',
    name: '메타동물의료센터',
  },
  {
    src: '/image/sp7.jpg',
    name: '동탄청주 24시 이음동물의료센터',
  },
  {
    src: '/image/sp8.jpg',
    name: '알파동물메디컬센터',
  },
  {
    src: '/image/sp9.jpg',
    name: '인방동물의료센터',
  },
  {
    src: '/image/sp10.jpg',
    name: '리본동물의료센터',
  },
  {
    src: '/image/sp11.jpg',
    name: 'FM동물메디컬센터',
  },
  {
    src: '/image/sp12.jpg',
    name: '아이케어동물병원',
  },
  {
    src: '/image/sp13.jpg',
    name: '안심동물의료센터',
  },
];

const PortfolioSection = () => {
  const [count, setCount] = useState(0);
  const elementLength = 10;

  const onRight = () => {
    if (count < 10) {
      setCount(prev => prev + 1);
      console.log(count);
    } else {
      setCount(prev => 0);
    }
  };

  const onLeft = () => {
    if (count > 0 && count < 10) {
      setCount(prev => prev - 1);
      console.log(count);
    } else {
      setCount(prev => 0);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => (prev > elementLength - 1 ? 0 : prev + 1));
    }, 2800);

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return (
    <PortfolioWrap>
      <TextWrap>
        <TextTitle>Portfolio</TextTitle>
        <TextDesc>
          IBS 파트너스는 지금까지 전국 500여곳의 동물병원 원장님과 함께했습니다.
          <br />
          축적된 데이터와 경험을 바탕으로 동물병원에 가장 효과적인 컨설팅을
          제공해드립니다.
        </TextDesc>
        <ArrowLeft src='/image/arrow-side.png' onClick={onLeft} />
        <ArrowRight src='/image/arrow-side.png' onClick={onRight} />
      </TextWrap>
      <PortfolioImgWrap1>
        <PortfolioImgWrap2>
          {portfolioArray.map((item, i) => (
            <PortfolioImgBlock key={i} count={count}>
              <PortfolioImg src={item.src} />
              <PortfolioImgBack />
              <PortfolioArrow />
              <PortfolioTextBlcok>
                <PortfolioText>PORTFOLIO</PortfolioText>
                <PortfolioTextName>{item.name}</PortfolioTextName>
              </PortfolioTextBlcok>
            </PortfolioImgBlock>
          ))}
        </PortfolioImgWrap2>
      </PortfolioImgWrap1>
    </PortfolioWrap>
  );
};

const PortfolioWrap = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    margin: 80px 0;
  }

  @media screen and (max-width: 760px) {
    margin: 50px 0;
  }
`;

const TextWrap = styled.div`
  width: 1100px;
  height: 200px;
  margin: 0 auto;
  position: relative;
  margin-top: 100px;

  @media screen and (max-width: 1400px) {
    width: 1000px;
  }

  @media screen and (max-width: 1024px) {
    width: 80vw;
    margin-top: 80px;
    height: 180px;
  }
`;

const ArrowLeft = styled.div`
  position: absolute;
  width: 35px;
  height: 35px;
  background-color: #0559ce;
  border-radius: 50%;
  left: 87%;
  background-image: url(/image/arrow-side.png);
  background-size: 17px;
  background-repeat: no-repeat;
  background-position: 45%;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    width: 30px;
    height: 30px;
    left: 85%;
    top: 85%;
  }

  @media screen and (max-width: 760px) {
    width: 25px;
    height: 25px;
    left: 83%;
    top: 75%;
    background-size: 13px;
  }
`;

const ArrowRight = styled.div`
  position: absolute;
  width: 35px;
  height: 35px;
  background-color: #0559ce;
  border-radius: 50%;
  left: 93%;
  transform: rotate(180deg);
  background-image: url(/image/arrow-side.png);
  background-size: 17px;
  background-repeat: no-repeat;
  background-position: 45%;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    width: 30px;
    height: 30px;
    left: 93%;
    top: 85%;
  }

  @media screen and (max-width: 760px) {
    width: 25px;
    height: 25px;
    left: 95%;
    top: 75%;
    background-size: 13px;
  }
`;

const TextTitle = styled.div`
  font-size: 32px;
  font-weight: 600;
  font-family: 'Lexend Deca', sans-serif;
  color: #0559ce;
  margin-bottom: 30px;

  @media screen and (max-width: 760px) {
    font-size: 30px;
    margin-bottom: 20px;
  }
`;

const TextDesc = styled.div`
  font-size: 17px;
  color: #646464;
  line-height: 35px;

  @media screen and (max-width: 760px) {
    font-size: 13px;
    line-height: 26px;
    width: 220px;
  }
`;

const PortfolioImgWrap1 = styled.div`
  width: 1100px;
  height: 440px;
  position: relative;
  margin: 0 auto;

  @media screen and (max-width: 1400px) {
    width: 1000px;
  }

  @media screen and (max-width: 1024px) {
    width: 80vw;
  }
`;

const PortfolioImgWrap2 = styled.div`
  width: 4500px;
  height: 440px;
  position: absolute;
  display: flex;
  overflow: hidden;
  padding-top: 20px;
`;

const PortfolioImgBack = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #0559ce;
  transition: 0.3s;
  opacity: 0;
`;

const PortfolioTextBlcok = styled.div`
  position: absolute;
  width: 230px;
  height: 65px;
  top: 74%;
  left: 13%;
  overflow: hidden;
`;

const PortfolioArrow = styled.div`
  background-image: url(/image/arrow-top-right.png);
  width: 17px;
  height: 17px;
  background-size: 17px;
  position: absolute;
  top: 7%;
  left: 85%;
  opacity: 0;
  transition: 0.3s;
`;

const PortfolioText = styled.div`
  color: white;
  font-size: 15px;
  margin-bottom: 15px;
  position: relative;
  transition: 0.3s;
  top: -30%;
  letter-spacing: 0.1px;
`;

const PortfolioTextName = styled.div`
  color: white;
  font-size: 21px;
  font-weight: 600;
  position: relative;
  transition: 0.3s;
  top: 40%;
`;

const PortfolioImgBlock = styled.div`
  width: 310px;
  height: 400px;
  position: relative;
  margin-right: 30px;
  overflow: hidden;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;
  top: 0;
  transition: 0.3s;
  left: ${props => '-' + props.count * 340 + 'px'};

  :hover ${PortfolioImgBack} {
    opacity: 0.8;
  }

  :hover ${PortfolioText} {
    top: 0;
  }

  :hover ${PortfolioTextName} {
    top: 0;
  }

  :hover ${PortfolioArrow} {
    opacity: 1;
  }

  &:hover {
    top: -10px;
  }

  @media screen and (max-width: 1024px) {
    width: 285px;
    height: 375px;
    margin-right: 20px;
    left: ${props => '-' + props.count * 305 + 'px'};
  }

  @media screen and (max-width: 760px) {
    width: 240px;
    height: 310px;
    margin-right: 20px;
    left: ${props => '-' + props.count * 260 + 'px'};
  }
`;

const PortfolioImg = styled.img`
  width: 100%;
  height: 100%;
`;

export default PortfolioSection;
