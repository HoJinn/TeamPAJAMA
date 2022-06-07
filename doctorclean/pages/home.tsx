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
import TopImg from "assets/about/homeTop.png";
import HomeImg1 from "assets/about/home_img_1.png";
import HomeImg2 from "assets/about/home_img_2.png";
import HomeImg3 from "assets/about/home_img_3.png";
import HomeImg4 from "assets/about/home_img_4.png";
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
}));
const contentData = [
  {
    title: "거실/방",
    img: HomeImg1,
    content1: "■ 바닥, 벽, 천장의 먼지와 이물질 제거",
    content2: "■ 창문틀, 유리, 방충망 먼지제거",
    content3: "■ 몰딩 부분 먼지 및 오염제거",
    content4: "■ 내, 외부 유리창 오염제거",
  },
  {
    title: "주방",
    img: HomeImg2,
    content1: "■ 수도꼭지 물때, 개수대 청소 및 광택",
    content2: "■ 가스레인지와 주변의 기름때 제거",
    content3: "■ 렌지 후드 기름때와 오염제거",
    content4: "■ 싱크대 내, 외부 청소작업",
  },
  {
    title: "욕실",
    img: HomeImg3,
    content1: "■ 세면대, 욕조 찌든때 및 물때제거",
    content2: "■ 타일, 변기 물때 및 곰팡이제거",
    content3: "■ 배수구의 곰팡이와 오염제거",
    content4: "■ 환풍구, 선반, 조명기구 청소",
  },
  {
    title: "현관/베란다",
    img: HomeImg4,
    content1: "■ 현관/베란다 바닥, 벽면 먼지와 오염제거",
    content2: "■ 베란다 내부 유리와 창틀 먼지제거",
    content3: "■ 신발장 내 외부 분리 후 먼지제거",
    content4: "■ 타일의 먼지와 오염제거",
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
      <Grid key={i} item xs={titleSize} style={{ paddingTop: "50px" }}>
        <Typography variant="subtitle2" className="bold" style={{paddingBottom:'15px'}}>{obj.title}</Typography>
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
            variant="subtitle1"
            className="bold"
            component={"span"}
            style={{ borderBottom: `2px solid ${theme.palette.primary.main}` }}
          >
            홈클리닝 서비스 안내
          </Typography>
          <Box paddingTop={3}>
            <Typography variant="body1">가족의 행복한 미래를 꿈꾸는</Typography>
            <Typography variant="body1">
              <Typography variant="body1" component={"span"} className="bold">
                깨끗한 주거 환경
              </Typography>
              을 만들어드립니다!
            </Typography>
            <br />
            <Typography variant="body1">
              오래된 먼지, 곰팡이, 부착물 등 집 안에 있는
            </Typography>
            <Typography variant="body1">
              각종 유해한 오염 물질들을 말끔하게
            </Typography>
            <Typography variant="body1">제거하는 청소 서비스입니다.</Typography>
            <br />
            <br />
            <Typography color="primary" variant="subtitle2" className="bold">
              새집증후군, 집 먼지 진드기
            </Typography>
            <Typography variant="body1">고생하시는 분들이 많습니다.</Typography>
            <Typography variant="body1">
              친환경적인 제품으로 쾌적하고 깨끗한 환경에
            </Typography>
            <Typography variant="body1">
              입주할 수 있도록 도와드리겠습니다.
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
          홈클리닝 서비스 내용
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
