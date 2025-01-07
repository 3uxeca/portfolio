import React from 'react'
import styled from '@/components/skills/Skill.module.scss'
import Image from 'next/image';

type Props = {
  image: any;
  name: string;
}

const Skill = ({ image, name }: Props) => {
  return (
    <div className={styled.skill}>
      {/* {image} */}
      <Image src={image} alt={name} width={64} height={64} />
      <div className={styled.name}>{name}</div>
    </div>
  )
}

export default Skill