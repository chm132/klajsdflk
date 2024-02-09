import { useState } from 'react';

interface InputProps3 {
  question: string;
  className?: string;
  onClick?: any;
  clicked?: boolean;
}

const Input3 = ({ question }: InputProps3) => {
  const [clicked, setClicked] = useState(false);
  const onClick = () => setClicked(!clicked);

  return (
    <div
      className={`${
        !clicked
          ? 'hover:bg-primary01 flex justify-between px-3 py-3 rounded-2xl border text-[#666666] hover:text-white mt-[10px] w-96 h-[49px] text-[14px]'
          : ' bg-primary01 text-white flex justify-between px-3 py-3 rounded-2xl border mt-[10px] w-[384px] h-[49px] text-[14px]'
      }`}
      onClick={() => onClick()}
    >
      <p>{question}</p>
      <img
        className={`${!clicked ? '' : 'hidden'}`}
        src="/assets/Survey/checkboximg.svg"
      ></img>
    </div>
  );
};

export default Input3;

// 단수 선택 박스
