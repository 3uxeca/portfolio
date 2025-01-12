'use client'

import React from 'react'
import styled from '@/components/skills/Skill.module.scss'
import Image from 'next/image';
import useModal from '@/hooks/useModal';
import { MODAL_TYPE } from '@/constants';

type Props = {
  image: any;
  name: string;
  contents: string[];
}

const Skill = ({ image, name, contents }: Props) => {
  const { openModal: openSkillModal } = useModal(MODAL_TYPE.SKILLS);
  const handleOpenSkillModal = () => {
    console.log('skills modal open', image, name, contents);
    openSkillModal({ customData: {image, name, contents} });
  }
  return (
    <div className={styled.skill} onClick={handleOpenSkillModal}>
      {/* {image} */}
      <Image src={image} alt={name} width={64} height={64} />
      <div className={styled.name}>{name}</div>
    </div>
  )
}

export default Skill