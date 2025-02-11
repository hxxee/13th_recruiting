import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as M from "../styles/StyledMain";

const Main = ({ dataList }) => {
  const navigate = useNavigate();

  // 🔥 사용자 입력을 저장하는 state
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [phone, setPhone] = useState("");

  const formatPhoneNumber = (value) => {
    // 숫자만 남기기
    const numbers = value.replace(/\D/g, "");

    // 010-0000-0000 형식으로 변환
    if (numbers.length <= 3) {
      return numbers;
    } else if (numbers.length <= 7) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    } else {
      return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(
        7,
        11
      )}`;
    }
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
  };

  // 🔥 조회 버튼 클릭 시 실행되는 함수
  const handleSearch = () => {
    // 입력된 값과 data.json 데이터 비교
    const matchedData = dataList.find(
      (item) =>
        item.Name === name && item.Number === number && item.Phone === phone
    );

    if (matchedData) {
      // 🔥 일치하는 데이터가 있으면 '/check/Id'로 이동
      console.log(matchedData);
      navigate(`/${matchedData.Result}/${matchedData.Id}`);
    } else {
      // ❌ 일치하는 데이터가 없으면 경고 메시지 표시
      alert("일치하는 정보가 없습니다. 다시 확인해주세요!");
    }
  };

  return (
    <M.Container>
      <M.Background>
        <M.Lion>
          <img
            id="logo"
            src={`${process.env.PUBLIC_URL}/images/Lion.svg`}
            alt="로고"
          />
        </M.Lion>
        <M.Logo>
          <img
            id="lion"
            src={`${process.env.PUBLIC_URL}/images/Logo.svg`}
            alt="사자"
          />
        </M.Logo>
        <M.Title>
          동덕여자대학교 멋쟁이사자처럼 <br />
          13기 아기사자 최종 합격자 발표
        </M.Title>
        <M.Input>
          <M.Name>
            <div>이름</div>
            <input
              type="text"
              placeholder="김멋사"
              value={name}
              onChange={(e) => setName(e.target.value)} // 🔥 입력값 저장
            />
          </M.Name>
          <M.Number>
            <div>학번</div>
            <input
              type="text"
              placeholder="20991234"
              value={number}
              onChange={(e) => setNumber(e.target.value)} // 🔥 입력값 저장
            />
          </M.Number>
          <M.Phone>
            <div>휴대폰 번호</div>
            <input
              type="text"
              placeholder="010-0000-0000"
              value={phone}
              onChange={handlePhoneChange} // 🔥 자동으로 '-' 추가
              maxLength="13" // 010-0000-0000 기준 최대 길이 설정
            />
          </M.Phone>
          <M.Go onClick={handleSearch}>
            {" "}
            {/* 🔥 조회 버튼 클릭 이벤트 */}
            <div>조회</div>
          </M.Go>
        </M.Input>
      </M.Background>
      <M.Letter2>
        <img
          id="letter"
          src={`${process.env.PUBLIC_URL}/images/Letter2.svg`}
          alt="편지지"
        />
      </M.Letter2>
      <M.Letter>
        <img
          id="letter"
          src={`${process.env.PUBLIC_URL}/images/Letter.svg`}
          alt="편지지"
        />
      </M.Letter>
      <M.Letter1>
        <img
          id="letter"
          src={`${process.env.PUBLIC_URL}/images/Letter1.svg`}
          alt="편지지"
        />
      </M.Letter1>
    </M.Container>
  );
};

export default Main;
