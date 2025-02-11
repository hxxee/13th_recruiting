import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as P from "../styles/StyledPassed";
import Confetti from "react-confetti"; // ✅ 추가된 부분

const Passed = ({ dataList }) => {
  const { Id } = useParams(); // 🔥 URL에서 Id 가져오기
  const [showConfetti, setShowConfetti] = useState(true);
  const [windowSize, setWindowSize] = useState({
    width: document.body.clientWidth, // ✅ width를 화면 크기에 맞춤
    height: window.innerHeight,
  });

  useEffect(() => {
    // 🔥 5초 후에 Confetti 제거
    setTimeout(() => setShowConfetti(false), 5000);

    // 🔥 화면 크기 변경 감지하여 Confetti 크기 조정
    const handleResize = () => {
      setWindowSize({
        width: document.body.clientWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const post = Id ? dataList.find((item) => item.Id === parseInt(Id)) : null;

  return (
    <P.Container>
      {/* 🎉 Confetti를 Container 내부에 제한 */}
      {showConfetti && (
        <P.ConfettiWrapper>
          <Confetti width={windowSize.width} height={windowSize.height} />
        </P.ConfettiWrapper>
      )}
      <P.Background>
        <P.Lion>
          <img
            id="logo"
            src={`${process.env.PUBLIC_URL}/images/Lion.svg`}
            alt="로고"
          />
        </P.Lion>
        <P.Logo>
          <img
            id="lion"
            src={`${process.env.PUBLIC_URL}/images/Logo.svg`}
            alt="사자"
          />
        </P.Logo>
        <P.Title>
          합격을
          <br /> 축하합니다!
        </P.Title>
        <P.Name>
          <div id="name">{post && post.Name}</div>
          <div id="u">님</div>
          <div id="is">은</div>
        </P.Name>
        <P.Content>
          동덕여대 멋사 13기에 최종합격 하셨습니다 🥳
          <br />
          긴 선발 과정에 참여하시느라 고생 많으셨습니다. <br />
          자세한 사항은 discord를 통해 안내드리겠습니다.
          <br />
          <br />
          링크
          <br />
          <br />
          3월 5일(수) 오후 15:00까지 <br />
          디스코드에 들어와주세요! <br />
          <br />
          3월 9일(일) 동덕 멋사 OT에서 만나요! <br />
          *OT장소 추후 안내 예정
        </P.Content>
        <P.Not>
          멋쟁이사자처럼 13기 아기사자 미등록 예정자는 <br />
          1차 합격 안내 연락처로 개별 연락 <br />
          부탁드립니다.
        </P.Not>
      </P.Background>
      <P.Letter2>
        <img
          id="letter"
          src={`${process.env.PUBLIC_URL}/images/Letter2.svg`}
          alt="편지지"
        />
      </P.Letter2>
      <P.Letter>
        <img
          id="letter"
          src={`${process.env.PUBLIC_URL}/images/Letter.svg`}
          alt="편지지"
        />
      </P.Letter>
      <P.Letter1>
        <img
          id="letter"
          src={`${process.env.PUBLIC_URL}/images/Letter1.svg`}
          alt="편지지"
        />
      </P.Letter1>
    </P.Container>
  );
};

export default Passed;
