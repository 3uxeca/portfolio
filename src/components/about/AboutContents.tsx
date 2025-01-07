import React from 'react'
import CustomImage from '../common/CustomImage'
import Image from 'next/image'
import styled from '@/components/about/AboutContents.module.scss';

type Props = {}

const AboutContents = (props: Props) => {
  return (
    <div className={styled.wrapper}>
      <div className={styled.image}>
        <CustomImage src={'/images/img/jhsa3.jpeg'} alt='Profile Image' width='300px' />
      </div>
      <div className={styled.contents}>
        <div className={styled.mainTitle}>Work hard, play hard together!</div>
        <p>안녕하세요!👋🏻</p>
        <p>사람들과 소통하며 협업의 가치를 최우선으로 생각하는 프론트엔드 개발자, 사지혜 입니다.</p><br/>
        <p>저는 동료들의 이야기에 귀 기울이며, 모두가 만족할 수 있는 결과를 만드는 일을 즐겨요.</p>
        <p>개발 과정에서는 즐거움을, 결과에서는 뿌듯함을 느끼며 하루하루 성장해 나가고 있습니다.</p><br/>
        <p>사용자에게는 최고의 UX를, 동료들에게는 더 나은 DX를 제공하기 위해</p>
        <p>늘 고민하고, 실행에 옮기는 사람이 되려고 노력합니다.</p><br/>
        <p>혼자만의 작업도 물론 중요하지만. 서로 의견을 나누고 협력하는 과정에서 더 나은 결과가 나온다고 믿어요.</p>
        <p>그래서 다양한 역할에 도전하며 전체 프로세스를 깊이 이해하려고 항상 노력하고 있습니다.</p><br/>
        <p>앞으로도 새로운 것을 배우고 시도하며,</p>
        <p>사용자와 동료 모두가 만족할 수 있는 결과를 만들어가는 여정을 이어나려고 합니다.</p>
      </div>
    </div>
  )
}

export default AboutContents