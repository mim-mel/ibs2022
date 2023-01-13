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
import { useEffect, useState } from 'react';

const Library = () => {
  const [List, setList] = useState([
    {
      id: 1,
      url: 'image/info-img1-s.jpg',
      url2: 'image/info-img1.jpg',
      name: '2023년 최저임금',
      isModal: false,
    },
    {
      id: 2,
      url: 'image/info-img2-s.jpg',
      url2: 'image/info-img2.jpg',
      name: '법정공휴일 유급휴일 의무화',
      isModal: false,
    },
    {
      id: 3,
      url: 'image/info-img3-s.jpg',
      url2: 'image/info-img3.jpg',
      name: '수술동의서 의무 안내',
      isModal: false,
    },
    {
      id: 4,
      url: 'image/info-img4-s.jpg',
      url2: 'image/info-img4.jpg',
      name: '급여명세서 교무 의무화',
      isModal: false,
    },
    {
      id: 5,
      url: 'image/info-img5-s.jpg',
      url2: 'image/info-img5.jpg',
      name: '두루누리 사회보험료 지원',
      isModal: false,
    },
    {
      id: 6,
      url: 'image/info-img6-s.jpg',
      url2: 'image/info-img6.jpg',
      name: '슬기로운 절세',
      isModal: false,
    },
    {
      id: 7,
      url: 'image/info-img7-s.jpg',
      url2: 'image/info-img7.jpg',
      name: '청년재직자 내일채움공제',
      isModal: false,
    },
    {
      id: 8,
      url: 'image/info-img8-s.jpg',
      url2: 'image/info-img8.jpg',
      name: 'IBS 세금관리',
      isModal: false,
    },
    {
      id: 9,
      url: 'image/info-img9-s.jpg',
      url2: 'image/info-img9.jpg',
      name: 'IBS 직원관리',
      isModal: false,
    },
    {
      id: 10,
      url: 'image/info-img10-s.jpg',
      url2: 'image/info-img10.jpg',
      name: 'IBS 병원시설관리',
      isModal: false,
    },
  ]);

  const onModal = id => {
    const copyList = [...List];
    copyList.find(box => box.id === id).isModal = true;
    setList(copyList);
  };

  const offModal = id => {
    const copyList = [...List];
    copyList.find(box => box.id === id).isModal = false;
    setList(copyList);
  };

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

        <CustomerTitle>LIBRARY</CustomerTitle>

        <ListWrap>
          {List.map(list => (
            <div key={list.id}>
              <Fade bottom>
                <WhiteBox pointer onClick={() => onModal(list.id)}>
                  <BoxImage url={list.url} />
                  <BoxTitle marginTop>{list.name}</BoxTitle>
                </WhiteBox>
              </Fade>
              {list.isModal ? (
                <ModalBack>
                  <ModalBlock>
                    <Xbutton onClick={() => offModal(list.id)} />
                    <PosterText>
                      더 많은 자료를 필요로 하시는 분들은 IBS 파트너스 홈페이지
                      온라인 문의란 혹은 ibspartners.seoul@gmail.com으로 요청해
                      주세요. (원본 파일을 제공해 드립니다.)
                    </PosterText>
                    <PosterImg url={list.url2} />
                  </ModalBlock>
                </ModalBack>
              ) : (
                <></>
              )}
            </div>
          ))}
        </ListWrap>
      </Wrap>
    </>
  );
};

export const CustomerTitle = styled.div`
  font-size: 38px;
  color: #053dc0;
  font-weight: 900;
  margin: 100px auto;
  letter-spacing: 3px;

  @media screen and (max-width: 1024px) {
    font-size: 30px;
  }

  @media screen and (max-width: 760px) {
    font-size: 23px;
    letter-spacing: 1px;
    margin: 60px auto;
  }
`;

const ModalBack = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const ModalBlock = styled.div`
  background-color: white;
  width: 650px;
  height: 850px;
  border-radius: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 760px) {
    width: 88%;
    height: auto;
    padding: 20px 0;
  }
`;

const Xbutton = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(image/x-mark.png);
  background-size: 20px;
  position: absolute;
  top: 3.5%;
  left: 93%;
  cursor: pointer;

  @media screen and (max-width: 760px) {
    width: 14px;
    height: 14px;
    background-size: 14px;
    left: 91%;
  }
`;

const PosterText = styled.div`
  text-align: center;
  color: #686868;
  font-size: 15px;
  margin-bottom: 20px;
  line-height: 25px;

  @media screen and (max-width: 760px) {
    font-size: 11px;
    line-height: 17px;
    width: 78%;
  }
`;

const PosterImg = styled.div`
  width: 495px;
  height: 700px;
  border-radius: 30px;
  background-image: url(${props => props.url});

  @media screen and (max-width: 760px) {
    width: 290px;
    height: 410px;
    background-size: 100%;
  }
`;

export default Library;
