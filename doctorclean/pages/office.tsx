import { NextPage } from "next";
import Layout from "components/layout/main";
import {
  Box,
  Grid,
  makeStyles,
  Typography,
  // useMediaQuery,
  useTheme,
} from "@material-ui/core";
import TopImg from "assets/about/officeTop.png";
import HomeImg1 from "assets/about/office_img_1.png";
import HomeImg2 from "assets/about/office_img_2.png";
import HomeImg3 from "assets/about/office_img_3.png";
import HomeImg4 from "assets/about/office_img_4.png";
// import { LayoutGrade } from "recoilStates/layout";
import AspectRatioBox from "components/shape/aspectRatioBox";
import { LayoutGrade, windowLayoutSelector } from "recoilStates/layout";
import { useRecoilValue } from "recoil";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
  },
  TopTextWrap: {
    width:"50%",
    [theme.breakpoints.down(LayoutGrade.SM)]: {
      width:"100%",
      paddingBottom:theme.spacing(5)
    }
  },
  TopImgWrap: {
    width:"50%",
    [theme.breakpoints.down(LayoutGrade.SM)]: {
      display:'none'
    }
  },
  TopImgWrapMo: {
    display:'none',
    [theme.breakpoints.down(LayoutGrade.SM)]: {
    display:'block',
    width:"100%",
    paddingTop:theme.spacing(2)
    }
  },
}));
const contentData = [
  {
    title: "바닥",
    img: HomeImg1,
    content1: "■ 먼지 및 오염제거",
    content2: "■ 바닥왁스코팅",
    content3: "■ 카페트크리닝",
    content4: "■ 석재관리",
  },
  {
    title: "천장, 창문",
    img: HomeImg2,
    content1: "■ 문틈, 창문 틀, 유리, 방충망 먼지제거",
    content2: "■ 벽, 천장 부위 먼지 및 이물질 제거",
    content3: "■ 몰딩 부분 먼지 및 오염 제거",
    content4: "■ 내부 유리창 오염물 제거",
  },
  {
    title: "회의실, 업무공간",
    img: HomeImg3,
    content1: "■ 책상, 의자, 테이블 등 사무용 가구 청소",
    content2: "■ 전화기, PC, 복합기 등 OA기기 청소",
    content3: "■ 사무공간 주변 쓰레기 및 오염제거",
    content4: "■ 파티션, 쇼파 클리닝(비용추가)",
  },
  {
    title: "기타시설",
    img: HomeImg4,
    content1: "■ 화장실 및 탕비실 청소",
    content2: "■ 기타 주변 공간 청소",
    content3: "■ 엘리베이터 청소",
    content4: "■ 냉, 난방기 청소",
  },
];
const Brand: NextPage = () => {
  const theme = useTheme();
  // const mobileFlag = useMediaQuery(theme.breakpoints.down(LayoutGrade.MD));
  const classes = useStyles();
  const size = useRecoilValue(windowLayoutSelector)
  const titleSize = size.grade === 'xl' ? 6 : 12
  const imgSize = size.grade === 'xl' ? "90%" : "100%"
  const contentMap = contentData.map((obj, i) => {
    return (
      <Grid item xs={titleSize} key={i} style={{ paddingTop: "50px" }}>
        <Typography variant="subtitle2" style={{paddingBottom:'15px'}} className="bold">{obj.title}</Typography>
        <AspectRatioBox width={imgSize} aspectRatio={0.7}>
          <Box
            width="100%"
            height="100%"
            className={classes.wrapper}
            style={{ backgroundImage: `url(${obj.img})` }}
          />
        </AspectRatioBox>
        <Box paddingTop={2}>
          <Typography style={{ lineHeight:'1.8'}} variant="body2">{obj.content1}</Typography>
          <Typography style={{ lineHeight:'1.8'}} variant="body2">{obj.content2}</Typography>
          <Typography style={{ lineHeight:'1.8'}} variant="body2">{obj.content3}</Typography>
          <Typography style={{ lineHeight:'1.8'}} variant="body2">{obj.content4}</Typography>
        </Box>
      </Grid>
    );
  });
  return (
    <Layout>
      <Box
        padding={2}
        paddingTop={10}
        paddingBottom={10}
        display="flex"
        justifyContent="space-between"
      >
        <Box className={classes.TopTextWrap}>
          <Typography
            variant="subtitle1" className="bold"
            component={"span"}
            style={{ borderBottom: `2px solid ${theme.palette.primary.main}` }}
          >
            오피스크리닝 서비스 안내
          </Typography>
          <Box className={classes.TopImgWrapMo}>
        <AspectRatioBox width="100%" aspectRatio={0.7}>
          <Box
            width="100%"
            height="100%"
            className={classes.wrapper}
            style={{ backgroundImage: `url(${TopImg})` }}
          />
        </AspectRatioBox>
        </Box>
          <Box paddingTop={3}>
            <Typography variant="body1">
              사무환경을 개선하여 직장인들의
            </Typography>
            <Typography variant="body1">
              <Typography variant="body1" component={"span"} className="bold">
                업무 효율을 높이는 환경
              </Typography>
              을 만들어드립니다!
            </Typography>
            <br />
            <Typography variant="body1">사무실은 직장인들이</Typography>
            <Typography variant="body1">
              가장 오랫동안 생활하는 공간입니다.
            </Typography>
            <Typography variant="body1">
              대체적으로 깨끗해 보이는 사무실은 보이지 않는
            </Typography>
            <Typography variant="body1">
              오염과 세균에 노출되어 있습니다.
            </Typography>
            <br />
            <br />
            <Box>
            <Typography component='span' color="primary" variant="body1" className="bold">
              오염된 업무공간을 개선하고 쾌적한 환경
            </Typography>
            <Typography component='span' variant="body1">
              에서
            </Typography>
            </Box>
            <Typography variant="body1">
              업무 효율을 높일 수 있도록 도와드리겠습니다.
            </Typography>
          </Box>
        </Box>
        <Box className={classes.TopImgWrap}>
        <AspectRatioBox width="100%" aspectRatio={0.7}>
          <Box
            width="100%"
            height="100%"
            className={classes.wrapper}
            style={{ backgroundImage: `url(${TopImg})` }}
          />
        </AspectRatioBox>
        </Box>
      </Box>
      <Box padding={2} paddingBottom={10}>
        <Typography
          variant="subtitle1"
          component={"span"} className="bold"
          style={{ borderBottom: `2px solid ${theme.palette.primary.main}` }}
        >
          오피스크리닝 서비스 내용
        </Typography>
        <Box paddingTop={2}>
          <Grid container spacing={8}>
            {contentMap}
          </Grid>
        </Box>
      </Box>
    </Layout>
  );
};

export default Brand;
