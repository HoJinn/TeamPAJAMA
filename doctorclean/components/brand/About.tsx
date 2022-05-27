import { Box, makeStyles, Typography } from "@material-ui/core";
import { FC } from "react";
import Img1 from "assets/img_about_fir.png"
import Img2 from "assets/img_about_sec.png"
import Img3 from "assets/img_about_tir.png"
import Img3Txt from "assets/img_about_tir_txt.png"
import { LayoutGrade } from "recoilStates/layout";
const useStyles = makeStyles(theme => ({
  point: {
    backgroundColor: theme.palette.primary.main
  },
  topDescTxt: {
    maxWidth: "810px",
    margin: "0 auto",
    lineHeight: "40px",
    wordBreak: "keep-all",
    whiteSpace: "pre-line",
    fontWeight: 400,
    textAlign: "center",
    [theme.breakpoints.down(LayoutGrade.MD)]: {
      textAlign: "left",
      lineHeight: "23px",
    }
  },
  itemDescTxt: {
    lineHeight: "36px",
    fontWeight: 400,
    whiteSpace: "pre-line",
    wordBreak: "keep-all",
    [theme.breakpoints.down(LayoutGrade.MD)]: {

      lineHeight: "20px",
    }
  },
  imgMobile: {
    width: '50%',
    padding:theme.spacing(0,1),
    margin: '0 auto',
    [theme.breakpoints.down(LayoutGrade.MD)]: {
      width: '100%',
      padding:theme.spacing(0),
    }
  },
  businessBox: {
    marginTop: theme.spacing(13),
    width: "auto",
    [theme.breakpoints.down(LayoutGrade.MD)]: {
      marginTop: theme.spacing(7.5),
      margin: "0 auto",
      maxWidth: "380px",
    }
  },
  itemWrapper:{
    flexDirection:"row",
    "&.reverse":{
      flexDirection:"row-reverse",
      [theme.breakpoints.down(LayoutGrade.MD)]: {
        flexDirection:"column",
        marginBottom:theme.spacing(4),
      }
    },
    marginBottom:0,
    [theme.breakpoints.down(LayoutGrade.MD)]: {
      flexDirection:"column",
      marginBottom:theme.spacing(4),
    }
  },
  itemTxtWrapper:{
    width:'50%',
    [theme.breakpoints.down(LayoutGrade.MD)]: {
      width:'100%'
    }
  },
  itemLine:{
    width:"50px",
    marginBottom:theme.spacing(2.5),
    marginTop:theme.spacing(0),
    [theme.breakpoints.down(LayoutGrade.MD)]: {
      width:"25px",
      marginBottom:theme.spacing(2),
      marginTop:theme.spacing(2.5),
    }
  },
  item3Txt:{
    width:"50%",
    [theme.breakpoints.down(LayoutGrade.MD)]: {
      width:"80%"
    }
  }

}))

const About = () => {
  const classes = useStyles();
  return (<Box>
    <Box textAlign="center">
      {/* <Typography variant="subtitle1" className="bold">목적</Typography> */}
      <PointTitle txt="목적" />
      <Box marginTop={3}>
        <Typography color="textSecondary" className={classes.topDescTxt} variant="body1" >협동조합다온내 저탄소 실천 식(食)문화 공유부엌 공간을 활용하여 지역주민의 일자리 창출과
          주민의 문화 공동체 활동에 공간을 제공하며 가치를 공유하고 나누며 공동체내 세대간 식문화 소통을
          도모하고자 합니다.</Typography>
      </Box>
    </Box>

    <Box className={classes.businessBox} textAlign="center">
      <PointTitle txt="주요사업" />
      <Box overflow="hidden" marginTop={7}>
        {/* <Grid container spacing={10}> */}
        {/* <Grid container > */}
          <BusinessItem img={Img1} count={1} num="하나!" desc="공유부엌을 거점으로 하는 식문화 가치 실현사업 및 
참여하는 마을주민의 잠재력 능력 개발" />

          <BusinessItem img={Img2} count={2} num="둘!" desc="저탄소 실천 공유부엌을 거점으로 하는 
안전한 먹거리 대안 외식사업" />

          <BusinessItem img={Img3} count={3} num="셋!" desc="저탄소 실천 공유부엌을 거점으로 하는 집밥반찬 교육을 통한 
레시피 보급 및 판매 사업" />
        {/* </Grid> */}
      </Box>
    </Box>

  </Box>)
}
export default About;


type PointProps = {
  txt: String
}
export const PointTitle: FC<PointProps> = ({ txt }) => {
  const classes = useStyles();
  return (
    <Box justifyContent="center" display="flex" alignItems="flex-start">
      <Typography variant="subtitle1" className="bold">{txt}</Typography>
      <Box className={classes.point} width="10px" height="10px" borderRadius="100%" />
    </Box>
  )
}


type itemProps = {

  img: string;
  num: string;
  count: number;
  desc: string;
}
const BusinessItem: FC<itemProps> = ({ count, img, num, desc }) => {
  const classes = useStyles();
  // return (<Grid item xs={12} lg={4}>
  return (
  // <Grid item xs={12} >
    <Box textAlign="center" display="flex" className={`${classes.itemWrapper} ${count===2?"reverse":""}`}
    >
      <Box className={classes.imgMobile} >
        <img width="100%" src={img} alt=""></img>
      </Box>
      <Box className={classes.itemTxtWrapper} flexDirection="column" justifyContent="center" display="flex" alignItems="center">
        <Box className={classes.itemLine} borderTop="4px solid #FE4B00" />
        <Box justifyContent="center" display="flex" alignItems="center">
          <Typography variant="subtitle2" className="bold" color="textPrimary">저탄소 실천&nbsp;</Typography>
          <Typography variant="subtitle2" className="bold" color="primary">{num}</Typography>
        </Box>
        <Typography variant="body1" className={classes.itemDescTxt} color="textSecondary">{desc}</Typography>
        {count === 3 ? <Box className={classes.item3Txt} marginTop={4}><img width="100%" src={Img3Txt} /></Box>
          : undefined}
      </Box>
    </Box>
  // </Grid>
  )
}