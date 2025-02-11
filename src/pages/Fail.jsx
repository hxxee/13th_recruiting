import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as F from "../styles/StyledFail";
// import axios from "axios";

const Fail = ({ dataList }) => {
  const { Id } = useParams(); // 🔥 URL에서 Id 가져오기

  const post = Id ? dataList.find((item) => item.Id === parseInt(Id)) : null;

  return (
    <F.Container>
      <F.Background>
        <F.Lion>
          <img
            id="logo"
            src={`${process.env.PUBLIC_URL}/images/Lion.svg`}
            alt="로고"
          />
        </F.Lion>
        <F.Logo>
          <img
            id="lion"
            src={`${process.env.PUBLIC_URL}/images/Logo.svg`}
            alt="사자"
          />
        </F.Logo>
        <F.Name>
          <div id="name">{post && post.Name}</div>
          <div id="u">님</div>
        </F.Name>
        <F.Content>
          안녕하세요 동덕 멋사 13기 운영진입니다.
          <br />
          동덕여자대학교 멋쟁이사자처럼 13기 아기사자 모집에
          <br />
          관심을 갖고 지원해주셔서 진심으로 감사드립니다. <br />
          <br />
          귀하의 뛰어난 역량에도 불구하고 안타깝게도
          <br />
          귀하의 합격 소식을 전해드리지 못하게 되었습니다.
          <br />
          <br />
          아울러 제출해주신 개인정보는 모두 폐기할 것을 <br />
          약속드리며, 추후 재지원에 대한 불이익은 없습니다.
          <br />
          <br />
          비록 이번에는 좋은 만남을 이어나갈 수 없게 되었지만,
          <br />
          이후 더욱 성장한 모습으로 다시금 만날 수 있기를 <br />
          진심으로 바랍니다.
          <br />
          <br />
          동덕여대 멋쟁이사자처럼 13기 운영진 드림
        </F.Content>
      </F.Background>
      <F.Letter>
        <img
          id="letter"
          src={`${process.env.PUBLIC_URL}/images/Letter.svg`}
          alt="편지지"
        />
      </F.Letter>
      <F.Letter1>
        <img
          id="letter"
          src={`${process.env.PUBLIC_URL}/images/Letter1.svg`}
          alt="편지지"
        />
      </F.Letter1>
    </F.Container>
  );
};

export default Fail;
