import { Line, SubBanner, SubBannerTitle, Wrap } from '../Company';
import {
  ButtonsWrap,
  Button,
  ButtonImg,
  ButtonText,
} from '../Consulting/Labor';
import {
  MainImgTextWrap,
  MainImgWrap,
  MainImg,
  MainImgBack,
  MainTextBlock,
  MainText,
  MainTitle,
} from '../Consulting/Labor';
import { LinkStyled } from '../../component/Nav';
import styled from '@emotion/styled';
import Fade from 'react-reveal/Fade';

const CompanyX = () => {
  return (
    <Wrap backGround='#fcfcfc'>
      <SubBanner
        url='url(/image/submain2.jpg)'
        positionIpad='-700px -90px'
        positionPhone='-450px -0px'
      >
        <SubBannerTitle>SERVICE</SubBannerTitle>
      </SubBanner>
      <ButtonsWrap>
        <LinkStyled to='/funds'>
          <Button color='white' marginBottomPhone>
            <ButtonImg src='/image/funds-service.png' marginBottom='5px' />
            <ButtonText color='#053dc0' weight='900'>
              정부지원금
            </ButtonText>
          </Button>
        </LinkStyled>

        <LinkStyled to='/risks'>
          <Button color='white'>
            <ButtonImg src='/image/risk-service.png' marginBottom='3px' />
            <ButtonText color='#053dc0' weight='900'>
              리스크관리
            </ButtonText>
          </Button>
        </LinkStyled>

        <LinkStyled to='/companybuild'>
          <Button color='white'>
            <ButtonImg
              src='/image/company-open-service.png'
              marginBottom='6px'
            />
            <ButtonText color='#053dc0' weight='900'>
              법인설립
            </ButtonText>
          </Button>
        </LinkStyled>

        <LinkStyled to='/companyx'>
          <Button color='#053dc0' positionPhone>
            <ButtonImg
              src='/image/company-x-service-w.png'
              marginBottom='6px'
            />
            <ButtonText color='white' weight='600'>
              법인청산
            </ButtonText>
          </Button>
        </LinkStyled>

        <LinkStyled to='/evaluation'>
          <Button color='white' positionPhone>
            <ButtonImg src='/image/evaluation-service.png' marginBottom='6px' />
            <ButtonText color='#053dc0' weight='900'>
              감정평가
            </ButtonText>
          </Button>
        </LinkStyled>
      </ButtonsWrap>

      <MainImgTextWrap>
        <Fade bottom>
          <MainImgWrap>
            <MainImgBack />
            <MainImg url='image/company-x1.jpg' />
          </MainImgWrap>
        </Fade>

        <Fade bottom>
          <MainTextBlock>
            <MainTitle>법인 청산</MainTitle>
            <MainText>
              법인회사 운영 중 발생할 수 있는 사건사고를 IBS파트너스와 함께 미리
              대비하세요. 여러 곳의 법인 회사들을 관리하며 다양한 케이스의 사건
              사고들을 해결했습니다. 경험에서 나온 데이터와 협력사의 법률 자문을
              토대로 예기치 못한 사고가 발생해도 언제나 해답을 찾아드리겠습니다.
            </MainText>
          </MainTextBlock>
        </Fade>
      </MainImgTextWrap>

      <Fade bottom>
        <ContentWrap marginTop='170px'>
          <ContentTitle>1. 해산 및 청산절차</ContentTitle>
          <TableWrap>
            <Table>
              <TableRowOdd>
                <TableContent>
                  <TableText>1</TableText>
                  <TableText>이사회</TableText>
                  <TableText>해산결의를 위한 주주총회 소집 결의</TableText>
                  <TableText>상법 517</TableText>
                </TableContent>
              </TableRowOdd>
              <TableRowEven>
                <TableContent>
                  <TableText>2</TableText>
                  <TableText>주주총회</TableText>
                  <TableText>
                    해산결의, 청산인 선임 (합병, 파산 경우 외는 대표이사)
                  </TableText>
                  <TableText>상법 518</TableText>
                </TableContent>
              </TableRowEven>
              <TableRowOdd>
                <TableContent>
                  <TableText>3</TableText>
                  <TableText>해산 등기</TableText>
                  <TableText>
                    해산결의 후 14일 이내(해산사유, 연월일, 청산인신고)
                  </TableText>
                  <TableText>상법 228</TableText>
                </TableContent>
              </TableRowOdd>
              <TableRowEven>
                <TableContent>
                  <TableText>4</TableText>
                  <TableText>채권 최고</TableText>
                  <TableText>
                    2개월 이내에 2호 이상 개별 채권자 총보 및 신문공고
                  </TableText>
                  <TableText>상법 535-537</TableText>
                </TableContent>
              </TableRowEven>
              <TableRowOdd>
                <TableContent>
                  <TableText>5</TableText>
                  <TableText>정리 과정</TableText>
                  <TableText>
                    채권회수, 채무변제, 자산 처분 후 잔여재산가액 확정
                  </TableText>
                  <TableText></TableText>
                </TableContent>
              </TableRowOdd>
              <TableRowEven>
                <TableContent>
                  <TableText>6</TableText>
                  <TableText>청산주주총회</TableText>
                  <TableText>청산보고서 승인</TableText>
                  <TableText>상법 540</TableText>
                </TableContent>
              </TableRowEven>
              <TableRowOdd>
                <TableContent>
                  <TableText>7</TableText>
                  <TableText>청산종결등기</TableText>
                  <TableText>청산보고 주주총회 승인 후 14일 이내</TableText>
                  <TableText>상법 264</TableText>
                </TableContent>
              </TableRowOdd>
              <TableRowEven>
                <TableContent>
                  <TableText>8</TableText>
                  <TableText>배당소득제 신고</TableText>
                  <TableText>
                    잔여재산 가액 확정 다음달 10일까지 배당소득 원청징수
                  </TableText>
                  <TableText>소득령 191</TableText>
                </TableContent>
              </TableRowEven>
              <TableRowOdd>
                <TableContent>
                  <TableText>9</TableText>
                  <TableText>부가세 신고</TableText>
                  <TableText>
                    잔여재산 확정 후 다음달 25일 이내 폐업신고와 부가세 신고
                  </TableText>
                  <TableText></TableText>
                </TableContent>
              </TableRowOdd>
              <TableRowEven>
                <TableContent>
                  <TableText>10</TableText>
                  <TableText>법인세 신고</TableText>
                  <TableText>
                    잔여재산 확정 후 3개월이 속하는 말일까지 각 사업연도 소득 및
                    청산소득 법인세 신고
                  </TableText>
                  <TableText>법인법 84</TableText>
                </TableContent>
              </TableRowEven>
              <TableRowOdd>
                <TableContent>
                  <TableText>11</TableText>
                  <TableText>종합소득세 신고</TableText>
                  <TableText>
                    배당소득 2천만원 초과시 타소득 (근로 및 사업소득)과 합산하여
                    종합소득세 신고
                  </TableText>
                  <TableText>소득세법 70</TableText>
                </TableContent>
              </TableRowOdd>
            </Table>
          </TableWrap>
        </ContentWrap>
      </Fade>
      <Line />
      <ContentWrap marginTop='100px'>
        <Fade bottom>
          <ContentTitle>2. 청산 시 세금</ContentTitle>
        </Fade>
        <Fade bottom>
          <Content2TextWrap marginBottom='60px'>
            <Content2SecondTitle>
              1) 청산 소득에 대한 법인세
            </Content2SecondTitle>
            <BlueBlock>
              청산소득금액 = 잔여재산가액 - (납입자본금 + 잉여금
              +환급법인세액-이원결손금)
            </BlueBlock>
            <ArrowWrap>
              <Arrow />
              <ArrowText>
                법인 청산 시 청산소득에 대한 법인세를 과세하는 이유는 자산의
                가치상승분 (토지, 건물소유시)에 대하여 청산시점에 실현 및
                처분되었다고 보기 때문입니다. (토지,건물 소유분 없을 경우는
                발생하지 않음)
              </ArrowText>
            </ArrowWrap>
          </Content2TextWrap>
        </Fade>

        <Fade bottom>
          <Content2TextWrap marginBottom='50px'>
            <Content2SecondTitle>
              2) 청산 소득에 대한 배당소득세
            </Content2SecondTitle>
            <BlueBlock>
              의제배당(청산에의한) 금액 : 잔여재산가액 - 주식의 취득가액
            </BlueBlock>
            <ArrowWrap>
              <Arrow />
              <ArrowText>
                비교 산출 새액에 의해 2천만원 까지는 14% 원천 징수로 종결되고,
                2천만원 초과본은 타소득(근로소득 또는 사업소득)고 합산하여
                누진세율(15%~45%)이 적용됩니다.
              </ArrowText>
            </ArrowWrap>
          </Content2TextWrap>
        </Fade>
        <MiniTableWrap>
          <Fade bottom>
            <TableWrap2 marginBottomPhone='30px'>
              <Table>
                <TableRowBlue>
                  <TableText>
                    <span>2021년 이후 기본세율</span>
                  </TableText>
                </TableRowBlue>
                <TableRowOdd>
                  <TableText>~1,200만원 이하</TableText>
                </TableRowOdd>
                <TableRowEven>
                  <TableText>1,200만원 초과 4,600만원 이하</TableText>
                </TableRowEven>
                <TableRowOdd>
                  <TableText>4,600만원 초과 8,800만원 이하</TableText>
                </TableRowOdd>
                <TableRowEven>
                  <TableText>8,800만원 초과 15,000만원 이하</TableText>
                </TableRowEven>
                <TableRowOdd>
                  <TableText>15,000만원 초과 30,000만원 이하</TableText>
                </TableRowOdd>
                <TableRowEven>
                  <TableText>30,000만원 초과 50,000만원 이하</TableText>
                </TableRowEven>
                <TableRowOdd>
                  <TableText>50,000만원 초과 100,000만원 이하</TableText>
                </TableRowOdd>
                <TableRowEven>
                  <TableText>100,000만원 초과</TableText>
                </TableRowEven>
              </Table>
            </TableWrap2>
          </Fade>

          <Fade bottom delay={500}>
            <TableWrap2 marginBottomPhone='70px'>
              <Table>
                <TableRowBlue>
                  <TableText>
                    <span>2021년 이후 기본세율</span>
                  </TableText>
                </TableRowBlue>
                <TableRowOdd>
                  <TableText>과세표준의 6%</TableText>
                </TableRowOdd>
                <TableRowEven>
                  <TableText>과세표준의 15%~108만원</TableText>
                </TableRowEven>
                <TableRowOdd>
                  <TableText>과세표준의 24%~522만원</TableText>
                </TableRowOdd>
                <TableRowEven>
                  <TableText>과세표준의 35%~1490만원</TableText>
                </TableRowEven>
                <TableRowOdd>
                  <TableText>과세표준의 38%~1940만원</TableText>
                </TableRowOdd>
                <TableRowEven>
                  <TableText>과세표준의 40%~2540만원</TableText>
                </TableRowEven>
                <TableRowOdd>
                  <TableText>과세표준의 42%~3540만원</TableText>
                </TableRowOdd>
                <TableRowEven>
                  <TableText>과세표준의 45%~6540만원</TableText>
                </TableRowEven>
              </Table>
            </TableWrap2>
          </Fade>
        </MiniTableWrap>
      </ContentWrap>
    </Wrap>
  );
};

