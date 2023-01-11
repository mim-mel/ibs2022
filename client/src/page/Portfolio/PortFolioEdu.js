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

const PortfolioEdu = () => {
  return (
    <ContentWrap>
      <Fade bottom>
        <WhiteBox>
          <ImgBack>
            <Img url='image/edu-icon1.png' />
          </ImgBack>
          <TextBlock>
            <Title>CS교육을 통한 직원간의 갈등해소</Title>
            <Text>
              OO동물병원에서는 주간/야간 간호사 사이에 인수과정으로 인한
              불협화음이 있었습니다. 이로 인해 자칫하면 간호사들의 집단퇴사
              문제가 이루어 질 가능성이 있었습니다. IBS파트너스는 직원 1:1면담과
              직무검사를 통해 서로에 대한 이해 및 병원의 전망 제시를 도왔습니다.
              또한 분기별 C.S 교육을 실시하고 갈등 발생시 빠른대처를 통해
              퇴사율을 현저히 낮췄습니다.
            </Text>
          </TextBlock>
        </WhiteBox>
      </Fade>
      <Fade bottom>
        <WhiteBox>
          <ImgBack>
            <Img url='image/edu-icon2.png' />
          </ImgBack>
          <TextBlock>
            <Title>개인정보보호법 교육 실행</Title>
            <Text>
              OO동물의료센터의 한 직원이 병원을 홍보하고자 SNS를 활용하던 중
              반려견의 병원비 및 병명을 노출하게 되었고 이 부분으로 인해
              보호자에게 항의를 받게되었습니다. 개인정보법을 주의하지 않았던
              직원의 불찰이었습니다. IBS파트너스는 이같은 상황을 미연에
              방지하고자 전 직원을 대상으로 개인정보보호, 성희롱, 직장내 괴롭힘
              등 업무특성에 맞는 맞춤형 교육을 실시해 드리고 있습니다.
            </Text>
          </TextBlock>
        </WhiteBox>
      </Fade>
      <Fade bottom>
        <WhiteBox marginBottom>
          <ImgBack>
            <Img url='image/edu-icon3.png' />
          </ImgBack>
          <TextBlock>
            <Title>업무프로세스 및 취업규칙 재정비</Title>
            <Text>
              오픈한지 3년 된 OO동물병원은 지속적인 매출 상승으로 병원확장과
              신규 직원 채용을 실시하였습니다. 신규 채용으로 경력직 리셉 직원을
              스카웃 해왔습니다. 하지만 해당 직원과 기존 직원들 사이에 업무적
              갈등이 지속적으로 발생하였습니다. IBS파트너스는 전직원 교육을
              통해서 직원들 사이에 통일된 업무 프로세스를 만들었고, 취업규칙
              재정비를 통해 병원 직원간의 분쟁을 조정했습니다.
            </Text>
          </TextBlock>
        </WhiteBox>
      </Fade>
    </ContentWrap>
  );
};

export default PortfolioEdu;
