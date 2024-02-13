import React, { useState } from 'react';
import TimeLine from '../../../Components/TimeLine';
import { categoryMapping } from '../../CategoryPage/page';
import { useParams, useNavigate } from 'react-router-dom';
import Input2 from '../../../Components/Survey/Input/Input2';
import Label3 from '../../../Components/Survey/Label/Label3';
import Progressbar from '../../../Components/Survey/Progressbar';

const SurveyPage5 = () => {
  const categoryName = useParams()?.category || '스마트폰';
  const navigate = useNavigate();

  const [clicked, setClicked] = useState('');
  const changeTag = (question: string) => {
    setClicked(question)
  }
  const buttonList =['남성', '여성', '기타'];
  const buttonList2=['20', '30', '40', '50', '60', '70'];

  return (
    <div>
      <TimeLine
        title={categoryName}
        imgSrc={`/assets/TimeLine/${categoryMapping[categoryName]}.png`}
        contents={`${categoryName}에 있는 디지털 서비스 사용이 어려우신가요? 올래에서 함께 배우세요!`}
      />
      <div className="w-full h-[627px] bg-[#E6E6E6]">
        <Progressbar width={800} />

        <div className="w-[1142px] h-[480px] bg-[#FFFFFF] rounded-[30px] shadow-xl relative m-auto top-[47px]">
          <div className="survey w-full h-4/6 flex">
            <div className="box1 m-14">
              <div className="question flex">
                <p className=" text-[18px] font-semibold">
                  6. 고객님의 성별을 알려주세요.
                </p>
              </div>
              <div className="click mt-6">
                <Input2 question={buttonList[0]}
                onClick={() => changeTag(buttonList[0])}
                clicked={clicked === buttonList[0]}
                />
                <Input2 question={buttonList[1]} 
                onClick={() => changeTag(buttonList[1])}
                clicked={clicked === buttonList[1]}/>
                <Input2 question={buttonList[2]} 
                onClick={() => changeTag(buttonList[2])}
                clicked={clicked === buttonList[2]}/>
              </div>
            </div>
            <div className="box1 m-14">
              <div className="question flex">
                <p className=" text-[18px] font-semibold">
                  7. 고객님의 나이대를 알려주세요.
                </p>
              </div>
              <div className="click mt-6 flex gap-8">
                <Label3 age={buttonList2[0]}
                onClick={() => changeTag(buttonList2[0])}
                clicked={clicked === buttonList2[0]} 
                />
                <Label3 age={buttonList2[1]}
                onClick={() => changeTag(buttonList2[1])}
                clicked={clicked === buttonList2[1]} 
                />
                <Label3 age={buttonList2[2]}
                onClick={() => changeTag(buttonList2[2])}
                clicked={clicked === buttonList2[2]} 
                />
                <Label3 age={buttonList2[3]}
                onClick={() => changeTag(buttonList2[3])}
                clicked={clicked === buttonList2[3]} 
                />
                <Label3 age={buttonList2[4]}
                onClick={() => changeTag(buttonList2[4])} 
                clicked={clicked === buttonList2[4]} 
                />
                <Label3 age={buttonList2[5]}
                onClick={() => changeTag(buttonList2[5])}
                clicked={clicked === buttonList2[5]} 
                />
                
              </div>
            </div>
          </div>
          <div className="button flex">
            <button
              className="hover:opacity-80  w-[240px] h-[51px] bg-[#B3B3B3] rounded-[50px] text-white ml-[315px] mt-[60px] flex justify-center py-3"
              onClick={() => navigate('/스마트폰/1/survey/4')}
            >
              <img
                className=" px-1 py-1"
                src="/assets/Survey/previmg.svg"
              ></img>
              <p className="font-medium">이전으로</p>
            </button>
            <button
              className=" hover:opacity-80  w-[240px] h-[51px] bg-primary01 rounded-[50px] text-white ml-8 mt-[60px] flex justify-center py-3"
              onClick={() => navigate('/스마트폰/1/survey/6')}
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

export default SurveyPage5;
