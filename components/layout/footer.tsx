import { makeStyles, Box, Typography, Button } from "@material-ui/core";
import { useRouter } from "next/dist/client/router";
import { FC } from "react";
// import {useTheme } from "@material-ui/core";

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
  }

}));

const Footer: FC = () => {
  const classes = useStyles();
  const router = useRouter();
  return (
    <div id="footer" className={classes.footer}>
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
                component={'span'}
              >
                (주)닥터크린&nbsp;&nbsp;&nbsp;|
              </Typography>
              <Typography
                className={classes.text}
                variant="body1"
                color="inherit"
                component={'span'}
              >
                위치 : 서울특별시 강서구 공항대로 23로 (일화빌딩)&nbsp;&nbsp;&nbsp;|
              </Typography>
              <Typography
                className={classes.text}
                variant="body1"
                color="inherit"
                component={'span'}
              >
                대표자 : 강태복&nbsp;&nbsp;&nbsp; |
              </Typography>
              <Typography
                className={classes.text}
                variant="body1"
                color="inherit"
                component={'span'}
              >
                사업자등록번호 527-81-02540
              </Typography>
            </Box>
            <Box paddingTop={1}>
              <Typography
                className={classes.text}
                variant="body1"
                color="inherit"
                component={'span'}
              >
                TEL : 02-000-0000
              </Typography>
              <Typography
                className={classes.text}
                variant="body1"
                color="inherit"
                component={'span'}
              >
                FAX : 02-000-0000
              </Typography>
              <Typography
                className={classes.text}
                variant="body1"
                color="inherit"
                component={'span'}
              >
                H.P : 010-6483-1286
              </Typography>
              <Typography
                className={classes.text}
                variant="body1"
                color="inherit"
                component={'span'}
              >
                통신판매업신고증 제0000-0000-0000호
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Footer;