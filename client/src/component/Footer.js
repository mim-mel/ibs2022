import styled from '@emotion/styled/macro';

const Footer = () => {
  return (
    <FooterWrap>
      <ContentsWrap>
        <LogoBlock>
          <SimpleLogo src='/image/logo-simple.png' />
          <FooterText>Are you ready to work with us?</FooterText>
        </LogoBlock>
        <TextWrap>
          <TextBlock>
            <TextTitle>Quick Link</TextTitle>
            <Text>company</Text>
            <Text>consulting</Text>
            <Text>portfolio</Text>
            <Text>customer</Text>
            <Text>contact us</Text>
          </TextBlock>
          <TextBlock>
            <TextTitle>Customer</TextTitle>
            <Text>온라인 문의</Text>
            <Text>FAQ</Text>
            <Text>공지사항</Text>
          </TextBlock>
          <TextBlock>
            <TextTitle>Information</TextTitle>
            <Text>서초구 효령로 336 윤일빌딩 5층 (본사)</Text>
            <Text>제주시 청사로 28 3층 (제주지사)</Text>
            <Text>대표전화 : 02-6951-3323</Text>
            <Text>팩스: 02-6952-7002</Text>
            <Text>이메일: ibspartners.seoul@gmail.com</Text>
          </TextBlock>
        </TextWrap>
      </ContentsWrap>
    </FooterWrap>
  );
};

const FooterWrap = styled.div`
  width: 100%;
  height: 400px;
  background-color: #053dc0;
`;

const ContentsWrap = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;

  @media screen and (max-width: 1400px) {
    width: 1000px;
  }

  @media screen and (max-width: 1024px) {
    width: 80%;
  }

  @media screen and (max-width: 760px) {
    display: grid;
    grid-template-columns: 100%;
  }
`;

const LogoBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  justify-content: center;

  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;

const SimpleLogo = styled.img`
  width: 73px;
  height: auto;
  margin-bottom: 20px;

  @media screen and (max-width: 1024px) {
    width: 63px;
  }

  @media screen and (max-width: 760px) {
    margin: 30px auto 20px auto;
    width: 60px;
    margin-bottom: 15px;
  }
`;

const FooterText = styled.div`
  font-size: 36px;
  color: white;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 55px;

  @media screen and (max-width: 1024px) {
    font-size: 23px;
    line-height: 40px;
  }

  @media screen and (max-width: 760px) {
    font-size: 19px;
  }
`;

const TextWrap = styled.div`
  width: 55%;
  height: 100%;
  display: grid;
  grid-template-columns: 28% 28% 40%;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    width: 62%;
  }

  @media screen and (max-width: 760px) {
    width: 100%;
  }
`;

const TextBlock = styled.div`
  padding-top: 105px;

  @media screen and (max-width: 760px) {
    padding-top: 20px;
  }
`;

const TextTitle = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 23px;

  @media screen and (max-width: 1024px) {
    font-size: 15px;
  }

  @media screen and (max-width: 760px) {
    font-size: 13px;
  }
`;

const Text = styled.div`
  color: white;
  font-size: 14.5px;
  font-weight: 300;
  margin-top: 12px;
  opacity: 0.7;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 1024px) {
    font-size: 12px;
  }

  @media screen and (max-width: 760px) {
    font-size: 10px;
    margin-top: 7px;
  }
`;

export default Footer;
