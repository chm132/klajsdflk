import { useEffect, useState, useRef } from 'react';

import styled from 'styled-components';

interface Itest {
  width: number;
}

const progressbar = styled.div`
  width: 1070px;
  height 8px;
  margin-left: 220px;
  border-radius: 12px;
  position: relative;
  top: 20px;
  overflow: hidden;
`;

export default function Progressbar() {
  return (
    <div className=" w-[1070px] h-2 rounded-[4px] bg-[#CCCCCC] relative m-auto top-5 overflow-hidden">
      <div className=" w-[800px] h-2 p-0 bg-primary01 rounded-[4px]"></div>
    </div>
  );
}
