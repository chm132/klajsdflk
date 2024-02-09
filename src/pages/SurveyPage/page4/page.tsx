import React, { useState } from 'react';
import TimeLine from '../../../Components/TimeLine';
import { categoryMapping } from '../../CategoryPage/page';
import { useParams, useNavigate } from 'react-router-dom';
import Input2 from '../../../Components/Survey/Input2';

const SurveyPage4 = () => {
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
        <div className="w-[1142px] h-[480px] bg-[#FFFFFF] rounded-[30px] shadow-xl relative m-auto top-[47px]">
          <div className="survey w-full h-4/6 flex">
            <div className="m-14">
              <div className="question flex">
                <p className=" text-[18px] font-semibold">
                  5. 수업이 가능한 시간대는 언젠가요?
                </p>
                <p className=" ml-[16px] mt-[6px] text-[14px] text-[#999999]">
                  복수 응답 가능
                </p>
              </div>
              <div className="click mt-6">
                <Input2 question="평일 오전(오전 8시 ~ 오후 12시)" />
                <Input2 question="평일 오후(오후 12시 ~ 오후 6시)" />
                <Input2 question="평일 저녁(오후 6시 ~ 오후 11시)" />
              </div>
            </div>
            <div className=" m-14">
              <div className="click mt-[52px]">
                <Input2 question="주말 오전(오전 8시 ~ 오후 12시)" />
                <Input2 question="주말 오후(오후 12시 ~ 오후 6시)" />
                <Input2 question="주말 저녁(오후 6시 ~ 오후 11시)" />
              </div>
            </div>
          </div>
          <div className="button flex">
            <button
              className="hover:opacity-80  w-[240px] h-[51px] bg-[#B3B3B3] rounded-[50px] text-white ml-[315px] mt-[60px] flex justify-center py-3"
              onClick={() => navigate('/스마트폰/1/survey/3')}
            >
              <img
                className=" px-1 py-1"
                src="/assets/Survey/previmg.svg"
              ></img>
              <p className="font-medium">이전으로</p>
            </button>
            <button
              className=" hover:opacity-80  w-[240px] h-[51px] bg-primary01 rounded-[50px] text-white ml-8 mt-[60px] flex justify-center py-3"
              onClick={() => navigate('/스마트폰/1/survey/5')}
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

export default SurveyPage4;
