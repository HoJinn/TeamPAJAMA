import { FC, useRef, useState } from "react";
import useResizeEvent from 'src/hooks/useResizeEvent';
import Logo from "assets/Logo.png";
import Tel from "assets/icon/tel.png";
import { Button, makeStyles, Box, IconButton, SwipeableDrawer, useTheme, useMediaQuery, Typography } from '@material-ui/core';
import { useSetRecoilState } from 'recoil';
import { headerLayoutAsOnlySetter, LayoutGrade } from 'recoilStates/layout';
// import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

// import MenuList from './menuList'
// import Une from 'assets/SNS/uneIcon.png';
// import { parse } from "src/HtmlParser";
// import MenuIcon from '@material-ui/icons/Menu';
import { useEffect } from "react";
import { useRouter } from "next/router";


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
  },
  btnWrap: {
    display: "flex",
    justifyContent: "space-between"
  },
  btnClass: {
    fontSize: '16px',
    fontWeight: 600
  },
  // drawer: {
  //   width: '100%',
  //   flexShrink: 0,
  // },
  // drawerPaper: {
  //   // backgroundColor: 'rgba(34,34,34,.9)',
  //   color: 'black',
  //   backgroundColor: 'white',
  //   width: `calc(100% - 40px)`
  // },
  // pcHeader: {
  //   display: "flex",
  //   [theme.breakpoints.down(LayoutGrade.SM)]: {
  //     display: "none",
  //   }
  // },
  // mobileHeader: {
  //   display: "none",
  //   [theme.breakpoints.down(LayoutGrade.SM)]: {
  //     display: "flex",
  //   }
  // },
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
console.log(pageName)
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


  // const setToggleFn = () => {
  //   setToggle(!toggle)
  // }
  // const movePage=(link:string)=>{
  //   router.push({pathname:link})
  // }

  return (
    <div id="header" className={classes.header} ref={headerRef}>
      <Box paddingY={1}>
        <Box className={classes.headerTop}>
          <Box width={"33.33%"} />
          <Box width={"33.33%"} textAlign="center">
            <a href="/" style={{ lineHeight: 0 }}>
              <img
                style={{ width: "200px" }}
                src={Logo}
                alt="닥터크린 메인 이동 버튼"
              />
            </a>
          </Box>
          <Box width={"33.33%"} className={classes.headerTel}>
            <img
              style={{ width: "30px", height: "30px", marginRight: "10px" }}
              src={Tel}
              alt="연락처"
            />
            <Typography className="bold" style={{ color: "#FE4B00" }}>
              010. 6483. 1286
            </Typography>
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
              방역,소독
            </Button>
          </Box>
        </Box>
      </Box>

      {/* <Box
        className={classes.pcHeader}
        paddingX={5}
        paddingY={2}
        alignItems="center"
      >
        <Box width="33%">
          <Button
            title="페이지 이동"
            onClick={(_) => router.push("/brand")}
            className={classes.btnClass}
          >
            브랜드 소개
          </Button>
          <Button
            title="페이지 이동"
            onClick={(_) => router.push("/recipes")}
            className={classes.btnClass}
          >
            레시피
          </Button>
          <Button
            title="페이지 이동"
            onClick={(_) => router.push("/notice")}
            className={classes.btnClass}
          >
            공지사항
          </Button>
        </Box>
        <Box flexGrow={1} textAlign="center">
          <a href="/" style={{ lineHeight: 0 }}>
            <img src={Logo} alt="다온븟 로고 메인 이동 버튼" />
          </a>
        </Box>
        <Box width="33%" textAlign="right">
          <Button
            title="새 창 열기"
            onClick={(_) => alert("준비중입니다.")}
            className={classes.btnClass}
          >
            <ShoppingCartOutlinedIcon />
            쇼핑몰
          </Button>
        </Box>
      </Box>

      <Box className={classes.mobileHeader} justifyContent="space-between">
        <Box>
          <IconButton title="메인 이동 버튼" onClick={(_) => movePage("/")}>
            <img height="22.5px" src={Logo} alt="다온븟 로고" />
          </IconButton>
        </Box>
        <IconButton title="메뉴" size="small" onClick={setToggleFn}>
          <MenuIcon />
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
      </Box> */}
    </div>
  );
}

export default Header;