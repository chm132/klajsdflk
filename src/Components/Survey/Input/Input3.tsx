import { useState } from 'react';

interface InputProps2 {
  question: string;
  className?: string;
  onClick?: any;
  clicked?: boolean;
}

const Input2 = ({ question }: InputProps2) => {
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
        src="/assets/Survey/checkimg.svg"
      ></img>
    </div>
  );
};

export default Input2;

// 단수 선택 박스
