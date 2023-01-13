import styled from '@emotion/styled/macro';
import { useState } from 'react';
import { SubBanner, SubBannerTitle, Wrap } from '../Company';
import { CustomerTitle } from './Library';

const Question = () => {
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);
  const [flag3, setFlag3] = useState(false);
  const [flag4, setFlag4] = useState(false);

  const Flag1Toggle = () => {
    if (flag1) {
      setFlag1(false);
    } else {
      setFlag1(true);
      setFlag2(false);
      setFlag3(false);
      setFlag4(false);
    }
  };

  const Flag2Toggle = () => {
    if (flag2) {
      setFlag2(false);
    } else {
      setFlag2(true);
      setFlag1(false);
      setFlag3(false);
      setFlag4(false);
    }
  };

  const Flag3Toggle = () => {
    if (flag3) {
      setFlag3(false);
    } else {
      setFlag3(true);
      setFlag1(false);
      setFlag2(false);
      setFlag4(false);
    }
  };

  const Flag4Toggle = () => {
    if (flag4) {
      setFlag4(false);
    } else {
      setFlag4(true);
      setFlag1(false);
      setFlag2(false);
      setFlag3(false);
    }
  };

  return (
    <Wrap backGround='#fcfcfc'>
      <SubBanner
        url='url(/image/submain5.jpg)'
        positionIpad='-700px -90px'
        positionPhone='-450px -0px'
      >
        <SubBannerTitle>CUSTOMER</SubBannerTitle>
      </SubBanner>

      <CustomerTitle>FAQ</CustomerTitle>
      <Block>
        <AskBlock>
          <AskIcon />
          <AskText>IBS 서비스 사용 비용은 얼마인가요?</AskText>
          <ArrowIcon onClick={() => Flag1Toggle()} flag={flag1} />
        </AskBlock>
        {flag1 ? (
          <AnswerBlock>
            <ArrowText>
              정해진 비용은 없습니다. 원장님과의 직접 상담을 통하여병원 규모와
              지역 서비스 사용부분에 따라서 비용이 책정됩니다. 매월 최소한의
              비용으로 최대 효율을 보장합니다.
            </ArrowText>
          </AnswerBlock>
        ) : (
          <></>
        )}
      </Block>
      <Block>
        <AskBlock>
          <AskIcon />
          <AskText>IBS 서비스의 최대 장점은 무엇인가요?</AskText>
          <ArrowIcon onClick={() => Flag2Toggle()} flag={flag2} />
        </AskBlock>
        {flag2 ? (
          <AnswerBlock>
            <ArrowText>
              IBS는 동물병원에 최적화 된 토탈 리스크 케어 서비스를 제공합니다.
              분리된 노무/세무가 아닌 통합된 시스템으로 병원운용에 최적의
              컨설팅을 제공합니다.
            </ArrowText>
          </AnswerBlock>
        ) : (
          <></>
        )}
      </Block>
      <Block>
        <AskBlock>
          <AskIcon />
          <AskText>
            이미 관리해 주는 노무사 세무사가 있는데 교체해야지 서비스 이용이
            가능한가요?
          </AskText>
          <ArrowIcon onClick={() => Flag3Toggle()} flag={flag3} />
        </AskBlock>
        {flag3 ? (
          <AnswerBlock>
            <ArrowText>
              IBS는 기존 세무사 노무사와의 협력을 통해서도 가능합니다. 신규
              사업장인 경우는 동물병원 전문 세무사 노무사님과 미팅 후 원장님
              결정에 따라 서비스 합니다.
            </ArrowText>
          </AnswerBlock>
        ) : (
          <></>
        )}
      </Block>
      <Block marginBottm>
        <AskBlock>
          <AskIcon />
          <AskText>IBS 서비스 계약 기간은 얼마나 되나요?</AskText>
          <ArrowIcon onClick={() => Flag4Toggle()} flag={flag4} />
        </AskBlock>
        {flag4 ? (
          <AnswerBlock>
            <ArrowText>
              서비스 사용 계약 기간은 2년을 기준으로 계약이 진행됩니다. 관리를
              안 받는 병원은 있어도 한 번 받은 병원은 지속적으로 함께하고
              있습니다.
            </ArrowText>
          </AnswerBlock>
        ) : (
          <></>
        )}
      </Block>
    </Wrap>
  );
};

const Block = styled.div`
  width: 1100px;
  height: auto;
  padding: 30px;
  background-color: white;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 12px;
  border-radius: 20px;
  margin-bottom: ${props => (props.marginBottm ? '150px' : '50px')};
  transition: 0.3s;

  @media screen and (max-width: 1024px) {
    width: 80%;
  }

  @media screen and (max-width: 760px) {
    padding: 30px 15px;
    width: 75%;
    margin-bottom: ${props => (props.marginBottm ? '100px' : '30px')};
  }
`;

const AskBlock = styled.div`
  margin: 0 auto;
  display: flex;
  width: 95%;
  height: auto;
  align-items: center;
`;

const AskIcon = styled.div`
  width: 30px;
  height: 30px;
  background-size: 30px;
  background-image: url(image/question.png);
  margin-right: 25px;

  @media screen and (max-width: 760px) {
    margin-right: 20px;
    width: 25px;
    height: 25px;
    background-size: 25px;
  }
`;

const ArrowIcon = styled.div`
  width: 18px;
  height: 18px;
  background-size: 18px;
  background-image: url(image/arrow-fill.png);
  margin-left: auto;
  cursor: pointer;
  transition: 0.3s;
  transform: ${props => (props.flag ? 'rotate(90deg)' : '')};

  @media screen and (max-width: 760px) {
    width: 15px;
    height: 15px;
    background-size: 15px;
  }
`;

const AskText = styled.div`
  color: black;
  font-size: 18px;
  font-weight: 500;

  @media screen and (max-width: 1024px) {
    width: 440px;
    line-height: 30px;
  }

  @media screen and (max-width: 760px) {
    width: 210px;
    font-size: 13px;
  }
`;

const AnswerBlock = styled.div`
  margin: 0 auto;
  display: flex;
  width: 95%;
  height: auto;
  align-items: center;
  margin: 30px 30px 15px 30px;

  @media screen and (max-width: 760px) {
    width: 100%;
    margin: 20px 30px 10px 30px;
  }
`;

const ArrowText = styled.div`
  width: 500px;
  font-size: 15px;
  line-height: 30px;
  color: #686868;

  @media screen and (max-width: 760px) {
    width: 80%;
    font-size: 12px;
    line-height: 23px;
  }
`;

export default Question;
