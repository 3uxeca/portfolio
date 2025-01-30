'use client'
import { MODAL_TYPE } from '@/constants'
import useModal from '@/hooks/useModal'
import { Form } from '@/types/IContact'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import styled from '@/components/contact/ContactForm.module.scss'
import { CiMail } from 'react-icons/ci'
import { sendContactEmail } from '@/service/contact'
import { checkEmailUrl, checkMessage, checkSubject } from '@/utils/validateForm'

const DEFAULT_DATA = {
  from: '',
  subject: '',
  message: '',
}

const ContactForm = () => {
  const [form, setForm] = useState<Form>(DEFAULT_DATA);
  const { openModal: openCompleteErrorModal } = useModal(MODAL_TYPE.COMPLETE_ERROR);
  const handleOpenModal = () => {
    console.log('contact completeErrorModal open')
    openCompleteErrorModal();
  }

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  const completeSend = () => {
    setForm(DEFAULT_DATA);
  }

  const send = () => {
    sendContactEmail(form)
    .then(() => {
      openCompleteErrorModal({
        title: '이메일 전송 완료',
        body: '이메일 전송이 완료되었습니다.',
        customData: { type: 'complete' },
        onClose: completeSend,
      });
    })
    .catch(() => {
      openCompleteErrorModal({
        title: '이메일 전송 실패',
        body: '이메일 전송에 실패했습니다. 다시 시도해주세요.',
        customData: { type: 'error' },
      });      
    });    
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!checkEmailUrl(form.from)) {
      openCompleteErrorModal({
        title: '이메일 형식 오류',
        body: '이메일 형식을 확인한 후 다시 시도해주세요.',
        customData: { type: 'error' },
      });      
      return false;
    }
    if(!checkSubject(form.subject)) {
      openCompleteErrorModal({
        title: '제목 입력 오류',
        body: '제목을 확인한 후 다시 시도해주세요.',
        customData: { type: 'error' },
      });      
      return false;
    }
    if(!checkMessage(form.message)) {
      openCompleteErrorModal({
        title: '내용 입력 오류',
        body: '내용을 확인한 후 다시 시도해주세요.',
        customData: { type: 'error' },
      });      
      return false;
    }

    send();
  }
  return (
    <div className={styled.wrapper}>
      <form onSubmit={onSubmit} className={styled.form}>
        <div className={styled.inputWrap}>
          <label htmlFor='from' className={styled.label}>이메일</label>
          <input
            type='email'
            id='from'
            name='from'
            required
            value={form.from}
            onChange={onChange}
            className={styled.input}
            autoComplete='off'
          />
        </div>
        <div className={styled.inputWrap}>
          <label htmlFor='subject' className={styled.label}>제목</label>
          <input
            type='text'
            id='subject'
            name='subject'
            required
            value={form.subject}
            onChange={onChange}
            className={styled.input}
            autoComplete='off'
          />
        </div>
        <div className={styled.inputWrap}>
          <label htmlFor='message' className={styled.label}>내용</label>
          <textarea
            id='message'
            name='message'
            required
            value={form.message}
            onChange={onChange}
            className={styled.textarea}
          />
        </div>        
        <button className={styled.btn}>
          <CiMail className={styled.icon} />
        </button>
      </form>
    </div>
  )
}

export default ContactForm