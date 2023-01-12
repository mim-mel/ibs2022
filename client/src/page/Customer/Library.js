import { SubBanner, SubBannerTitle, Wrap } from '../Company';
import {
  ListWrap,
  WhiteBox,
  BoxImage,
  BoxTitle,
  BoxText,
} from '../Portfolio/PortfolioList';

import styled from '@emotion/styled/macro';
import Fade from 'react-reveal/Fade';

const List = [
  {
    url: 'image/info-img1-s.jpg',
    name: '2023년 최저임금',
  },
  {
    url: 'image/info-img2-s.jpg',
    name: '법정공휴일 유급휴일 의무화',
  },
  {
    url: 'image/info-img3-s.jpg',
    name: '수술동의서 의무 안내',
  },
  {
    url: 'image/info-img4-s.jpg',
    name: '급여명세서 교무 의무화',
  },
  {
    url: 'image/info-img5-s.jpg',
    name: '두루누리 사회보험료 지원',
  },
  {
    url: 'image/info-img6-s.jpg',
    name: '슬기로운 절세',
  },
  {
    url: 'image/info-img7-s.jpg',
    name: '청년재직자 내일채움공제',
  },
  {
    url: 'image/info-img8-s.jpg',
    name: 'IBS 세금관리',
  },
  {
    url: 'image/info-img9-s.jpg',
    name: 'IBS 직원관리',
  },
  {
    url: 'image/info-img10-s.jpg',
    name: 'IBS 병원시설관리',
  },
];

const Library = () => {
  return (
    <>
      <Wrap backGround='#fcfcfc'>
        <SubBanner
          url='url(/image/submain5.jpg)'
          positionIpad='-700px -90px'
          positionPhone='-450px -0px'
        >
          <SubBannerTitle>CUSTOMER</SubBannerTitle>
        </SubBanner>

        <Title>LIBRARY</Title>

        <ListWrap>
          {List.map((list, i) => (
            <>
              <Fade bottom key={i}>
                <WhiteBox pointer>
                  <BoxImage url={list.url} />
                  <BoxTitle marginTop>{list.name}</BoxTitle>
                </WhiteBox>
              </Fade>
            </>
          ))}
        </ListWrap>
      </Wrap>
    </>
  );
};

const Title = styled.div`
  font-size: 40px;
  color: #053dc0;
  font-weight: 800;
  margin: 100px auto;
  letter-spacing: 3px;
`;

const ModalBack = styled.div`
  width: 100%;
  height: 259.3%;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBlock = styled.div`
  background-color: white;
  width: 750px;
  height: 850px;
  border-radius: 50px;
`;

export default Library;
