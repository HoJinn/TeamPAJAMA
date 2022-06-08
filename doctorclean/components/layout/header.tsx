import { FC, useRef, useState } from "react";
import useResizeEvent from 'src/hooks/useResizeEvent';
import Tel from "assets/icon/tel.png";
import { Button, makeStyles, Box, useTheme, useMediaQuery, Typography, IconButton, SwipeableDrawer } from '@material-ui/core';
import { useSetRecoilState } from 'recoil';
import { headerLayoutAsOnlySetter, LayoutGrade } from 'recoilStates/layout';
// import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

// import MenuList from './menuList'
// import Une from 'assets/SNS/uneIcon.png';
// import { parse } from "src/HtmlParser";
import MenuIcon from '@material-ui/icons/Menu';
import { useEffect } from "react";
import { useRouter } from "next/router";
import MenuList from "./menuList";


const useHeaderStyles = makeStyles((theme) => ({
  header: {
    position: "relative",
    width: "100%",
  },
  headerTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems:"center"
  },
  headerTel: {
    display: "flex",
    paddingBottom:'10px'
  },
  btnWrap: {
    display: "flex",
    justifyContent: "space-between"
  },
  btnClass: {
    fontSize: '25px',
    fontWeight: 600
  },
  drawer: {
    width: '100%',
    flexShrink: 0,
  },
  drawerPaper: {
    // backgroundColor: 'rgba(34,34,34,.9)',
    color: 'black',
    backgroundColor: 'white',
    width: `calc(100% - 40px)`
  },
  pcHeader: {
    display: "block",
    [theme.breakpoints.down(LayoutGrade.SM)]: {
      display: "none",
    }
  },
  mobileHeader: {
    display: "none",
    borderBottom:"3px solid #00B7F3",
    [theme.breakpoints.down(LayoutGrade.SM)]: {
      display: "flex",
    }
  },
}));

const Header: FC = () => {
  const classes = useHeaderStyles();
  const headerRef = useRef<HTMLDivElement>(null);
  const setHeaderLayout = useSetRecoilState(headerLayoutAsOnlySetter);
  const [toggle, setToggle] = useState(false)
  const theme = useTheme();
  const mobileFlag = useMediaQuery(theme.breakpoints.down(LayoutGrade.SM));
  const router =useRouter();
const pageName=router.asPath
  useEffect(() => {
    if (!mobileFlag) setToggle(false)
  }, [mobileFlag])
  useResizeEvent<HTMLDivElement | null>(
    headerRef,
    (layout) => {
      setHeaderLayout(layout);
      return (layout_) => setHeaderLayout(layout_);
    }
  )


  const setToggleFn = () => {
    setToggle(!toggle)
  }
  const movePage=(link:string)=>{
    router.push({pathname:link})
  }

  return (
    <div id="header" className={classes.header} ref={headerRef}>
      <Box className={classes.pcHeader} paddingY={1}>
        <Box className={classes.headerTop}>
          <Box width={"33.33%"} />
          <Box width={"33.33%"} textAlign="center">
            <a href="/" style={{ lineHeight: 0,textDecoration: 'none' }}>
              <Box
                textAlign="center"
                paddingBottom={1}
              >
                                <Typography variant="subtitle2" style={{color:'black'}} component={"span"} className="bold">
                  (주)
                </Typography>
                <Typography variant="subtitle2" color="primary" className="bold" component={"span"}>
                  닥터
                </Typography>
                <Typography variant="subtitle2" style={{color:'black'}} component={"span"} className="bold">
                  크린
                </Typography>
              </Box>
            </a>
          </Box>
          <Box width={"33.33%"} className={classes.headerTel}>
            <img
              style={{ width: "65px", height: "65px" }}
              src={Tel}
              alt="연락처"
            />
            <Box>
            <Typography className="bold">
              고객상담전화
            </Typography>
            <Typography className="bold" color='primary'>
              010.6483.1286
            </Typography>
            </Box>

          </Box>
        </Box>
        <Box
          borderTop={"3px solid #00B7F3"}
          width="100%"
          maxWidth="1000px"
          margin="0 auto"
          paddingX={3}
        >
          <Box paddingTop={1} className={classes.btnWrap}>
            <Button
              style={{
                color:
                  pageName === "/about" ? theme.palette.primary.main : "#000",
              }}
              title="페이지 이동"
              onClick={(_) => router.push("/about")}
              className={classes.btnClass}
            >
              회사 소개
            </Button>
            <Button
              style={{
                color:
                  pageName === "/home" ? theme.palette.primary.main : "#000",
              }}
              title="페이지 이동"
              onClick={(_) => router.push("/home")}
              className={classes.btnClass}
            >
              홈클리닝
            </Button>
            <Button
              style={{
                color:
                  pageName === "/office" ? theme.palette.primary.main : "#000",
              }}
              title="페이지 이동"
              onClick={(_) => router.push("/office")}
              className={classes.btnClass}
            >
              오피스클리닝
            </Button>
            <Button
              style={{
                color:
                  pageName === "/virus" ? theme.palette.primary.main : "#000",
              }}
              title="페이지 이동"
              onClick={(_) => router.push("/virus")}
              className={classes.btnClass}
            >
              방역∙소독
            </Button>
          </Box>
        </Box>
      </Box>

      <Box className={classes.mobileHeader} justifyContent="space-between">
        <Box/>
      <Box>
          <Button title="메인 이동 버튼" onClick={(_) => movePage("/")}>
              <Box
                textAlign="center"
              >
                                <Typography variant="subtitle2" style={{color:'black'}} component={"span"} className="bold">
                  (주)
                </Typography>
                <Typography variant="subtitle2" color="primary" className="bold" component={"span"}>
                  닥터
                </Typography>
                <Typography variant="subtitle2" style={{color:'black'}} component={"span"} className="bold">
                  크린
                </Typography>
              </Box>
          </Button>
        </Box>
        <IconButton title="메뉴" size="small" onClick={setToggleFn}>
          <MenuIcon/>
        </IconButton>
        <SwipeableDrawer
          anchor="right"
          open={toggle}
          disableSwipeToOpen={true}
          onClose={setToggleFn}
          onOpen={setToggleFn}
          className={classes.drawer}
          PaperProps={{ className: classes.drawerPaper }}
        >
          <MenuList toggleMenu={setToggleFn} />
        </SwipeableDrawer>
      </Box> 
    </div>
  );
}

export default Header;