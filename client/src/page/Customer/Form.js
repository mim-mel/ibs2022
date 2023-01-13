import MailFormSection from '../../component/MailFormSection';
import styled from '@emotion/styled/macro';
import { SubBanner, SubBannerTitle, Wrap } from '../Company';
import { CustomerTitle } from './Library';

const Form = () => {
  return (
    <Wrap backGround='#fcfcfc'>
      <SubBanner
        url='url(/image/submain5.jpg)'
        positionIpad='-700px -90px'
        positionPhone='-450px -0px'
      >
        <SubBannerTitle>CUSTOMER</SubBannerTitle>
      </SubBanner>

      <CustomerTitle>ONLINE-MAIL</CustomerTitle>
      <MailFormSection />
    </Wrap>
  );
};

const FormWrap = styled.div`
  width: 100%;
  height: auto;
  padding-top: 200px;

  @media screen and (max-width: 760px) {
    padding-top: 170px;
  }
`;

export default Form;
