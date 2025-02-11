import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* ✅ Pretendard Variable 폰트 적용 */
  @font-face {
    font-family: 'Pretendard Variable';
    src: url('https://cdn.jsdelivr.net/gh/orioncactus/Pretendard/dist/web/variable/PretendardVariable.woff2') format('woff2');
    font-weight: 100 900; /* 가변 폰트 지원 */
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f0f0f0; /* 원하는 배경색 */
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden; /* 가로 스크롤 방지 */
    font-family: 'Pretendard Variable', sans-serif;
  }

  #root {
    height: 100%;
  }
`;

export default GlobalStyle;
