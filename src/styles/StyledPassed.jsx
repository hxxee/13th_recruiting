import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 0px;
  padding: 0; /* 불필요한 패딩 제거 */
  box-sizing: border-box; /* 패딩이 width에 포함되도록 설정 */
  display: flex;
  flex-direction: column;
  width: 393px;
  height: 852px;
  align-items: center;
  overflow-x: hidden;
  background: linear-gradient(
    180deg,
    #ae264a 0%,
    #af2349 16.5%,
    #a32145 31.5%,
    #9f2143 52.5%,
    #8f1e3d 76.5%,
    #67182f 100%
  );
`;

/* 🔥 Confetti가 넘치지 않도록 부모 내부에 배치 */
export const ConfettiWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden; /* 🔥 여기에서도 스크롤 방지 */
  z-index: 999;
`;

export const Background = styled.div`
  margin-top: 30px;
  width: 343px;
  height: 696px;
  flex-shrink: 0;
  background: #fff;
  box-shadow: 0px 0px 10px 0px #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative; /* 상대적 위치 지정 */
  z-index: 0; /* Lion이 배경 뒤로 안 가게 조정 */
`;

export const Lion = styled.div`
  width: 256.403px;
  height: 255.599px;
  flex-shrink: 0;
  position: absolute; /* Background 안에서 절대 위치 */
  top: 58%; /* 화면 중앙 정렬 */
  left: 30%;
  transform: translate(-50%, -50%) rotate(-7.052deg); /* 중앙 정렬 + 회전 적용 */
  z-index: -1; /* Background보다 뒤로 안 가게 유지 */
`;

export const Logo = styled.div`
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  margin-top: 29px;
`;

export const Title = styled.div`
  color: var(--1, #7f1833);
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.7px;
  margin-top: 20px;
`;

export const Name = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  align-items: end;

  #name {
    color: #0085ff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.52px;
  }

  #u {
    color: #000;
    font-family: "Pretendard Variable";
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.52px;
  }

  #is {
    margin-left: 2px;
    color: var(--1, #320613);
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.32px;
  }
`;

export const Content = styled.div`
  margin-top: 15px;
  color: #000;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.32px;
`;

export const Not = styled.div`
  margin-top: 53px;
  color: #888787;
  text-align: center;
  font-family: "Pretendard Variable";
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
`;

export const Letter = styled.div`
  width: 356px;
  height: 214px;
  flex-shrink: 0;
  filter: drop-shadow(0px 0px 20px #fff);
  position: absolute;
  bottom: 50px; /* 🔥 배경 아래쪽으로 이동 */
  left: 50%;
  transform: translateX(-50%); /* 가로 중앙 정렬 */
  z-index: 1; /* 🔥 입력 박스보다 위에 오도록 조정 */
`;

export const Letter1 = styled.div`
  width: 356px;
  height: 102px;
  flex-shrink: 0;
  //   filter: drop-shadow(0px 0px 20px #fff);
  position: absolute;
  bottom: 50px; /* 🔥 배경 아래쪽으로 이동 */
  left: 50%;
  transform: translateX(-50%); /* 가로 중앙 정렬 */
  z-index: 1; /* 🔥 입력 박스보다 위에 오도록 조정 */
  padding: 0;
`;