const ContentWrap = styled.div`
  width: 1000px;
  margin: 0 auto;
  margin-top: ${props => props.marginTop};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    width: 80%;
  }

  @media screen and (max-width: 760px) {
    width: 80%;
    margin-top: 70px;
  }
`;

const ContentTitle = styled.div`
  font-size: 30px;
  color: #053dc0;
  font-weight: 800;
  margin-bottom: 50px;

  @media screen and (max-width: 760px) {
    font-size: 20px;
    margin-bottom: 30px;
  }
`;

const MiniTableWrap = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 47% 47%;
  justify-content: space-between;

  @media screen and (max-width: 760px) {
    grid-template-columns: 100%;
  }
`;

const TableWrap = styled.div`
  width: 100%;
  height: 550px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;
  margin-bottom: 100px;
  border-radius: 40px;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    width: 145%;
    border-radius: 30px;
  }

  @media screen and (max-width: 760px) {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 70px;
    height: 500px;
  }
`;

const TableWrap2 = styled.div`
  width: 100%;
  height: 460px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;
  margin-bottom: 100px;
  border-radius: 40px;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    height: 380px;
    border-radius: 20px;
  }

  @media screen and (max-width: 760px) {
    margin-bottom: 70px;
    height: 300px;
    margin-bottom: ${props => props.marginBottomPhone};
  }
