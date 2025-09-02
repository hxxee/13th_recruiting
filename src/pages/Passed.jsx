import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as P from "../styles/StyledPassed";
import Confetti from "react-confetti";

const Passed = ({ dataList }) => {
  const { Id } = useParams(); 
  const [showConfetti, setShowConfetti] = useState(true);
  const [windowSize, setWindowSize] = useState({
    width: document.body.clientWidth, 
    height: window.innerHeight,
  });

  useEffect(() => {
    setTimeout(() => setShowConfetti(false), 5000);

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
          동덕여대 멋사 14기 운영진에 최종합격 하셨습니다 🥳
          <br />
          프론트 세션 과정에 참여하시느라 고생 많으셨습니다. <br />
          자세한 사항은 구글 폼을 통해 안내드리겠습니다.
          <br />
          <br />
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeLDGP2ussQtthzsPPFH2LJLwfFENPoJY0FrLy6WmkTfsPKXQ/viewform?usp=sharing&ouid=106601036526044914289"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://docs.google.com/forms
            </a>
          <br />
          <br />
          9월 12일(금) 오후 23:59까지 <br />
          작성해주세요! <br />
          <br />
          11월 12일(수) 간지톤에서 만나요! <br />
          *간지톤 장소 추후 안내 예정
        </P.Content>
        {/* <P.Not>
          멋쟁이사자처럼 13기 아기사자 미등록 예정자는 <br />
          1차 합격 안내 연락처로 개별 연락 <br />
          부탁드립니다.
        </P.Not> */}
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
