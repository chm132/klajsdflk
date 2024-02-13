import { useEffect, useState, useRef } from 'react';

import styled from 'styled-components';

interface Itest {
  width: number;
}


const Progressbar = ({ width }: Itest) => {
  
const progress = styled.div`
  width: ${width}px;
  height: 8px;
  padding: 0px
  border-radius: 4px;
  color: #ec9d26;
`;

  return (
    <div className=" w-[1070px] h-2 rounded-[4px] bg-[#CCCCCC] relative m-auto top-5 overflow-hidden">
      <progress></progress>
    </div>
  );
}

export default Progressbar;

<div className=" w-[800px] h-2 p-0 bg-primary01 rounded-[4px]"></div>