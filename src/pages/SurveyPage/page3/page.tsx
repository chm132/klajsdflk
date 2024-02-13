import React, { useState } from 'react';
import TimeLine from '../../../Components/TimeLine';
import { categoryMapping } from '../../CategoryPage/page';
import { useParams, useNavigate } from 'react-router-dom';
import Input2 from '../../../Components/Survey/Input/Input2';
import Label from '../../../Components/Survey/Label/Label';
import Progressbar from '../../../Components/Survey/Progressbar';
import Label2 from '../../../Components/Survey/Label/Label2';

const SurveyPage3 = () => {
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
                  3. 선호하는 선생님의 성별을 선택해주세요.
                </p>
              </div>
              <div className="click mt-6">
                <Input2 question="남성" />
                <Input2 question="여성" />
                <Input2 question="기타" />
              </div>
            </div>
            <div className="box1 m-14">
              <div className="question flex">
                <p className=" text-[18px] font-semibold">
                  4. 선호하는 선생님의 나이대를 선택해주세요.
                </p>
                <p className=" ml-[16px] mt-[6px] text-[14px] text-[#999999]">
                  복수 응답 가능
                </p>
              </div>
              <div className="click mt-6 flex gap-8">
                <Label age={20} />
                <Label age={30} />
                <Label age={40} />
                <Label age={50} />
                <Label age={60} />
                <Label2 content="상관없음" />
              </div>
            </div>
          </div>
          <div className="button flex">
            <button
              className="hover:opacity-80  w-[240px] h-[51px] bg-[#B3B3B3] rounded-[50px] text-white ml-[315px] mt-[60px] flex justify-center py-3"
              onClick={() => navigate('/스마트폰/1/survey/2')}
            >
              <img
                className=" px-1 py-1"
                src="/assets/Survey/previmg.svg"
              ></img>
              <p className="font-medium">이전으로</p>
            </button>
            <button
              className=" hover:opacity-80  w-[240px] h-[51px] bg-primary01 rounded-[50px] text-white ml-8 mt-[60px] flex justify-center py-3"
              onClick={() => navigate('/스마트폰/1/survey/4')}
            >
              <p className="font-medium">다음으로</p>
              <img
                className=" px-1 py-1"
                src="/assets/Survey/nextimg.svg"
              ></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyPage3;
