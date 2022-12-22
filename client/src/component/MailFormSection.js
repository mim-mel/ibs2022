import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import styled from '@emotion/styled/macro';

const MailFormSection = () => {
  const form = useRef();

  const onSubmit = e => {
    e.preventDefault();

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
  };

  return (
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
            <Name>전화번호</Name>
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

        <Button type='submit'>제출하기</Button>
      </Form>
    </MailWrap>
  );
};

const MailWrap = styled.div`
  width: 850px;
  height: 520px;
  border-radius: 40px;
  margin: 0 auto 200px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  @media screen and (max-width: 1024px) {
    width: 80%;
  }

  @media screen and (max-width: 760px) {
    width: 80%;
    height: 600px;
    margin: 0 auto 140px auto;
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
    font-size: 10px;
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
    margin-bottom: 25px;
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
    width: 110px;
    font-size: 13px;
    height: 35px;
    left: 56%;
  }
`;

export default MailFormSection;
