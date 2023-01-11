import styled from '@emotion/styled/macro';
import Fade from 'react-reveal/Fade';
import {
  ContentWrap,
  WhiteBox,
  ImgBack,
  Img,
  TextBlock,
  Title,
  Text,
} from './PortfolioHospital';

const PortfolioConflict = () => {
  return (
    <ContentWrap>
      <Fade bottom>
        <WhiteBox>
          <ImgBack>
            <Img url='image/conflict-icon1.png' />
          </ImgBack>
          <TextBlock>
            <Title>반려견 교통사고 후 보호자의 방치</Title>
            <Text>
              OO동물의료센터에 교통사고로 반려견이 입원했습니다. 입원 후 수술
              진행을 하였고 보호자께서 병원비를 소지하고 있지 않으셨던 상태라
              10만원의 선결제 및 수술 진료 동의서를 받고 수술을 진행하였습니다.
              치료 수술 완료 후 반려견이 건강을 회복하였음에도 보호자는 한달
              가량 반려견을 데려가지 않고 방치했습니다. 이에 IBS법무팀은
              보호자에게서 보험비 분활상환 및 병원비 계획합의서를 받고 상황을
              정리하였습니다.
            </Text>
          </TextBlock>
        </WhiteBox>
      </Fade>
      <Fade bottom>
        <WhiteBox>
          <ImgBack>
            <Img url='image/conflict-icon2.png' />
          </ImgBack>
          <TextBlock>
            <Title>보호자의 의료과실 소송</Title>
            <Text>
              OO동물병원에서 대퇴부 폐쇄골절로 반려동물이 입원 진료를
              하였습니다. 수술 후 해당 반려동물에게 수술 부위 감염으로 인한
              골융해가 발생하였습니다. 보호자는 해당문제가 OO동물병원의
              의료과실이라 주장하였고, OO동물병원의 진료비 반환을
              요구하였습니다. IBS파트너스 법무팀은 보호자분께 차비 정도의 소정의
              위로금을 지급해 드리고 원만한 합의로 마무리 지었습니다
            </Text>
          </TextBlock>
        </WhiteBox>
      </Fade>
      <Fade bottom>
        <WhiteBox marginBottom>
          <ImgBack>
            <Img url='image/conflict-icon3.png' />
          </ImgBack>
          <TextBlock>
            <Title>동물병원 직원의 반려견 사고</Title>
            <Text>
              새로 오픈한 OO동물병원의 원장님은 교육과 건강검진을 목적으로 소속
              직원 반려동물들의 CT와 MRA 영상을 찍어주었습니다.하지만 직원의
              반려견이 영상 촬용 중 마취상의 문제로 사망하게되는 예키치못한
              사고가 벌어졌습니다. 해당 직원은 합의금과, 이 병원에서 더 이상
              근무할 수 없으니 2개월치의 급여를 지불해달라 요구하였습니다. IBS
              법무팀은 해당직원에게 장례비와 소정의 합의금을 지분하고 원만한
              합의를 이끌어내었습니다.
            </Text>
          </TextBlock>
        </WhiteBox>
      </Fade>
      <Fade bottom>
        <WhiteBox marginBottom>
          <ImgBack>
            <Img url='image/conflict-icon4.png' />
          </ImgBack>
          <TextBlock>
            <Title>수술 후 사망한 반려견의 수술비 분쟁</Title>
            <Text>
              OO동물의료센터에 반려견이 위암으로 내원했습니다. 종양의 발병
              위치와 악성도, 분포정도가 좋지 않아 의료진은 수술로 차도를 보기
              어려울 것이라 미리 보호자께 고지해드렸습니다. 보호자의 간곡한
              부탁으로 수술이 진행되었으나 반려견은 차도를 보지못하고 사망하게
              되었습니다. 이에 보호자는 반려견 사망을 이유로 진료비 미결제 및
              사망한 반려견 또한 병원에 방치하였습니다. IBS 법무팀은소송 및 각종
              법률자문을 통해 진료비를 받을 수 있다는 법원 판결문을 획득하였고
              병원비를 받아냈습니다.
            </Text>
          </TextBlock>
        </WhiteBox>
      </Fade>
    </ContentWrap>
  );
};

export default PortfolioConflict;
