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

const PortfolioSystem = () => {
  return (
    <ContentWrap>
      <Fade bottom>
        <WhiteBox>
          <ImgBack>
            <Img url='image/system-icon1.png' />
          </ImgBack>
          <TextBlock>
            <Title>관리 컨설팅 및 2인 동업병원 전환</Title>
            <Text>
              OO동물의료센터는 수의 컨퍼런스에서 설문지를 작성해 주신 후
              IBS파트너스와 컨설팅 계약을 맺게 되셨습니다.
              IBS파트너스는OO동물의료센터애 방문해 병원, 노무, 직원교육 및 1인
              병원에서 2인 병원으로의 전환 과정을 도와드렸습니다. 또한 절세
              부분에서도 만족스러운 서비스를 제공해 드렸습니다.
            </Text>
          </TextBlock>
        </WhiteBox>
      </Fade>
      <Fade bottom>
        <WhiteBox>
          <ImgBack>
            <Img url='image/system-icon2.png' />
          </ImgBack>
          <TextBlock>
            <Title>병원규모 확장 자금 컨설팅 사례</Title>
            <Text>
              OO동물병원은 병원규모 확장으로 인해 자금이 부족하여 대출을
              알아보던 중, IBS파트너스와의 상담을 통해 운영자금 대출 및 정부
              정책자금을 안내 받을 수 있었습니다. 이를 통해 OO동물병원은 자금
              여력이 크게 개선될 수 있었습니다.
            </Text>
          </TextBlock>
        </WhiteBox>
      </Fade>
      <Fade bottom>
        <WhiteBox marginBottom>
          <ImgBack>
            <Img url='image/system-icon3.png' />
          </ImgBack>
          <TextBlock>
            <Title>병원 인수 후, 관리시스템 컨설팅</Title>
            <Text>
              OO동물병원 원장님은 기존 병원을 인수하여 운영중이셨습니다. 하지만
              아직 기본적인 병원관리의 틀이 정립이 되지 않은 상황이라 병원
              운영에 에로사항을 겪고 있으셨습니다. IBS파트너스는 원장님과 전화를
              통한 상담을 진행한 후 원장님이 원하시는 방향을 반영하여 병원 관리
              시스템을 새로 컨설팅 해드렸습니다.
            </Text>
          </TextBlock>
        </WhiteBox>
      </Fade>
    </ContentWrap>
  );
};

export default PortfolioSystem;
