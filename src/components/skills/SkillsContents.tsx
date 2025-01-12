'use client'

import React from 'react'
import styled from '@/components/skills/SkillsContents.module.scss'
import Skill from './Skill'

type Props = {}

const SkillsContents = (props: Props) => {
  const data = [
    { img: './images/icons/HTML.svg', name: 'HTML5' },
    { img: './images/icons/CSS.svg', name: 'CSS3' },
    { img: './images/icons/JavaScript.svg', name: 'Javascript' },
    { img: './images/icons/TypeScript.svg', name: 'Typescript' },
    { img: './images/icons/React-Light.svg', name: 'React' },
    { img: './images/icons/NextJS-Light.svg', name: 'Next.js' },
    { img: './images/icons/Sass.svg', name: 'SASS(SCSS)' },
    { img: './images/icons/TailwindCSS-Light.svg', name: 'Tailwind Css' },
    { img: './images/icons/JQuery.svg', name: 'Jquery' },
    { img: './images/icons/Redux.svg', name: 'Redux' },
    { img: './images/icons/Webpack-Light.svg', name: 'Webpack' },
    { img: './images/icons/Spring-Light.svg', name: 'Spring' },
    { img: './images/icons/MySQL-Light.svg', name: 'Mysql' },
    { img: './images/icons/Dart-Light.svg', name: 'Dart' },
    { img: './images/icons/Flutter-Light.svg', name: 'Flutter' },
    { img: './images/icons/Nginx.svg', name: 'Nginx' },
    { img: './images/icons/Docker.svg', name: 'Docker' },
    { img: './images/icons/Jenkins-Light.svg', name: 'Jenkins' },
    { img: './images/icons/Git.svg', name: 'Git' },
    { img: './images/icons/Github-Light.svg', name: 'GitHub' },
    { img: './images/icons/GithubActions-Light.svg', name: 'Git Actions' },
    { img: './images/icons/Figma-Light.svg', name: 'Figma' },
  ];
  
  return (
    <div id='skills' className={styled.wrapper}>
      <div className={styled.titleWrap}>
        <div className={styled.title}>My skills</div>
        <div className={styled.desc}>사용자 중심의 웹 경험을 위해 그동안 사용했던 웹 기술을 확인해보세요.<br/></div>
      </div>
      <div className={styled.skillsWrap}>
        {
          data.map((item, index) => {
            const { img, name } = item;
            return (
              <React.Fragment key={name}>
                <Skill image={img} name={name} />
              </React.Fragment>
            )
          })
        }
      </div>
    </div>
  )
}

export default SkillsContents