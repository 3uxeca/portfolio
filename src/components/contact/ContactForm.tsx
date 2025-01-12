'use client'
import { MODAL_TYPE } from '@/constants'
import useModal from '@/hooks/useModal'
import { Form } from '@/types/IContact'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import styled from '@/components/contact/ContactForm.module.scss'
import { CiMail } from 'react-icons/ci'

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

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    
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