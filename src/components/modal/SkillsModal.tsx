'use client'

import { ModalProps } from '@/types/IModal'
import Image from 'next/image'
import React from 'react'
import styled from '@/components/modal/SkillsModal.module.scss'
import { Blur, CloseButton, Common } from './ModalStyles'

const SkillsModal = ({ title, body, onClose, closeModal, customData }: ModalProps) => {
  return (
    <Blur className={styled.wrapper}>
      <div className={styled.header}>
        <CloseButton onClick={closeModal} />
      </div>
      <div className={styled.skillTitle}>
        <Image src={customData.image} alt={customData.name} width={64} height={64} />
        <div className={styled.name}>{customData.name}</div>
      </div>
      <div className={styled.skillInfo}>
        {
          customData.contents &&
          customData.contents.map((item:string, index:number) => {
            return (
              <div key={`skills_${customData.name}_${index}`}>
                <div>• {item}</div>
              </div>
            )
          })
        }
      </div>
    </Blur>
  )
}

export default SkillsModal