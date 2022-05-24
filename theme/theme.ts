

import { createTheme, Theme,ButtonProps, useMediaQuery, useTheme } from '@material-ui/core'
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'
import {pxToRem} from 'src/util'


import {LayoutGrade, SIZE_INFO} from 'recoilStates/layout';
const {LG, MD, SM, XS} = SIZE_INFO;

const breakpoints = createBreakpoints({});

export type ComponentSize = 'none'|'sm' | 'md' | 'lg';
export type ComponentColor = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success';
export type LayoutType = {
  size?: ComponentSize
}

export const defButtonProps:ButtonProps = {
  variant: 'contained',
  size: 'small'
}

const defaultTheme = createTheme({
  breakpoints: {
    values: {
      xs: XS.max,
      sm: SM.max,
      md: MD.max,
      lg: LG.max,
      xl: 1920
    }
  }
});

export default createTheme({
  breakpoints:{
    ...defaultTheme.breakpoints
  },
  typography:{
    
    fontFamily:"roboto"
  },
  palette: {
    primary:{
      main: '#00B7F3',
      contrastText: '#fff'
    },
    secondary: {
      main:'#B3EAFC',
      contrastText: "#fff"
    },
    text:{
      primary:"#000",
      secondary:"#666"
    }
  },
  overrides:{
    MuiFormGroup: {
      root: {
        '&[role="radiogroup"]': { display: 'block' }
      }
    },
    MuiButton: {
      root: {
        minWidth: '70px',
        "&:focus":{
          outline:"solid black"
        }
      },
    },
    MuiButtonBase:{
      root:{
        "&:focus":{
          outline:"solid black"
        }
      }
    },
    MuiSelect:{
      root:{
        "&:focus":{
          outline:"solid black"
        }
      }
     },
     MuiCheckbox:{
      root:{
        "&:focus":{
          outline:"solid black"
        }
      }
     },
    MuiGrid: {
      root: {
        '&.spacer': {
          flexGrow: 1
        }
      }
    },
    MuiTypography:{
      root:{
        textTransform:'none',
          '&.bold': {
            fontWeight: 600
          },
          '&.regular': {
            fontWeight: 400
          },
          '&.light': {
            fontWeight: 300
          },
          '&.thin': {
            fontWeight: 200
          },
          '&.roboto': {
            fontFamily:'roboto'
          },
          '&.times': {
            fontFamily:'roboto',
            letterSpacing:'3px'
          },
      },
      caption:{
        fontSize:pxToRem(14)
        ,[breakpoints.down(SM.max)]:{
          fontSize:pxToRem(12)
        }
        ,fontFamily:'roboto'
        ,fontWeight:500
        
      },
   
      body2:{
        fontSize:pxToRem(16)
        ,[breakpoints.down(SM.max)]:{
          fontSize:pxToRem(10)
        }
        ,fontFamily:'roboto'
        ,fontWeight:500
      },
         
      body1:{
        fontSize:pxToRem(20)
        ,[breakpoints.down(SM.max)]:{
          fontSize:pxToRem(13)
        }
        ,fontFamily:'roboto'
        ,fontWeight:500 
      },
      subtitle2:{
        fontSize:pxToRem(30)
        ,[breakpoints.down(SM.max)]:{
          fontSize:pxToRem(15)
        }
        ,fontFamily:'roboto'
        ,fontWeight:500
      },
      subtitle1:{
        fontSize:pxToRem(35)
        ,[breakpoints.down(SM.max)]:{
          fontSize:pxToRem(20)
        }
        ,fontFamily:'roboto'
        ,fontWeight:500
      },
     
      h6:{
        fontSize:pxToRem(70)
        ,[breakpoints.down(SM.max)]:{
          fontSize:pxToRem(30)
        }
        ,fontFamily:'roboto'
        ,fontWeight:500
      },
      
      h5:{//메인 섹션1 텍스트 사이즈
        fontSize:pxToRem(140)
        ,[breakpoints.down(SM.max)]:{
          fontSize:pxToRem(46)
        }
        ,fontFamily:'roboto'
        ,fontWeight:500
      },
      h4:{//pc 메인에서만 사용
        fontSize:pxToRem(60)
        ,fontFamily:'roboto'
        ,fontWeight:500
      },
    
    },
  }
})

type UseLayoutGrade = {
  isDownSm: boolean,
  isDownXs:boolean,
  isMd: boolean,
  isUpMdAndIsDownLg: boolean,
  isUpLg: boolean
}
export const useLayoutGrade = (theme?: Theme ): UseLayoutGrade => {
  const theme_ = theme || useTheme();
  if(!theme_) return {isDownSm: false, isMd: false, isUpMdAndIsDownLg: false,isDownXs:false, isUpLg: false};


  const isUpSm = useMediaQuery(theme_.breakpoints.up(SIZE_INFO.SM.max));
  const isDownMd = useMediaQuery(theme_.breakpoints.down(SIZE_INFO.MD.max-0.01));
  const isMd = isUpSm && isDownMd;

  const isUpMd = useMediaQuery(theme_.breakpoints.up(SIZE_INFO.MD.max));
  const isDownLg = useMediaQuery(theme_.breakpoints.down(SIZE_INFO.LG.max));
  const isUpMdAndIsDownLg = isUpMd && isDownLg;

  return {
    isDownSm: useMediaQuery(theme_.breakpoints.down(SIZE_INFO.SM.max-0.01)),
    isMd,  
    isUpMdAndIsDownLg,
    isDownXs: useMediaQuery(theme_.breakpoints.down(LayoutGrade.XS)),
      // useMediaQuery(theme_.breakpoints.up(SIZE_INFO.SM.max)) 
      // && useMediaQuery(theme_.breakpoints.up(SIZE_INFO.MD.max)),
    isUpLg: useMediaQuery(theme_.breakpoints.up(LayoutGrade.LG))
  }
}