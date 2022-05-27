import { FC, useRef } from "react";

import useResizeEvent from 'src/hooks/useResizeEvent';

import { useSetRecoilState } from 'recoil';
import {  contentLayoutAsOnlySetter } from 'recoilStates/layout';


const Header:FC = ({children}) => {
  
  const contentRef = useRef<HTMLDivElement>(null);
  const setContentLayout = useSetRecoilState(contentLayoutAsOnlySetter);

  useResizeEvent<HTMLDivElement|null>(
    contentRef, 
    (layout) => {
      setContentLayout(layout);
      return (layout_) => setContentLayout(layout_);
    }
  )



  return (
    <div id="main" ref={contentRef} style={{display:'block',width:"100%"}}>
      {children}
    </div>
  )
}

export default Header;
