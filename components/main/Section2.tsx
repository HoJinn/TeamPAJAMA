import { FC } from "react";
// import useStyles from './mainCss'
import Section2Bg1 from "assets/bg_sec2_1.png";
import Section2Bg2 from "assets/bg_sec2_2.jpg";
import { Box, makeStyles, Typography, Button } from "@material-ui/core";
import { useRouter } from "next/dist/client/router";
import AspectRatioBox from "components/shape/aspectRatioBox";
import { LayoutGrade } from "recoilStates/layout";
export type DataProps = {
  size: string;
};
const useStyles = makeStyles((theme) => ({
  sectionStyle: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: 'row',
    [theme.breakpoints.down(LayoutGrade.MD)]: {
      flexDirection: 'column',
    }
  },
  moreBtn1: {
    borderTop: "1px solid #fff",
    borderBottom: "1px solid #fff",
    borderRadius: 0,
    fontSize: '20px',
    fontWeight: 600
  },
  moreBtn2: {
    borderTop: "1px solid #000",
    borderBottom: "1px solid #000",
    borderRadius: 0,
    fontSize: '20px',
    fontWeight: 600
  },
  backImg: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: '50%',
    [theme.breakpoints.down(LayoutGrade.MD)]: {
      width: '100%'
    }
  },
  cardContentsBox: {
    paddingBottom: theme.spacing(5),
    paddingTop: theme.spacing(2),
    [theme.breakpoints.down(LayoutGrade.MD)]: {
      paddingBottom: theme.spacing(3),
    }
  },
  orangeBox: {
    display: "block",
    opacity: 0.7,
    [theme.breakpoints.down(LayoutGrade.MD)]: {
      display: "none",
    }
  }
}));
const Section2: FC<DataProps> = () => {
  const classes = useStyles();
  // let topHeight
  // if (size === 'xl') { topHeight = '660px' } else if (size === 'lg') { topHeight = '494px' } else if (size === 'md') { topHeight = '494px' } else { topHeight = '555px' }
  return (
    <section className={classes.sectionStyle}>


      <AspectRatioBox paddingY={10}
        width="50%"
        className={classes.backImg}
        style={{ overflow: "visible", backgroundImage: `url(${Section2Bg2})` }} aspectRatio={0.48}>
        <Box display="flex" height="100%" justifyContent="center" alignItems="center">
          <Sec2Card
            engTitle="Recipe"
            title="레시피"
            contentRow1="다온이 제안하는 레시피로"
            contentRow2="최고의 식탁을 만들어 보세요."
            url="/recipes"
            btnName="레시피 보기"
            type={2}
          />
        </Box>
      </AspectRatioBox>
      <AspectRatioBox paddingY={10}
        width="50%"
        className={classes.backImg}
        style={{ backgroundImage: `url(${Section2Bg1})`, color: "#fff" }} aspectRatio={0.48}>
        <Box display="flex" height="100%" justifyContent="center" alignItems="center">
          <Sec2Card
            engTitle="Menu"
            title="집밥 메뉴"
            contentRow1="집밥 메뉴 상품을"
            contentRow2="지금 바로 만나보세요."
            url="https://www.naver.com/"
            btnName="메뉴 둘러보기"
            type={1}
          />
        </Box>
      </AspectRatioBox>


    </section>
  );
};

export default Section2;
export type Section2Props = {
  engTitle: string;
  title: string;
  contentRow1: string;
  contentRow2: string;
  url: string;
  btnName: string;
  type: number
};
const Sec2Card: FC<Section2Props> = ({
  engTitle,
  title,
  contentRow1,
  contentRow2,
  url,
  btnName,
  type
}) => {
  const classes = useStyles();
  const router = useRouter();
  const pageMove = (e: string) => {
    if (type === 2) router.push(e);
    else alert("준비중입니다.")
    // else window.open(e)

  };
  const btnColor = type === 1 ? '#fff' : '#000'
  const bgColor = type === 1 ? 'transparent' : 'rgba(255,255,255,.3)'
  const btnClass = type === 1 ? classes.moreBtn1 : classes.moreBtn2

  return (
    <AspectRatioBox style={{ overflow: "visible" }} aspectRatio={type === 1 ? 1 : 0.76} maxWidth='500px' width='70%' bgcolor={bgColor}>
      <Box position="relative" height="100%" display="flex" flexDirection="column" justifyContent="center" alignItems='center'>
        <Typography className='times' variant='subtitle2'>{engTitle}</Typography>
        <Typography className='bold' variant='subtitle1'>{title}</Typography>
        <Box className={classes.cardContentsBox} textAlign="center" >
          <Typography variant='body1' className='regular'>{contentRow1}</Typography>
          <Typography variant='body1' className='regular'>{contentRow2}</Typography>
        </Box>
        <Box>
          <Button title="페이지 이동" onClick={() => pageMove(url)} style={{ color: btnColor }} className={btnClass}>
            <Typography className="bold" variant="body1">{btnName}</Typography>
          </Button>
        </Box>
        {type === 1
          ? undefined
          : <Box className={classes.orangeBox} width="100px" height="70px" bottom="-35px" left="-45px" position="absolute" bgcolor="#F08A21" ></Box>}
      </Box>
    </AspectRatioBox>
  )

};