`;

const Table = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(9);
`;

const TableRowOdd = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
`;

const TableRowBlue = styled.div`
  width: 100%;
  height: 100%;
  background-color: #053dc0;
`;

const TableRowEven = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;

const TableContent = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 5% 20% 65% 10%;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 5% 15% 60% 10%;
    justify-content: space-between;
  }

  @media screen and (max-width: 1024px) {
    width: 95%;
  }
`;

const TableText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: black;
  font-size: 15px;
  font-weight: 500;

  span {
    color: white;
  }

  @media screen and (max-width: 1024px) {
    font-size: 13px;
  }

  @media screen and (max-width: 760px) {
    font-size: 10px;
  }
`;

const Content2TextWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 70px 100px;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 40px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;
  box-sizing: border-box;
  margin-bottom: ${props => props.marginBottom};

  @media screen and (max-width: 1024px) {
    grid-template-columns: 5% 15% 60% 10%;
    padding: 70px 60px;
  }

  @media screen and (max-width: 760px) {
    padding: 30px 30px;
    margin-bottom: 40px;
    border-radius: 20px;
  }
`;

const Content2SecondTitle = styled.div`
  font-size: 23px;
  font-weight: 500;
  color: #686868;

  @media screen and (max-width: 760px) {
    font-size: 15px;
  }
`;

const BlueBlock = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  font-weight: 500;
  color: white;
  background-color: #053dc0;
  border-radius: 50px;
  margin: 30px 0;

  @media screen and (max-width: 1024px) {
    font-size: 15px;
  }

  @media screen and (max-width: 760px) {
    font-size: 12px;
    line-height: 18px;
    padding: 25px;
    box-sizing: border-box;
    margin: 20px 0;
  }
`;

const ArrowWrap = styled.div`
  width: 100%;
  display: flex;
`;

const Arrow = styled.div`
  width: 30px;
  height: 20px;
  background-image: url(image/arrow-fill.png);
  background-size: 20px;
  margin-right: 15px;

  @media screen and (max-width: 1024px) {
    margin-top: 5px;
    height: 15px;
    background-size: 15px;
  }

  @media screen and (max-width: 760px) {
    margin-top: 5px;
    height: 10px;
    background-size: 10px;
    margin-right: 10px;
  }
`;

const ArrowText = styled.div`
  font-size: 16px;
  color: #686868;
  line-height: 28px;

  @media screen and (max-width: 1024px) {
    font-size: 15px;
  }

  @media screen and (max-width: 760px) {
    font-size: 10px;
    line-height: 20px;
  }
`;

export default CompanyX;
