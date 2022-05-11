import { FC } from 'react'
// import useStyles from './mainCss'
import SectionBg from 'assets/bg_sec1.png'
import SectionBgMo from 'assets/bg_sec1Mo.png'
import { Box, Typography, Button, makeStyles,useMediaQuery } from '@material-ui/core'
import AspectRatioBox from 'components/shape/aspectRatioBox'
import { LayoutGrade } from 'recoilStates/layout'
import theme from 'theme/theme'
import { useRouter } from 'next/router'
export type DataProps = {
  size: string
}
const useStyles = makeStyles(_theme => ({
  sectionStyle: {
    // height: '600px',
    color: 'white',
    backgroundPosition: "center",
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `url(${SectionBg})`,
    [theme.breakpoints.down(LayoutGrade.MD)]: {
      backgroundImage: `url(${SectionBgMo})`,
    }
  },
  moreBtn:{
    borderTop:'1px solid #fff',
    borderBottom:'1px solid #fff',
    borderRadius:0,
    color:'#fff',
    fontSize:'20px',
    fontWeight:600
  } 
    
}))
const Section1: FC<DataProps> = () => {
  const classes = useStyles();
  const router =useRouter();
  const mobileFlag = useMediaQuery(theme.breakpoints.down(LayoutGrade.MD));

  return (
    <section className={classes.sectionStyle}>
      <AspectRatioBox paddingBottom={10} width="100%" aspectRatio={mobileFlag?1.06:0.36}>
        <Box height="100%" display='flex' justifyContent="center" flexDirection='column' alignItems='center'>
          {/* <Typography style={{letterSpacing:"1px"}} className='times' variant='subtitle2'>Bland story</Typography> */}
          <Typography variant='subtitle1' className='bold'>협동조합 다온은...</Typography>
          <Box textAlign='center' paddingTop={mobileFlag?4.5:2} paddingBottom={mobileFlag?4.5:9}>
            {/* <Typography variant='subtitle1' className='bold'>다온 스토리는 바른 먹거리로</Typography> */}
            <Typography style={{whiteSpace:"pre-line", wordBreak:"keep-all"}} variant='subtitle1' className='bold'>{`저탄소 실천 식(食)문화 공유부엌 공간을 활용한\n일공동체, 마을공동체, 문화공동체.`}</Typography>
          </Box>
          <Box>
            <Button title="브랜드 소개 페이지 이동" onClick={_=>router.push("/brand")} className={classes.moreBtn}><Typography className="bold" variant="body1">VIEW MORE</Typography></Button>
          </Box>
        </Box>
      </AspectRatioBox>
    </section>
  )
}

export default Section1;