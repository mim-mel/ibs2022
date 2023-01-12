import styled from '@emotion/styled/macro';
import { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { SubBanner, SubBannerTitle, Wrap } from '../Company';

const Conference = () => {
  const [Seoul2022, setSeoul2022] = useState(0);
  const [Busan2022, setBusan2022] = useState(0);
  const [Kyong2022, setKyong2022] = useState(0);
  const [Seoul2021, setSeoul2021] = useState(0);
  const [Kyong2021, setKyong2021] = useState(0);
  const [Seoul2019, setSeoul2019] = useState(0);
  const [Kpet2019, setKpet2019] = useState(0);
  const [Seoul2018, setSeoul2018] = useState(0);
  const [Nam2018, setNam2018] = useState(0);

  const onPlus = (state, setstate, num) => {
    if (state < num) {
      setstate(prev => prev + 1);
    } else {
      setstate(0);
    }
  };

  const onMinus = (state, setstate) => {
    if (state < 0) {
      setstate(prev => prev + 1);
    } else {
      setstate(0);
    }
  };

  return (
    <Wrap backGround='#fcfcfc'>
      <SubBanner
        url='url(/image/submain6.jpg)'
        positionIpad='-700px -90px'
        positionPhone='-450px -0px'
      >
        <SubBannerTitle>CONFERENCE</SubBannerTitle>
      </SubBanner>
      <ContentWrap>
        {/* 캐러셀1 */}
        <Fade bottom>
          <ContentBlock marginTop fotoFirst>
            <ImgWrap>
              <ImgBlock>
                <Img url='image/2022seoul1.jpg' count={Seoul2022} />
                <Img url='image/2022seoul2.jpg' count={Seoul2022} />
              </ImgBlock>
              <ButtonLeft onClick={() => onMinus(Seoul2022, setSeoul2022)} />
              <ButtonRight onClick={() => onPlus(Seoul2022, setSeoul2022, 1)} />
              <CircleWrap>
                <CircleButton0
                  onClick={() => setSeoul2022(0)}
                  backGround={Seoul2022}
                />
                <CircleButton1
                  onClick={() => setSeoul2022(1)}
                  backGround={Seoul2022}
                />
              </CircleWrap>
            </ImgWrap>
            <TextBlock>
              <Title>2022 서울수의임상 컨퍼런스</Title>
              <Text>
                일시 | 2022년 9월23일(토) - 24일(일) <br />
                장소 | 세종대학교 컨벤션센터
                <br />
                주최 | 서울특별시수의사회
                <br />
              </Text>
            </TextBlock>
          </ContentBlock>
        </Fade>
        {/* 캐러셀2 */}
        <Fade bottom>
          <ContentBlock>
            <TextBlock>
              <Title>2022 부산수의 컨퍼런스</Title>
              <Text>
                일시 | 2022년 08월20일(토) - 21일(일) <br />
                장소 | 벡스코 컨벤션홀 1,2,3
                <br />층 주최 | 부산광역시수의사회
              </Text>
            </TextBlock>
            <ImgWrap>
              <ImgBlock>
                <Img url='image/2022busan1.jpg' count={Busan2022} />
                <Img url='image/2022busan2.jpg' count={Busan2022} />
                <Img url='image/2022busan3.jpg' count={Busan2022} />
              </ImgBlock>
              <ButtonLeft onClick={() => onMinus(Busan2022, setBusan2022)} />
              <ButtonRight onClick={() => onPlus(Busan2022, setBusan2022, 2)} />
              <CircleWrap>
                <CircleButton0
                  onClick={() => setBusan2022(0)}
                  backGround={Busan2022}
                />
                <CircleButton1
                  onClick={() => setBusan2022(1)}
                  backGround={Busan2022}
                />
                <CircleButton2
                  onClick={() => setBusan2022(2)}
                  backGround={Busan2022}
                />
              </CircleWrap>
            </ImgWrap>
          </ContentBlock>
        </Fade>
        {/* 캐러셀3 */}
        <Fade bottom>
          <ContentBlock fotoFirst>
            <ImgWrap>
              <ImgBlock>
                <Img url='image/2022kyong1.jpg' count={Kyong2022} />
                <Img url='image/2022kyong2.jpg' count={Kyong2022} />
                <Img url='image/2022kyong3.jpg' count={Kyong2022} />
                <Img url='image/2022kyong4.jpg' count={Kyong2022} />
              </ImgBlock>
              <ButtonLeft onClick={() => onMinus(Kyong2022, setKyong2022)} />
              <ButtonRight onClick={() => onPlus(Kyong2022, setKyong2022, 3)} />
              <CircleWrap>
                <CircleButton0
                  onClick={() => setKyong2022(0)}
                  backGround={Kyong2022}
                />
                <CircleButton1
                  onClick={() => setKyong2022(1)}
                  backGround={Kyong2022}
                />
                <CircleButton2
                  onClick={() => setKyong2022(2)}
                  backGround={Kyong2022}
                />
                <CircleButton3
                  onClick={() => setKyong2022(3)}
                  backGround={Kyong2022}
                />
              </CircleWrap>
            </ImgWrap>
            <TextBlock>
              <Title>2022 서울수의임상 컨퍼런스</Title>
              <Text>
                일시 | 2022년 9월23일(토) - 24일(일)
                <br />
                장소 | 세종대학교 컨벤션센터
                <br />
                주최 | 서울특별시수의사회
              </Text>
            </TextBlock>
          </ContentBlock>
        </Fade>
        {/* 캐러셀4 */}
        <Fade bottom>
          <ContentBlock>
            <TextBlock>
              <Title>2021 서울수의 컨퍼런스</Title>
              <Text>
                일시 | 2021년 12월7일(토) - 8일(일)
                <br />
                장소 | 세종대학교 컨벤션센터
                <br />
                주최 | 서울특별시수의사회
              </Text>
            </TextBlock>
            <ImgWrap>
              <ImgBlock>
                <Img url='image/2021Seoul1.jpg' count={Seoul2021} />
                <Img url='image/2021Seoul2.jpg' count={Seoul2021} />
                <Img url='image/2021Seoul3.jpg' count={Seoul2021} />
                <Img url='image/2021Seoul4.jpg' count={Seoul2021} />
              </ImgBlock>
              <ButtonLeft onClick={() => onMinus(Seoul2021, setSeoul2021)} />
              <ButtonRight onClick={() => onPlus(Seoul2021, setSeoul2021, 3)} />
              <CircleWrap>
                <CircleButton0
                  onClick={() => setSeoul2021(0)}
                  backGround={Seoul2021}
                />
                <CircleButton1
                  onClick={() => setSeoul2021(1)}
                  backGround={Seoul2021}
                />
                <CircleButton2
                  onClick={() => setSeoul2021(2)}
                  backGround={Seoul2021}
                />
                <CircleButton3
                  onClick={() => setSeoul2021(3)}
                  backGround={Seoul2021}
                />
              </CircleWrap>
            </ImgWrap>
          </ContentBlock>
        </Fade>
        {/* 캐러셀5 */}
        <Fade bottom>
          <ContentBlock fotoFirst>
            <ImgWrap>
              <ImgBlock>
                <Img url='image/2021Kyong1.jpg' count={Kyong2021} />
                <Img url='image/2021Kyong2.jpg' count={Kyong2021} />
                <Img url='image/2021Kyong3.jpg' count={Kyong2021} />
                <Img url='image/2021Kyong4.jpg' count={Kyong2021} />
              </ImgBlock>
              <ButtonLeft onClick={() => onMinus(Kyong2021, setKyong2021)} />
              <ButtonRight onClick={() => onPlus(Kyong2021, setKyong2021, 3)} />
              <CircleWrap>
                <CircleButton0
                  onClick={() => setKyong2021(0)}
                  backGround={Kyong2021}
                />
                <CircleButton1
                  onClick={() => setKyong2021(1)}
                  backGround={Kyong2021}
                />
                <CircleButton2
                  onClick={() => setKyong2021(2)}
                  backGround={Kyong2021}
                />
                <CircleButton3
                  onClick={() => setKyong2021(3)}
                  backGround={Kyong2021}
                />
              </CircleWrap>
            </ImgWrap>
            <TextBlock>
              <Title>2021 경기수의 컨퍼런스</Title>
              <Text>
                일시 | 2021년 11월27일(일) - 28일(일) <br />
                장소 | 수원 컨벤션센터 3 - 4층 <br />
                주최 | 경기도수의사회
              </Text>
            </TextBlock>
          </ContentBlock>
        </Fade>
        {/* 캐러셀6 */}
        <Fade bottom>
          <ContentBlock>
            <TextBlock>
              <Title>2021 경기수의 컨퍼런스</Title>
              <Text>
                일시 | 2021년 11월27일(일) - 28일(일) <br />
                장소 | 수원 컨벤션센터 3 - 4층 <br />
                주최 | 경기도수의사회
              </Text>
            </TextBlock>
            <ImgWrap>
              <ImgBlock>
                <Img url='image/2019Seoul1.jpg' count={Seoul2019} />
                <Img url='image/2019Seoul2.jpg' count={Seoul2019} />
                19
                <Img url='image/2019Seoul3.jpg' count={Seoul2019} />
              </ImgBlock>
              <ButtonLeft onClick={() => onMinus(Seoul2019, setSeoul2019)} />
              <ButtonRight onClick={() => onPlus(Seoul2019, setSeoul2019, 2)} />
              <CircleWrap>
                <CircleButton0
                  onClick={() => setSeoul2019(0)}
                  backGround={Seoul2019}
                />
                <CircleButton1
                  onClick={() => setSeoul2019(1)}
                  backGround={Seoul2019}
                />
                <CircleButton2
                  onClick={() => setSeoul2019(2)}
                  backGround={Seoul2019}
                />
              </CircleWrap>
            </ImgWrap>
          </ContentBlock>
        </Fade>
        {/* 캐러셀7 */}
        <Fade bottom>
          <ContentBlock fotoFirst>
            <ImgWrap>
              <ImgBlock>
                <Img url='image/2019pet1.jpg' count={Kpet2019} />
                <Img url='image/2019pet2.jpg' count={Kpet2019} />
                <Img url='image/2019pet3.jpg' count={Kpet2019} />
              </ImgBlock>
              <ButtonLeft onClick={() => onMinus(Kpet2019, setKpet2019)} />
              <ButtonRight onClick={() => onPlus(Kpet2019, setKpet2019, 2)} />
              <CircleWrap>
                <CircleButton0
                  onClick={() => setKpet2019(0)}
                  backGround={Kpet2019}
                />
                <CircleButton1
                  onClick={() => setKpet2019(1)}
                  backGround={Kpet2019}
                />
                <CircleButton2
                  onClick={() => setKpet2019(2)}
                  backGround={Kpet2019}
                />
              </CircleWrap>
            </ImgWrap>
            <TextBlock>
              <Title>2019 케이펫페어 서울</Title>
              <Text>
                일시 | 2019년 10월12일(토) - 13일(일)
                <br />
                장소 | 서울 무역 전시 컨벤션 센터(SETEC)
                <br />
                주최 | (사)한국펫사료협회
              </Text>
            </TextBlock>
          </ContentBlock>
        </Fade>
        {/* 캐러셀8 */}
        <Fade bottom>
          <ContentBlock>
            <TextBlock>
              <Title>2018 서울수의 임상 컨퍼런스</Title>
              <Text>
                일시 | 2018년 10월6일(토) - 7일(일)
                <br />
                장소 | 세종대학교 컨벤션센터
                <br />
                주최 | 서울특별시수의사회
              </Text>
            </TextBlock>
            <ImgWrap>
              <ImgBlock>
                <Img url='image/2018Seoul1.jpg' count={Seoul2018} />
                <Img url='image/2018Seoul2.jpg' count={Seoul2018} />
                19
                <Img url='image/2018Seoul3.jpg' count={Seoul2018} />
              </ImgBlock>
              <ButtonLeft onClick={() => onMinus(Seoul2018, setSeoul2018)} />
              <ButtonRight onClick={() => onPlus(Seoul2018, setSeoul2018, 2)} />
              <CircleWrap>
                <CircleButton0
                  onClick={() => setSeoul2018(0)}
                  backGround={Seoul2018}
                />
                <CircleButton1
                  onClick={() => setSeoul2018(1)}
                  backGround={Seoul2018}
                />
                <CircleButton2
                  onClick={() => setSeoul2018(2)}
                  backGround={Seoul2018}
                />
              </CircleWrap>
            </ImgWrap>
          </ContentBlock>
        </Fade>
        {/* 캐러셀9 */}
        <Fade bottom>
          <ContentBlock fotoFirst marginBottom>
            <ImgWrap>
              <ImgBlock>
                <Img url='image/2018nam1.jpg' count={Nam2018} />
                <Img url='image/2018nam2.jpg' count={Nam2018} />
                <Img url='image/2018nam3.jpg' count={Nam2018} />
                <Img url='image/2018nam4.jpg' count={Nam2018} />
              </ImgBlock>
              <ButtonLeft onClick={() => onMinus(Nam2018, setNam2018)} />
              <ButtonRight onClick={() => onPlus(Nam2018, setNam2018, 3)} />
              <CircleWrap>
                <CircleButton0
                  onClick={() => setNam2018(0)}
                  backGround={Nam2018}
                />
                <CircleButton1
                  onClick={() => setNam2018(1)}
                  backGround={Nam2018}
                />
                <CircleButton2
                  onClick={() => setNam2018(2)}
                  backGround={Nam2018}
                />
                <CircleButton3
                  onClick={() => setNam2018(3)}
                  backGround={Nam2018}
                />
              </CircleWrap>
            </ImgWrap>
            <TextBlock>
              <Title>2018 영남수의 컨퍼런스</Title>
              <Text>
                일시 | 2018년 8월25일(토) - 26일(일)
                <br />
                장소 | 대구 EXCO 주최 |
                <br />
                대구시 수의사회
              </Text>
            </TextBlock>
          </ContentBlock>
        </Fade>
      </ContentWrap>
    </Wrap>
  );
};

const ContentWrap = styled.div`
  width: 1100px;
  height: auto;
  margin: 0 auto;
`;

const ContentBlock = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${props => (props.fotoFirst ? '55% 33%' : '33% 55%')};
  justify-content: space-between;
  margin: 100px 0;
  margin-top: ${props => (props.marginTop ? '160px' : '')};
  margin-bottom: ${props => (props.marginBottom ? '130px' : '')}; ;
`;

const ImgWrap = styled.div`
  background-color: bisque;
  width: 100%;
  height: 350px;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;
  overflow: hidden;
  position: relative;
`;

const ImgBlock = styled.div`
  width: 4000px;
  height: 100%;
  display: flex;
`;

const Img = styled.div`
  width: 605px;
  height: 350px;
  background-image: url(${props => props.url});
  background-size: 605px;
  position: relative;
  left: ${props => '-' + props.count * 605 + 'px'};
  transition: 0.3s;
`;

const ButtonLeft = styled.div`
  position: absolute;
  top: 48%;
  left: 3%;
  background-image: url(image/arrow-side.png);
  width: 30px;
  height: 30px;
  background-size: 30px;
  cursor: pointer;
`;

const ButtonRight = styled.div`
  position: absolute;
  top: 48%;
  left: 92%;
  background-image: url(image/arrow-side.png);
  width: 30px;
  height: 30px;
  background-size: 30px;
  transform: rotate(180deg);
  cursor: pointer;
`;

const CircleWrap = styled.div`
  width: 130px;
  height: 50px;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 85%;
  left: 50%;
  transform: translate(-50%, 0);
`;

const CircleButton0 = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 15px;
  background-color: ${props => (props.backGround === 0 ? 'white' : '#a3a3a3')};
  margin: 0 8px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: white;
  }
`;

const CircleButton1 = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 15px;
  background-color: ${props => (props.backGround === 1 ? 'white' : '#a3a3a3')};
  margin: 0 8px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: white;
  }
`;

const CircleButton2 = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 15px;
  background-color: ${props => (props.backGround === 2 ? 'white' : '#a3a3a3')};
  margin: 0 8px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: white;
  }
`;

const CircleButton3 = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 15px;
  background-color: ${props => (props.backGround === 3 ? 'white' : '#a3a3a3')};
  margin: 0 8px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: white;
  }
`;

const TextBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 30px;
  color: #053dc0;
  font-weight: 700;
  margin-bottom: 35px;
`;

const Text = styled.div`
  font-size: 17px;
  color: #686868;
  line-height: 43px;
`;

export default Conference;
