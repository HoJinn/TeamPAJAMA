
import { makeStyles } from "@material-ui/core"
import { LayoutGrade } from "recoilStates/layout";
import {onlyClasse} from 'public/common'

const useStyles = makeStyles((theme) =>
({
  ...onlyClasse,
  Section2Box:{
      ...onlyClasse.backCenterImg,
      ...onlyClasse.RL,
      ...onlyClasse.height100,
      ...onlyClasse.pointer
  },
  sec2Title:{
    ...onlyClasse.block,
    ...onlyClasse.colorFFF,
    fontWeight:600,
    // marginBottom:theme.spacing(4)
    marginBottom:theme.spacing(8.5),
    [theme.breakpoints.down(LayoutGrade.MD)]:{
      marginBottom:theme.spacing(4)
    }
  },
  sec2Content:{
    ...onlyClasse.block,
    ...onlyClasse.colorFFF
  },
  opacity1:{
      opacity:1,
      transition:'all 0.5s'
  },
  opacity0:{
      transition:'all 0.5s',
      opacity:0
  },
  sec3Wrap:{
    padding:theme.spacing(6,0,9,0)
  },
  sec4Wrap:{
    display:'block',
    backgroundColor:'#F5F5F5',
    padding:theme.spacing(6,0,9,0)
  },
  sec4dayBox:{
    ...onlyClasse.back000,
    ...onlyClasse.colorFFF,
    position:'absolute',
    left:0,
    top:0,
    ...onlyClasse.inline,
    ...onlyClasse.textCenter
  },
  sec4Content:{
    fontWeight:300,
    ...onlyClasse.textOverFlowLine4
  },
  sec3Content:{
    fontWeight:600,
    ...onlyClasse.textOverFlowLine2
  },
  sec3Title:{
    fontWeight:400,
    color:'#888888'
  },
  
  set1Title:{
    // fontSize:'120px',
    whiteSpace:"pre-line",
    fontWeight:700,
    lineHeight:1,
    ...onlyClasse.roboto
  },
  set1TitleTHE5:{
    // fontSize:'120px',
    fontWeight:700,
    lineHeight:1,
    ...onlyClasse.roboto,
    fontSize: '55px',
    display: 'inline-block', 
    verticalAlign: 'top', 
    paddingTop: '10px'
  },
  set1Date:{
    color:'#FFC650',
    fontWeight:400,
    fontFamily:'roboto'
  },
  DateLineP:{
    width:'45px',
    height:'8px',
    backgroundColor:'#FFC650',
    display:'inline-block',
    margin:'20px 0'
  },
  DateLineM:{
    width:'8px',
    height:'3px',
    backgroundColor:'#FFC650',
    display:'inline-block',
    margin:'10px 0'
  },
  set1info:{
    fontWeight:300,
    color:'#fff',
    fontFamily:'times'
  },
  metaBtn:{
    fontSize:'40px',
    border:'3px solid #12B5B2',
    backgroundColor:'rgba(0,0,0,.4)',
    borderRadius:'3px',
    padding:'23px 60px',
    color:'#fff',
    transition: 'all 0s',
    fontWeight:600,
    // boxSizing: 'border-box',
    '&:hover': {
      background: "linear-gradient(to right, #27C8C8, #2D9F57 )",
      transition: 'all 0s',
      padding: '26px 63px',
      border: 'none',
      
      // boxSizing: 'border-box',
    }
  },
  "@keyframes rotate": {
    "0%": {
      transform: "rotate(360deg)"
    },
    "100%": {
      transfrom: "rotate(360deg)"
    }
  },
  DDay:{
    ...onlyClasse.backCenterImg,
    // position: 'absolute',
    // top: '30px',
    // right: '5%',
    // animationName:"$rotate",
    animationDuration:"7s",
    animationIterationCount:"infinite",
    animationTimingFunction:"linear", 
    
  },
 
  DDayTa:{
    ...onlyClasse.backCenterImg,
    // animationName:"$rotate",
    animationDuration:"7s",
    animationIterationCount:"infinite",
    animationTimingFunction:"linear", 
  
  },
  
  
  sec4TitleText:{
    ...onlyClasse.bold,
    ...onlyClasse.roboto
  },
  sec4BoxTitleText:{
    ...onlyClasse.textOverFlowLine2,
    ...onlyClasse.bold
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;