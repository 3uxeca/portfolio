'use client'

import React from 'react'
import styled from '@/components/skills/SkillsContents.module.scss'
import Skill from './Skill'

type Props = {}

const SkillsContents = (props: Props) => {
  const data = [
    { 
      img: './images/icons/HTML.svg', 
      name: 'HTML5', 
      contents: [
        '웹 서비스를 설계할 때 시각적인 부분 뿐만 아니라 시맨틱한 마크업 구조를 생각하여 만듭니다.',
        '웹 표준을 지키고 웹 접근성 개선에 노력합니다.'
      ] 
    },
    { 
      img: './images/icons/CSS.svg', 
      name: 'CSS3', 
      contents: [
        '반응형 웹 디자인을 구현할 수 있습니다.',
        '다양한 애니메이션 효과를 구현할 수 있습니다.'
      ] 
    },
    { 
      img: './images/icons/JavaScript.svg', 
      name: 'Javascript', 
      contents: [
        '실행 컨텍스트, 호출 스택과 이벤트 루프의 동작 원리를 이해하여 사용합니다.',
        '적절한 함수 분리를 통해 코드의 가독성을 높이고 유지보수성을 향상시킵니다.'
      ] 
    },
    { 
      img: './images/icons/TypeScript.svg', 
      name: 'Typescript', 
      contents: [
        '타입 시스템을 활용하여 개발하는 것을 지향합니다.',
        '백엔드 개발자와 소통하여 최대한 프로젝트 구조 내에서 동일한 변수명과 타입을 사용합니다.'
      ] 
    },
    { 
      img: './images/icons/React-Light.svg', 
      name: 'React', 
      contents: [
        '합리적인 방식으로 컴포넌트를 분리하여 컴포넌트의 재사용성을 높입니다.',
        'React Hooks 사용이 능숙하고, Redux, zustand 등으로 상태관리를 할 수 있습니다.',
        '라이프 사이클을 이해하며 사용하고, 성능 최적화를 고민합니다.'
      ] 
    },
    { 
      img: './images/icons/NextJS-Light.svg', 
      name: 'Next.js', 
      contents: [
        'CSR, SSG, ISG, SSR 4가지 렌더링 기법에 대해 이해하고, 페이지에 따라 적절한 렌더링 기법을 선택하여 사용할 수 있습니다.',
        'SEO를 향상시킬 수 있습니다.',
        '서버 컴포넌트와 클라이언트 컴포넌트의 차이를 알고 상황에 따라 적절히 사용할 수 있습니다.'
      ] 
    },
    { 
      img: './images/icons/Sass.svg', 
      name: 'SASS(SCSS)', 
      contents: [
        'CSS의 유지보수 시 @mixin을 통한 스타일 코드의 재사용성을 향상시키는데 활용합니다.',
        '셀렉터 중첩 기능을 활용하여 스타일링 코드의 가독성을 크게 향상시킵니다.'
      ] 
    },
    { 
      img: './images/icons/TailwindCSS-Light.svg', 
      name: 'Tailwind CSS', 
      contents: [
        'Utility-first 원칙을 이해하고, 빠르게 스타일링을 적용할 수 있습니다.',
        '프로젝트의 디자인 시스템을 Tailwind Config를 통해 커스터마이징할 수 있습니다.'
      ] 
    },
    { 
      img: './images/icons/JQuery.svg', 
      name: 'Jquery', 
      contents: [
        '레거시 프로젝트에서 빠르게 DOM 조작과 이벤트 처리를 할 수 있습니다.',
        'Ajax를 활용하여 비동기 통신을 구현할 수 있습니다.'
      ] 
    },
    { 
      img: './images/icons/Redux.svg', 
      name: 'Redux', 
      contents: [
        '상태 관리를 효율적으로 수행하며, Redux Toolkit 사용에 익숙합니다.',
        '미들웨어를 활용하여 비동기 처리를 구현할 수 있습니다.'
      ] 
    },
    { 
      img: './images/icons/Webpack-Light.svg', 
      name: 'Webpack', 
      contents: [
        '번들링을 최적화하여 로딩 속도를 개선합니다.',
        'Webpack의 다양한 플러그인과 로더를 활용하여 빌드 프로세스를 설정할 수 있습니다.'
      ] 
    },
    { 
      img: './images/icons/Spring-Light.svg', 
      name: 'Spring', 
      contents: [
        'Spring MVC 패턴을 이해하고 웹 애플리케이션 개발에 활용할 수 있습니다.',
        'Spring Boot를 사용하여 RESTful API를 구현할 수 있습니다.'
      ] 
    },
    { 
      img: './images/icons/MySQL-Light.svg', 
      name: 'Mysql', 
      contents: [
        '복잡한 쿼리를 작성하고 데이터를 효율적으로 관리할 수 있습니다.',
        '인덱스와 조인을 활용하여 쿼리 성능을 최적화합니다.'
      ] 
    },
    { 
      img: './images/icons/Dart-Light.svg', 
      name: 'Dart', 
      contents: [
        'Flutter 애플리케이션 개발을 위해 Dart 언어를 능숙하게 사용할 수 있습니다.',
        '비동기 프로그래밍을 이해하고 활용할 수 있습니다.'
      ] 
    },
    { 
      img: './images/icons/Flutter-Light.svg', 
      name: 'Flutter', 
      contents: [
        '다양한 플랫폼에서 동작하는 크로스 플랫폼 앱을 개발할 수 있습니다.',
        '위젯 트리 구조를 이해하고 적절히 구성하여 UI를 구현합니다.'
      ] 
    },
    { 
      img: './images/icons/Nginx.svg', 
      name: 'Nginx', 
      contents: [
        '정적 파일 호스팅과 로드 밸런싱 설정을 할 수 있습니다.',
        '리버스 프록시 서버를 설정하여 요청을 효율적으로 분배합니다.'
      ] 
    },
    { 
      img: './images/icons/Docker.svg', 
      name: 'Docker', 
      contents: [
        '컨테이너 기반의 환경 설정 및 배포를 할 수 있습니다.',
        'Docker Compose를 사용하여 다중 컨테이너 환경을 설정할 수 있습니다.'
      ] 
    },
    { 
      img: './images/icons/Jenkins-Light.svg', 
      name: 'Jenkins', 
      contents: [
        'CI/CD 파이프라인을 설정하여 자동화된 배포 프로세스를 구현할 수 있습니다.',
        '플러그인을 활용하여 다양한 작업을 자동화합니다.'
      ] 
    },
    { 
      img: './images/icons/Git.svg', 
      name: 'Git', 
      contents: [
        '브랜치 전략을 활용하여 협업 워크플로를 관리할 수 있습니다.',
        'Git Rebase, Merge를 적절히 사용하여 커밋 히스토리를 관리합니다.'
      ] 
    },
    { 
      img: './images/icons/Github-Light.svg', 
      name: 'GitHub', 
      contents: [
        'GitHub Actions를 활용하여 CI/CD 워크플로를 구현할 수 있습니다.',
        '프로젝트의 협업 및 코드 리뷰 환경을 효율적으로 관리합니다.'
      ] 
    },
    { 
      img: './images/icons/GithubActions-Light.svg', 
      name: 'Git Actions', 
      contents: [
        '자동화된 테스트와 배포 파이프라인을 작성할 수 있습니다.',
        'GitHub Marketplace를 활용하여 필요한 워크플로를 통합합니다.'
      ] 
    },
    { 
      img: './images/icons/Figma-Light.svg', 
      name: 'Figma', 
      contents: [
        'UI/UX 디자인 도구로, 디자인 프로토타입을 제작할 수 있습니다.',
        '디자인 시스템을 구축하여 일관성 있는 화면 구성을 지원합니다.'
      ] 
    },
  ];
  
  return (
    <div id='skills' className={styled.wrapper}>
      <div className={styled.titleWrap}>
        <div className={styled.title}>My skills</div>
        <div className={styled.desc}>사용자 중심의 웹 경험을 위해 그동안 사용했던 기술 스택을 확인해보세요.<br/></div>
      </div>
      <div className={styled.skillsWrap}>
        {
          data.map((item, index) => {
            const { img, name, contents } = item;
            return (
              <React.Fragment key={name}>
                <Skill image={img} name={name} contents={contents} />
              </React.Fragment>
            )
          })
        }
      </div>
    </div>
  )
}

export default SkillsContents