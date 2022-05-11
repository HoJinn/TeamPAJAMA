import { FC } from 'react'
// import useStyles from './mainCss'
import SectionImg from 'assets/img_sec3.png'
import SectionImgMo from 'assets/img_sec3Mo.png'
import BackImg from 'assets/bg_sec3.png'
import ArrIcon from 'assets/arrIcon.png'
import SubImg from 'assets/subImg4.png'
import SubImg1 from 'assets/subImg1.png'
import { Box, Typography, Button, makeStyles, useMediaQuery } from '@material-ui/core'
import theme from 'theme/theme'
import { LayoutGrade } from 'recoilStates/layout'
export type DataProps = {
  size: string
}
const useStyles = makeStyles(_theme => ({
  sectionStyle: {
    backgroundImage: `url(${BackImg})`,
    [theme.breakpoints.down(LayoutGrade.MD)]: {
      backgroundColor: '#F6EDDA',
      backgroundImage: `none`,
    },
    position: 'relative',
    zIndex: 2
  },
  mobileBack: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundImage: `url(${BackImg})`,
    width: '100%',
    height: '50%'
  },
  absoluteImg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    [theme.breakpoints.down(LayoutGrade.MD)]: {
      position: 'relative',
    }
  },
  btnStyle: {
    fontSize: '20px',
    fontWeight: 'bold',
    border: '1px solid #000',
    padding: '15px 30px',
    borderRadius: 0,
    [theme.breakpoints.down(LayoutGrade.MD)]: {
      fontSize: '13px',
      padding: theme.spacing(1),
    }
  },
  subImg: {
    position: 'absolute',
    bottom: '-110px',
    right: '0'
  },
  sec3Wrap: {
    display: "flex",
    flexDirection: 'row',
    [theme.breakpoints.down(LayoutGrade.MD)]: {
      flexDirection: 'column',
    }
  },
  sec3Content1: {
    width: "35%",
    [theme.breakpoints.down(LayoutGrade.MD)]: {
      width: "100%",
    }
  },
  sec3Content2: {
    width: "60%",
    [theme.breakpoints.down(LayoutGrade.MD)]: {
      width: "100%",
      paddingTop: theme.spacing(15)
    },
    [theme.breakpoints.down(LayoutGrade.XS)]: {
      width: "100%",
      paddingTop: theme.spacing(6)
    },
  },
  SubImg1Class: {
    position: 'absolute',
    bottom: '-6%',
    right: '-15px'
  }
}))
const Section3: FC<DataProps> = () => {
  const classes = useStyles();
  const mobileFlag = useMediaQuery(theme.breakpoints.down(LayoutGrade.MD));
  return (
    <section className={classes.sectionStyle}>
      {mobileFlag ? <Box className={classes.mobileBack} /> : undefined}
      <Box width="100%" maxWidth="1280px" paddingTop={5} paddingBottom={mobileFlag ? 0 : 11} paddingX={mobileFlag ? 2.5 : 0} margin="0 auto" position='relative'>
        {mobileFlag ? undefined : <img alt="" className={classes.subImg} src={SubImg} />}
        <Box paddingBottom={5}>
          <Typography className='times regular' variant='h6'>Cooking Class</Typography>
          <Typography variant='subtitle1' className='bold'>공유부엌</Typography>
        </Box>
        <Box className={classes.sec3Wrap} justifyContent='space-between'>
          <Box className={classes.sec3Content1} position="relative">
            <img alt="" className={classes.absoluteImg} src={mobileFlag ? SectionImgMo : SectionImg} />
            {mobileFlag ? <img alt="" width="33%" className={classes.SubImg1Class} src={SubImg1} /> : undefined}
            {/* <Box className={classes.absoluteImg} style={{backgroundImage:`url(${SectionImg})`}}/> */}
          </Box>
          <Box className={classes.sec3Content2}>
            <Typography variant='subtitle2' className='bold'>
              원데이클래스, 주말 클래스, 레시피북 클래스
              <br />
              다온스토리만의 핫한 레시피가 공유됩니다.
            </Typography>
            <Box paddingTop={5} paddingBottom={6}>
              <Typography variant='body1' className='regular'>
                지금 접하시는 분도 쉽게 배우실 수 있도록
                <br />
                맞춤형 교육을 진행합니다.
              </Typography>
            </Box>
            <Button title="준비중인 메뉴입니다" onClick={() => alert("준비중입니다.") } className={classes.btnStyle}>수강신청 안내 <img alt="" style={{ paddingLeft: '24px' }} src={ArrIcon} /></Button>
          </Box>
        </Box>
      </Box>
    </section>
  );
}

export default Section3;