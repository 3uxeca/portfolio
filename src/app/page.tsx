import Image from "next/image";
import styled from "./page.module.scss";

export default function Home() {
  return (
    <main className={styled.wrapper}>
      <div className={styled.main}>
        <div className={styled.nyang} />
        <div>안녕하세요!</div>
        <div>소통하는 웹 프론트엔드 개발자 사지혜 입니다.</div>
        <div>제 포트폴리오 웹 사이트에 방문하신 것을 환영합니다! ♥︎ \(*^ㅡ^*)/ ♥︎</div>
        <div>현재 이 페이지는 작업중 입니다.</div>
        <div>빠른 시일 내에 오픈하도록 하겠습니다. 감사합니다 :)</div>
      </div>
    </main>
  );
}
