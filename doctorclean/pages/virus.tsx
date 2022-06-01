import { NextPage } from "next";
import Layout from "components/layout/main";
import {
  Box,
  makeStyles,
  Typography,
  // useMediaQuery,
  useTheme,
} from "@material-ui/core";
import TopImg from "assets/about/virusTop.png";
import BottomImg from "assets/about/virus_img_bottom.png";
import HomeImg1 from "assets/about/virus_img1.png";
import HomeImg2 from "assets/about/virus_img2.png";
import HomeImg3 from "assets/about/virus_img3.png";
import Chart from "assets/about/Chart.png";
// import { LayoutGrade } from "recoilStates/layout";
import AspectRatioBox from "components/shape/aspectRatioBox";

const useStyles = makeStyles((_theme) => ({
  wrapper: {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
  },
}));

const contentData = [
  {
    title: "코로나19",
    img: HomeImg1,
    content: "코로나바이러스(Coronavirus; CoV)는 사람을 포함한 \n광범위한 호흡계 및 소화계 감염을 일으키는 바이러스로 \n심각한 폐 질환을 일으키고 발열, 기침, 호흡 곤란 설사와 같이 경증에서 \n중증의 증상을 보이고 심각한 경우 사망할 수 있습니다.",
  },
  {
    title: "독감(인플루엔자)",
    img: HomeImg2,
    content: "독감(인플루엔자)은 전염력이 매우 강하며 겨울철에 많이 유행하는데 \n주로 코와 인후를 침범합니다. 재채기나 기침으로 쉽게 공기 중으로 전파되며, \n사람들 간의 직접 접촉에 의해서도 전염되기도 합니다.",
  },
  {
    title: "감기",
    img: HomeImg3,
    content: "감기를 일으키는 바이러스는 적어도 200종류가 넘는데 바이러스는 감염된 사람의 \n기침이나 재채기에서 퍼져 나온 미세한 입자를 통해 쉽게 전파됩니다. \n집단 시설에서는 바이러스가 빨리 퍼져 감기 바이러스의 노출이 쉽습니다.",
  },
  
];
const Brand: NextPage = () => {
  const theme = useTheme();
  // const mobileFlag = useMediaQuery(theme.breakpoints.down(LayoutGrade.MD));
  const classes = useStyles();
  const contentMap = contentData.map((obj, i) => {
    return (
      <Box key={i} display={'flex'} padding={1} justifyContent='space-between'>
            <Box width={'10%'}>
              <AspectRatioBox width="100%" aspectRatio={1}>
                <Box
                  width="100%"
                  height="100%"
                  className={classes.wrapper}
                  style={{ backgroundImage: `url(${obj.img})` }}
                />
              </AspectRatioBox>
            </Box>
            <Box width={'90%'}>
              <Box paddingX={5}>
              <Typography className="bold">{obj.title}</Typography>
              <Typography style={{whiteSpace: 'pre-wrap'}} variant="body2">
                {obj.content}
              </Typography>
              </Box>
            </Box>
          </Box>
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
        <Box width={"70%"}>
          <Typography
            variant="subtitle1"
            component={"span"} className="bold"
            style={{ borderBottom: `2px solid ${theme.palette.primary.main}` }}
          >
            방역∙소독 서비스 안내
          </Typography>
          <Box paddingTop={3}>
            <Typography variant="body1">바이러스와 세균을 제거하여 </Typography>
            <Typography variant="body1">
              <Typography variant="body1" component={"span"} className="bold">
                안전한 시설
              </Typography>
              을 만들어드립니다!
            </Typography>
            <br />
            <Typography variant="body1">
              다양한 환경에서 발생할 수 있는
            </Typography>
            <Typography variant="body1">
              각종 세균과 바이러스의 발생을 효과적으로
            </Typography>
            <Typography variant="body1">
              예방할 수 있도록 현장 전체를 소독하는 서비스입니다.
            </Typography>
            <br />
            <br />
            <Typography color="primary" variant="body1" className="bold">
              전염성 질환으로 위생과 방역에 대한 중요성이 높아지고 있어
            </Typography>
            <Typography variant="body1">
              전문적인 방역, 소독을 진행하여 다양한 업종과 환경에 발생되는
            </Typography>
            <Typography variant="body1">
              바이러스와 세균을 차단하여 안전한 시설을 만들어드립니다.
            </Typography>
          </Box>
        </Box>
        <AspectRatioBox width="40%" aspectRatio={1}>
          <img height={"100%"} src={TopImg} />
        </AspectRatioBox>
      </Box>
      <Box padding={2} paddingBottom={10}>
        <Box textAlign={"center"}>
          <Typography
            variant="subtitle1"
            component={"span"} className="bold"
            style={{ borderBottom: `2px solid ${theme.palette.primary.main}` }}
          >
            주요 발생 &nbsp;
          </Typography>
          <Typography
            color="primary"
            variant="subtitle1"
            component={"span"} className="bold"
            style={{ borderBottom: `2px solid ${theme.palette.primary.main}` }}
          >
            바이러스
          </Typography>
        </Box>
        <Box paddingTop={5}>{contentMap}</Box>
      </Box>
      <Box padding={2} paddingBottom={10}>
        <Box textAlign={"center"} paddingBottom={5}>
          <Typography
            variant="subtitle1"
            component={"span"} className="bold"
            style={{ borderBottom: `2px solid ${theme.palette.primary.main}` }}
          >
            방역∙소독 서비스 대상
          </Typography>
        </Box>
        <Box width={'100%'} paddingBottom={3}>
              <AspectRatioBox width="100%" aspectRatio={0.3}>
                <Box
                  width="100%"
                  height="100%"
                  className={classes.wrapper}
                  style={{ backgroundImage: `url(${BottomImg})` }}
                />
              </AspectRatioBox>
            </Box>
        <img width={"100%"} src={Chart} />
      </Box>
    </Layout>
  );
};

export default Brand;
