import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import styled from '@emotion/styled/macro';
import Fade from 'react-reveal/Fade';

const MailFormSection = () => {
  const [IsChecked, setIsChecked] = useState(false);
  const form = useRef();

  const CheckHandler = checked => {
    if (checked === true) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(IsChecked);

    if (IsChecked === true) {
      emailjs
        .sendForm(
          'service_nm9pvgo',
          'template_i53nvnq',
          form.current,
          'AXn8zy4BgPAGy--1w'
        )
        .then(
          res => {
            alert('메일이 전송되었습니다.');
            console.log(res);
          },
          err => {
            alert('메일 전송에 실패하였습니다. 다시 시도해주세요.');
            console.log(err);
          }
        );
    } else {
      alert('개인정보 제공에 동의해주세요.');
    }
  };

  return (
    <Fade bottom>
      <MailWrap>
        <MailTitle>상담 문의하기</MailTitle>
        <MailText>
          동물병원 운영에 대해 궁금하신 사항이 있다면 언제든지 문의해주세요.
        </MailText>
        <Form ref={form} onSubmit={onSubmit}>
          <NameInputWrap>
            <NameInputBlock>
              <Name>병원명</Name>
              <Input type='text' name='hospital' />
            </NameInputBlock>

            <NameInputBlock>
              <Name>성 함</Name>
              <Input type='name' name='name' />
            </NameInputBlock>
          </NameInputWrap>

          <NameInputWrap>
            <NameInputBlock>
              <Name>연락처</Name>
              <Input type='tel' name='phone' />
            </NameInputBlock>

            <NameInputBlock>
              <Name>이메일</Name>
              <Input type='email' name='email' />
            </NameInputBlock>
          </NameInputWrap>

          <TextAreaBlock>
            <Name>문의 내용</Name>
            <TextArea type='text' name='text' />
          </TextAreaBlock>

          <CheckBoxBlock>
            <CheckBox
              type='checkbox'
              value={IsChecked}
              onChange={e => CheckHandler(e.target.checked)}
            />
            <CheckBoxText>개인정보 제공동의</CheckBoxText>
            <BubbleBlock>
              <BubbleText>
                IBS 파트너스는 고객 문의사항 접수 및 답변을 위해 아래와 같이
                개인정보를 수집,이용합니다.
              </BubbleText>
              <BubbleTextSmall>
                목적: 고객 문의사항 접수 및 답변
              </BubbleTextSmall>
              <BubbleTextSmall>
                항목: 병원명, 성함, 연락처, 이메일
              </BubbleTextSmall>
              <BubbleTextSmall>보유 기간: 수집일로부터 1년</BubbleTextSmall>
              <BubbleTextSmall margin>
                서비스 이용에 필요한 최소한의 수집 및 이용에 동의하지 않을 수
                있으나, 동의를 거부할 경우 서비스 이용에 제한이 있을 수
                있습니다.
              </BubbleTextSmall>
            </BubbleBlock>
          </CheckBoxBlock>
          <Button type='submit'>제출하기</Button>
        </Form>
      </MailWrap>
    </Fade>
  );
};

const MailWrap = styled.div`
  width: 850px;
  height: 520px;
  border-radius: 40px;
  margin: 0 auto 150px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  @media screen and (max-width: 1024px) {
    width: 80%;
  }

  @media screen and (max-width: 760px) {
    width: 80%;
    height: 550px;
    margin: 0 auto 100px auto;
  }
`;

const Form = styled.form`
  width: 650px;
  height: auto;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`;

const MailTitle = styled.div`
  font-size: 32px;
  font-weight: 700;
  margin: 0 auto;
  color: #053dc0;
  margin-bottom: 20px;

  @media screen and (max-width: 760px) {
    font-size: 23px;
    margin-bottom: 15px;
  }
`;

const MailText = styled.div`
  font-size: 14.5px;
  color: #898989;
  margin-bottom: 30px;

  @media screen and (max-width: 760px) {
    font-size: 12px;
    width: 70%;
    text-align: center;
    line-height: 20px;
    margin-bottom: 10px;
  }
`;

const NameInputWrap = styled.div`
  width: 650px;
  display: flex;
  margin-bottom: 30px;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  @media screen and (max-width: 760px) {
    display: grid;
    grid-template-columns: 100%;
    margin-bottom: 0;
  }
`;

const NameInputBlock = styled.div`
  width: 50%;
  height: 50px;
  padding: 0 20px;
  box-sizing: border-box;

  @media screen and (max-width: 760px) {
    width: 100%;
    height: 70px;
  }
`;

const TextAreaBlock = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 20px;
  box-sizing: border-box;
  margin-bottom: 35px;

  @media screen and (max-width: 760px) {
    margin-bottom: 15px;
  }
`;

const Name = styled.div`
  font-size: 17px;
  color: #053dc0;
  font-weight: 700;
  margin-bottom: 10px;
  margin-left: 10px;

  @media screen and (max-width: 760px) {
    font-size: 14px;
    margin-bottom: 7px;
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  background-color: #f2f2f2;
  border-radius: 30px;
  padding: 0 20px;
  box-sizing: border-box;
  height: 35px;

  :focus {
    outline: none;
  }

  @media screen and (max-width: 760px) {
    height: 30px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 70px;
  border: none;
  background-color: #f2f2f2;
  border-radius: 20px;
  resize: none;
  padding: 20px;
  box-sizing: border-box;

  :focus {
    outline: none;
  }
`;

const Button = styled.button`
  width: 135px;
  position: relative;
  height: 40px;
  left: 76%;
  top: 3%;
  border: none;
  border-radius: 30px;
  background-color: #053dc0;
  color: white;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  @media screen and (max-width: 1024px) {
    left: 74%;
  }

  @media screen and (max-width: 760px) {
    width: 80px;
    font-size: 13px;
    height: 35px;
    left: 56%;
    margin-left: 30px;
  }
`;

const BubbleBlock = styled.div`
  position: absolute;
  width: 290px;
  height: 120px;
  padding: 15px;
  background: #f4f4f4;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  left: 0px;
  top: 40px;
  opacity: 0;
  transition: 0.3s;

  :after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 0 15px 15px;
    border-color: #f4f4f4 transparent;
    display: block;
    width: 0;
    z-index: 1;
    top: -15px;
    left: 50px;
  }
`;

const BubbleText = styled.div`
  font-size: 12.5px;
  color: #000000;
  font-weight: 600;
  margin-bottom: 10px;
`;

const BubbleTextSmall = styled.div`
  font-size: 10px;
  color: #636363;
  margin-top: ${props => (props.margin ? '10px' : '0')};
`;

const CheckBoxBlock = styled.div`
  position: absolute;
  margin: 20px 17px;
  display: flex;

  @media (hover: hover) {
    :hover ${BubbleBlock} {
      opacity: 1;
    }
  }
`;

const CheckBox = styled.input`
  width: 23px;
  color: #a5a5a5;
  cursor: pointer;

  @media screen and (max-width: 760px) {
    font-size: 15px;
  }
`;

const CheckBoxText = styled.div`
  font-size: 15px;
  color: #8c8c8c;

  @media screen and (max-width: 760px) {
    font-size: 12px;
    margin-top: 2px;
  }
`;

export default MailFormSection;
