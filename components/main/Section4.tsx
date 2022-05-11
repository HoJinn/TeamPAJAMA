import { FC } from 'react'
// import useStyles from './mainCss'
import SectionImg from 'assets/img_sec4.png'
import SectionImgMo from 'assets/img_sec4Mo.png'
import SectionSub from 'assets/imgSub_sec4.png'
import SubImg from 'assets/subImg3.png'
import { Box, Typography, makeStyles, useMediaQuery } from '@material-ui/core'
import theme from 'theme/theme'
import { LayoutGrade } from 'recoilStates/layout'
export type DataProps = {
  size: string
}
const useStyles = makeStyles(_theme => ({
  sectionStyle: {
    backgroundColor: `#F6EDDA`,
    position: 'relative',
    zIndex: 1
  },
  absoluteImg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
  },
  subImg: {
    position: 'absolute',
    bottom: '-10%',
    left: '-25%',
    [theme.breakpoints.down(LayoutGrade.MD)]: {
      width: '50%',
      left: '-25px',
    },
  },
  subImg2: {
    position: 'absolute',
    top: '48%',
    left: '-280px',
  }
}))
const Section4: FC<DataProps> = () => {
  const classes = useStyles();
  const mobileFlag = useMediaQuery(theme.breakpoints.down(LayoutGrade.MD));
  const classArr=[
    {engTitle:"Class 01",title:"원데이 클래스",contentRow1:"하루만에 모두 다 배우는 원데이 클래스",contentRow2:"다온스토리에서 요리하는 즐거움을 느껴보세요."},
    {engTitle:"Class 02",title:"주말 클래스",contentRow1:"요리를 보다 재미있고 쉽게 습득할 수 있는 쿠킹클래스",contentRow2:"주말에 여유롭게 쿠킹하세요."},
    {engTitle:"Class 03",title:"레시피북 클래스",contentRow1:"조리순서와 조리법을 완벽하게 이해할 수 있도록",contentRow2:"다온스토리의 레시피북을 제공합니다."},
]
  return (
    <section className={classes.sectionStyle}>
      {mobileFlag?<Sec4Mo classArr={classArr} pcFlag={false}/>:<Sec4Pc pcFlag={true} classArr={classArr}/>}
    </section>
  );
}

export default Section4;
export type classArr = {
  pcFlag:boolean;
  classArr: Array<Section4Props>;
};
export type Section4Props = {
  engTitle: string;
  title: string;
  contentRow1: string;
  contentRow2: string;
};
export type Section4addPcFlag = {
  engTitle: string;
  title: string;
  contentRow1: string;
  contentRow2: string;
  pcFlag:boolean;
};
const Sec4Card: FC<Section4addPcFlag> = ({
  engTitle,
  title,
  contentRow1,
  contentRow2,
  pcFlag
}) => {
  return (
    <Box textAlign={pcFlag?"left":'center'} paddingY={3}>
      <Typography color='primary' variant='body1' className='times'>{engTitle}</Typography>
      <Typography variant='subtitle2' className='bold'>{title}</Typography>
      <Box paddingTop={3}>
        <Typography variant='body1' className="regular">{contentRow1}</Typography>
        <Typography variant='body1' className="regular">{contentRow2}</Typography>
      </Box>
    </Box>
  );
};
const Sec4Pc: FC<classArr> = ({classArr,pcFlag}) => {
  const classes = useStyles();
  const cardMap=classArr.map((obj,i)=>{
    return <Sec4Card key={i} pcFlag={pcFlag} engTitle={obj.engTitle} title={obj.title} contentRow1={obj.contentRow1} contentRow2={obj.contentRow2}/>
  })
  return (
    <Box display='flex' justifyContent='space-between' width="100%" maxWidth="1280px" alignItems='center' paddingBottom={8} paddingTop={10} margin="0 auto">
        <Box width="50%" height='100%' paddingBottom={5} position='relative'>
          <img className={classes.subImg2} src={SubImg} alt=""/>
          {cardMap}
        </Box>
        <Box width="50%" padding={5}>
          <Box position='relative' textAlign='right'>
          <img
            alt=""
            width='80%'
            src={SectionImg}
          />
            <img alt="" className={classes.subImg} src={SectionSub} />
          </Box>
        </Box>
    </Box>
  );
};
const Sec4Mo: FC<classArr> = ({ classArr, pcFlag }) => {
  const classes = useStyles();
  const cardMap = classArr.map((obj, i) => {
    return <Sec4Card pcFlag={pcFlag} key={i} engTitle={obj.engTitle} title={obj.title} contentRow1={obj.contentRow1} contentRow2={obj.contentRow2} />
  })
  return (
    <Box width="100%" maxWidth="1280px" paddingBottom={5} paddingTop={0} margin="0 auto">
      <Box width="100%" padding={5}>
        <Box position='relative' textAlign='right'>
          <img
            alt=""
            width='100%'
            src={SectionImgMo}
          />
          <img alt="" className={classes.subImg} src={SectionSub} />
        </Box>
      </Box>
      <Box width="100%" height='100%' position='relative'>
        <img className={classes.subImg2} alt="" src={SubImg} />
        {cardMap}
      </Box>
    </Box>
  );
};
