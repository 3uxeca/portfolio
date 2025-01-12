import { IoIosCall } from 'react-icons/io'
import { CiMail } from 'react-icons/ci'
import React from 'react'
import styled from '@/components/contact/ContactContents.module.scss'
import ContactForm from './ContactForm'

type Props = {}

const ContactContents = (props: Props) => {
  return (
    <div id='contact' className={styled.wrapper}>
      <div className={styled.titleWrap}>
        <div className={styled.title}>Contact</div>
      </div>
      <div className={styled.descWrap}>
        <div className={styled.desc}><IoIosCall className={styled.icon} />010-8894-8219</div>
        <div className={styled.desc}><CiMail className={styled.icon} />sajihye4@naver.com</div>        
      </div>
      <ContactForm />
    </div>
  )
}

export default ContactContents