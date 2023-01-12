import styled from '@emotion/styled/macro';
import Fade from 'react-reveal/Fade';

const List = [
  {
    url: 'image/portfolio-list-1.jpg',
    name: '넬 동물의료센터',
    adresse: '경기 안양시',
  },
  {
    url: 'image/portfolio-list-2.jpg',
    name: '아인스 동물병원',
    adresse: '서울시 동대문구',
  },
  {
    url: 'image/portfolio-list-3.jpg',
    name: '다나을 24시 동물병원',
    adresse: '경기 안양시',
  },
  {
    url: 'image/portfolio-list-4.jpg',
    name: '메타동물의료센터',
    adresse: '경기 동탄',
  },
  {
    url: 'image/portfolio-list-5.jpg',
    name: '안심동물 의료센터',
    adresse: '경기 구리시',
  },
  {
    url: 'image/portfolio-list-6.jpg',
    name: 'FM동물메티컬센터',
    adresse: '경기도 고양시',
  },
  {
    url: 'image/portfolio-list-7.jpg',
    name: '리본동물의료센터',
    adresse: '부산 동래구',
  },
  {
    url: 'image/portfolio-list-8.jpg',
    name: '다솜동물메티컬센터',
    adresse: '부산 문현동',
  },
  {
    url: 'image/portfolio-list-9.jpg',
    name: '알파동물메디컬센터',
    adresse: '대구 서구',
  },
  {
    url: 'image/portfolio-list-10.jpg',
    name: '인방동물의료센터',
    adresse: '경기 안양시',
  },
  {
    url: 'image/portfolio-list-11.jpg',
    name: '금천 24시 K동물의료센터',
    adresse: '서울시 금천구',
  },
  {
    url: 'image/portfolio-list-12.jpg',
    name: '24시 이음동물의료센터',
    adresse: '청주・동탄',
  },
  {
    url: 'image/portfolio-list-13.jpg',
    name: '아이케어 동물병원',
    adresse: '인천시 서구 청라',
  },
];

const PortfolioList = () => {
  return (
    <>
      <ListWrap>
        {List.map((list, i) => (
          <Fade bottom key={i}>
            <WhiteBox>
              <BoxImage url={list.url} />
              <BoxTitle>{list.name}</BoxTitle>
              <BoxText>{list.adresse}</BoxText>
            </WhiteBox>
          </Fade>
        ))}
      </ListWrap>
    </>
  );
};

export const ListWrap = styled.div`
  width: 1300px;
  height: auto;
  display: grid;
  grid-template-columns: 23.5% 23.5% 23.5% 23.5%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 32% 32% 32%;
    width: 80%;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 760px) {
    grid-template-columns: 48.5% 48.5%;
    width: 85%;
  }
`;

export const WhiteBox = styled.div`
  width: 100%;
  height: 320px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;
  border-radius: 30px;
  position: relative;
  top: 0;
  transition: 0.3s;
  padding-top: 13px;
  box-sizing: border-box;
  margin-bottom: 30px;
  cursor: ${props => (props.pointer ? 'pointer' : '')};

  &:hover {
    top: -10px;
  }

  @media screen and (max-width: 1024px) {
    height: 240px;
  }

  @media screen and (max-width: 760px) {
    height: 170px;
    margin-bottom: 20px;
  }
`;

export const BoxImage = styled.div`
  width: 90%;
  height: 80%;
  background-color: aqua;
  margin: 0 auto;
  border-radius: 20px;
  background-image: url(${props => props.url});

  @media screen and (max-width: 1024px) {
    background-size: 100%;
  }
`;

export const BoxTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #707070;
  text-align: center;
  margin-top: ${props => (props.marginTop ? '20px' : '10px')};
  margin-bottom: 4px;

  @media screen and (max-width: 1024px) {
    font-size: 14px;
    margin-top: 7px;
    margin-bottom: 2px;
  }

  @media screen and (max-width: 760px) {
    font-size: 11px;
    margin-top: 8px;
  }
`;

export const BoxText = styled.div`
  font-size: 11px;
  color: #969696;
  text-align: center;

  @media screen and (max-width: 1024px) {
    font-size: 9px;
  }

  @media screen and (max-width: 760px) {
    font-size: 11px;
    display: none;
  }
`;

export default PortfolioList;
