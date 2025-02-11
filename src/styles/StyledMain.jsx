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
  //   justify-content: center;
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

export const Background = styled.div`
  margin-top: 30px;
  width: 343px;
  height: 696px;
  flex-shrink: 0;
  background: #fff;
  box-shadow: 0px 0px 10px 0px #fff;
  display: flex;
  flex-direction: column;
  //   justify-content: center;
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
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.5px;
  margin-top: 35px;
`;

export const Input = styled.div`
  margin-top: 55px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: center;
  align-items: start;

  div {
    color: #000;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.3px;
  }

  input {
    width: 230px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 1px solid var(--1, #7f1833);
    color: #888787;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.5px;
    padding-left: 14px;
    background: transparent;
    outline: none; /* 포커스 시 기본 테두리 제거 */
  }
`;

export const Number = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: center;
  align-items: start;

  div {
    color: #000;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.3px;
  }

  input {
    width: 230px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 1px solid var(--1, #7f1833);
    color: #888787;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.5px;
    padding-left: 14px;
    background: transparent;
    outline: none; /* 포커스 시 기본 테두리 제거 */
  }
`;

export const Phone = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  justify-content: center;
  align-items: start;

  div {
    color: #000;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.3px;
  }

  input {
    width: 230px;
    height: 40px;
    flex-shrink: 0;
    border-radius: 5px;
    border: 1px solid var(--1, #7f1833);
    color: #888787;
    font-family: "Pretendard Variable";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.5px;
    padding-left: 14px;
    background: transparent;
    outline: none; /* 포커스 시 기본 테두리 제거 */
  }
`;

export const Go = styled.div`
  margin-top: 35px;
  display: flex;
  width: 230px;
  height: 40px;
  padding: 9px 99px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 5px;
  background: var(--1, #7f1833);

  div {
    color: #fff;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.32px;
  }
`;

export const Letter = styled.div`
  width: 356px;
  height: 214px;
  flex-shrink: 0;
  filter: drop-shadow(0px 0px 20px #fff);
  position: absolute;
  bottom: 18px; /* 🔥 배경 아래쪽으로 이동 */
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
