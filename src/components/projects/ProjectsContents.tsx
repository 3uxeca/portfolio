import React from 'react'
import styled from '@/components/projects/ProjectsContents.module.scss'

type Props = {}

const ProjectsContents = (props: Props) => {
  return (
    <div id='projects' className={styled.wrapper}>
      <div className={styled.titleWrap}>
        <div className={styled.title}>Projects</div>
        <div className={styled.desc}>진행 프로젝트 목록 개발중</div>
      </div>
    </div>
  )
}

export default ProjectsContents