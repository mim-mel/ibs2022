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

const PortfolioLabor = () => {
  return (
    <ContentWrap>
      <Fade bottom>
        <WhiteBox>
          <ImgBack>
            <Img url='image/labor-icon1.png' />
          </ImgBack>
          <TextBlock>
            <Title>직원관리 및 근무형태 컨설팅사례</Title>
            <Text>
              OO동물병원은 세무사, 노무사가 고용되어 있었음에도 전체 직원관리와
              근무형태 등의 복잡한 부분에서 문제를 겪으셨습니다. IBS파트너스는
              저희 시스템을 통해서 원장님이 겪고 계시던 문제점을 완만히 해결해
              드렸습니다. 원장님께서는 세금적인 부분의 절세 효과에서도 굉장히
              만족하셨으며 지속적인 관리를 받고 계십니다.
            </Text>
          </TextBlock>
        </WhiteBox>
      </Fade>
      <Fade bottom>
        <WhiteBox>
          <ImgBack>
            <Img url='image/labor-icon2.png' />
          </ImgBack>
          <TextBlock>
            <Title>노무사가 없는 병원의 관리사례</Title>
            <Text>
              OO동물병원의 경우 세무사무실에서 급여대장 정리를 하다보니,
              연장근로 및 야간근로의 수당계산 및 분리가 안되어 있는 경우가
              있었습니다. 직원이 급여 명세 내역을 보고 연장근로수당을 받지
              못하였다고 신고하는 경우 근무기간 동안의 연장근로수당을
              지급해야하는 문제가 생깁니다. IBS파트너스는 근로시간 최저임금 계삼
              민 임금대장, 근로계약서, 노무관련 서류 일체를 준비하여 병원 담당
              세무실과 소통합니다.
            </Text>
          </TextBlock>
        </WhiteBox>
      </Fade>
      <Fade bottom>
        <WhiteBox marginBottom>
          <ImgBack>
            <Img url='image/labor-icon3.png' />
          </ImgBack>
          <TextBlock>
            <Title>특별고용촉진장려금 활용 직원고용</Title>
            <Text>
              OO동물메디컬센터에서는 신규 직원 2명을 채용할 계획을 가지고
              있었습니다. IBS파트너스는 직원을 채용하기 전 신청 가능한 지원금을
              찾아 본 후 원장님께 가능한 장여금을 안내해 드립니다.
              특별고용촉진장려금을 수령하는데 필요한 요건 안내와, 신청 진행을
              진행해드린 덕분에 장려금을 활용해 새 직원들을 고용할 수
              있었습니다. 1회성의 신청으로 끝나는 것이 아니라 추후 신청 및
              관리서비스도 제공해 드리고 있습니다.
            </Text>
          </TextBlock>
        </WhiteBox>
      </Fade>
    </ContentWrap>
  );
};

export default PortfolioLabor;
