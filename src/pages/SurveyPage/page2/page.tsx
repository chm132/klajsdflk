import React, { useState } from 'react';
import TimeLine from '../../../Components/TimeLine';
import { categoryMapping } from '../../CategoryPage/page';
import { useParams, useNavigate } from 'react-router-dom';
import Input2 from '../../../Components/Survey/Input/Input2';
import Progressbar from '../../../Components/Survey/Progressbar';

const SurveyPage2 = () => {
  const categoryName = useParams()?.category || '스마트폰';
  const navigate = useNavigate();

  return (
    <div>
      <TimeLine
        title={categoryName}
        imgSrc={`/assets/TimeLine/${categoryMapping[categoryName]}.png`}
        contents={`${categoryName}에 있는 디지털 서비스 사용이 어려우신가요? 올래에서 함께 배우세요!`}
      />
      <div className="w-full h-[627px] bg-[#E6E6E6]">
        <Progressbar />
        <div className="w-[1142px] h-[480px] bg-[#FFFFFF] rounded-[30px] shadow-xl relative m-auto top-[47px]">
          <div className="survey w-full h-4/6 flex">
            <div className="box1 m-14">
              <div className="question flex">
                <p className=" text-[18px] font-semibold">
                  1. 어떤 것을 배우고 싶으세요?
                </p>
                <p className=" ml-[16px] mt-[6px] text-[14px] text-[#999999]">
                  복수 응답 가능
                </p>
              </div>
              <div className="click mt-6">
                <Input2 question="기본 설정(앱 설치, 환경설정 등)" />
                <Input2 question="기본 활용(카메라, 갤러리 등)" />
                <Input2 question="실생활 활용(카카오톡, 모바일 주문, 배달 앱 등)" />
              </div>
            </div>
            <div className="box1 m-14">
              <div className="question flex">
                <p className=" text-[18px] font-semibold">
                  2. 어떻게 배우고 싶으세요?
                </p>
                <p className=" ml-[16px] mt-[6px] text-[14px] text-[#999999]">
                  복수 응답 가능
                </p>
              </div>
              <div className="click mt-6">
                <Input2 question="교육기관 방문" />
                <Input2 question="우리 집으로 선생님 방문" />
              </div>
            </div>
          </div>
          <button
            className=" hover:opacity-80  w-[240px] h-[51px] bg-primary01 rounded-[50px] text-white ml-[451px] mt-[60px] flex justify-center py-3"
            onClick={() => navigate('/스마트폰/1/survey/3')}
          >
            <p className="font-medium">다음으로</p>
            <img className=" px-1 py-1" src="/assets/Survey/nextimg.svg"></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SurveyPage2;
