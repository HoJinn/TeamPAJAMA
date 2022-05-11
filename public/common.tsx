
import { makeStyles } from "@material-ui/core"

const onlyClasse ={
  bold:{
    fontWeight:600
  },
  light:{
    fontWeight:300
  },
  inline:{
    display:'inline-block'
  },
  none:{
    display:'none'
  },
  block:{
    display:'block'
  },
  flex:{
    display: "flex"
  },
  widthContent:{
    maxWidth:'1280px'
  },
  width100:{
    width:'100%'
  },
  width95:{
    width:'95%'
  },
  width90:{
    width:'90%'
  },
  width70:{
    width:'70%'
  },
  width65:{
    width:'65%'
  },
  width60:{
    width:'60%'
  },
  width50:{
    width:'50%'
  },
  width35:{
    width:'35%'
  },
  width40:{
    width:'40%'
  },
  width33:{
    width:'33.33%'
  },
  width30:{
    width:'30%'
  },
  width25:{
    width:'25%'
  },
  width20:{
    width:'20%'
  },
  height100:{
    height:'100%'
  },
  height50:{
    height:'50%'
  },
  absoluteSet: {
    position: 'absolute' as 'absolute',
    left: '0',
    top: '0',
    height: '100%',
    width: '100%',
  },
  RL:{
    position: 'relative' as 'relative'
  },
  textCenter:{
    textAlign:'center' as 'center'
  },
  textLeft:{
    textAlign:'left' as 'left'
  },
  textRight:{
    textAlign:'right' as 'right'
  },
  verticalTop: {
    verticalAlign: 'top'
  },
  verticalMiddle: {
    verticalAlign: 'middle'
  },
  verticalBottom: {
    verticalAlign: 'bottom'
  },
  textOverFlow: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap' as 'nowrap',
    verticalAlign: 'bottom'
  },
  pointer:{
    cursor:'pointer'
  },
  backCenterImg:{
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  },
  hidden:{
    overflow:'hidden'
  },
  colorFFF:{
    color:'#fff'
  },
  color000:{
    color:'#000'
  },
  back000:{
    backgroundColor:'#000'
  },
  backFFF:{
    backgroundColor:'#fff'
  },
  backYellow:{
    backgroundColor:'#FEDE3D'
  },
  textOverFlowLine2: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    lineClamp:2,
    boxOrient:'vertical' as 'vertical',
    wrodBraek:'break-word',
    whiteSpace:'normal' as 'normal',
    height: '3em',
    width:'100%',
    textAlign: 'left' as 'left',
  },
  textOverFlowLine4: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    lineClamp:4,
    boxOrient:'vertical' as 'vertical',
    wrodBraek:'break-word',
    whiteSpace:'normal' as 'normal',
    height: '5.5em',
    width:'100%',
    textAlign: 'left' as 'left',
  },
  auto:{
    margin:'0 auto'
  },
  lineGray:{
    width:'100%',
    height:'1px',
    backgroundColor:'#BFBFBF'
  },
  youtubeIcon:{
    position: 'absolute' as 'absolute',
    top:'50%',
    left:'50%',
    marginLeft:'-20px',
    marginTop:'-28px'
  },
  padding0:{
    padding:'0'
  },
  margin0:{
    margin:'0'
  },
  resize:{
    resize:'none' as 'none'
  },
  border100:{
    borderRadius:'100px'
  },
  setBtn:{
    minWidth:'auto'
  },
  AB:{
    position: 'absolute' as 'absolute'
  },
  spaceNowrap:{
    whiteSpace:'nowrap' as 'nowrap'
  },
  roboto: {
    fontFamily:'roboto'
  },
}

const useStyles = makeStyles((_theme) =>
({
  ...onlyClasse  
}));
export {useStyles,onlyClasse};