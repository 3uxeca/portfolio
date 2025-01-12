import Image from "next/image";
import styled from "./page.module.scss";
import AboutPage from "./about/page";
import SkillsPage from "./skills/page";
import ContactPage from "./contact/page";
import ProjectsPage from "./projects/page";

export default function Home() {
  return (
    <main className={styled.wrapper}>
      {/* <div className={styled.main}>
        <div className={styled.nyang} />
        <div className={styled.title}>안녕하세요!</div>
        <div className={styled.title}><span className={styled.em}>소통</span>하는 <span className={styled.em}>웹 프론트엔드</span> 개발자 <span className={styled.em}>사지혜</span> 입니다.</div>
        <div>제 포트폴리오 웹 사이트에 방문하신 것을 환영합니다! ♥︎ \(*^ㅡ^*)/ ♥︎</div>
        <div>현재 이 페이지는 작업중 입니다.</div>
        <div>빠른 시일 내에 오픈하도록 하겠습니다. 감사합니다 :)</div>
        <div className={styled.download}>
          <a href='/files/portfolio_v1.0.1.pdf' type='application/pdf' download><span className={styled.em}>★☆</span> 포트폴리오 pdf 다운로드 (클릭!!) <span className={styled.em}>☆★</span></a>
        </div>
      </div> */}
        <AboutPage />
        <SkillsPage />
        <ProjectsPage />
        <ContactPage />
    </main>
  );
}
