import { makeStyles, Box, Typography, Button, Grid } from "@material-ui/core";
import { useRouter } from "next/dist/client/router";
import { FC } from "react";
// import {useTheme } from "@material-ui/core";
import Phone from 'assets/icon/phone.png';
import Talk from 'assets/icon/talk.png';
import Blog from 'assets/icon/blog.png';
import Insta from 'assets/icon/insta.png';
import { LayoutGrade } from 'recoilStates/layout';

const useStyles = makeStyles(theme => ({
  footer: {
    position: 'relative',
    width: '100%',
    backgroundColor: "#000",
    // color: theme.palette.text.secondary,
    color: "#fff",
  },
  text:{
    color:'#C4C4C4',
    paddingRight:'15px'
  },
  container: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.down(LayoutGrade.SM)]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    }
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: 'space-between',
    [theme.breakpoints.down(LayoutGrade.SM)]: {
      flexDirection: "column",
      justifyContent: 'flex-start'
    }
  },
  infoBox: {
    color: theme.palette.grey[500]
  },
  telBox:{
    textAlign:"right",
    marginTop:theme.spacing(0),
    [theme.breakpoints.down(LayoutGrade.SM)]: {
      textAlign:"left",
      marginTop:theme.spacing(4.5)
    }
  },
  addressTxt: {
    fontWeight: 300,
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down(LayoutGrade.SM)]: {
      marginBottom: theme.spacing(2),
    }
  },
  copyright: {
    color: "white",
    fontWeight: 200
  },
  contentsContainer: {
    paddingTop:theme.spacing(8)
  },
  pcShow: {
    display: "block",
    // [theme.breakpoints.down(LayoutGrade.SM)]: {
    //   display: "none",
    // }
  },
  moShow: {
    display: "none",
    // [theme.breakpoints.down(LayoutGrade.SM)]: {
    //   display: "block",
    // }
  },
  a: {
    color: "inherit",
    position: "relative",
    textDecoration: "none",
    display:'block',
    "&:focus":{
      outline:'3px solid black',
    }
  },
  footerBtn:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }

}));
const contentData = [
  {
    title: "고객센터연결",
    img: Phone,
    color: "#8CD7F0",
    link:'010-6483-1286'
  },
  {
    title: "카카오톡상담",
    img: Talk,
    color: "#FFE921",
    link:'http://pf.kakao.com/_Qpptb'
  },
  {
    title: "네이버블로그",
    img: Blog,
    color: "#76FB5F",
    link:'https://blog.naver.com/doctorclean0'
  },
  {
    title: "인스타그램",
    img: Insta,
    color: "#FF54A2",
    link:'https://www.instagram.com/doctorclean0/'
  },
  
];
const Footer: FC = () => {
  const classes = useStyles();
  const router = useRouter();
  const handleClickFn = (e: string) => {
      router.push(e);
  };
  const contentMap = contentData.map((obj, i) => {
    return (
      <Grid
        item
        xs={6}
        key={i}
        className={classes.footerBtn}
        style={{ backgroundColor: `${obj.color}` }}
      >
        {obj.link==="010-6483-1286"?<Button href="tel:01064831286" style={{ width: "100%" }}>
          <img src={obj.img} height="20px" />
          <Typography
            className="bold"
            style={{ color: "#000", paddingLeft: "3px" }}
          >
            {obj.title}
          </Typography>
        </Button>:<Button onClick={()=>handleClickFn(obj.link)} style={{ width: "100%" }}>
          <img src={obj.img} height="20px" />
          <Typography
            className="bold"
            style={{ color: "#000", paddingLeft: "3px" }}
          >
            {obj.title}
          </Typography>
        </Button>}
      </Grid>
    );
  });
  return (
    <div id="footer" className={classes.footer}>
      <Grid container>{contentMap}</Grid>
      <Box
        maxWidth="1280px"
        className={classes.container}
        paddingX={3}
        margin="0 auto"
      >
        <Box color="white" className={classes.pcShow}>
          <Button
            title="페이지 이동"
            onClick={(_) => router.push("/about")}
            color="inherit"
          >
            <Typography variant="body1">회사소개</Typography>
          </Button>
          <Button
            title="페이지 이동"
            onClick={(_) => router.push("/qna")}
            color="inherit"
          >
            <Typography variant="body1">견적문의</Typography>
          </Button>
          <Button
            title="페이지 이동"
            onClick={(_) => router.push("/brand")}
            color="inherit"
          >
            <Typography variant="body1">시공내역</Typography>
          </Button>
        </Box>
        <Box className={classes.contentsContainer}>
          <Box className={classes.infoBox}>
            <Box>
              <Typography
                className={classes.text}
                variant="body1"
                color="inherit"
                component={"span"}
              >
                (주)닥터크린&nbsp;&nbsp;&nbsp;|
              </Typography>
              <Typography
                className={classes.text}
                variant="body1"
                color="inherit"
                component={"span"}
              >
                위치 : 서울특별시 강서구 공항대로 23로
                (일화빌딩)&nbsp;&nbsp;&nbsp;|
              </Typography>
              <Typography
                className={classes.text}
                variant="body1"
                color="inherit"
                component={"span"}
              >
                대표자 : 강태복&nbsp;&nbsp;&nbsp; |
              </Typography>
              <Typography
                className={classes.text}
                variant="body1"
                color="inherit"
                component={"span"}
              >
                사업자등록번호 527-81-02540
              </Typography>
            </Box>
            <Box paddingTop={1}>
              <Typography
                className={classes.text}
                variant="body1"
                color="inherit"
                component={"span"}
              >
                E-mail : doctorclean0@naver.com
              </Typography>
              <Typography
                className={classes.text}
                variant="body1"
                color="inherit"
                component={"span"}
              >
                H.P : 010-6483-1286
              </Typography>
              <Typography
                className={classes.text}
                variant="body1"
                color="inherit"
                component={"span"}
              >
                계좌번호 : 기업은행 052-116169-01-013
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;