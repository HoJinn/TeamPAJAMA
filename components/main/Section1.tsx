import { FC } from 'react'
// import useStyles from './mainCss'
import MainImg1 from 'assets/main_img_1.png'
import MainImg2 from 'assets/main_img_2.png'
import MainImg3 from 'assets/main_img_3.png'
import { Box, Typography, Button, makeStyles } from '@material-ui/core'
import AspectRatioBox from 'components/shape/aspectRatioBox'
// import { LayoutGrade } from 'recoilStates/layout'
import theme from 'theme/theme'
import { useRouter } from 'next/router'
export type DataProps = {
  size: string
}
const useStyles = makeStyles(theme => ({
  sectionStyle: {
    borderLeft:`2px solid ${theme.palette.primary.main}`,
    margin:'30px 0'
  },
  moreBtn:{
    borderTop:'1px solid #fff',
    borderBottom:'1px solid #fff',
    borderRadius:0,
    color:'#fff',
    fontSize:'20px',
    fontWeight:600
  },
  wrapper: {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "center",
    backgroundSize: 'cover',
    width:"100%"
  }, 
    
}))
const page1Data=[
  {title:'홈크리닝',subTitle:'Home Cleaning',link:'/home',img:MainImg1,content1:'집 위생상태',content2:'가',content3:'걱정되는 고객님도'},
  {title:'오피스크리닝',subTitle:'Office Cleaning',link:'/office',img:MainImg2,content1:'개업을 앞둔',content2:'',content3:'고객님도'},
  {title:'방역.소독',subTitle:'Disinfection Cleaning',link:'/virus',img:MainImg3,content1:'바이러스로 인한 방역',content2:'이',content3:'필요한 고객님도'}
]
const Section1: FC<DataProps> = () => {
  const classes = useStyles();
  // const router = useRouter();
  // const mobileFlag = useMediaQuery(theme.breakpoints.down(LayoutGrade.MD));
const contentMap=page1Data.map((obj,i)=>{
  return <Sec1Card data={obj} key={i}/>
})
  return (
    <section className={classes.sectionStyle}>
      <Box padding={2}>
        <Typography variant="subtitle1" className='bold'>청소 업체 고수들이 모인 곳!</Typography>
        <Box paddingTop={1}>
          <Typography variant="body1">
            소통과 이해를 통한 합리적인 가격을 제시하고
          </Typography>
          <Typography variant="body1">
            닥터크린의 숙련된 청소 마스터분들이 현장에서 직접 작업합니다.
          </Typography>
          <Typography variant="body1">
            언제라도 친절하고 신속하게 응답해 드리고 있으니 주저하지 마시고
            언제든지 문의주세요.
          </Typography>
        </Box>
        <Box padding={2}>
          <Box padding={3} textAlign="center">
            <Typography className="bold" variant="subtitle2">CLEANING SERVICE</Typography>
            <Typography className="bold" variant="subtitle2">
              <Typography className="bold" variant="subtitle2" color="primary" component={"span"}>
                닥터
              </Typography>
              크린 프리미엄 청소 서비스{" "}
            </Typography>
          </Box>
        </Box>
        <Box display={"flex"} justifyContent="space-between">
          {contentMap}
        </Box>
        <Box textAlign={"center"} paddingTop={8} paddingBottom={5}>
          <Typography
            style={{ paddingBottom: theme.spacing(1),fontSize:'25px' }}
            className="bold"
          >
            고객님들이 인정한 청소 서비스
          </Typography>
          <Typography variant="subtitle1" className="bold">
            그런 서비스를 찾으신다면
          </Typography>
          <Box>
            <Typography
              variant="subtitle1"
              className="bold"
              component="span"
              color="primary"
            >
              닥터
            </Typography>
            <Typography variant="subtitle1" className="bold" component="span">
              크린
            </Typography>
            <Typography
              variant="subtitle1"
              className="bold"
              component="span"
              style={{color:'#007EF3'}}
            >
              이 맞습니다
            </Typography>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Section1;
export type Section1Props = {
  data:SectionData;
};
type SectionData = {
  title: string;
  subTitle: string;
  link: string;
  img: any;
  content1: string;
  content2: string;
  content3: string;
};
const Sec1Card: FC<Section1Props> = ({data}) => {
  const classes = useStyles();
   const router = useRouter();
   const pageMove = (e: string) => {
     router.push(e);
   };

  return (
    <Box width={"31%"}>
      <Box
        display={"flex"}
        justifyContent="flex-start"
        alignItems="flex-end"
        paddingBottom={1}
      >
        <Typography variant='subtitle2' className='bold'>{data.title}</Typography>
        <Typography
        variant='body2'
          style={{ paddingLeft: "5px", paddingBottom: "3px" }}
        >
          {data.subTitle}
        </Typography>
      </Box>
      <AspectRatioBox width="100%" aspectRatio={1}>
        <Box
          height="100%"
          className={classes.wrapper}
          style={{ backgroundImage: `url(${data.img})` }}
        />
      </AspectRatioBox>
      <Box paddingTop={2} textAlign={"center"}>
        <Box>
          <Typography variant='body1' className="bold" color="primary" component="span">
            {data.content1}
          </Typography>
          <Typography variant='body1' className="bold" component="span">
            {data.content2}
          </Typography>
        </Box>
        <Typography variant='body1' className="bold" component="span">
          {data.content3}
        </Typography>
        <Box paddingTop={1}>
          <Button
            style={{
              borderBottom: "1px solid #000",
              padding: 0,
              borderRadius: 0,
            }}
            onClick={()=>pageMove(data.link)}
          >
            자세히보기
          </Button>
        </Box>
      </Box>
      
    </Box>
  );

};
